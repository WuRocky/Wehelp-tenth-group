import requests
import os
from dotenv import load_dotenv
load_dotenv()

### weather_now_data ###
def weather_now_data( locationName, Wx, TEMP_value,  HUMD_value, H_24R_value):
  return {
    "locationName":locationName,
    "Wx": Wx,
    "TEMP":TEMP_value,
    "HUMD":HUMD_value,
    "H_24R":H_24R_value,
  } 


def get_weather_now():
  get_weather_now = os.getenv("get_weather_now")
  
  data_now = requests.get(get_weather_now).json()
  data_weather_now = data_now["records"]["location"]

  get_weather_now_api = []

  get_weather = os.getenv("get_weather")
  data = requests.get(get_weather).json()
  data_weather = data["records"]["location"]

  locationName = []

  for item in data_weather:
    item_Wx_api = item["weatherElement"][0]["time"][0]["parameter"]
    item_locationName = item['locationName']
    
    locationName.append(item_Wx_api)
  

  locationName[0], locationName[1], locationName[2], locationName[3], locationName[4], locationName[5], locationName[6], locationName[7], locationName[8], locationName[9], locationName[10], locationName[11], locationName[12],locationName[13], locationName[14], locationName[15], locationName[16], locationName[17], locationName[18], locationName[19], locationName[20], locationName[21], = locationName[2], locationName[4], locationName[8], locationName[13], locationName[0], locationName[21], locationName[15], locationName[17], locationName[11], locationName[19], locationName[1], locationName[20], locationName[10], locationName[9], locationName[12], locationName[18], locationName[5], locationName[7], locationName[6], locationName[16], locationName[3], locationName[14]


  ########################
  for item1,item2 in zip(locationName, data_weather_now):
    ### 縣市 ###
    item_locationName = item2['parameter'][0]['parameterValue']
    
    ### 溫度 ###
    TEMP = item2["weatherElement"][0]
    elementName_TEMP_value = TEMP["elementValue"]
    
    ### 濕度 ###
    HUMD = item2["weatherElement"][1]
    elementName_HUMD_value = HUMD["elementValue"]

    ### 雨量 ###
    H_24R = item2["weatherElement"][2]
    elementName_H_24R_value = H_24R["elementValue"]
    
    get_weather_now_api.append(weather_now_data(
      item_locationName,
      item1,
      elementName_TEMP_value,
      elementName_HUMD_value,
      elementName_H_24R_value,
      )
    )
  
  return get_weather_now_api