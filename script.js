
// Glitch Timeline Function
var $text = document.querySelector('.btn-glitch-active'),
    $filter = document.querySelector('.svg-sprite'),
    $turb = $filter.querySelector('#filter feTurbulence'),
    turbVal = { val: 0.000001 },
    turbValX = { val: 0.000001 };

var glitchTimeline = function() {
    var timeline = new TimelineMax({
        repeat: -1,
        repeatDelay: 2,
        paused: true,
        onUpdate: function () {
            $turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
        }
    });

    timeline
        .to(turbValX, 0.1, { val: 0.5 })
        .to(turbVal, 0.1, { val: 0.02 });
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });
    timeline
        .to(turbValX, 0.2, { val: 0.4 }, 0.4)
        .to(turbVal, 0.2, { val: 0.002 }, 0.4);
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });

    // console.log("duration is: " + timeline.duration());

    return {
        start: function() {
            timeline.play(0);
        },
        stop: function() {
            timeline.pause();
        }
    };
};

btnGlitch = new glitchTimeline();

$('.btn-glitch')
    .on('mouseenter', function () {
          $(this).addClass('btn-glitch-active');
          btnGlitch.start();
    })
    .on('mouseleave', function () {
        var $this = $(this);
        if ( $this.hasClass('btn-glitch-active') ) {
            $this.removeClass('btn-glitch-active');
            btnGlitch.stop();
        }
    });
    function theme_drive(){
        window.open("https://drive.google.com/file/d/1M_tm_8cpsp05wcoqvHGzElzx26XkNj9X/view?usp=sharing", "_blank")
    }
    function judge_drive(){
        window.open("https://drive.google.com/file/d/134cG26ouwzWYn-xHM-2ba9n17EyXk13m/view?usp=sharing", "_blank")
    }

const $a = elem => document.querySelector(elem);
const countdown = function(_config) {
  const tarDate = $a(_config.target).getAttribute('data-date').split('-');
  const day = parseInt(tarDate[0]);
  const month = parseInt(tarDate[1]);
  const year = parseInt(tarDate[2]);
  let tarTime = $a(_config.target).getAttribute('data-time');
  let tarhour, tarmin;
  
  if (tarTime != null) {    
    tarTime = tarTime.split(':');
    tarhour = parseInt(tarTime[0]);
    tarmin = parseInt(tarTime[1]);
  }

  let dateNow = new Date();
  
  // Set the date we're counting down to
  const countDownDate = new Date(year, month-1, day, tarhour, tarmin, 0, 0).getTime();

  $a(_config.target+' .day .word').innerHTML = _config.dayWord;
  $a(_config.target+' .hour .word').innerHTML = _config.hourWord;
  $a(_config.target+' .min .word').innerHTML = _config.minWord;
  $a(_config.target+' .sec .word').innerHTML = _config.secWord; 
  
  const updateTime = () => {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is over, write some text 
    if (distance < 0) {
      $a(".countdown").innerHTML = "<h1>EXPIRED</h1>";
    } else {
      requestAnimationFrame(updateTime);

      $a(_config.target+' .day .num').innerHTML = addZero(days);
      $a(_config.target+' .hour .num').innerHTML = addZero(hours);
      $a(_config.target+' .min .num').innerHTML = addZero(minutes);
      $a(_config.target+' .sec .num').innerHTML = addZero(seconds);
    }
  }
  
  updateTime();
}

const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;

const mylittlething_countdown = new countdown({
  target: '.countdown',
  dayWord: ' days',
  hourWord: ' hours',
  minWord: ' mins',
  secWord: ' secs'
});

const redirectreg=()=>{
    window.open("./form.html","_blank")
}
const redirectdis=()=>{
  window.open("https://discord.gg/gQxAH4YUkG","_blank")
}
const redirectbro=()=>{
  window.open("https://drive.google.com/file/d/1ZPpGbLeGDBcONBVLzcOxdmcPAu6IaVNd/view","_blank")
}

// class parallaxTiltEffect {

//     constructor({element, tiltEffect}) {
  
//       this.element = element;
//       this.container = this.element.querySelector(".container");
//       this.size = [300, 360];
//       [this.w, this.h] = this.size;
  
//       this.tiltEffect = tiltEffect;
  
//       this.mouseOnComponent = false;
  
//       this.handleMouseMove = this.handleMouseMove.bind(this);
//       this.handleMouseEnter = this.handleMouseEnter.bind(this);
//       this.handleMouseLeave = this.handleMouseLeave.bind(this);
//       this.defaultStates = this.defaultStates.bind(this);
//       this.setProperty = this.setProperty.bind(this);
//       this.init = this.init.bind(this);
  
//       this.init();
//     }
  
//     handleMouseMove(event) {
//       const {offsetX, offsetY} = event;
  
//       let X;
//       let Y;
  
//       if (this.tiltEffect === "reverse") {
//         X = ((offsetX - (this.w/2)) / 3) / 3;
//         Y = (-(offsetY - (this.h/2)) / 3) / 3;
//       }
  
//       else if (this.tiltEffect === "normal") {
//         X = (-(offsetX - (this.w/2)) / 3) / 3;
//         Y = ((offsetY - (this.h/2)) / 3) / 3;
//       }
  
//       this.setProperty('--rY', X.toFixed(2));
//       this.setProperty('--rX', Y.toFixed(2));
  
//       this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
//       this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
//     }
  
//     handleMouseEnter() {
//       this.mouseOnComponent = true;
//       this.container.classList.add("container--active");
//     }
  
//     handleMouseLeave() {
//       this.mouseOnComponent = false;
//       this.defaultStates();
//     }
  
//     defaultStates() {
//       this.container.classList.remove("container--active");
//       this.setProperty('--rY', 0);
//       this.setProperty('--rX', 0);
//       this.setProperty('--bY', '80%');
//       this.setProperty('--bX', '50%');
//     }
  
//     setProperty(p, v) {
//       return this.container.style.setProperty(p, v);
//     }
  
//     init() {
//       this.element.addEventListener('mousemove', this.handleMouseMove);
//       this.element.addEventListener('mouseenter', this.handleMouseEnter);
//       this.element.addEventListener('mouseleave', this.handleMouseLeave);
//     }
  
//   }
  
//   const $hov = e => document.querySelector(e);
  
//   const wrap1 = new parallaxTiltEffect({
//     element: $hov('.wrap--1'),
//     tiltEffect: 'reverse'
//   });
  
//   const wrap2 = new parallaxTiltEffect({
//     element: $hov('.wrap--2'),
//     tiltEffect: 'reverse'
//   });
  
//   const wrap3 = new parallaxTiltEffect({
//     element: $hov('.wrap--3'),
//     tiltEffect: 'reverse'
//   });
//   const wrap4 = new parallaxTiltEffect({
//     element: $hov('.wrap--4'),
//     tiltEffect: 'reverse'
//   });
//   const wrap5 = new parallaxTiltEffect({
//     element: $hov('.wrap--5'),
//     tiltEffect: 'reverse'
//   });
//   const wrap6 = new parallaxTiltEffect({
//     element: $hov('.wrap--6'),
//     tiltEffect: 'reverse'
//   });
//   const wrap7 = new parallaxTiltEffect({
//     element: $hov('.wrap--7'),
//     tiltEffect: 'reverse'
//   });

  function themename(){
      let t=document.getElementsByClassName("theme__item--details")[0];
      t.style.opacity="initial";
      let t1=document.getElementById("th-gd");
      t1.style.opacity="0.2";

  }
  function themenamed(){
    let t=document.getElementsByClassName("theme__item--details")[0];
    t.style.opacity=0;
    let t1=document.getElementById("th-gd");
      t1.style.opacity="initial";
  }
  function themename1(){
    let t=document.getElementsByClassName("theme__item--details")[1];
    t.style.opacity="initial";
    let t1=document.getElementById("th-bc");
      t1.style.opacity="0.2";
  }
function themenamed1(){
  let t=document.getElementsByClassName("theme__item--details")[1];
  t.style.opacity=0;
  let t1=document.getElementById("th-bc");
      t1.style.opacity="initial";
}
function themename2(){
    let t=document.getElementsByClassName("theme__item--details")[2];
    t.style.opacity="initial";
    let t1=document.getElementById("th-cc");
      t1.style.opacity="0.2";
  }
function themenamed2(){
  let t=document.getElementsByClassName("theme__item--details")[2];
  t.style.opacity=0;
  let t1=document.getElementById("th-cc");
      t1.style.opacity="initial";
}
function themename3(){
    let t=document.getElementsByClassName("theme__item--details")[3];
    t.style.opacity="initial";
    let t1=document.getElementById("th-ai");
      t1.style.opacity="0.2";
  }
function themenamed3(){
  let t=document.getElementsByClassName("theme__item--details")[3];
  t.style.opacity=0;
  let t1=document.getElementById("th-ai");
      t1.style.opacity="initial";
}
function themename4(){
    let t=document.getElementsByClassName("theme__item--details")[4];
    t.style.opacity="initial";
    let t1=document.getElementById("th-education");
      t1.style.opacity="0.2";
      
  }
function themenamed4(){
  let t=document.getElementsByClassName("theme__item--details")[4];
  t.style.opacity=0;
  let t1=document.getElementById("th-education");
      t1.style.opacity="initial";
}
function themename5(){
    let t=document.getElementsByClassName("theme__item--details")[5];
    t.style.opacity="initial";
    let t1=document.getElementById("th-health");
      t1.style.opacity="0.2";
  }
function themenamed5(){
  let t=document.getElementsByClassName("theme__item--details")[5];
  t.style.opacity=0;
  let t1=document.getElementById("th-health");
      t1.style.opacity="initial";
}
function themename6(){
    let t=document.getElementsByClassName("theme__item--details")[6];
    t.style.opacity="initial";
    let t1=document.getElementById("th-innovation");
      t1.style.opacity="0.2";
  }
function themenamed6(){
  let t=document.getElementsByClassName("theme__item--details")[6];
  t.style.opacity=0;
  let t1=document.getElementById("th-innovation");
      t1.style.opacity="initial";
}
function pmd1(){
  let t=document.getElementsByClassName("prize-money")[0];
  t.style.display="initial";
  let t1=document.getElementsByClassName("trophy")[0];
  t1.style.opacity=1;
}
function pmdo1(){
  let t=document.getElementsByClassName("prize-money")[0];
  t.style.display="none";
  let t1=document.getElementsByClassName("trophy")[0];
  t1.style.opacity=0.3;
}
function pmd2(){
  let t=document.getElementsByClassName("prize-money")[1];
  t.style.display="initial";
  let t1=document.getElementsByClassName("trophy")[1];
  t1.style.opacity=1;
}
function pmdo2(){
  let t=document.getElementsByClassName("prize-money")[1];
  t.style.display="none";
  let t1=document.getElementsByClassName("trophy")[1];
  t1.style.opacity=0.3;
}
function pmd3(){
  let t=document.getElementsByClassName("prize-money")[2];
  t.style.display="initial";
  let t1=document.getElementsByClassName("trophy")[2];
  t1.style.opacity=1;
}
function pmdo3(){
  let t=document.getElementsByClassName("prize-money")[2];
  t.style.display="none";
  let t1=document.getElementsByClassName("trophy")[2];
  t1.style.opacity=0.3;
}
function pmd4(){
  let t=document.getElementsByClassName("prize-money")[3];
  t.style.display="initial";
  let t1=document.getElementsByClassName("trophy")[3];
  t1.style.opacity=1;
}
function pmdo4(){
  let t=document.getElementsByClassName("prize-money")[3];
  t.style.display="none";
  let t1=document.getElementsByClassName("trophy")[3];
  t1.style.opacity=0.3;
}
function pmd5(){
  let t=document.getElementsByClassName("prize-money")[4];
  t.style.display="initial";
  let t1=document.getElementsByClassName("trophy")[4];
  t1.style.opacity=1;
}
function pmdo5(){
  let t=document.getElementsByClassName("prize-money")[4];
  t.style.display="none";
  let t1=document.getElementsByClassName("trophy")[4];
  t1.style.opacity=0.3;
}

$(".list").click(function () {
  const value = $(this).attr("data-filter");
  if (value == "all") {
    $(".team-card").fadeIn(400);
    $("li.list.active").removeClass("active");
    $(this).addClass("active");
  } else {
    $("li.list.active").removeClass("active");
    $(this).addClass("active");
    $(".team-card")
      .not("." + value)
      .fadeOut(400);
    $(".team-card")
      .filter("." + value)
      .fadeIn(400);
  }
});


const btnitems=document.querySelectorAll(".accordion button");

function toggleAccordion() {
  console.log("encountered");
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < btnitems.length; i++) {
    btnitems[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

btnitems.forEach((item) => {
  item.addEventListener('click', toggleAccordion)
});

//OPEN TRIGGER
var openTrigger = $('.menu-trigger');
var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');

//CLOSE TRIGGER
var closeTrigger = $('.close-trigger');
var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');

//LOGO
var logo = $('.logo');

//MENU
var menuContainer = $('.menu-container');
var menu = $('.menu');
var menuTop = $('.menu-bg.top');
var menuMiddle = $('.menu-bg.middle');
var menuBottom = $('.menu-bg.bottom');

//TL
var tlOpen = new TimelineMax({paused: true});
var tlClose = new TimelineMax({paused: true});

//OPEN TIMELINE
tlOpen.add("preOpen")
  .to(logo, 0.4, {
            scale: 0.8,
            opacity: 0,
            ease: Power2.easeOut
        }, "preOpen")
.to(openTriggerTop, 0.4, {
  x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
    closeTrigger.css('z-index','25');
  }
}, "preOpen")
.to(openTriggerMiddle, 0.4, {
  x: "+=80px", y: "-=80px", ease: Power4.easeIn,
  onComplete: function() {
    openTrigger.css('visibility','hidden');
  }
}, "preOpen")
.to(openTriggerBottom, 0.4, {
  x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
}, "preOpen")
.add("open", "-=0.4")
.to(menuTop, 0.8, {
  y: "13%",
  ease: Power4.easeInOut
}, "open")
.to(menuMiddle, 0.8, {
  scaleY: 1,
  ease: Power4.easeInOut
}, "open")
.to(menuBottom, 0.8, {
  y: "-114%",
  ease: Power4.easeInOut
}, "open")
.fromTo(menu, 0.6, {
  y: 30, opacity: 0, visibility: 'hidden'
}, {
  y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
}, "-=0.2")
.add("preClose", "-=0.8")
.to(closeTriggerLeft, 0.8, {
  x: "-=100px", y: "+=100px", ease: Power4.easeOut
}, "preClose")
.to(closeTriggerRight, 0.8, {
  x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
}, "preClose");

//CLOSE TIMELINE
tlClose.add("close")
  .to(menuTop, 0.2, {
  backgroundColor: "rgba(78,78,78,0.75)", ease: Power4.easeInOut, onComplete: function() {
    logo.css('z-index','26');
    closeTrigger.css('z-index','5');
 openTrigger.css('visibility','visible');
  }
}, "close")
.to(menuMiddle, 0.2, {
  backgroundColor: "rgba(78,78,78,0.75)", ease: Power4.easeInOut
}, "close") 
.to(menuBottom, 0.2, {
  backgroundColor: "rgba(78,78,78,0.75)", ease: Power4.easeInOut
}, "close")
  .to(menu, 0.6, {
  y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function() {
    menu.css('visibility','hidden');
  }
}, "close")
.to(logo, 0.8, {
  scale: 1, opacity: 1, ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuTop, 0.8, {
  y: "-113%",
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuMiddle, 0.8, {
  scaleY: 0,
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuBottom, 0.8, {
  y: "23%",
  ease: Power4.easeInOut,
  onComplete: function() {
    menuTop.css('background-color','#ffffff');
    menuMiddle.css('background-color','#ffffff');
    menuBottom.css('background-color','#ffffff');
  }
}, "close", "+=0.2")
.to(closeTriggerLeft, 0.2, {
  x: "+=100px", y: "-=100px", ease: Power4.easeIn
}, "close")
.to(closeTriggerRight, 0.2, {
  x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
}, "close")
.to(openTriggerTop, 1, {
  x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
}, "close")
.to(openTriggerMiddle, 1, {
  x: "-=80px", y: "+=80px", ease: Power4.easeOut
}, "close")
.to(openTriggerBottom, 1, {
  x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
}, "close");

//EVENTS
openTrigger.on('click', function(){
  if(tlOpen.progress() < 1){
                tlOpen.play();
            } else {
                tlOpen.restart();
            }
});
       
closeTrigger.on('click', function(){
  if(tlClose.progress() < 1){
                tlClose.play();
            } else {
                tlClose.restart();
            }
});

const nav = document.querySelector(".nav");
const navActiveIndicator = document.querySelector(".nav__active-indicator");
const buttons = document.querySelectorAll(".nav-btn");
let activeButton = document.querySelector(".active");

setIndexKey(buttons);

buttons.forEach(button => {
  button.addEventListener("click", buttonClick);
});

function setIndexKey(arrayOfElements) {
  arrayOfElements.forEach((element, index) => {
    element.index = index;
  });
}

function buttonClick() {
  nav.classList.remove("slide-left");
  nav.classList.add("slide-right");
  navActiveIndicator.style.transform = `translateX(${58*this.index}px) translateY(-50%)`;

  // Update the active button
  if (activeButton) activeButton.classList.remove("active");
  this.classList.add("active");
  activeButton = this;
}

document.getElementById('nav').addEventListener('click', function (e) {
  e.preventDefault(); 
  const target = e.target;
  if (target.classList.contains('icon2')) {
      const id = target.getAttribute('goto').slice(1);
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
});

var loader=document.getElementById("preloader");
var loader1=document.getElementById("overall");
setTimeout(()=>{
    loader.style.display="none";
    loader1.style.display="flex";
},1000);

function linkedin(){
  window.open("https://www.linkedin.com/company/hackofiesta-iiitl", "_blank")
}
function instagram(){
  window.open("https://www.instagram.com/hackofiesta", "_blank")
}
function twitter(){
  window.open("https://twitter.com/hof_iiitl", "_blank")
}
function facebook(){
  window.open("https://www.facebook.com/hackofiesta", "_blank")
}

  var burger = document.querySelector('.burger-container'),
      header = document.querySelector('.header');
  
  function burgerham() {
      header.classList.toggle('menu-opened');
  }

  function menuit(){
    header.classList.toggle('menu-opened');
  }