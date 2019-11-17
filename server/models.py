import uuid

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID

db = SQLAlchemy()

class School(db.Model):
    __tablename__ = "Schools"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(256))


class Weather(db.Model):
    __tablename__ = 'Weather'
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

