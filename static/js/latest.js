createElement();
console.log("OK");
const changeButton = document.querySelectorAll(".change-btn");
const detail = document.querySelectorAll(".detail");
const cityName = document.querySelectorAll(".city-name");
const mapBlock = document.querySelectorAll(".map-block");

function createElement() {
  for (let i = 0; i <= 19; i++) {
    let imgTag = document.createElement("img");
    imgTag.src =
      "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/31.svg";
    imgTag.className = "image-style";
    let tempTag = document.createElement("div");
    tempTag.className = "temp";
    tempTag.textContent = "17°C";
    let weatherTag = document.createElement("div");
    weatherTag.className = "weather";
    weatherTag.appendChild(imgTag);
    weatherTag.appendChild(tempTag);
    let cityNameTag = document.createElement("div");
    cityNameTag.className = "city-name";
    cityNameTag.textContent = "基隆市";
    let detailTag = document.createElement("div");
    detailTag.className = "detail";
    detailTag.appendChild(cityNameTag);
    detailTag.appendChild(weatherTag);
    let listTag = document.querySelector(".list");
    listTag.appendChild(detailTag);
  }
}

changeButton.forEach((e) => {
  e.addEventListener("click", function () {
    let test = document.querySelector(".test");
    test.classList.remove("change-site");
    test.classList.remove("test");
    e.classList.add("change-site");
    e.classList.add("test");
  });
});

detail.forEach((e, index) => {
  e.onmouseover = function () {
    e.style.backgroundColor = "#f6e58d";
    mapBlock[index].style.backgroundColor = "#f6e58d";
    cityName[index].style.backgroundColor = "#b2e5f1";
  };
  e.onmouseout = function () {
    e.style.backgroundColor = "#ffffff";
    mapBlock[index].style.backgroundColor = "#b2e5f1";
    cityName[index].style.backgroundColor = "#dfe4f2";
  };
});
