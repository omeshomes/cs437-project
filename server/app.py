import os
from flask import Flask, jsonify, render_template, request


from server.models import db

def create_app():
    app = Flask(__name__)
    # app.secret_key = os.urandom(24)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ['DATABASE_URL']
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    @app.route('/')
    def hello():
        return "Hello World!"


    @app.route('/<name>')
    def hello_name(name):
        return "Hello {}!".format(name)

    return app

app = create_app()
db.app = app
db.init_app(app)
db.create_all()