let menu = document.querySelector('a.menu');
let li012 = document.querySelector('li.li01');
let navbar = document.querySelector('.navbar');
let dispare = document.querySelector('.dispare');
let navbar1 = document.querySelector('.navbar1');
let opt = document.querySelectorAll('.opt');
let h101 = document.querySelector('.h101');


menu.addEventListener('click',()=>{
    li012.classList.toggle('dis');
    console.log("click");
    opt.style.color="#3498db";
});
window.addEventListener('scroll',()=>{
    
    if(window.scrollY >1704 || window.scrollY<100){
        navbar.style.top= 0;
        menu.style.color="white";
    }
    else{navbar.style.top="-23rem";
         menu.style.color="#2C3E50";
    }
    if(window.scrollY<100){
        dispare.style.top="40%";
        navbar1.style.background="transparent";
        opt.forEach(x=>{x.style.fontSize="1.4rem";});
        h101.style.fontSize="1.7rem";
    }
    else{dispare.style.top="-11rem";
        navbar1.style.background="#2C3E50";
        opt.forEach(x=>{
            x.style.fontSize="1rem";
        });
        h101.style.fontSize="1.2rem";
    }
})
document.addEventListener("submit",(e)=>{
    e.preventDefault()
})