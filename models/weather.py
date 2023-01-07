import requests
import os
from dotenv import load_dotenv
load_dotenv()

### weather_data ###
def weather_data(
    locationName, 
    Wx_firt, 
    Wx_second, 
    Wx_third, 
    pop_firt, 
    pop_second, 
    pop_third, 
    MinT_firt, 
    MinT_second, 
    MinT_third,
    CI_firt,
    CI_second,
    CI_third,
    MaxT_firt,
    MaxT_second,
    MaxT_third
  ):
  return {
    "locationName":locationName,
    "Wx":{
      "Wx_firt": Wx_firt,
      "Wx_second": Wx_second,
      "Wx_third": Wx_third,
    },
    "pop":{
      "pop_firt":pop_firt,
      "pop_second":pop_second,
      "pop_third":pop_third,
    },
    "MinT":{
      "MinT_firt":MinT_firt,
      "MinT_second":MinT_second,
      "MinT_third":MinT_third,
    },
    "CI":{
      "CI_firt":CI_firt,
      "CI_second":CI_second,
      "CI_third":CI_third,
    },
    "MaxT":{
      "MaxT_firt":MaxT_firt,
      "MaxT_second":MaxT_second,
      "MaxT_third":MaxT_third
    }
  } 


def get_weather():
  get_weather = os.getenv("get_weather")
  
  data = requests.get(get_weather).json()
  data_weather = data["records"]["location"]

  get_weather_api = []

  for item in data_weather:
    ### 縣市 ###
    item_locationName = item['locationName']

    ### 天氣現象 ###
    item_Wx_api = item["weatherElement"][0]["time"]


    ### 降雨機率 ###
    item_pop_api = item["weatherElement"][1]["time"]


    ### 最低溫度 ###
    item_MinT_api = item["weatherElement"][2]["time"]


    ### 舒適度 ###
    item_CI_api = item["weatherElement"][3]["time"]


    ### 最高溫度 ###
    item_MaxT_api = item["weatherElement"][4]["time"]

    get_weather_api.append(weather_data(
      item_locationName,
      item_Wx_api[0],
      item_Wx_api[1],
      item_Wx_api[2],
      item_pop_api[0],
      item_pop_api[1],
      item_pop_api[2],
      item_MinT_api[0],
      item_MinT_api[1],
      item_MinT_api[2],
      item_CI_api[0],
      item_CI_api[1],
      item_CI_api[2],
      item_MaxT_api[0],
      item_MaxT_api[1],
      item_MaxT_api[2],
      )
    )
  
  return get_weather_api
