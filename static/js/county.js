const mapCounty = document.querySelectorAll(".map_county_box");

mapCounty.forEach((county)=>{
    county.addEventListener("mouseover", ()=>{
        document.getElementById(county.name).classList.add("active");
        county.classList.add("opacity");
    })

    county.addEventListener("mouseout", ()=>{
        document.getElementById(county.name).classList.remove("active");
        county.classList.remove("opacity");
    })
});

// fetch data
let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-76A83F0A-AD80-483B-A8FA-0FADB18A69F7";
fetch(url).then((response)=>{
    return response.json();
})
.then((response)=>{
    // console.log(response.records.location)
    const main = document.querySelector("main");
    const left = document.querySelector(".left");
    response = response.records.location;
    startTime = response[0].weatherElement[0].time[0].startTime;
    startMonth = startTime.slice(5, 7)
    startDate = startTime.slice(8, 10);
    startClock = startTime.slice(11, 16);
    startTime = `${startMonth} / ${startDate} ${startClock}`;

    endTime = response[0].weatherElement[0].time[0].endTime;
    endMonth = endTime.slice(5, 7)
    endDate = endTime.slice(8, 10);
    endClock = endTime.slice(11, 16);
    endTime = `${endMonth} / ${endDate} ${endClock}`;
    
    const nowDate = document.createElement("div");
    nowDate.setAttribute("class", "now_date");
    nowDate.innerHTML = `${startTime} ~ ${endTime}`;
    main.insertBefore(nowDate, left);


    response.forEach((city)=>{
        console.log(city)
  
        const right = document.querySelector(".right");
        const tab = document.createElement("div");
        tab.setAttribute("class", "tab");
        right.appendChild(tab);

        const tabName = document.createElement("span");
        tabName.setAttribute("class", "tab_name");
        tabName.innerHTML = city.locationName;
        tab.appendChild(tabName);

        const tabImg = document.createElement("img");
        tabImg.setAttribute("class", "tab_img");
        let = parameterValue = city.weatherElement[0].time[0].parameter.parameterValue;
        if(parameterValue < 10){
            parameterValue = "0" + parameterValue;
        };
        tabImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${parameterValue}.svg`;
        tab.appendChild(tabImg);

        const rain = document.createElement("span");
        rain.setAttribute("class", "rain");
        tab.appendChild(rain);
        const rainImg = document.createElement("img");
        rainImg.src = "/static/images/rain.svg";
        rain.appendChild(rainImg);
        const rainText = document.createElement("span");
        const pop = city.weatherElement[1].time[0].parameter.parameterName;
        rainText.innerText = pop + "%";
        rain.appendChild(rainText);
    })
});