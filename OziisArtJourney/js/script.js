const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const ShopSubBtn = document.getElementById('mobile-shop-btn');
const ShopBtn = document.getElementById('back-shop-btn');
const ShopSubMenu = document.getElementById('mobile-shop-submenu');
const faders = document.querySelectorAll('.fade');
const sliders = document.querySelectorAll('.slide');

// const blurs = document.querySelectorAll('.blurry');


//Scroll up and down visibility
const desktopNav = document.getElementById("desktop-nav");



let lastScroll = 0;

// window.addEventListener('scroll',() => {
//      const currentScroll = window.scrollY;
//      console.log (currentScroll);
//   if (currentScroll >30 && currentScroll !=null ){
//     never.classList.add("appear");
//   }else if (currentScroll==0 ){
//     never.classList.remove("appear");
//   }

//     // if (currentScroll <= 0) {
//     //     desktopNav.classList.remove("scroll-up");
//     // }
//     // if (currentScroll > lastScroll && !desktopNav.classList.contains('scroll-down')) {
//     //     desktopNav.classList.remove("scroll-up");
//     //     desktopNav.classList.add("scroll-down");
//     // }

//     // if (currentScroll < lastScroll && !desktopNav.classList.contains('scroll-up')) {
//     //     desktopNav.classList.remove("scroll-down");
//     //     desktopNav.classList.add("scroll-up");
//     // }
     

//     // lastScroll= currentScroll;
// })


//hamburger toggle for Main menu and submenu 


btn.addEventListener('click', () => { 
    btn.classList.toggle('open');
    if (!nav.classList.contains('open') && !ShopSubMenu.classList.contains('open')){
        nav.classList.toggle('open');
    }
    else if (nav.classList.contains('open') && !ShopSubMenu.classList.contains('open'))  {
        nav.classList.toggle('open');
    }
    else if (nav.classList.contains('open') && ShopSubMenu.classList.contains('open')){
        ShopSubMenu.classList.toggle('openHam');
           

    }
    else{
        ShopSubMenu.classList.toggle('open');

    }
    
});

ShopSubBtn.addEventListener('click', () => {
    ShopSubMenu.classList.toggle('open');
    nav.classList.add('openSubMenu');

});

ShopBtn.addEventListener('click',() => {
    ShopSubMenu.classList.toggle('open');
    nav.classList.remove('openSubMenu');
    

});


//Icons
const sunIcon= document.querySelector('.sun');
const moonIcon= document.querySelector('.moon');


//Theme vars
const UserTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches; 

//icon toggle
const iconToggle = () =>{
    sunIcon.classList.toggle("showIcon");
    moonIcon.classList.toggle("showIcon");
  
}

//initial theme check
const themeCheck = () =>{
    if(UserTheme == 'dark' || (!UserTheme && systemTheme) ){
        document.documentElement.classList.add("dark");
        moonIcon.classList.toggle("showIcon");
       
    } 
    else{
        sunIcon.classList.toggle("showIcon");

    }
    

   
}

//manual theme switch
 const themeSwitch = () =>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    else{ 
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();

 }
   
    
 } 



 moonIcon.addEventListener('click', () =>{
    themeSwitch();
 })


 sunIcon.addEventListener('click', () => {
    themeSwitch();
 }); 


 themeCheck();


 //Animating on Scroll
 const options= {
    
    threshold: 0.7,
    rootMargin :'0px 0px -30px 0px'
   
    
 };

 const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
         if (!entry.isIntersecting){
            return;

         }else{
            entry.target.classList.add('appear');
            if (entry.intersectionRatio < 0.5){
                entry.target.classList.remove('appear');
                observer.unobserve;


            }
           
         }
    } )

 },options);

 faders.forEach(fader => {
    observer.observe(fader);
 })

 sliders.forEach(slider => {
    observer.observe(slider);
 })

//  blurs.forEach(blurr => {
//     observer.observe(blurr);
//  })

//BACK TO TOP BUTTON
// Get the button
let backToTopButton = document.getElementById('btn-back-to-top');

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener('click', backToTop);

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
 

