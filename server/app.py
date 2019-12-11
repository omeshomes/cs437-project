import os
import datetime
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
from sqlalchemy import extract

from server.models import db
import server.models as models

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ['DATABASE_URL']
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    @app.route("/weather/<date>")
    def weather(date):
        """Returns Harvard and Yale's weather for given date"""
        weather_list = models.Weather.query.filter(models.Weather.date == date).all()

        result = {}
        for weather_point in weather_list:
            result[weather_point.school.name] = weather_point.to_json()
        return result

    def did_yale_win(y_day, h_day):
        y_score, h_score = 0, 0
        y_day = y_day.to_json()
        h_day = h_day.to_json()

        numerical_bad = ["WDF2", "WDF5", "WSF2", "WSF5", "average_wind_speed"]

        temp_variations = ["max_temp", "min_temp"]
        weather = ["has_fog", "has_heavy_fog", "has_smoke", "has_thunder", "peak_gust_time"]
        for attr in numerical_bad:
            if y_day[attr] == "None" or h_day[attr] == "None":
                break

            if float(y_day[attr]) <= float(h_day[attr]):
                y_score += 1
            else:
                h_score += 1

        for attr in temp_variations:
            if y_day[attr] == "None" or h_day[attr] == "None":
                break

            if abs(float(y_day[attr]) - 70) <  abs(float(h_day[attr]) - 70):
                y_score += 1
            else:
                h_score += 1

        for attr in weather:
            if y_day[attr] == "None" or h_day[attr] == "None":
                break

            if not y_day[attr] and h_day[attr]:
                y_score += 1
            elif y_day[attr] and not h_day[attr]:
                h_score += 1

        return y_score >= h_score

    @app.route("/year-weather/<date>")
    def year_weather(date):
        """Returns the cumulative scores of Harvard and Yale in given year"""
        year = datetime.datetime.strptime(date, "%Y-%m-%d").year
        harvard_list = models.Weather.query.join(models.School).filter(models.School.name == "Harvard")\
            .filter(extract("year", models.Weather.date) == year).order_by(models.Weather.date.asc())
        yale_list = models.Weather.query.join(models.School).filter(models.School.name == "Yale") \
            .filter(extract("year", models.Weather.date) == year).order_by(models.Weather.date.asc())

        harvard_scores = [0]
        yale_scores = [0]
        h_count = harvard_list.count()
        y_count = yale_list.count()
        print('here', h_count, y_count)
        for i in range(min(h_count, y_count)):
            h_day = harvard_list[i]
            y_day = yale_list[i]
            # print(h_day.average_wind_speed, y_day.average_wind_speed, h_day.average_wind_speed < y_day.average_wind_speed)
            if did_yale_win(y_day, h_day):
                harvard_scores.append(harvard_scores[-1])
                yale_scores.append(yale_scores[-1] + 1)
            else:
                harvard_scores.append(harvard_scores[-1] + 1)
                yale_scores.append(yale_scores[-1])
        return {"Harvard": harvard_scores, "Yale": yale_scores}


    @app.route("/schools")
    def schools():
        """Returns all schools"""
        schools_list = models.School.query.all()

        names_list = []
        for school in schools_list:
            names_list.append(school.name)
        return {"schools": names_list}



    return app

app = create_app()
CORS(app)
db.app = app
db.init_app(app)
db.create_all()