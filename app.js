let hour=0;
let minute=0;
let second=0;
let millisecond=0;
let timer;

function start(){
    timer = setInterval(() => {
        millisecond++
        if(millisecond>=100){
            second++
            millisecond=0;
        }
        if(second>=60){
            minute++
            second=0;
        }
        if(minute>=60){
            hour++
            minute=0;
        }
        document.getElementById("display").innerHTML=`${hour} : ${minute} : ${second} : ${millisecond}`
    }, 10);
}

function startStop(){
    if (startStop) {
    clearInterval(timer)
    }
    document.getElementById("display").innerHTML=`${hour} : ${minute} : ${second} : ${millisecond}`}


function resetWatch(){
    location.reload()
}