fetch('/api/weather_week').then(function (response) {
    return response.json();
}).then(function (weatherData) {
    // console.log(weatherData.length);

    for (let i = 1; i < weatherData.length; i++) {
        let data = weatherData[i];
        if (data.locationName == "基隆市") {
            console.log(data[1]);
            for (let i = 1; i < data.length; i++) {


                // console.log(data[i]);


                // for (let i = 1; i < 8; i++) {
                //     let td = document.createElement("td");
                //     td.className = "day" + i;
                //     let span = document.createElement("span");
                //     span.className = "signal";
                //     let img = document.createElement("img");
                //     img.src = "/V8/assets/img/weather_icons/weathers/svg_icon/day/14.svg";
                //     img.title = "陰有雨";
                //     let p = document.createElement("p");
                //     p.textContent = "16°-17°";

                //     span.appendChild(img);
                //     span.appendChild(p);
                //     td.appendChild(span);
                // }

            }
        }
    }
})






