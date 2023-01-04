from flask import *

from flask import Blueprint
from flask_cors import CORS
from models.weather import GetWeather,GetWeatherNow


weather_api = Blueprint('weather_api', __name__)
CORS(weather_api)





@weather_api.route("/api/weather")
def api_weather():
  api  = GetWeather()
  return jsonify(api)

@weather_api.route("/api/weather_now")
def api_weather_now():
  api  = GetWeatherNow()
  return jsonify(api)