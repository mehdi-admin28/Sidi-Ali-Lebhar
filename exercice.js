const box1 = document.querySelector('.box1')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const p1 = document.querySelector('.p1')
/**/
const box2 = document.querySelector('.box2')
/**/
const box3 = document.querySelector('.box3')
/*---------*/
const box4 = document.querySelector('.box4')
const span1 = document.querySelector('span')

const music = new Audio;
const ring =()=>{
    music.src="./Y.mp3";
    music.play();
}
/*-------- */
const form = document.querySelector('form')
/*---------*/

box1.addEventListener("click",()=>{
    box1.classList.toggle('box01');
})
btn1.addEventListener('click',()=>{
    p1.classList.toggle('p2');
})
btn2.addEventListener('click',()=>{
    p1.classList.toggle('p3');
})
/*-------------------------------------------------*/
document.addEventListener("mousemove",(e)=>{
    console.log("ok");
    box2.style.top=e.pageY +"px";
    box2.style.left=e.pageX +"px";
})
document.addEventListener('mouseup',()=>{
    
    box2.style.transform="translate(-50%,-50%)"+"scale(0.8)" ;
    console.log("up");
})
document.addEventListener('mousedown',()=>{
    box2.style.transform="translate(-50%,-50%)"+"scale(1.5)";
    console.log("down");
})
/*---------------------------------------------------*/
document.addEventListener('keypress',(e)=>{
    span1.textContent=e.key;

    if(e.key=="M"){
        box4.classList.add('box01')
    };
    if(e.key=="D"){
        box4.classList.remove('box01')
    };
    if(e.key=="N"){ring()};
    if(e.key=="p"){music.pause()};
})
/*---------------------------------------------------*/
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})