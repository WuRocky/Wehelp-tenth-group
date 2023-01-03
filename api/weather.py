from flask import *

from flask import Blueprint
from flask_cors import CORS



weather_api = Blueprint('weather_api', __name__)
CORS(weather_api)





@weather_api.route("/api/weather_now", methods=["GET"])
def api_weather_now():
  data = request.json()
  print(data)

