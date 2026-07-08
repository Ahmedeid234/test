/*==================================================
        الأستاذ محمد عيد
        script.js
        Version 8
        PART 1
==================================================*/


/*=========================================
            بيانات المواعيد
=========================================*/

const schedules = [

{

number:"1",

title:"أولى إعدادي",

groups:[

{

title:"المجموعة الأولى",

days:"الأحد - الأربعاء",

time:"٣:٣٠ مساءً"

},

{

title:"المجموعة الثانية",

days:"السبت - الثلاثاء",

time:"٥:٠٠ مساءً"

},

{

title:"المجموعة الثالثة",

days:"الأحد - الأربعاء",

time:"٧:٠٠ مساءً"

}

]

},

{

number:"2",

title:"ثانية إعدادي",

groups:[

{

title:"المجموعة الأولى",

days:"السبت - الاثنين",

time:"٤:٣٠ مساءً"

},

{

title:"المجموعة الثانية",

days:"الثلاثاء - الخميس",

time:"٦:٣٠ مساءً"

}

]

},

{

number:"3",

title:"ثالثة إعدادي",

groups:[

{

title:"المجموعة الأولى",

days:"الأحد - الثلاثاء",

time:"٨:٠٠ مساءً"

},

{

title:"المجموعة الثانية",

days:"الجمعة",

time:"١:٣٠ مساءً"

}

]

}

];


/*=========================================
        عناصر الخلفية
=========================================*/

const formulas=[

"π",

"√",

"Δ",

"٢πr",

"A = πr²",

"a² + b² = c²",

"مساحة المثلث",

"محيط الدائرة",

"مساحة المستطيل",

"مساحة شبه المنحرف",

"V = L × W × H",

"sin θ",

"cos θ",

"tan θ"

];


/*=========================================
        إنشاء الخلفية
=========================================*/

const isDesktop = window.innerWidth > 768;

const background=document.getElementById("math-background");

if(background){

const total = isDesktop ? 90 : 12;

for(let i=0;i<total;i++){

const item=document.createElement("div");

item.className="math-item";

item.innerHTML=formulas[

Math.floor(

Math.random()*formulas.length

)

];

item.style.left=Math.random()*100+"%";

item.style.top=Math.random()*100+"%";

item.style.fontSize=

16+Math.random()*20+"px";

item.style.animationDuration=

20+Math.random()*25+"s";

item.style.animationDelay=

-Math.random()*20+"s";

background.appendChild(item);

}

}


/*=========================================
        شاشة التحميل
=========================================*/

const loading=document.getElementById("loading-screen");

window.addEventListener("load",()=>{

setTimeout(()=>{

if(loading){

loading.style.opacity="0";

loading.style.visibility="hidden";

}

},600);

});

/*==================================================
            script.js
              PART 2
==================================================*/


/*=========================================
        إنشاء الكروت
=========================================*/

const cardsContainer=document.getElementById("schedule-cards");

if(cardsContainer){

schedules.forEach(grade=>{

let groupsHTML="";

grade.groups.forEach(group=>{

groupsHTML+=`

<div class="schedule-item">

<h4>${group.title}</h4>

<p>

<i class="fa-solid fa-calendar-days"></i>

${group.days}

</p>

<p>

<i class="fa-regular fa-clock"></i>

${group.time}

</p>

</div>

`;

});

const card=document.createElement("div");

card.className="flip-card reveal";

card.innerHTML=`

<div class="flip-card-inner">

<div class="card-front">

<div class="grade-number">

${grade.number}

</div>

<h3>

${grade.title}

</h3>

<p class="group-count">

${grade.groups.length} مجموعات

</p>

<p class="tap-text">

اضغط لعرض المواعيد

</p>

</div>

<div class="card-back">

${groupsHTML}

</div>

</div>

`;

cardsContainer.appendChild(card);

});

const flipCards=document.querySelectorAll('.flip-card');

flipCards.forEach(card=>{
	card.addEventListener('click',()=>{
		card.classList.toggle('is-flipped');
	});
});

}


/*=========================================
        Scroll Reveal
=========================================*/

const revealElements=document.querySelectorAll(".reveal");

function reveal(){

revealElements.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("active");

}

});

}

if(window.innerWidth > 768){

window.addEventListener("scroll",reveal);

reveal();

}


/*=========================================
        زر عرض المواعيد
=========================================*/

const heroBtn=document.querySelector(".hero-btn");

if(heroBtn){

heroBtn.addEventListener("click",function(e){

e.preventDefault();

document.getElementById("schedule").scrollIntoView({

behavior:"smooth"

});

});

}

/*==================================================
            script.js
              PART 3
==================================================*/


/*=========================================
        Back To Top
=========================================*/

const backToTop=document.getElementById("backToTop");

if(backToTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*=========================================
        Ripple Effect
=========================================*/

if(isDesktop){
document.querySelectorAll(

".hero-btn,.contact-card,#backToTop,.floating-whatsapp"

).forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.className="ripple";

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});
}


/*=========================================
        تغيير شكل الـ Header
=========================================*/

const header=document.querySelector(".navbar");

if(header){

let lastScroll=0;

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

if(window.scrollY>60){

header.style.background="rgba(8,8,8,.9)";

header.style.backdropFilter="blur(25px)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

header.style.background="rgba(8,8,8,.55)";

header.style.boxShadow="none";

}

if(current>lastScroll && current>80){

header.style.transform="translateY(-100%)";

}else{

header.style.transform="translateY(0)";

}

lastScroll=current;

});

}


/*=========================================
        تأثير بسيط للكروت
=========================================*/

document.querySelectorAll(".flip-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/*==================================================
            script.js
              FINAL PART
==================================================*/


/*=========================================
        Mouse Glow
=========================================*/

if(isDesktop){

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/*=========================================
        3D Tilt Effect
=========================================*/

document.querySelectorAll(".flip-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const centerX=rect.width/2;

const centerY=rect.height/2;

const rotateY=(x-centerX)/18;

const rotateX=(centerY-y)/18;

card.style.transform=

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});

}


/*=========================================
        تحريك الخلفية
=========================================*/

if(window.innerWidth > 768){

setInterval(()=>{

document.querySelectorAll(".math-item").forEach(item=>{

item.style.opacity=(0.05+Math.random()*0.12);

});

},2500);
}


/*=========================================
        Hero Fade
=========================================*/

const hero=document.querySelector(".hero");

if(hero){

hero.style.opacity="1";

hero.style.transform="translateY(0px)";

if(window.innerWidth > 768){

window.addEventListener("scroll",()=>{

const value=window.scrollY;

hero.style.opacity=1-value/700;

hero.style.transform=`translateY(${value*0.18}px)`;

});

}
}


/*=========================================
        Console
=========================================*/

console.clear();

console.log(

"%cالأستاذ محمد عيد",

"color:#ff9800;font-size:28px;font-weight:bold"

);

console.log(

"%cMath Website Version 8",

"color:white;font-size:16px"

);
