const pin = document.querySelector("#position");
// const svg = document.querySelector(".svg");

// console.log(pin);
// const newTaipei = document.querySelector("#C65");
// const keelong = document.querySelector("#C10017");
// const taipei = document.querySelector("#C63");
// const taoYuan = document.querySelector("#C68");
// const hsinChu = document.querySelector("#C10004");
// const hsinChuShi = document.querySelector("#C10018");
// const miaoLi = document.querySelector("#C10005");
// const taiChungShi = document.querySelector("#C66");
// const nanTuo = document.querySelector("#C10008");
// const changHua = document.querySelector("#C10007");
// const yunLin = document.querySelector("#C10009");
// const chiaYi = document.querySelector("#C10010");
// const chiaYiShi = document.querySelector("#C10020");
// const taiNan = document.querySelector("#C67");
// const kaoXung = document.querySelector("#C64");
// const pingTong = document.querySelector("#C10013");
// const taiTong = document.querySelector("#C10014");
// const huaLian = document.querySelector("#C10015");
// const yiLan = document.querySelector("#C10002");
// const pengHu = document.querySelector("#C10016");
// const kinMen = document.querySelector("#C09020");
// const liangChiang = document.querySelector("#C09007");
// const pin = document.querySelector('#position');
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

Object.keys(gPosition).forEach((key) => {
  const element = document.querySelector(`#${key}`);
  const value = gPosition[key];
  element.addEventListener("click", (e) => {
    pin.style.transform = `translate(${value})`;
  });
});

async function getData() {
  try {
    const response = await fetch("/api/weather");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
