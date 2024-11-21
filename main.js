const minEl = document.querySelector(".minute");
const hourEl = document.querySelector(".hour");
const secondEl = document.querySelector(".second");

setInterval(() => {
    const date = new Date;
    const secDeg = date.getSeconds() /60 * 360 - 90;
    const minDeg = date.getMinutes() /60 * 360 - 90;
    const hourDeg = date.getHours() /12 * 360 - 90;
    secondEl.style.transform = `rotate(${secDeg}deg)`;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
},1000)

