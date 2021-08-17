const degreeMultplier = 6;
const hourElement = document.querySelector("#hr");
const minuteElement = document.querySelector("#mn");
const secondsElement = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hourAngle = day.getHours() * 30;
    let minuteAngle = day.getMinutes() * degreeMultplier;
    let secondsAngle = day.getSeconds() * degreeMultplier;

    hourElement.style.transform = `rotateZ(${(hourAngle)+(minuteAngle/12)}deg)`;
    minuteElement.style.transform = `rotateZ(${(minuteAngle)}deg)`;
    secondsElement.style.transform = `rotateZ(${(secondsAngle)}deg)`;
});

