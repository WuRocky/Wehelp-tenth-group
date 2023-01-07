const forecast = document.querySelector(".forecast");
const weekWeather = document.querySelector(".weekWeather");
const latest = document.querySelector(".latest");
const Wtitle = document.querySelector(".Wtitle h2");
const Wimg = document.querySelector(".Wtitle img");

const tableTop = document.querySelector(".table_top");

const morningKeelung = document.querySelector(".morning_keelung");
const nightKeelung = document.querySelector(".night_keelung");

const morningTaipei = document.querySelector(".morning_taipei");
const nightTaipei = document.querySelector(".night_taipei");

const morningSinpei = document.querySelector(".morning_sinpei");
const nightSinpei = document.querySelector(".night_sinpei");

const morningTaoyuan = document.querySelector(".morning_taoyuan");
const nightTaoyuan = document.querySelector(".night_taoyuan");

const morningXinzhu = document.querySelector(".morning_xinzhu");
const nightXinzhu = document.querySelector(".night_xinzhu");

const morningXinzhuCounty = document.querySelector(".morning_xinzhuCounty");
const nightXinzhuCounty = document.querySelector(".night_xinzhuCounty");

const morningMiaoli = document.querySelector(".morning_miaoli");
const nightMiaoli = document.querySelector(".night_miaoli");

const morningTaichung = document.querySelector(".morning_Taichung");
const nightTaichung = document.querySelector(".night_Taichung");

const morningChanghua = document.querySelector(".morning_Changhua");
const nightChanghua = document.querySelector(".night_Changhua");

const morningNantou = document.querySelector(".morning_Nantou");
const nightNantou = document.querySelector(".night_Nantou");

const morningYunlin = document.querySelector(".morning_Yunlin");
const nightYunlin = document.querySelector(".night_Yunlin");

const morningChiayi = document.querySelector(".morning_Chiayi");
const nightChiayi = document.querySelector(".night_Chiayi");

const morningChiayiCounty = document.querySelector(".morning_ChiayiCounty");
const nightChiayiCounty = document.querySelector(".night_ChiayiCounty");

const morningTainan = document.querySelector(".morning_Tainan");
const nightTainan = document.querySelector(".night_Tainan");

const morningKaohsiung = document.querySelector(".morning_Kaohsiung");
const nightKaohsiung = document.querySelector(".night_Kaohsiung");

const morningPingtung = document.querySelector(".morning_Pingtung");
const nightPingtung = document.querySelector(".night_Pingtung");

const morningYilan = document.querySelector(".morning_Yilan");
const nightYilan = document.querySelector(".night_Yilan");

const morningHualien = document.querySelector(".morning_Hualien");
const nightHualien = document.querySelector(".night_Hualien");

const morningTaitung = document.querySelector(".morning_Taitung");
const nightTaitung = document.querySelector(".night_Taitung");

const morningPenghu = document.querySelector(".morning_Penghu");
const nightPenghu = document.querySelector(".night_Penghu");

const morningKinmen = document.querySelector(".morning_Kinmen");
const nightKinmen = document.querySelector(".night_Kinmen");

const morningLienchiang = document.querySelector(".morning_Lienchiang");
const nightLienchiang = document.querySelector(".night_Lienchiang");

Wtitle.addEventListener("click", () => {
    location.href = "/";
});
Wimg.addEventListener("click", () => {
    location.href = "/";
});
forecast.addEventListener("click", () => {
    location.href = "/county";
});
latest.addEventListener("click", () => {
    location.href = "/latest";
});

weekWeather.addEventListener("click", () => {
    location.href = "/weather_week";
});
function test() {
    let ppp = document.querySelectorAll(".ppp");
    let weekend = document.querySelectorAll(".weekend");
    ppp.forEach((e, index) => {
        if (e.textContent == "星期六" || e.textContent == "星期日") {
            // console.log(e.textContent)
            // let holiday = document.querySelectorAll(".th")
            weekend[index].style.backgroundColor = "#D14646";
            weekend[index].style.color = "#FFFFFF";
        }
    })
    // console.log(ppp.value);
    // for (i = 0; i <= 6; i++) {
    //     if (day_list[i] == "日" || day_list[i] == "六") {
    //         // console.log(day_list[i]);
    //         const thTag = document.querySelector(".table_top th");
    //         console.log(thTag);
    //         thTag.style.backgroundColor = "#444444"
    //         // th.setAttribute("class", "holiday");
    //     }
    // }
}

fetch('/api/weather_week').then(function (response) {
    return response.json();
}).then(function (weatherData) {

    // let day_list = ['日', '一', '二', '三', '四', '五', '六'];
    // for (let i = 0; i < 7; i++) {
    //     let date = new Date();
    //     date.setDate(date.getDate() + i);
    //     let day = date.getDay();
    //     let days = "星期" + day_list[day];
    //     console.log(days);
    // }

    for (let i = 1; i < weatherData.length; i++) {
        let data = weatherData[i];

        if (data.locationName == "基隆市") {
            for (let i = 1; i <= 13; i += 2) {

                let th = document.createElement("th");
                th.className = "weekend";
                console.log(th);

                let div = document.createElement("div");
                div.setAttribute("class", "heading");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");

                let dateString = data[i].endTime;
                let parts = dateString.split(" ");
                let date = parts[0];

                let dateParts = date.split("-");
                let shortDate = dateParts[1] + "/" + dateParts[2];


                let day_list = ['日', '一', '二', '三', '四', '五', '六'];

                // for (i = 0; i <= 6; i++) {
                //     if (day_list[i] == "日" || day_list[i] == "六") {
                //         console.log(day_list[i]);
                //         // th.setAttribute("class", "holiday");
                //     }
                // }

                p1.textContent = shortDate;
                p2.textContent = "星期" + day_list[new Date(date).getDay()];
                p2.className = "ppp";

                // console.log(p2);


                div.appendChild(p1);
                div.appendChild(p2);
                th.appendChild(div);

                tableTop.appendChild(th);

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningKeelung.appendChild(td);

            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightKeelung.appendChild(td);
            }
        }

        if (data.locationName == "臺北市") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningTaipei.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightTaipei.appendChild(td);
            }
        }

        if (data.locationName == "新北市") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningSinpei.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightSinpei.appendChild(td);
            }
        }

        if (data.locationName == "桃園市") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningTaoyuan.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightTaoyuan.appendChild(td);
            }
        }

        if (data.locationName == "新竹市") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningXinzhu.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightXinzhu.appendChild(td);
            }
        }

        // if (data.locationName == "新竹縣") {
        //     for (let i = 1; i <= 13; i += 2) {

        //         let td = document.createElement("td");
        //         let span = document.createElement("span");
        //         span.className = "signal";
        //         let img = document.createElement("img");
        //         let p = document.createElement("p");
        //         img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
        //         img.title = data[i].Wx_description;
        //         p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

        //         span.appendChild(img);
        //         span.appendChild(p);
        //         td.appendChild(span);
        //         morningXinzhuCounty.appendChild(td);
        //     }

        //     for (let i = 2; i <= 14; i += 2) {

        //         let td = document.createElement("td");
        //         let span = document.createElement("span");
        //         span.className = "signal";
        //         let img = document.createElement("img");
        //         let p = document.createElement("p");
        //         img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
        //         img.title = data[i].Wx_description;
        //         p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

        //         span.appendChild(img);
        //         span.appendChild(p);
        //         td.appendChild(span);
        //         nightXinzhuCounty.appendChild(td);
        //     }
        // }

        if (data.locationName == "苗栗縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningMiaoli.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightMiaoli.appendChild(td);
            }
        }

        if (data.locationName == "臺中市") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningTaichung.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightTaichung.appendChild(td);
            }
        }

        if (data.locationName == "彰化縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningChanghua.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightChanghua.appendChild(td);
            }
        }

        if (data.locationName == "南投縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningNantou.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightNantou.appendChild(td);
            }
        }

        if (data.locationName == "雲林縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningYunlin.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightYunlin.appendChild(td);
            }
        }

        if (data.locationName == "嘉義市") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningChiayi.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightChiayi.appendChild(td);
            }
        }

        // -----------
        if (data.locationName == "嘉義縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningChiayiCounty.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightChiayiCounty.appendChild(td);
            }
        }
        if (data.locationName == "臺南市") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningTainan.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightTainan.appendChild(td);
            }
        }
        if (data.locationName == "高雄市") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningKaohsiung.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightKaohsiung.appendChild(td);
            }
        }
        if (data.locationName == "屏東縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningPingtung.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightPingtung.appendChild(td);
            }
        }
        if (data.locationName == "宜蘭縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningYilan.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightYilan.appendChild(td);
            }
        }
        if (data.locationName == "花蓮縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningHualien.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightHualien.appendChild(td);
            }
        }
        if (data.locationName == "臺東縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningTaitung.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightTaitung.appendChild(td);
            }
        }
        if (data.locationName == "澎湖縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningPenghu.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightPenghu.appendChild(td);
            }
        }
        if (data.locationName == "金門縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningKinmen.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightKinmen.appendChild(td);
            }
        }
        if (data.locationName == "連江縣") {
            for (let i = 1; i <= 13; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                morningLienchiang.appendChild(td);
            }

            for (let i = 2; i <= 14; i += 2) {

                let td = document.createElement("td");
                let span = document.createElement("span");
                span.className = "signal";
                let img = document.createElement("img");
                let p = document.createElement("p");
                img.src = "https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/" + data[i].Wx_value + ".svg";
                img.title = data[i].Wx_description;
                p.textContent = data[i].MinT + "-" + data[i].MaxT + "°C";

                span.appendChild(img);
                span.appendChild(p);
                td.appendChild(span);
                nightLienchiang.appendChild(td);
            }
        }
    }
    test();
})






