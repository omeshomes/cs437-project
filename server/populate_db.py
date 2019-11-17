import csv
from datetime import datetime

import server.models as models
from server.app import db


def add_school_weather(school_name, file_path):
    school = models.School(name=school_name)
    db.session.add(school)
    db.session.commit()

    reader = csv.DictReader(open(file_path))

    for row in reader:
        weather_point = models.Weather(
            school_id=school.id,
            average_wind_speed=float(row["AWND"]) if row["AWND"] else None,
            peak_gust_time=int(row["PGTM"]) if row["PGTM"] else None,
            precipitation=float(row["PRCP"]) if row["PRCP"] else None,
            max_temp=int(row["TMAX"]) if row["TMAX"] else None,
            min_temp=int(row["TMIN"]) if row["TMIN"] else None,
            date=datetime.strptime(row["DATE"], "%Y-%m-%d"),
            WDF2=int(row["WDF2"]) if row["WDF2"] else None,
            WDF5=int(row["WDF5"]) if row["WDF5"] else None,
            WSF2=float(row["WSF2"]) if row["WSF2"] else None,
            WSF5=float(row["WSF5"]) if row["WSF5"] else None,
            has_fog = True if row["WT01"] else False,
            has_heavy_fog = True if row["WT02"] else False,
            has_thunder = True if row["WT03"] else False,
            has_smoke = True if row["WT08"] else False,
        )
        db.session.add(weather_point)

    db.session.commit()


if __name__ == "__main__":
    add_school_weather("Yale", "server/data/yale.csv")
    add_school_weather("Harvard", "server/data/harvard.csv")