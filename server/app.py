import os
import datetime
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS

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

    return app

app = create_app()
CORS(app)
db.app = app
db.init_app(app)
db.create_all()