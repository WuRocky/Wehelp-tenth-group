const title = document.querySelector(".title");
title.addEventListener("click", ()=>{
    location.href = "/";
});

const newButton = document.querySelector(".new_weather_button");
newButton.addEventListener("click", ()=>{
    location.href = "/latest";
});

const day0 = document.querySelector(".day0");
const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const main = document.querySelector("main");
const right = document.querySelector(".right");
const tabs =document.querySelector(".tabs");
const countyBoxes = document.querySelector(".map_county_boxes");
const nowDate = document.querySelector(".now_date");

getData();
async function getData(){
    try{
        let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-76A83F0A-AD80-483B-A8FA-0FADB18A69F7";
        response = await fetch(url);
        response = await response.json();
        response =  response.records.location;
    
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
        
        nowDate.innerHTML = `${startTime} ~ ${endTime}`;
    
        if(endClock == "06:00"){
            day0.innerHTML = "今晚明晨";
            day1.innerHTML = "明日白天";
            day2.innerHTML = "明日晚上"
        }else{
            day0.innerHTML = "今日白天";
            day1.innerHTML = "今晚明晨";
            day2.innerHTML = "明日白天";
        };

    
        response.forEach((city, index)=>{
            const tab = document.createElement("div");
            tab.setAttribute("class", "tab");
            tab.classList.add(`C${index + 1}`);
            tabs.appendChild(tab);
    
            const tabName = document.createElement("span");
            tabName.setAttribute("class", "tab_name");
            tabName.innerHTML = city.locationName;
            tab.appendChild(tabName);
    
            const tabImg = document.createElement("img");
            tabImg.setAttribute("class", "tab_img");
            let parameterValue = city.weatherElement[0].time[0].parameter.parameterValue;
            if(parameterValue < 10){
                parameterValue = "0" + parameterValue;
            };
            if(endClock == "06:00"){
                tabImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/${parameterValue}.svg`; 
            }else{
                tabImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${parameterValue}.svg`;
            }
            
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
    
            const countyBox = document.createElement("a");
            countyBox.setAttribute("class", "map_county_box");
            countyBox.setAttribute("name", `C${index + 1}`);
            countyBoxes.appendChild(countyBox);
    
            const mapImg = document.createElement("img");
            mapImg.setAttribute("class", "map_img");
            if(endClock == "06:00"){
                mapImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/${parameterValue}.svg`;
            }else{
                mapImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${parameterValue}.svg`;
            }
            countyBox.appendChild(mapImg);
    
            const temperature = document.createElement("div");
            temperature.setAttribute("class", "temperature");
            const lowerTemperature = document.createElement("span");
            lowerTemperature.setAttribute("class", "lower_temperature");
            lowerTemperature.textContent = city.weatherElement[2].time[0].parameter.parameterName;
            temperature.appendChild(lowerTemperature);
            countyBox.appendChild(temperature);
    
            const tilde = document.createElement("span");
            tilde.innerHTML = " ~ ";
            temperature.appendChild(tilde);
    
            const hightTemperature = document.createElement("span");
            hightTemperature.setAttribute("class", "hight_temperature");
            hightTemperature.textContent = city.weatherElement[4].time[0].parameter.parameterName;
            temperature.appendChild(hightTemperature);
    
            const degreeC = document.createElement("span");
            degreeC.innerHTML = "°C";
            temperature.appendChild(degreeC);
    
            const countyName = document.createElement("p");
            countyName.setAttribute("class", "city");
            countyName.textContent = city.locationName;
            countyBox.appendChild(countyName);
        })
    
        const mapCounty = document.querySelectorAll(".map_county_box");
        mapCounty.forEach((county)=>{
            county.addEventListener("mouseover", ()=>{
                document.getElementById(county.name).classList.add("active");
                document.querySelector("." + county.name).classList.add("active_tab");
                county.classList.add("opacity");

            })
    
            county.addEventListener("mouseout", ()=>{
                document.getElementById(county.name).classList.remove("active");
                document.querySelector("." + county.name).classList.remove("active_tab");
                county.classList.remove("opacity");
            })
        });

        const tabCounty = document.querySelectorAll(".tab");
        tabCounty.forEach((county)=>{
            county.addEventListener("mouseover", ()=>{
                document.getElementById(county.classList[1]).classList.add("active");
            })
            county.addEventListener("mouseout", ()=>{
                document.getElementById(county.classList[1]).classList.remove("active");
            })

        });
        return;
    }
    catch(error){
        main.innerHTML = "網站整修 ing ~";
        main.style.height = "66.5vh";
    }
};

day0.addEventListener("click", ()=>{
    day0.classList.add("active_date");
    day1.classList.remove("active_date");
    day2.classList.remove("active_date");
    countyBoxes.innerHTML = "";
    tabs.innerHTML = "";

    getData();
    async function getData(){
        try{
            let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-76A83F0A-AD80-483B-A8FA-0FADB18A69F7";
            response = await fetch(url);
            response = await response.json();
            response =  response.records.location;
        
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
            
            nowDate.innerHTML = `${startTime} ~ ${endTime}`;
        
            if(endClock == "06:00"){
                day0.innerHTML = "今晚明晨";
                day1.innerHTML = "明日白天";
                day2.innerHTML = "明日晚上"
            }else{
                day0.innerHTML = "今日白天";
                day1.innerHTML = "今晚明晨";
                day2.innerHTML = "明日白天";
            };

        
            response.forEach((city, index)=>{
                const tab = document.createElement("div");
                tab.setAttribute("class", "tab");
                tabs.appendChild(tab);
        
                const tabName = document.createElement("span");
                tabName.setAttribute("class", "tab_name");
                tab.classList.add(`C${index + 1}`);
                tabName.innerHTML = city.locationName;
                tab.appendChild(tabName);
        
                const tabImg = document.createElement("img");
                tabImg.setAttribute("class", "tab_img");
                let parameterValue = city.weatherElement[0].time[0].parameter.parameterValue;
                if(parameterValue < 10){
                    parameterValue = "0" + parameterValue;
                };
                if(endClock == "06:00"){
                    tabImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/${parameterValue}.svg`; 
                }else{
                    tabImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${parameterValue}.svg`;
                }
                
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
        
                const countyBox = document.createElement("a");
                countyBox.setAttribute("class", "map_county_box");
                countyBox.setAttribute("name", `C${index + 1}`);
                countyBoxes.appendChild(countyBox);
        
                const mapImg = document.createElement("img");
                mapImg.setAttribute("class", "map_img");
                if(endClock == "06:00"){
                    mapImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/${parameterValue}.svg`;
                }else{
                    mapImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${parameterValue}.svg`;
                }
                countyBox.appendChild(mapImg);
        
                const temperature = document.createElement("div");
                temperature.setAttribute("class", "temperature");
                const lowerTemperature = document.createElement("span");
                lowerTemperature.setAttribute("class", "lower_temperature");
                lowerTemperature.textContent = city.weatherElement[2].time[0].parameter.parameterName;
                temperature.appendChild(lowerTemperature);
                countyBox.appendChild(temperature);
        
                const tilde = document.createElement("span");
                tilde.innerHTML = " ~ ";
                temperature.appendChild(tilde);
        
                const hightTemperature = document.createElement("span");
                hightTemperature.setAttribute("class", "hight_temperature");
                hightTemperature.textContent = city.weatherElement[4].time[0].parameter.parameterName;
                temperature.appendChild(hightTemperature);
        
                const degreeC = document.createElement("span");
                degreeC.innerHTML = "°C";
                temperature.appendChild(degreeC);
        
                const countyName = document.createElement("p");
                countyName.setAttribute("class", "city");
                countyName.textContent = city.locationName;
                countyBox.appendChild(countyName);
            })
        
            const mapCounty = document.querySelectorAll(".map_county_box");
            mapCounty.forEach((county)=>{
                county.addEventListener("mouseover", ()=>{
                    document.getElementById(county.name).classList.add("active");
                    document.querySelector("." + county.name).classList.add("active_tab");
                    county.classList.add("opacity");

                })
        
                county.addEventListener("mouseout", ()=>{
                    document.getElementById(county.name).classList.remove("active");
                    document.querySelector("." + county.name).classList.remove("active_tab");
                    county.classList.remove("opacity");
                })
            });

            const tabCounty = document.querySelectorAll(".tab");
            tabCounty.forEach((county)=>{
                county.addEventListener("mouseover", ()=>{
                    document.getElementById(county.classList[1]).classList.add("active");
                })
                county.addEventListener("mouseout", ()=>{
                    document.getElementById(county.classList[1]).classList.remove("active");
                })

            });
            return;
        }
        catch(error){
            main.innerHTML = "網站整修 ing ~";
            main.style.height = "66.5vh";
        }
    };
})


day1.addEventListener("click", ()=>{
    day1.classList.add("active_date");
    day0.classList.remove("active_date");
    day2.classList.remove("active_date");
    countyBoxes.innerHTML = "";
    tabs.innerHTML = "";

    getData();
    async function getData(){
        try{
            let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-76A83F0A-AD80-483B-A8FA-0FADB18A69F7";
            response = await fetch(url);
            response = await response.json();
            response =  response.records.location;
        
            startTime = response[0].weatherElement[0].time[1].startTime;
            startMonth = startTime.slice(5, 7)
            startDate = startTime.slice(8, 10);
            startClock = startTime.slice(11, 16);
            startTime = `${startMonth} / ${startDate} ${startClock}`;
        
            endTime = response[0].weatherElement[0].time[1].endTime;
            endMonth = endTime.slice(5, 7)
            endDate = endTime.slice(8, 10);
            endClock = endTime.slice(11, 16);
            endTime = `${endMonth} / ${endDate} ${endClock}`;
            
            nowDate.innerHTML = `${startTime} ~ ${endTime}`;
        
            response.forEach((city, index)=>{

                const tab = document.createElement("div");
                tab.setAttribute("class", "tab");
                tab.classList.add(`C${index + 1}`);
                tabs.appendChild(tab);
        
                const tabName = document.createElement("span");
                tabName.setAttribute("class", "tab_name");
                tabName.innerHTML = city.locationName;
                tab.appendChild(tabName);
        
                const tabImg = document.createElement("img");
                tabImg.setAttribute("class", "tab_img");
                let parameterValue = city.weatherElement[0].time[1].parameter.parameterValue;
                if(parameterValue < 10){
                    parameterValue = "0" + parameterValue;
                };
                if(endClock == "06:00"){
                    tabImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/${parameterValue}.svg`; 
                }else{
                    tabImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${parameterValue}.svg`;
                }
                
                tab.appendChild(tabImg);
        
                const rain = document.createElement("span");
                rain.setAttribute("class", "rain");
                tab.appendChild(rain);
                const rainImg = document.createElement("img");
                rainImg.src = "/static/images/rain.svg";
                rain.appendChild(rainImg);
                const rainText = document.createElement("span");
                const pop = city.weatherElement[1].time[1].parameter.parameterName;
                rainText.innerText = pop + "%";
                rain.appendChild(rainText);
        
                const countyBox = document.createElement("a");
                countyBox.setAttribute("class", "map_county_box");
                countyBox.setAttribute("name", `C${index + 1}`);
                countyBoxes.appendChild(countyBox);
        
                const mapImg = document.createElement("img");
                mapImg.setAttribute("class", "map_img");
                if(endClock == "06:00"){
                    mapImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/${parameterValue}.svg`;
                }else{
                    mapImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${parameterValue}.svg`;
                }
                countyBox.appendChild(mapImg);
        
                const temperature = document.createElement("div");
                temperature.setAttribute("class", "temperature");
                const lowerTemperature = document.createElement("span");
                lowerTemperature.setAttribute("class", "lower_temperature");
                lowerTemperature.textContent = city.weatherElement[2].time[1].parameter.parameterName;
                temperature.appendChild(lowerTemperature);
                countyBox.appendChild(temperature);
        
                const tilde = document.createElement("span");
                tilde.innerHTML = " ~ ";
                temperature.appendChild(tilde);
        
                const hightTemperature = document.createElement("span");
                hightTemperature.setAttribute("class", "hight_temperature");
                hightTemperature.textContent = city.weatherElement[4].time[1].parameter.parameterName;
                temperature.appendChild(hightTemperature);
        
                const degreeC = document.createElement("span");
                degreeC.innerHTML = "°C";
                temperature.appendChild(degreeC);
        
                const countyName = document.createElement("p");
                countyName.setAttribute("class", "city");
                countyName.textContent = city.locationName;
                countyBox.appendChild(countyName);
            })
        
            const mapCounty = document.querySelectorAll(".map_county_box");
            mapCounty.forEach((county)=>{
                county.addEventListener("mouseover", ()=>{
                    document.getElementById(county.name).classList.add("active");
                    document.querySelector("." + county.name).classList.add("active_tab");
                    county.classList.add("opacity");

                })
        
                county.addEventListener("mouseout", ()=>{
                    document.getElementById(county.name).classList.remove("active");
                    document.querySelector("." + county.name).classList.remove("active_tab");
                    county.classList.remove("opacity");
                })
            });

            const tabCounty = document.querySelectorAll(".tab");
            tabCounty.forEach((county)=>{
                county.addEventListener("mouseover", ()=>{
                    document.getElementById(county.classList[1]).classList.add("active");
                })
                county.addEventListener("mouseout", ()=>{
                    document.getElementById(county.classList[1]).classList.remove("active");
                })

            });
            return;
        }
        catch(error){
            main.innerHTML = "網站整修 ing ~";
            main.style.height = "66.5vh";
        }
    };
});


day2.addEventListener("click", ()=>{
    day2.classList.add("active_date");
    day0.classList.remove("active_date");
    day1.classList.remove("active_date");
    countyBoxes.innerHTML = "";
    tabs.innerHTML = "";

    getData();
    async function getData(){
        try{
            let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-76A83F0A-AD80-483B-A8FA-0FADB18A69F7";
            response = await fetch(url);
            response = await response.json();
            response =  response.records.location;
        
            startTime = response[0].weatherElement[0].time[2].startTime;
            startMonth = startTime.slice(5, 7)
            startDate = startTime.slice(8, 10);
            startClock = startTime.slice(11, 16);
            startTime = `${startMonth} / ${startDate} ${startClock}`;
        
            endTime = response[0].weatherElement[0].time[2].endTime;
            endMonth = endTime.slice(5, 7)
            endDate = endTime.slice(8, 10);
            endClock = endTime.slice(11, 16);
            endTime = `${endMonth} / ${endDate} ${endClock}`;
            
            nowDate.innerHTML = `${startTime} ~ ${endTime}`;
        
            response.forEach((city, index)=>{

                const tab = document.createElement("div");
                tab.setAttribute("class", "tab");
                tab.classList.add(`C${index + 1}`);
                tabs.appendChild(tab);
        
                const tabName = document.createElement("span");
                tabName.setAttribute("class", "tab_name");
                tabName.innerHTML = city.locationName;
                tab.appendChild(tabName);
        
                const tabImg = document.createElement("img");
                tabImg.setAttribute("class", "tab_img");
                let parameterValue = city.weatherElement[0].time[2].parameter.parameterValue;
                if(parameterValue < 10){
                    parameterValue = "0" + parameterValue;
                };
                if(endClock == "06:00"){
                    tabImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/${parameterValue}.svg`; 
                }else{
                    tabImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${parameterValue}.svg`;
                }
                
                tab.appendChild(tabImg);
        
                const rain = document.createElement("span");
                rain.setAttribute("class", "rain");
                tab.appendChild(rain);
                const rainImg = document.createElement("img");
                rainImg.src = "/static/images/rain.svg";
                rain.appendChild(rainImg);
                const rainText = document.createElement("span");
                const pop = city.weatherElement[1].time[2].parameter.parameterName;
                rainText.innerText = pop + "%";
                rain.appendChild(rainText);

                const countyBox = document.createElement("a");
                countyBox.setAttribute("class", "map_county_box");
                countyBox.setAttribute("name", `C${index + 1}`);
                countyBoxes.appendChild(countyBox);
        
                const mapImg = document.createElement("img");
                mapImg.setAttribute("class", "map_img");
                if(endClock == "06:00"){
                    mapImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/${parameterValue}.svg`;
                }else{
                    mapImg.src = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${parameterValue}.svg`;
                }
                countyBox.appendChild(mapImg);
        
                const temperature = document.createElement("div");
                temperature.setAttribute("class", "temperature");
                const lowerTemperature = document.createElement("span");
                lowerTemperature.setAttribute("class", "lower_temperature");
                lowerTemperature.textContent = city.weatherElement[2].time[2].parameter.parameterName;
                temperature.appendChild(lowerTemperature);
                countyBox.appendChild(temperature);
        
                const tilde = document.createElement("span");
                tilde.innerHTML = " ~ ";
                temperature.appendChild(tilde);
        
                const hightTemperature = document.createElement("span");
                hightTemperature.setAttribute("class", "hight_temperature");
                hightTemperature.textContent = city.weatherElement[4].time[2].parameter.parameterName;
                temperature.appendChild(hightTemperature);
        
                const degreeC = document.createElement("span");
                degreeC.innerHTML = "°C";
                temperature.appendChild(degreeC);
        
                const countyName = document.createElement("p");
                countyName.setAttribute("class", "city");
                countyName.textContent = city.locationName;
                countyBox.appendChild(countyName);
            })
        
            const mapCounty = document.querySelectorAll(".map_county_box");
            mapCounty.forEach((county)=>{
                county.addEventListener("mouseover", ()=>{
                    document.getElementById(county.name).classList.add("active");
                    document.querySelector("." + county.name).classList.add("active_tab");
                    county.classList.add("opacity");

                })
        
                county.addEventListener("mouseout", ()=>{
                    document.getElementById(county.name).classList.remove("active");
                    document.querySelector("." + county.name).classList.remove("active_tab");
                    county.classList.remove("opacity");
                })
            });

            const tabCounty = document.querySelectorAll(".tab");
            tabCounty.forEach((county)=>{
                county.addEventListener("mouseover", ()=>{
                    document.getElementById(county.classList[1]).classList.add("active");
                })
                county.addEventListener("mouseout", ()=>{
                    document.getElementById(county.classList[1]).classList.remove("active");
                })

            });
            return;
        }
        catch(error){
            main.innerHTML = "網站整修 ing ~";
            main.style.height = "66.5vh";
        }
    };
});