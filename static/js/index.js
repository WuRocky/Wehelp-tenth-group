let ele;
let day1;
let day2;
let day3;
let newHour1;
let newHour2;
let newHour3;
const pin = document.querySelector("#position");
const place = document.querySelectorAll(".place");
const weatherDetail = document.querySelector(".weather-detail");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const daySecond = document.querySelector("#day-second");
const dayThird = document.querySelector("#day-third");
const timeSecond = document.querySelector("#time-second");
const timeThird = document.querySelector("#time-third");
const tonight = document.querySelector(".tonight");
const lowFirst = document.querySelector("#low-first");
const heightFirst = document.querySelector("#height-first");
const lowSecond = document.querySelector("#low-second");
const heightSecond = document.querySelector("#height-second");
const lowThird = document.querySelector("#low-third");
const heightThird = document.querySelector("#height-third");
const rainFirst = document.querySelector("#rain-first");
const rainSecond = document.querySelector("#rain-second");
const rainThird = document.querySelector("#rain-third");
const imgFirst = document.querySelector("#img-first");
const imgSecond = document.querySelector("#img-second");
const imgThird = document.querySelector("#img-third");
const allForcast = document.querySelector("#all-forcast");
const weekForcast = document.querySelector("#week-forcast");
const newForcast = document.querySelector("#new-forcast");
let now = new Date();
// console.log(now.getHours());
window.addEventListener("load", () => {
  getData("臺北市");
});

let currentMonth = new Date().getMonth() + 1; // 0-11
if (currentMonth < 10) {
  currentMonth = `0${currentMonth}`;
}
let currentDate = new Date().getDate(); // 1-31
if (currentDate < 10) {
  currentDate = `0${currentDate}`;
}
date.textContent = `${currentMonth}/${currentDate}`;

const gPosition = {
  C10017: "310 30",
  C65: "280 65",
  C63: "288 30",
  C68: "240 55",
  C10004: "235 95",
  C10018: "210 80",
  C10005: "210 130",
  C66: "180 170",
  C10008: "220 200",
  C10007: "150 210",
  C10009: "130 235",
  C10010: "170 265",
  C10020: "142 265",
  C67: "130 320",
  C64: "130 380",
  C10013: "170 420",
  C10014: "225 350",
  C10015: "275 220",
  C10002: "300 115",
  C09007: "20 80",
  C09020: "20 150",
  C10016: "15 250",
};

const iconId = {
  19: "icon-1",
  2: "icon-2",
  6: "icon-3",
  14: "icon-4",
  4: "icon-22",
  5: "icon-5",
  9: "icon-6",
  12: "icon-7",
  15: "icon-18",
  21: "icon-8",
  10: "icon-9",
  1: "icon-11",
  3: "icon-12",
  7: "icon-10",
  16: "icon-19",
  18: "icon-13",
  13: "icon-14",
  11: "icon-16",
  8: "icon-15",
  22: "icon-17",
  17: "icon-20",
  20: "icon-21",
};

Object.keys(gPosition).forEach((key) => {
  const element = document.querySelector(`#${key}`);
  const value = gPosition[key];
  element.addEventListener("click", () => {
    pin.setAttribute("transform", `translate(${value})`);
    const ele = document.querySelector(`#${key} desc`);
    const place = ele.textContent;
    getData(place);
  });
});

const aElements = document.querySelectorAll("a");
aElements.forEach((el) => {
  el.addEventListener("click", () => {
    setActive(el, aElements);
  });
});

function setActive(element, elements) {
  elements.forEach((el) => {
    //符合則新增 不符合刪除
    el.classList.toggle("is-active", el === element);
  });
}

async function getData(place) {
  try {
    const response = await fetch("/api/weather");
    const data = await response.json();
    console.log(data);
    const baseUrl =
      "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/";

    for (let i = 0; i < data.length; i++) {
      if (data[i]["locationName"] === place) {
        city.textContent = data[i]["locationName"];

        const low1 = data[i].MinT.MinT_firt.parameter.parameterName;
        const low2 = data[i].MinT.MinT_second.parameter.parameterName;
        const low3 = data[i].MinT.MinT_third.parameter.parameterName;
        const height1 = data[i].MaxT.MaxT_firt.parameter.parameterName;
        const height2 = data[i].MaxT.MaxT_second.parameter.parameterName;
        const height3 = data[i].MaxT.MaxT_third.parameter.parameterName;
        const rain1 = data[i].pop.pop_firt.parameter.parameterName;
        const rain2 = data[i].pop.pop_second.parameter.parameterName;
        const rain3 = data[i].pop.pop_third.parameter.parameterName;
        lowFirst.textContent = `${low1}°`;
        lowSecond.textContent = `${low2}°`;
        lowThird.textContent = `${low3}°`;
        heightFirst.textContent = `${height1}°`;
        heightSecond.textContent = `${height2}°`;
        heightThird.textContent = `${height3}°`;
        rainFirst.innerHTML = `<img src="../static/images/umbrella.png" alt="" />${rain1}%`;
        rainSecond.innerHTML = `<img src="../static/images/blackumbrella.png" alt="" /> ${rain2}%`;
        rainThird.innerHTML = `<img src="../static/images/blackumbrella.png" alt="" /> ${rain3}%`;
        const start1 = getHoursAndMinutes(data[i].Wx.Wx_firt.startTime);
        const end1 = getHoursAndMinutes(data[i].Wx.Wx_firt.endTime);
        const start2 = getHoursAndMinutes(data[i].Wx.Wx_second.startTime);
        const end2 = getHoursAndMinutes(data[i].Wx.Wx_second.endTime);
        const start3 = getHoursAndMinutes(data[i].Wx.Wx_third.startTime);
        const end3 = getHoursAndMinutes(data[i].Wx.Wx_third.endTime);
        tonight.textContent = `${start1}-${end1}`;
        timeSecond.textContent = `${start2}-${end2}`;
        timeThird.textContent = `${start3}-${end3}`;

        if (start1 === "00:00" && now.getHours() < 24) {
          day1 = "今晚明晨";
          day2 = "明日白天";
          day3 = "明日晚上";
          newHour1 = "night";
          newHour2 = "day";
          newHour3 = "night";
          tonight.textContent = `${day1} ${start1}-${end1}`;
          daySecond.textContent = day2;
          dayThird.textContent = day3;
        } else if (start1 === "06:00" || start1 === "12:00") {
          day1 = "今日白天";
          day2 = "今晚明晨";
          day3 = "明日白天";
          newHour1 = "day";
          newHour2 = "night";
          newHour3 = "day";
          tonight.textContent = `${day1} ${start1}-${end1}`;
          daySecond.textContent = day2;
          dayThird.textContent = day3;
        } else if (start1 === "18:00") {
          day1 = "今晚明晨";
          day2 = "明日白天";
          day3 = "明日晚上";
          newHour1 = "night";
          newHour2 = "day";
          newHour3 = "night";
          tonight.textContent = `${day1} ${start1}-${end1}`;
          daySecond.textContent = day2;
          dayThird.textContent = day3;
        } else if (start1 === "00:00" && now.getHours() === 1) {
          day1 = "今日凌晨";
          day2 = "今日白天";
          day3 = "今日晚上";
          newHour1 = "day";
          newHour2 = "day";
          newHour3 = "night";
          tonight.textContent = `${day1} ${start1}-${end1}`;
          daySecond.textContent = day2;
          dayThird.textContent = day3;
        }

        let img1 = data[i].Wx.Wx_firt.parameter.parameterValue;
        let img2 = data[i].Wx.Wx_second.parameter.parameterValue;
        let img3 = data[i].Wx.Wx_third.parameter.parameterValue;
        const baseUrl =
          "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/";
        const images = [img1, img2, img3];
        const formattedImages = images.map((img) => {
          if (img < 10) {
            return `0${img}`;
          }
          return img;
        });
        [img1, img2, img3] = formattedImages;
        imgFirst.src = `${baseUrl}/${newHour1}/${formattedImages[0]}.svg`;
        imgSecond.src = `${baseUrl}/${newHour2}/${formattedImages[1]}.svg`;
        imgThird.src = `${baseUrl}/${newHour3}/${formattedImages[2]}.svg`;
      }
    }
    Object.keys(iconId).forEach((key) => {
      const eachImg = document.querySelector(`#${iconId[key]} img`);
      let parameter = data[key - 1].Wx.Wx_firt.parameter.parameterValue;
      if (parameter < 10) {
        parameter = `0${parameter}`;
      }
      eachImg.src = `${baseUrl}/${newHour1}/${parameter}.svg`;
    });
  } catch (error) {
    console.error(error);
  }
}

function getHoursAndMinutes(dateString) {
  const time = dateString.split(" ")[1];
  return time.split(":")[0] + ":" + time.split(":")[1];
}

allForcast.addEventListener("click", () => {
  location.href = "/county";
});
newForcast.addEventListener("click", () => {
  location.href = "/latest";
});
weekForcast.addEventListener("click", () => {
  location.href = "/weather_week";
});
