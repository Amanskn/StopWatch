// These are the two buttons i.e start and reset--------------
const startButton=document.getElementById("start");
const resetButton=document.getElementById("reset");

//------------------------ These are the three spans to manipulate the content ------------------------
const milliSecond=document.getElementById("mil-second");
const second=document.getElementById("second");
const minute=document.getElementById("minute");

//-------------------------------- This is the code related to start button------------------
// -----------------These are the variables to set the content of the above three spans as per the requirement-------------
let milli=0;
let sec=0;
let min=0;
// -----------------------This is  the function which is responsible for 
// ----------------------the time being shown when start button is clicked--------------------
const timer=function(){
    milli++;
    if(milli<=9){
        milliSecond.innerText="0"+milli;
    }
    else{
        if(milli<=99)
            milliSecond.innerText=milli;
        else
        {
            milli=0;
            sec++;
            if (sec<=9)
                second.innerText="0"+sec;
            else
            {
                if(sec<=59)
                    second.innerText=sec;
                else
                {
                    sec=0;
                    min++;
                    if(min<=9)
                        minute.innerText="0"+min;
                    else
                        minute.innerText=min;
                    sec.innerText="00";
                }
            }
            milli.innerText="00";
        }
    }
}

// ----------This is the variable which will be used to stop the setInterval function-----------
var stop;
//------------------------ this is for the toggle effect on the start button---------
let started=false;

//-----------------------This is the parent function for the toggle
// --------------------effect on the start button and it will invoke
// -------------------the above declared timer function----------
const time=function(){
    
    if(started)
    {
        startButton.style.transform="scale(1)";
        startButton.innerText="Start";
        clearInterval(stop);
        started=false; 
    }
    else
    {
        startButton.style.transform="scale(1.3)";
        startButton.innerText="Stop";
        stop=setInterval(timer,10);
        started=true;
    }
    
}
startButton.addEventListener("click",time);

// -----------------------This is the code related to reset button-----------------------

const reset=function(){
    clearInterval(stop);
    milli=0;
    sec=0;
    min=0;
    milliSecond.innerText="00";
    second.innerText="00";
    minute.innerText="00";
    startButton.style.transform="scale(1)";
    startButton.innerText="Start";
    started=false; 
    
   
}

resetButton.addEventListener("click",reset);

