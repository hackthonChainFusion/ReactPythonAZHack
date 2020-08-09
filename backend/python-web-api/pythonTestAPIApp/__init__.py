from flask import Flask,render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__,template_folder='../frontend', static_folder='../frontend/static')
CORS(app)
# app.config.from_object('config')
# app.config["Debug"] = True
db = SQLAlchemy(app)
ma = Marshmallow(app)

@app.route("/")
def my_index():
    return render_template("index.html")

from pythonTestAPIApp import views, models