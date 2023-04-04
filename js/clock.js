const clockElement = document.querySelector('#clock');
const apmElement = document.querySelector('#apm');
const today = document.querySelector('#today');

function getClock() {
    const clock = new Date();
    const hours24 = clock.getHours(); //24시간제 시간 저장
    let hours = clock.getHours() % 12;
    if (hours === 0) {
        hours = 12;
    }
    
    if (hours < 10){
        hours = ' ' + hours;
    }

    let minutes = clock.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    
    let apm;
    if ( clock.getHours() >= 12) {
        apm = 'PM';
    } else {
        apm = 'AM';
    }

    return { hours, minutes, apm, hours24 }; //24시간제 시간 반환
}


function update() {
    const { hours, minutes, apm } = getClock();
    clockElement.innerHTML = `${hours}:${minutes}`;
    apmElement.innerText = apm;
    requestAnimationFrame(update);
};

update();

const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = monthArr[date.getMonth()];
const day = dayArr[date.getDay()];
today.innerText = `${month} ${date.getDate()} ${day}`;

