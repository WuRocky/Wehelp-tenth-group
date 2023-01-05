
fetch('/api/weather_week').then(function (response) {
    return response.json();
}).then(function (data) {

    console.log(data);


})




// let td = document.createElement("td");
// td.className = "day6";
// let span = document.createElement("span");
// document.body.appendChild(td);
// console.log(span)