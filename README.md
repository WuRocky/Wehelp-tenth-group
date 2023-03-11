# [世界無敵氣象網](https://lit-inlet-47967.herokuapp.com/)
## 畫面展示
### 首頁
<img src="https://user-images.githubusercontent.com/84265782/210944142-76a7125b-163f-4a0e-a128-134f5541e83b.png" alt="Cover" width="70%"/>

### 縣市預報總覽
<img src="https://user-images.githubusercontent.com/84265782/210945235-18913b02-698c-4fc0-be56-3ce319ac1cf4.png" alt="Cover" width="70%"/>

### 最新天氣觀測
<img src="https://user-images.githubusercontent.com/84265782/210945405-c789a4df-f8d6-4591-8832-786e47ff3f9d.png" alt="Cover" width="70%"/>

### 一週天氣預報
<img src="https://user-images.githubusercontent.com/84265782/210957048-ae559fce-4892-4e61-a6a3-0dad1c555fbc.png" alt="Cover" width="70%"/>

## 組員分工
### 前後端分離
#### 前端
* **首頁  舒婷**
* **縣市預報 佩儀**
* **一周天氣預報 筱璇**
* **最新天氣 思蘋**
#### 後端
* **整理API 俊寬**
#### UI/UX
* **Figma規劃畫面 筱璇**

[Figma網址](https://www.figma.com/file/lvx7Z00s41HMjm9b8DSWFK/Untitled?node-id=0%3A1&t=YTh8VzWtReLWlxaT-0)

* **畫面討論 全體組員**
#### 架設網站
* **Heroku 俊寬**

## 前後端工作項目
### 前端工作項目
1. 動態和靜態網頁
2. 統一頁面樣式
 - 字型和大小
 - 主題顏色 
 - base 頁面
3. 後端要給前端的API樣式
### 後端工作項目
1. 撈取主題API
2. API 規劃好給前端


## 天氣API規格
### 今明36小時API規格
網址: /api/weather
```python
{
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
```

### 最新天氣狀況API規格
網址: /api/weather_now
```python
{
"locationName":locationName,
    "Wx": Wx,
    "TEMP":TEMP_value,
    "HUMD":HUMD_value,
    "H_24R":H_24R_value,
}
```

### 一週天氣預報規格API規格
網址: /api/weather_week
```python
{
    "locationName":locationName,
    "1":{
      "startTime": startTime_0,
      "endTime": endTime_0,
      "Wx_description": Wx_description_0,
      "Wx_value": Wx_value_0,
      "MinT":MinT_value_0,
      "MaxT":MaxT_value_0,
    },
    "2":{
      "startTime": startTime_1,
      "endTime": endTime_1,
      "Wx_description":  Wx_description_1,
      "Wx_value":  Wx_value_1,
      "MinT":MinT_value_1,
      "MaxT":MaxT_value_1,
    },
    "3":{
      "startTime": startTime_2,
      "endTime": endTime_2,
      "Wx_description":  Wx_description_2,
      "Wx_value":  Wx_value_2,
      "MinT":MinT_value_2,
      "MaxT":MaxT_value_2,
    },
    "4":{
      "startTime": startTime_3,
      "endTime": endTime_3,
      "Wx_description": Wx_description_3,
      "Wx_value": Wx_value_3,
      "MinT":MinT_value_3,
      "MaxT":MaxT_value_3,
    },
    "5":{ 
      "startTime": startTime_4,
      "endTime": endTime_4,
      "Wx_description":Wx_description_4,
      "Wx_value":Wx_value_4,
      "MinT":MinT_value_4,
      "MaxT":MaxT_value_4,
    },
    "6":{ 
      "startTime": startTime_5,
      "endTime": endTime_5,
      "Wx_description":Wx_description_5,
      "Wx_value":Wx_value_5,
      "MinT":MinT_value_5,
      "MaxT":MaxT_value_5,
    },
    "7":{ 
      "startTime": startTime_6,
      "endTime": endTime_6,
      "Wx_description":Wx_description_6,
      "Wx_value":Wx_value_6,
      "MinT":MinT_value_6,
      "MaxT":MaxT_value_6,
    },
    "8":{ 
      "startTime": startTime_7,
      "endTime": endTime_7,
      "Wx_description":Wx_description_7,
      "Wx_value":Wx_value_7,
      "MinT":MinT_value_7,
      "MaxT":MaxT_value_7,
    },
    "9":{ 
      "startTime": startTime_8,
      "endTime": endTime_8,
      "Wx_description":Wx_description_8,
      "Wx_value":Wx_value_8,
      "MinT":MinT_value_8,
      "MaxT":MaxT_value_8,
    },
    "10":{ 
      "startTime": startTime_9,
      "endTime": endTime_9,
      "Wx_description":Wx_description_9,
      "Wx_value":Wx_value_9,
      "MinT":MinT_value_9,
      "MaxT":MaxT_value_9,
    },
    "11":{ 
      "startTime": startTime_10,
      "endTime": endTime_10,
      "Wx_description":Wx_description_10,
      "Wx_value":Wx_value_10,
      "MinT":MinT_value_10,
      "MaxT":MaxT_value_10,
    },
    "12":{ 
      "startTime": startTime_11,
      "endTime": endTime_11,
      "Wx_description":Wx_description_11,
      "Wx_value":Wx_value_11,
      "MinT":MinT_value_11,
      "MaxT":MaxT_value_11,
    },
    "13":{ 
      "startTime": startTime_12,
      "endTime": endTime_12,
      "Wx_description":Wx_description_12,
      "Wx_value":Wx_value_12,
      "MinT":MinT_value_12,
      "MaxT":MaxT_value_12,
    },
    "14":{ 
      "startTime": startTime_13,
      "endTime": endTime_13,
      "Wx_description":Wx_description_13,
      "Wx_value":Wx_value_13,
      "MinT":MinT_value_13,
      "MaxT":MaxT_value_13,
    },
  }
```
## [Notion 討論](https://holly-day-66d.notion.site/2d97aeeb86c342cea691a146180100c3)


## reference:
#### 樣式參考
[中央氣象局網址](https://www.cwb.gov.tw/V8/C/)
[I/O 3000](https://io3000.com/)
[awwwards](https://www.awwwards.com/)
#### 引用API
[中央氣象局開放資料平臺之資料擷取API](https://opendata.cwb.gov.tw/dist/opendata-swagger.html?urls.primaryName=openAPI#/)
#### 規格書參考
[最新天氣狀態規格書](https://opendata.cwb.gov.tw/opendatadoc/DIV2/A0001-001.pdf)
[天氣預報規格書](https://opendata.cwb.gov.tw/opendatadoc/MFC/ForecastElement.pdf)
[觀測站網址](https://e-service.cwb.gov.tw/wdps/obs/state.htm)
