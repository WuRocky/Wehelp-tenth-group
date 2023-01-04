let ele;
let day1;
let day2;
let day3;
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
  C10017: "310px,30px",
  C65: "280px,65px",
  C63: "288px,30px",
  C68: "240px,55px",
  C10004: "235px,95px",
  C10018: "210px,80px",
  C10005: "210px,130px",
  C66: "180px,170px",
  C10008: "220px,200px",
  C10007: "150px,210px",
  C10009: "130px,235px",
  C10010: "170px,265px",
  C10020: "142px,265px",
  C67: "130px,320px",
  C64: "130px,380px",
  C10013: "170px,420px",
  C10014: "225px,350px",
  C10015: "275px,220px",
  C10002: "300px,115px",
  C09007: "20px,80px",
  C09020: "20px,150px",
  C10016: "15px,250px",
};

window.addEventListener("load", () => {
  getData("臺北市");
});

Object.keys(gPosition).forEach((key) => {
  const element = document.querySelector(`#${key}`);
  const value = gPosition[key];
  element.addEventListener("click", () => {
    pin.style.transform = `translate(${value})`;
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
    for (let i = 0; i < data.length; i++) {
      if (data[i]["locationName"] === place) {
        city.textContent = data[i]["locationName"];
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
        const hour = new Date().getHours();
        const newHour = hour > 18 ? "night" : "day";
        imgFirst.src = `${baseUrl}/${newHour}/${formattedImages[0]}.svg`;
        imgSecond.src = `${baseUrl}/${newHour}/${formattedImages[1]}.svg`;
        imgThird.src = `${baseUrl}/${newHour}/${formattedImages[2]}.svg`;

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

        if (start1 === "00:00") {
          day1 = "今日凌晨";
          day2 = "今日白天";
          day3 = "今日晚上";
          tonight.textContent = `${day1} ${start1}-${end1}`;
          daySecond.textContent = day2;
          dayThird.textContent = day3;
        } else if (start1 === "06:00" || start1 === "12:00") {
          day1 = "今日白天";
          day2 = "今晚明晨";
          day3 = "明日白天";
          tonight.textContent = `${day1} ${start1}-${end1}`;
          daySecond.textContent = day2;
          dayThird.textContent = day3;
        } else if (start1 === "18:00") {
          day1 = "今晚明晨";
          day2 = "明日白天";
          day3 = "明日晚上";
          tonight.textContent = `${day1} ${start1}-${end1}`;
          daySecond.textContent = day2;
          dayThird.textContent = day3;
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function getHoursAndMinutes(dateString) {
  const time = dateString.split(" ")[1];
  return time.split(":")[0] + ":" + time.split(":")[1];
}

// allForcast.addEventListener("click", () => {});
newForcast.addEventListener("click", () => {
  location.href = "/latest";
});
// weekForcast.addEventListener("click", () => {});
