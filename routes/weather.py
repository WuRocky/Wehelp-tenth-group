from flask import *

from flask import Blueprint
from flask_cors import CORS
from models.weather import get_weather
from models.weather_now import get_weather_now
from models.weather_week import get_weather_week

weather_api = Blueprint('weather_api', __name__)
CORS(weather_api)


@weather_api.route("/api/weather")
def api_weather():
  api  = get_weather()
  return jsonify(api)

@weather_api.route("/api/weather_now")
def api_weather_now():
  api  = get_weather_now()
  return jsonify(api)

@weather_api.route("/api/weather_week")
def api_weather_week():
  api = get_weather_week()
  return jsonify(api)