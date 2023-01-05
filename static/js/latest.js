window.onload = async function () {
  await getWeatherNow();
  await test();
  await getDate();
};
const nowHour = new Date().getHours();
const newNowHour = nowHour > 18 ? "night" : "day";

async function getWeatherNow() {
  const response = await fetch("/api/weather_now");
  const result = await response.json();
  weatherStatus(result);
  weatherHumidity(result);
  weatherRainfall(result);
}

function weatherStatus(result) {
  for (let i = 0; i < result.length; i++) {
    let imgValue =
      (result[i].Wx.parameterValue < 10 ? 0 : "") + result[i].Wx.parameterValue;
    let temp = result[i].TEMP == "-99" ? " - " : result[i].TEMP;
    // 天氣狀況
    let imgTag = document.createElement("img");
    imgTag.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/${newNowHour}/${imgValue}.svg`;
    imgTag.className = "image-style";
    let tempTag = document.createElement("div");
    tempTag.className = "temp";
    tempTag.textContent = `${temp}°C`;
    let weatherTag = document.createElement("div");
    weatherTag.className = "weather";
    weatherTag.appendChild(imgTag);
    weatherTag.appendChild(tempTag);
    let cityNameTag = document.createElement("div");
    cityNameTag.className = "city-name";
    cityNameTag.textContent = result[i].locationName;
    let detailTag = document.createElement("div");
    detailTag.className = "detail";
    detailTag.appendChild(cityNameTag);
    detailTag.appendChild(weatherTag);
    let listTag = document.querySelector(".list1");
    listTag.appendChild(detailTag);

    let imgTag1 = document.createElement("img");
    imgTag1.className = "map-icon";
    imgTag1.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/${newNowHour}/${imgValue}.svg`;
    let textTag = document.createElement("div");
    textTag.className = `none text text-${i}`;
    let divTag2 = document.createElement("div");
    divTag2.textContent = result[i].Wx.parameterName;
    textTag.appendChild(divTag2);
    let mapBlockTag = document.createElement("div");
    mapBlockTag.className = `map-block-1 icon-${i} position`;
    mapBlockTag.appendChild(textTag);
    mapBlockTag.appendChild(imgTag1);

    let mapTag = document.querySelector(".map");
    mapTag.appendChild(mapBlockTag);
  }
}

function weatherHumidity(result) {
  for (let i = 0; i < result.length; i++) {
    // 濕度
    let newHUMD = Number(result[i].HUMD) * 100;
    let newValue = Number(result[i].HUMD.substring(0, 3)) * 10;
    let imgSrc = `https://www.cwb.gov.tw/V8/assets/img/icons/humidity/humidity${newValue}.svg`;
    let imgTagClassName = "image-style";
    if (newValue < 0) {
      imgSrc = "/static/images/fix_icon.png";
      imgTagClassName = "image-style-fix";
      newHUMD = " - ";
    }
    let imgTag = document.createElement("img");
    imgTag.src = imgSrc;
    imgTag.className = imgTagClassName;
    let tempTag = document.createElement("div");
    tempTag.className = "temp";
    tempTag.textContent = `${newHUMD}%`;
    let weatherTag = document.createElement("div");
    weatherTag.className = "weather";
    weatherTag.appendChild(imgTag);
    weatherTag.appendChild(tempTag);
    let cityNameTag = document.createElement("div");
    cityNameTag.className = "city-name-2";
    cityNameTag.textContent = result[i].locationName;
    let detailTag = document.createElement("div");
    detailTag.className = "detail-2";
    detailTag.appendChild(cityNameTag);
    detailTag.appendChild(weatherTag);
    let listTag = document.querySelector(".list2");
    listTag.appendChild(detailTag);

    let imgTag1 = document.createElement("img");
    imgTag1.className = "map-icon";
    imgTag1.src = imgSrc;
    let mapBlockTag = document.createElement("div");
    mapBlockTag.className = `map-block-2 icon-${i} none`;
    mapBlockTag.appendChild(imgTag1);
    let mapTag = document.querySelector(".map");
    mapTag.appendChild(mapBlockTag);
  }
}

function weatherRainfall(result) {
  for (let i = 0; i < result.length; i++) {
    // 24hr降雨量
    let H_24R = result[i].H_24R < 0 ? " - " : result[i].H_24R;
    let value = Number(result[i].H_24R);
    let newValue;
    if (value < 5) {
      newValue = "01";
    } else if (5 < value && value < 10) {
      newValue = "02";
    } else if (10 < value && value < 20) {
      newValue = "03";
    } else {
      newValue = "04";
    }
    let imgTag = document.createElement("img");
    imgTag.src = `https://www.cwb.gov.tw/V8/assets/img/icons/rain/ico-rain-${newValue}.svg`;
    imgTag.className = "image-style";
    let tempTag = document.createElement("div");
    tempTag.className = "temp";
    tempTag.textContent = `${H_24R}mm`;
    let weatherTag = document.createElement("div");
    weatherTag.className = "weather";
    weatherTag.appendChild(imgTag);
    weatherTag.appendChild(tempTag);
    let cityNameTag = document.createElement("div");
    cityNameTag.className = "city-name-3";
    cityNameTag.textContent = result[i].locationName;
    let detailTag = document.createElement("div");
    detailTag.className = "detail-3";
    detailTag.appendChild(cityNameTag);
    detailTag.appendChild(weatherTag);
    let listTag = document.querySelector(".list3");
    listTag.appendChild(detailTag);

    let imgTag1 = document.createElement("img");
    imgTag1.className = "map-icon";
    imgTag1.src = `https://www.cwb.gov.tw/V8/assets/img/icons/rain/ico-rain-${newValue}.svg`;
    let mapBlockTag = document.createElement("div");
    mapBlockTag.className = `map-block-3 icon-${i} none`;
    mapBlockTag.appendChild(imgTag1);
    let mapTag = document.querySelector(".map");
    mapTag.appendChild(mapBlockTag);
  }
}

async function getDate() {
  const dateTag = document.querySelector(".date");
  const today = new Date();
  const minute =
    String(today.getMinutes() < 10 ? 0 : "") + String(today.getMinutes());
  let date = `${String(today.getFullYear())}/${String(
    today.getMonth() + 1
  )}/${String(today.getDate())}　${String(today.getHours())}:${String(minute)}`;
  dateTag.textContent = `資料時間：${date}`;
}

async function test() {
  const list = document.querySelectorAll(".list");
  const changeButton = document.querySelectorAll(".change-btn");
  const detail = document.querySelectorAll(".detail");
  const detail2 = document.querySelectorAll(".detail-2");
  const detail3 = document.querySelectorAll(".detail-3");
  const cityName = document.querySelectorAll(".city-name");
  const cityName2 = document.querySelectorAll(".city-name-2");
  const cityName3 = document.querySelectorAll(".city-name-3");
  const mapBlock1 = document.querySelectorAll(".map-block-1");
  const mapBlock2 = document.querySelectorAll(".map-block-2");
  const mapBlock3 = document.querySelectorAll(".map-block-3");
  const text = document.querySelectorAll(".text");

  changeButton.forEach((e, index) => {
    e.addEventListener("click", function () {
      let test = document.querySelector(".test");
      let listPosition = document.querySelector(".list-position");
      let position = document.querySelectorAll(".position");
      position.forEach((i) => {
        i.classList.add("none");
        i.classList.add("position");
      });
      const mapBlock = document.querySelectorAll(`.map-block-${index + 1}`);
      mapBlock.forEach((i) => {
        i.classList.remove("none");
        i.classList.add("position");
      });
      listPosition.classList.add("none");
      listPosition.classList.remove("list-position");
      test.classList.remove("change-site");
      test.classList.remove("test");
      e.classList.add("change-site");
      e.classList.add("test");
      list[index].classList.remove("none");
      list[index].classList.add("list-position");
    });
  });

  mapBlock1.forEach((e, index) => {
    e.onmouseover = function () {
      mapOver(index);
      text[index].classList.remove("none");
      detail[index].style.backgroundColor = "#ffeaa7";
      cityName[index].style.backgroundColor = "#b2e5f1";
    };
    e.onmouseout = function () {
      mapOut(index);
      text[index].classList.add("none");
      detail[index].style.backgroundColor = "#ffffff";
      cityName[index].style.backgroundColor = "#dfe4f2";
    };
  });

  detail.forEach((e, index) => {
    e.onmouseover = function () {
      mapOver(index);
      e.style.backgroundColor = "#ffeaa7";
      cityName[index].style.backgroundColor = "#b2e5f1";
      mapBlock1[index].style.backgroundColor = "rgba(246, 229, 141, 0.8)";
    };
    e.onmouseout = function () {
      mapOut(index);
      e.style.backgroundColor = "#ffffff";
      cityName[index].style.backgroundColor = "#dfe4f2";
      mapBlock1[index].style.backgroundColor = "rgba(178, 229, 241, 0.8)";
    };
  });

  mapBlock2.forEach((e, index) => {
    e.onmouseover = function () {
      mapOver(index);
      detail2[index].style.backgroundColor = "#ffeaa7";
      cityName2[index].style.backgroundColor = "#b2e5f1";
    };
    e.onmouseout = function () {
      mapOut(index);
      detail2[index].style.backgroundColor = "#ffffff";
      cityName2[index].style.backgroundColor = "#dfe4f2";
    };
  });

  detail2.forEach((e, index) => {
    e.onmouseover = function () {
      mapOver(index);
      e.style.backgroundColor = "#ffeaa7";
      cityName2[index].style.backgroundColor = "#b2e5f1";
      mapBlock2[index].style.backgroundColor = "rgba(246, 229, 141, 0.8)";
    };
    e.onmouseout = function () {
      mapOut(index);
      e.style.backgroundColor = "#ffffff";
      cityName2[index].style.backgroundColor = "#dfe4f2";
      mapBlock2[index].style.backgroundColor = "rgba(178, 229, 241, 0.8)";
    };
  });

  mapBlock3.forEach((e, index) => {
    e.onmouseover = function () {
      mapOver(index);
      detail3[index].style.backgroundColor = "#ffeaa7";
      cityName3[index].style.backgroundColor = "#b2e5f1";
    };
    e.onmouseout = function () {
      mapOut(index);
      detail3[index].style.backgroundColor = "#ffffff";
      cityName3[index].style.backgroundColor = "#dfe4f2";
    };
  });

  detail3.forEach((e, index) => {
    e.onmouseover = function () {
      mapOver(index);
      e.style.backgroundColor = "#ffeaa7";
      cityName3[index].style.backgroundColor = "#b2e5f1";
      mapBlock3[index].style.backgroundColor = "rgba(246, 229, 141, 0.8)";
    };
    e.onmouseout = function () {
      mapOut(index);
      e.style.backgroundColor = "#ffffff";
      cityName3[index].style.backgroundColor = "#dfe4f2";
      mapBlock2[index].style.backgroundColor = "rgba(178, 229, 241, 0.8)";
    };
  });
}
function mapOver(index) {
  let mapLabel = document.querySelector(`.label-${index + 1}`);
  mapLabel.classList.add("path-hover");
}
function mapOut(index) {
  let mapLabel = document.querySelector(`.label-${index + 1}`);
  mapLabel.classList.remove("path-hover");
}
