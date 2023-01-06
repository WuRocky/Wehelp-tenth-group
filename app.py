from flask import *
from routes.weather import weather_api
app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Pages


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/latest")
def latest():
    return render_template("latest.html")


@app.route("/county")
def county():
    return render_template("county.html")


@app.route("/weather_week")
def weather_week():
    return render_template("weather_week.html")


app.register_blueprint(weather_api)

if __name__ == "__main__":
    app.run()
