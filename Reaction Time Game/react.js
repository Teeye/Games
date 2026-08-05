let body=document.querySelector('body');
let btn=document.querySelector('button');
let span=document.querySelector('span');
let started=false;
let starttime;
let endtime;

btn.addEventListener("click",function(){
   let rand=Math.floor(Math.random()*5+1)*1000;
    btn.style.display="none";
    setTimeout(function(){
         changeClr();
         starttime=Date.now();
         started=true;
         
    },rand);
   
    body.addEventListener("click",function(){  
    if(started==true){
        endtime=Date.now();
         let time=endtime-starttime;
    span.innerText=time;
    started=false;
    btn.style.display="";
    }

})

   })

function changeClr(){
   body.classList.add('flash');
   setTimeout(function(){
    body.classList.remove('flash');
   },250);
}

