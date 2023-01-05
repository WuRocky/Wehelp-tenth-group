import requests

# def weather_week_data(
#     locationName_0, startTime_0, endTime_0, Wx_description_0, Wx_value_0, MinT_value_0, MaxT_value_0,
#     locationName_1, startTime_1, endTime_1, Wx_description_1, Wx_value_1, MinT_value_1, MaxT_value_1,
#     locationName_2, startTime_2, endTime_2, Wx_description_2, Wx_value_2, MinT_value_2, MaxT_value_2,
#     locationName_3, startTime_3, endTime_3, Wx_description_3, Wx_value_3, MinT_value_3, MaxT_value_3,
#     locationName_4, startTime_4, endTime_4, Wx_description_4, Wx_value_4, MinT_value_4, MaxT_value_4,
#     locationName_5, startTime_5, endTime_5, Wx_description_5, Wx_value_5, MinT_value_5, MaxT_value_5,
#     locationName_6, startTime_6, endTime_6, Wx_description_6, Wx_value_6, MinT_value_6, MaxT_value_6,
#     locationName_7, startTime_7, endTime_7, Wx_description_7, Wx_value_7, MinT_value_7, MaxT_value_7,
#     locationName_8, startTime_8, endTime_8, Wx_description_8, Wx_value_8, MinT_value_8, MaxT_value_8,
#     locationName_9, startTime_9, endTime_9, Wx_description_9, Wx_value_9, MinT_value_9, MaxT_value_9,
#     locationName_10, startTime_10, endTime_10, Wx_description_10, Wx_value_10, MinT_value_10, MaxT_value_10,
#     locationName_11, startTime_11, endTime_11, Wx_description_11, Wx_value_11, MinT_value_11, MaxT_value_11,
#     locationName_12, startTime_12, endTime_12, Wx_description_12, Wx_value_12, MinT_value_12, MaxT_value_12,
#     locationName_13, startTime_13, endTime_13, Wx_description_13, Wx_value_13, MinT_value_13, MaxT_value_13
#   ):
#   return {
#     "1st":{
#       "locationName":locationName_0,
#       "startTime": startTime_0,
#       "endTime": endTime_0,
#       "Wx":{
#         Wx_description_0,
#         Wx_value_0,
#       },
#       "MinT":MinT_value_0,
#       "MaxT":MaxT_value_0,
#     },
#     "2nd":{
#       "locationName":locationName_1,
#       "startTime": startTime_1,
#       "endTime": endTime_1,
#       "Wx":{
#         Wx_description_1,
#         Wx_value_1,
#       },
#       "MinT":MinT_value_1,
#       "MaxT":MaxT_value_1,
#     },
#     "3rd":{
#       "locationName":locationName_2,
#       "startTime": startTime_2,
#       "endTime": endTime_2,
#       "Wx":{
#         Wx_description_2,
#         Wx_value_2,
#       },
#       "MinT":MinT_value_2,
#       "MaxT":MaxT_value_2,
#     },
#     "4th":{
#       "locationName":locationName_3,
#       "startTime": startTime_3,
#       "endTime": endTime_3,
#       "Wx":{
#         Wx_description_3,
#         Wx_value_3,
#       },
#       "MinT":MinT_value_3,
#       "MaxT":MaxT_value_3,
#     },
#     "5th":{ 
#       "locationName":locationName_4,
#       "startTime": startTime_4,
#       "endTime": endTime_4,
#       "Wx":{
#         Wx_description_4,
#         Wx_value_4,
#       },
#       "MinT":MinT_value_4,
#       "MaxT":MaxT_value_4,
#     },
#     "6th":{ 
#       "locationName":locationName_5,
#       "startTime": startTime_5,
#       "endTime": endTime_5,
#       "Wx":{
#         Wx_description_5,
#         Wx_value_5,
#       },
#       "MinT":MinT_value_5,
#       "MaxT":MaxT_value_5,
#     },
#     "7th":{ 
#       "locationName":locationName_6,
#       "startTime": startTime_6,
#       "endTime": endTime_6,
#       "Wx":{
#         Wx_description_6,
#         Wx_value_6,
#       },
#       "MinT":MinT_value_6,
#       "MaxT":MaxT_value_6,
#     },
#     "8th":{ 
#       "locationName":locationName_7,
#       "startTime": startTime_7,
#       "endTime": endTime_7,
#       "Wx":{
#         Wx_description_7,
#         Wx_value_7,
#       },
#       "MinT":MinT_value_7,
#       "MaxT":MaxT_value_7,
#     },
#     "9th":{ 
#       "locationName":locationName_8,
#       "startTime": startTime_8,
#       "endTime": endTime_8,
#       "Wx":{
#         Wx_description_8,
#         Wx_value_8,
#       },
#       "MinT":MinT_value_8,
#       "MaxT":MaxT_value_8,
#     },
#     "10th":{ 
#       "locationName":locationName_9,
#       "startTime": startTime_9,
#       "endTime": endTime_9,
#       "Wx":{
#         Wx_description_9,
#         Wx_value_9,
#       },
#       "MinT":MinT_value_9,
#       "MaxT":MaxT_value_9,
#     },
#     "11th":{ 
#       "locationName":locationName_10,
#       "startTime": startTime_10,
#       "endTime": endTime_10,
#       "Wx":{
#         Wx_description_10,
#         Wx_value_10,
#       },
#       "MinT":MinT_value_10,
#       "MaxT":MaxT_value_10,
#     },
#     "12th":{ 
#       "locationName":locationName_11,
#       "startTime": startTime_11,
#       "endTime": endTime_11,
#       "Wx":{
#         Wx_description_11,
#         Wx_value_11,
#       },
#       "MinT":MinT_value_11,
#       "MaxT":MaxT_value_11,
#     },
#     "13th":{ 
#       "locationName":locationName_12,
#       "startTime": startTime_12,
#       "endTime": endTime_12,
#       "Wx":{
#         Wx_description_12,
#         Wx_value_12,
#       },
#       "MinT":MinT_value_12,
#       "MaxT":MaxT_value_12,
#     },
#     "14th":{ 
#       "locationName":locationName_13,
#       "startTime": startTime_13,
#       "endTime": endTime_13,
#       "Wx":{
#         Wx_description_13,
#         Wx_value_13,
#       },
#       "MinT":MinT_value_13,
#       "MaxT":MaxT_value_13,
#     },
#   }


# def weather_week_data(
  #   locationName_0, startTime_0, endTime_0, Wx_description_0, Wx_value_0, MinT_value_0, MaxT_value_0,
  #   locationName_1, startTime_1, endTime_1, Wx_description_1, Wx_value_1, MinT_value_1, MaxT_value_1,
  #   locationName_2, startTime_2, endTime_2, Wx_description_2, Wx_value_2, MinT_value_2, MaxT_value_2,
  #   locationName_3, startTime_3, endTime_3, Wx_description_3, Wx_value_3, MinT_value_3, MaxT_value_3,
  #   locationName_4, startTime_4, endTime_4, Wx_description_4, Wx_value_4, MinT_value_4, MaxT_value_4,
  #   locationName_5, startTime_5, endTime_5, Wx_description_5, Wx_value_5, MinT_value_5, MaxT_value_5,
  #   locationName_6, startTime_6, endTime_6, Wx_description_6, Wx_value_6, MinT_value_6, MaxT_value_6,
  #   locationName_7, startTime_7, endTime_7, Wx_description_7, Wx_value_7, MinT_value_7, MaxT_value_7,
  #   locationName_8, startTime_8, endTime_8, Wx_description_8, Wx_value_8, MinT_value_8, MaxT_value_8,
  #   locationName_9, startTime_9, endTime_9, Wx_description_9, Wx_value_9, MinT_value_9, MaxT_value_9,
  #   locationName_10, startTime_10, endTime_10, Wx_description_10, Wx_value_10, MinT_value_10, MaxT_value_10,
  #   locationName_11, startTime_11, endTime_11, Wx_description_11, Wx_value_11, MinT_value_11, MaxT_value_11,
  #   locationName_12, startTime_12, endTime_12, Wx_description_12, Wx_value_12, MinT_value_12, MaxT_value_12,
  #   locationName_13, startTime_13, endTime_13, Wx_description_13, Wx_value_13, MinT_value_13, MaxT_value_13
  # ):
  # return {
  #   "1st":{
  #     "locationName":locationName_0,
  #     "startTime": startTime_0,
  #     "endTime": endTime_0,
  #     "Wx_description": Wx_description_0,
  #     "Wx_value": Wx_value_0,
  #     "MinT":MinT_value_0,
  #     "MaxT":MaxT_value_0,
  #   },
  #   "2nd":{
  #     "locationName":locationName_1,
  #     "startTime": startTime_1,
  #     "endTime": endTime_1,
  #     "Wx_description":  Wx_description_1,
  #     "Wx_value":  Wx_value_1,
  #     "MinT":MinT_value_1,
  #     "MaxT":MaxT_value_1,
  #   },
  #   "3rd":{
  #     "locationName":locationName_2,
  #     "startTime": startTime_2,
  #     "endTime": endTime_2,
  #     "Wx_description":  Wx_description_2,
  #     "Wx_value":  Wx_value_2,
  #     "MinT":MinT_value_2,
  #     "MaxT":MaxT_value_2,
  #   },
  #   "4th":{
  #     "locationName":locationName_3,
  #     "startTime": startTime_3,
  #     "endTime": endTime_3,
  #     "Wx_description": Wx_description_3,
  #     "Wx_value": Wx_value_3,
  #     "MinT":MinT_value_3,
  #     "MaxT":MaxT_value_3,
  #   },
  #   "5th":{ 
  #     "locationName":locationName_4,
  #     "startTime": startTime_4,
  #     "endTime": endTime_4,
  #     "Wx_description":Wx_description_4,
  #     "Wx_value":Wx_value_4,
  #     "MinT":MinT_value_4,
  #     "MaxT":MaxT_value_4,
  #   },
  #   "6th":{ 
  #     "locationName":locationName_5,
  #     "startTime": startTime_5,
  #     "endTime": endTime_5,
  #     "Wx_description":Wx_description_5,
  #     "Wx_value":Wx_value_5,
  #     "MinT":MinT_value_5,
  #     "MaxT":MaxT_value_5,
  #   },
  #   "7th":{ 
  #     "locationName":locationName_6,
  #     "startTime": startTime_6,
  #     "endTime": endTime_6,
  #     "Wx_description":Wx_description_6,
  #     "Wx_value":Wx_value_6,
  #     "MinT":MinT_value_6,
  #     "MaxT":MaxT_value_6,
  #   },
  #   "8th":{ 
  #     "locationName":locationName_7,
  #     "startTime": startTime_7,
  #     "endTime": endTime_7,
  #     "Wx_description":Wx_description_7,
  #     "Wx_value":Wx_value_7,
  #     "MinT":MinT_value_7,
  #     "MaxT":MaxT_value_7,
  #   },
  #   "9th":{ 
  #     "locationName":locationName_8,
  #     "startTime": startTime_8,
  #     "endTime": endTime_8,
  #     "Wx_description":Wx_description_8,
  #     "Wx_value":Wx_value_8,
  #     "MinT":MinT_value_8,
  #     "MaxT":MaxT_value_8,
  #   },
  #   "10th":{ 
  #     "locationName":locationName_9,
  #     "startTime": startTime_9,
  #     "endTime": endTime_9,
  #     "Wx_description":Wx_description_9,
  #     "Wx_value":Wx_value_9,
  #     "MinT":MinT_value_9,
  #     "MaxT":MaxT_value_9,
  #   },
  #   "11th":{ 
  #     "locationName":locationName_10,
  #     "startTime": startTime_10,
  #     "endTime": endTime_10,
  #     "Wx_description":Wx_description_10,
  #     "Wx_value":Wx_value_10,
  #     "MinT":MinT_value_10,
  #     "MaxT":MaxT_value_10,
  #   },
  #   "12th":{ 
  #     "locationName":locationName_11,
  #     "startTime": startTime_11,
  #     "endTime": endTime_11,
  #     "Wx_description":Wx_description_11,
  #     "Wx_value":Wx_value_11,
  #     "MinT":MinT_value_11,
  #     "MaxT":MaxT_value_11,
  #   },
  #   "13th":{ 
  #     "locationName":locationName_12,
  #     "startTime": startTime_12,
  #     "endTime": endTime_12,
  #     "Wx_description":Wx_description_12,
  #     "Wx_value":Wx_value_12,
  #     "MinT":MinT_value_12,
  #     "MaxT":MaxT_value_12,
  #   },
  #   "14th":{ 
  #     "locationName":locationName_13,
  #     "startTime": startTime_13,
  #     "endTime": endTime_13,
  #     "Wx_description":Wx_description_13,
  #     "Wx_value":Wx_value_13,
  #     "MinT":MinT_value_13,
  #     "MaxT":MaxT_value_13,
  #   },
  # }


def weather_week_data(
    locationName, startTime_0, endTime_0, Wx_description_0, Wx_value_0, MinT_value_0, MaxT_value_0,
    startTime_1, endTime_1, Wx_description_1, Wx_value_1, MinT_value_1, MaxT_value_1,
    startTime_2, endTime_2, Wx_description_2, Wx_value_2, MinT_value_2, MaxT_value_2,
    startTime_3, endTime_3, Wx_description_3, Wx_value_3, MinT_value_3, MaxT_value_3,
    startTime_4, endTime_4, Wx_description_4, Wx_value_4, MinT_value_4, MaxT_value_4,
    startTime_5, endTime_5, Wx_description_5, Wx_value_5, MinT_value_5, MaxT_value_5,
    startTime_6, endTime_6, Wx_description_6, Wx_value_6, MinT_value_6, MaxT_value_6,
    startTime_7, endTime_7, Wx_description_7, Wx_value_7, MinT_value_7, MaxT_value_7,
    startTime_8, endTime_8, Wx_description_8, Wx_value_8, MinT_value_8, MaxT_value_8,
    startTime_9, endTime_9, Wx_description_9, Wx_value_9, MinT_value_9, MaxT_value_9,
    startTime_10, endTime_10, Wx_description_10, Wx_value_10, MinT_value_10, MaxT_value_10,
    startTime_11, endTime_11, Wx_description_11, Wx_value_11, MinT_value_11, MaxT_value_11,
    startTime_12, endTime_12, Wx_description_12, Wx_value_12, MinT_value_12, MaxT_value_12,
    startTime_13, endTime_13, Wx_description_13, Wx_value_13, MinT_value_13, MaxT_value_13
  ):
  return {
    "locationName":locationName,
    "1st":{
      "startTime": startTime_0,
      "endTime": endTime_0,
      "Wx_description": Wx_description_0,
      "Wx_value": Wx_value_0,
      "MinT":MinT_value_0,
      "MaxT":MaxT_value_0,
    },
    "2nd":{
      "startTime": startTime_1,
      "endTime": endTime_1,
      "Wx_description":  Wx_description_1,
      "Wx_value":  Wx_value_1,
      "MinT":MinT_value_1,
      "MaxT":MaxT_value_1,
    },
    "3rd":{
      "startTime": startTime_2,
      "endTime": endTime_2,
      "Wx_description":  Wx_description_2,
      "Wx_value":  Wx_value_2,
      "MinT":MinT_value_2,
      "MaxT":MaxT_value_2,
    },
    "4th":{
      "startTime": startTime_3,
      "endTime": endTime_3,
      "Wx_description": Wx_description_3,
      "Wx_value": Wx_value_3,
      "MinT":MinT_value_3,
      "MaxT":MaxT_value_3,
    },
    "5th":{ 
      "startTime": startTime_4,
      "endTime": endTime_4,
      "Wx_description":Wx_description_4,
      "Wx_value":Wx_value_4,
      "MinT":MinT_value_4,
      "MaxT":MaxT_value_4,
    },
    "6th":{ 
      "startTime": startTime_5,
      "endTime": endTime_5,
      "Wx_description":Wx_description_5,
      "Wx_value":Wx_value_5,
      "MinT":MinT_value_5,
      "MaxT":MaxT_value_5,
    },
    "7th":{ 
      "startTime": startTime_6,
      "endTime": endTime_6,
      "Wx_description":Wx_description_6,
      "Wx_value":Wx_value_6,
      "MinT":MinT_value_6,
      "MaxT":MaxT_value_6,
    },
    "8th":{ 
      "startTime": startTime_7,
      "endTime": endTime_7,
      "Wx_description":Wx_description_7,
      "Wx_value":Wx_value_7,
      "MinT":MinT_value_7,
      "MaxT":MaxT_value_7,
    },
    "9th":{ 
      "startTime": startTime_8,
      "endTime": endTime_8,
      "Wx_description":Wx_description_8,
      "Wx_value":Wx_value_8,
      "MinT":MinT_value_8,
      "MaxT":MaxT_value_8,
    },
    "10th":{ 
      "startTime": startTime_9,
      "endTime": endTime_9,
      "Wx_description":Wx_description_9,
      "Wx_value":Wx_value_9,
      "MinT":MinT_value_9,
      "MaxT":MaxT_value_9,
    },
    "11th":{ 
      "startTime": startTime_10,
      "endTime": endTime_10,
      "Wx_description":Wx_description_10,
      "Wx_value":Wx_value_10,
      "MinT":MinT_value_10,
      "MaxT":MaxT_value_10,
    },
    "12th":{ 
      "startTime": startTime_11,
      "endTime": endTime_11,
      "Wx_description":Wx_description_11,
      "Wx_value":Wx_value_11,
      "MinT":MinT_value_11,
      "MaxT":MaxT_value_11,
    },
    "13th":{ 
      "startTime": startTime_12,
      "endTime": endTime_12,
      "Wx_description":Wx_description_12,
      "Wx_value":Wx_value_12,
      "MinT":MinT_value_12,
      "MaxT":MaxT_value_12,
    },
    "14th":{ 
      "startTime": startTime_13,
      "endTime": endTime_13,
      "Wx_description":Wx_description_13,
      "Wx_value":Wx_value_13,
      "MinT":MinT_value_13,
      "MaxT":MaxT_value_13,
    },
  }


def get_weather_week():
  get_weather = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-76A83F0A-AD80-483B-A8FA-0FADB18A69F7&format=JSON&elementName=MinT,MaxT,Wx"

  data = requests.get(get_weather).json()
  location = data["records"]["locations"][0]["location"]
  get_weather_week_api = []
  for item in location:
    locationName = item["locationName"]
    
    startTime_0 = item["weatherElement"][0]["time"][0]["startTime"]
    startTime_1 = item["weatherElement"][0]["time"][1]["startTime"]
    startTime_2 = item["weatherElement"][0]["time"][2]["startTime"]
    startTime_3 = item["weatherElement"][0]["time"][3]["startTime"]
    startTime_4 = item["weatherElement"][0]["time"][4]["startTime"]
    startTime_5 = item["weatherElement"][0]["time"][5]["startTime"]
    startTime_6 = item["weatherElement"][0]["time"][6]["startTime"]
    startTime_7 = item["weatherElement"][0]["time"][7]["startTime"]
    startTime_8 = item["weatherElement"][0]["time"][8]["startTime"]
    startTime_9 = item["weatherElement"][0]["time"][9]["startTime"]
    startTime_10 = item["weatherElement"][0]["time"][10]["startTime"]
    startTime_11 = item["weatherElement"][0]["time"][11]["startTime"]
    startTime_12 = item["weatherElement"][0]["time"][12]["startTime"]
    startTime_13 = item["weatherElement"][0]["time"][13]["startTime"]

    endTime_0 = item["weatherElement"][0]["time"][0]["endTime"]
    endTime_1 = item["weatherElement"][0]["time"][1]["endTime"]
    endTime_2 = item["weatherElement"][0]["time"][2]["endTime"]
    endTime_3 = item["weatherElement"][0]["time"][3]["endTime"]
    endTime_4 = item["weatherElement"][0]["time"][4]["endTime"]
    endTime_5 = item["weatherElement"][0]["time"][5]["endTime"]
    endTime_6 = item["weatherElement"][0]["time"][6]["endTime"]
    endTime_7 = item["weatherElement"][0]["time"][7]["endTime"]
    endTime_8 = item["weatherElement"][0]["time"][8]["endTime"]
    endTime_9 = item["weatherElement"][0]["time"][9]["endTime"]
    endTime_10 = item["weatherElement"][0]["time"][10]["endTime"]
    endTime_11 = item["weatherElement"][0]["time"][11]["endTime"]
    endTime_12 = item["weatherElement"][0]["time"][12]["endTime"]
    endTime_13 = item["weatherElement"][0]["time"][13]["endTime"]
    
    Wx_description_0 = item["weatherElement"][0]["time"][0]["elementValue"][0]["value"]
    Wx_description_1 = item["weatherElement"][0]["time"][1]["elementValue"][0]["value"]
    Wx_description_2 = item["weatherElement"][0]["time"][2]["elementValue"][0]["value"]
    Wx_description_3 = item["weatherElement"][0]["time"][3]["elementValue"][0]["value"]
    Wx_description_4 = item["weatherElement"][0]["time"][4]["elementValue"][0]["value"]
    Wx_description_5 = item["weatherElement"][0]["time"][5]["elementValue"][0]["value"]
    Wx_description_6 = item["weatherElement"][0]["time"][6]["elementValue"][0]["value"]
    Wx_description_7 = item["weatherElement"][0]["time"][7]["elementValue"][0]["value"]
    Wx_description_8 = item["weatherElement"][0]["time"][8]["elementValue"][0]["value"]
    Wx_description_9 = item["weatherElement"][0]["time"][9]["elementValue"][0]["value"]
    Wx_description_10 = item["weatherElement"][0]["time"][10]["elementValue"][0]["value"]
    Wx_description_11 = item["weatherElement"][0]["time"][11]["elementValue"][0]["value"]
    Wx_description_12 = item["weatherElement"][0]["time"][12]["elementValue"][0]["value"]
    Wx_description_13 = item["weatherElement"][0]["time"][13]["elementValue"][0]["value"]

    Wx_value_0 = item["weatherElement"][0]["time"][0]["elementValue"][1]["value"]
    Wx_value_1 = item["weatherElement"][0]["time"][1]["elementValue"][1]["value"]
    Wx_value_2 = item["weatherElement"][0]["time"][2]["elementValue"][1]["value"]
    Wx_value_3 = item["weatherElement"][0]["time"][3]["elementValue"][1]["value"]
    Wx_value_4 = item["weatherElement"][0]["time"][4]["elementValue"][1]["value"]
    Wx_value_5 = item["weatherElement"][0]["time"][5]["elementValue"][1]["value"]
    Wx_value_6 = item["weatherElement"][0]["time"][6]["elementValue"][1]["value"]
    Wx_value_7 = item["weatherElement"][0]["time"][7]["elementValue"][1]["value"]
    Wx_value_8 = item["weatherElement"][0]["time"][8]["elementValue"][1]["value"]
    Wx_value_9 = item["weatherElement"][0]["time"][9]["elementValue"][1]["value"]
    Wx_value_10 = item["weatherElement"][0]["time"][10]["elementValue"][1]["value"]
    Wx_value_11 = item["weatherElement"][0]["time"][11]["elementValue"][1]["value"]
    Wx_value_12 = item["weatherElement"][0]["time"][12]["elementValue"][1]["value"]
    Wx_value_13 = item["weatherElement"][0]["time"][13]["elementValue"][1]["value"]
    

    MinT_value_0 = item["weatherElement"][1]["time"][0]["elementValue"][0]["value"]
    MinT_value_1 = item["weatherElement"][1]["time"][1]["elementValue"][0]["value"]
    MinT_value_2 = item["weatherElement"][1]["time"][2]["elementValue"][0]["value"]
    MinT_value_3 = item["weatherElement"][1]["time"][3]["elementValue"][0]["value"]
    MinT_value_4 = item["weatherElement"][1]["time"][4]["elementValue"][0]["value"]
    MinT_value_5 = item["weatherElement"][1]["time"][5]["elementValue"][0]["value"]
    MinT_value_6 = item["weatherElement"][1]["time"][6]["elementValue"][0]["value"]
    MinT_value_7 = item["weatherElement"][1]["time"][7]["elementValue"][0]["value"]
    MinT_value_8 = item["weatherElement"][1]["time"][8]["elementValue"][0]["value"]
    MinT_value_9 = item["weatherElement"][1]["time"][9]["elementValue"][0]["value"]
    MinT_value_10 = item["weatherElement"][1]["time"][10]["elementValue"][0]["value"]
    MinT_value_11 = item["weatherElement"][1]["time"][11]["elementValue"][0]["value"]
    MinT_value_12 = item["weatherElement"][1]["time"][12]["elementValue"][0]["value"]
    MinT_value_13 = item["weatherElement"][1]["time"][13]["elementValue"][0]["value"]

    MaxT_value_0 = item["weatherElement"][2]["time"][0]["elementValue"][0]["value"]
    MaxT_value_1 = item["weatherElement"][2]["time"][1]["elementValue"][0]["value"]
    MaxT_value_2 = item["weatherElement"][2]["time"][2]["elementValue"][0]["value"]
    MaxT_value_3 = item["weatherElement"][2]["time"][3]["elementValue"][0]["value"]
    MaxT_value_4 = item["weatherElement"][2]["time"][4]["elementValue"][0]["value"]
    MaxT_value_5 = item["weatherElement"][2]["time"][5]["elementValue"][0]["value"]
    MaxT_value_6 = item["weatherElement"][2]["time"][6]["elementValue"][0]["value"]
    MaxT_value_7 = item["weatherElement"][2]["time"][7]["elementValue"][0]["value"]
    MaxT_value_8 = item["weatherElement"][2]["time"][8]["elementValue"][0]["value"]
    MaxT_value_9 = item["weatherElement"][2]["time"][9]["elementValue"][0]["value"]
    MaxT_value_10 = item["weatherElement"][2]["time"][10]["elementValue"][0]["value"]
    MaxT_value_11 = item["weatherElement"][2]["time"][11]["elementValue"][0]["value"]
    MaxT_value_12 = item["weatherElement"][2]["time"][12]["elementValue"][0]["value"]
    MaxT_value_13 = item["weatherElement"][2]["time"][13]["elementValue"][0]["value"]
    
    get_weather_week_api.append(weather_week_data(
        locationName, startTime_0, endTime_0, Wx_description_0, Wx_value_0, MinT_value_0, MaxT_value_0,
        startTime_1, endTime_1, Wx_description_1, Wx_value_1, MinT_value_1, MaxT_value_1,
        startTime_2, endTime_2, Wx_description_2, Wx_value_2, MinT_value_2, MaxT_value_2,
        startTime_3, endTime_3, Wx_description_3, Wx_value_3, MinT_value_3, MaxT_value_3,
        startTime_4, endTime_4, Wx_description_4, Wx_value_4, MinT_value_4, MaxT_value_4,
        startTime_5, endTime_5, Wx_description_5, Wx_value_5, MinT_value_5, MaxT_value_5,
        startTime_6, endTime_6, Wx_description_6, Wx_value_6, MinT_value_6, MaxT_value_6,
        startTime_7, endTime_7, Wx_description_7, Wx_value_7, MinT_value_7, MaxT_value_7,
        startTime_8, endTime_8, Wx_description_8, Wx_value_8, MinT_value_8, MaxT_value_8,
        startTime_9, endTime_9, Wx_description_9, Wx_value_9, MinT_value_9, MaxT_value_9,
        startTime_10, endTime_10, Wx_description_10, Wx_value_10, MinT_value_10, MaxT_value_10,
        startTime_11, endTime_11, Wx_description_11, Wx_value_11, MinT_value_11, MaxT_value_11,
        startTime_12, endTime_12, Wx_description_12, Wx_value_12, MinT_value_12, MaxT_value_12,
        startTime_13, endTime_13, Wx_description_13, Wx_value_13, MinT_value_13, MaxT_value_13
      )
    )
  return get_weather_week_api