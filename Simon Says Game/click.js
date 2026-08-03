let btns=document.querySelectorAll('.btn');
let colors=['Red','Blue','Green','Yellow'];
let level=0;
let span=document.querySelector('span');
let gameSeq=[];
let userSeq=[];

for(let btn of btns){
    btn.addEventListener("click",function(e){
        let color=e.target.classList[1];
        userSeq.push(color);
       let currentIdx=userSeq.length-1;
        if(gameSeq[currentIdx]!=userSeq[currentIdx]){
            console.log("Game Over");
            level=0;
            span.innerText=level;
            return;
        }
      if(gameSeq.length==userSeq.length){
        level++;
        span.innerText=level;
        userSeq=[];
        rand();
    }
    
        userflash(btn);
    })
}



function rand(){
     let idx=Math.floor(Math.random()*4);
    let clr=colors[idx];
    let btn=document.querySelector(`.${clr}`);
    gameSeq.push(clr);
    
    gameflash(btn);

}

function gameflash(btn){
   btn.classList.add('gameflash');
   setTimeout(function(){
    btn.classList.remove('gameflash');
   },500);
   
}
function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },200);
}
rand();
