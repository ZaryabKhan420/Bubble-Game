
const body = document.querySelector(".body");
var score = 0;


// Timer Function
const timer = () =>{
    var time = document.querySelector('.time');
    time.innerHTML = 30;
    var timer = time.innerHTML;
    var zzz = setInterval(()=>{
        if (timer <= 0) {
            clearInterval(zzz);
            gameOver();
        }
        else{
            timer = timer - 1;
            time.innerHTML = timer;
        }
    },1000);
}


// Make new hit
const newHit = () =>{
    const hit = document.querySelector(".hit");
    hit.innerHTML = Math.round(Math.random()*10);
}

const initialScore = () =>{
    const runs = document.querySelector(".runs");
    runs.innerHTML = 0;
}

// Bubble Creation
const bubbleCreation = () =>{

    var bubble = "";

    for(let i=1; i<=200; i=i+1){
    
        var random = Math.round(Math.random()*10);
    
        bubble += `
            <div class="bubble flex">${random}</div>
        `;
    }
    body.innerHTML = bubble;
}


// GameOver Function
const gameOver = () =>{
    body.innerHTML = `                
        <div class="gameover">
        <h2>Game Over!</h2>
        </div>` ;
}


// Increase Score Function
const increaseScore = () =>{
    score = score + 10;
    document.querySelector(".runs").innerHTML = score;
}


// Checking against attempt
const checking = () =>{
    document.querySelector(".body").addEventListener('click',(dets)=>{
        var pressed = dets.target.innerHTML;
        var hit = document.querySelector('.hit').innerHTML;
        if(pressed === hit){
            increaseScore();
            newHit();
            bubbleCreation();
        }
        else{
            gameOver();
        }
    });
}

timer();
newHit();
bubbleCreation();
initialScore();
checking();