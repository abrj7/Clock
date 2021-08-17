let hourElement = document.querySelector(".clock .hr")
let minutesElement = document.querySelector(".clock .min")
let secondsElement = document.querySelector(".clock .sec")
let periodElement = document.querySelector(".clock .period")


function getRealTime() {

    const date = new Date();


    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = "AM";

    if(hr >= 12){
        period = "PM";
        hr -= 12;
    }
    // } if(hr > 12){
    //     hr -=12
    // }

    hr = hr < 10 ? "0" + hr: hr;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec: sec;


    hourElement.innerHTML = hr;
    minutesElement.innerHTML = min;
    secondsElement.innerHTML = sec;
    periodElement.innerHTML = period;

}


getRealTime();
setInterval(getRealTime, 1000);


let dateElement = document.querySelector(".date .day")
let monthElement = document.querySelector(".date .month")
let yearElement = document.querySelector(".date .year")

function getRealDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date();


    let dateVal = date.getDate();
    let month = monthNames[date.getMonth()]
    let year = date.getFullYear();

    // date = date < 10 ? "0" + date: date;
    // month = month < 10 ? "0" + month: month;

    dateElement.innerHTML = dateVal;
    monthElement.innerHTML = month;
    yearElement.innerHTML = year;
}


getRealDate();
setInterval(getRealDate, 1000);