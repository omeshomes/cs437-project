import uuid

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID

db = SQLAlchemy()

class School(db.Model):
    __tablename__ = "Schools"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(256))
    weather_points = db.relationship("Weather", back_populates="school")


class Weather(db.Model):
    __tablename__ = 'Weather'
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    school_id = db.Column(UUID(as_uuid=True), db.ForeignKey("Schools.id"), index=True, nullable=False)
    school = db.relationship("School")
    date = db.Column(db.Date, nullable=False)
    average_wind_speed = db.Column(db.Numeric(5, 2), nullable=True)
    peak_gust_time = db.Column(db.Integer, nullable=True)
    precipitation = db.Column(db.Numeric(5, 2), nullable=True)
    max_temp = db.Column(db.Integer, nullable=True)
    min_temp = db.Column(db.Integer, nullable=True)
    WDF2 = db.Column(db.Integer, nullable=True)  # direction of fastest 2-minute wind
    WDF5 = db.Column(db.Integer, nullable=True)  # direction of fastest 5-minute wind
    WSF2 = db.Column(db.Numeric(5, 2), nullable=True)  # fastest 2-minute wind speed
    WSF5 = db.Column(db.Numeric(5, 2), nullable=True)  # fastest 5-minute wind speed
    has_fog = db.Column(db.Boolean, nullable=True)  #01
    has_heavy_fog = db.Column(db.Boolean, nullable=True)  #02
    has_thunder = db.Column(db.Boolean, nullable=True)  #03
    has_smoke = db.Column(db.Boolean, nullable=True)  #08

