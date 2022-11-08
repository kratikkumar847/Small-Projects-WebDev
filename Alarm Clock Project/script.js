let hour;
let minute;
let second;
let hourSet;
let minuteSet;
let secondSet;
let dateDiffernce;let temp ;
var audio = new Audio('alarm.mp3');
setInterval(()=>{
     temp = new Date();
     hour = temp.getHours();
     minute = temp.getMinutes();
     second = temp.getSeconds();
     let fullTime = `${hour}:${minute}:${second} `;
    document.getElementById('display').innerHTML = fullTime;
}, 500);

let nowDate;

function ring(){
    audio.play();
}

function stopAlarm(){
    audio.pause();
}

function myFunction(){
     hourSet = document.getElementById('hour').value;
     minuteSet = document.getElementById('minute').value;
    secondSet = document.getElementById('second').value;
    
    let setDate = new Date();
    setDate.setHours(hourSet);
    setDate.setMinutes(minuteSet);
    setDate.setSeconds(secondSet);
    console.log(setDate);
    nowDate = new Date();
    
    dateDiffernce = setDate- nowDate;
    console.log(dateDiffernce);
    if(dateDiffernce >= 0){
        setTimeout(()=>{
           ring();
        }, dateDiffernce);    
    }
}


