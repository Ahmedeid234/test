/*==================================================
        الأستاذ محمد عيد
        script.js
        Version 9
==================================================*/

/*=========================================
        بيانات المواعيد
=========================================*/
const schedules=[

{
stage:"prep",
number:"1",
title:"أولى إعدادي",

groups:[

{
title:"المجموعة الأولى",
days:"السبت - الثلاثاء",
time:"4:00 مساءً"
},

{
title:"المجموعة الثانية",
days:"السبت - الثلاثاء",
time:"5:00 مساءً"
}

]

},

{

stage:"prep",

number:"2",

title:"ثانية إعدادي",

groups:[

{

title:"المجموعة الأولى",

days:"السبت - الثلاثاء",

time:"2:00 مساءً"

},

{

title:"المجموعة الثانية",

days:"الأحد - الأربعاء",

time:"5:00 مساءً"

}

]

},

{

stage:"prep",

number:"3",

title:"ثالثة إعدادي",

groups:[

{

title:"المجموعة الأولى",

days:"السبت - الثلاثاء",

time:"3:00 مساءً"

},

{

title:"المجموعة الثانية",

days:"الأحد - الأربعاء",

time:"4:00 مساءً"

}

]

},

{

stage:"sec",

number:"1",

title:"أولى ثانوي",

groups:[

{

title:"المجموعة الأولى",

days:"السبت - الثلاثاء",

time:"6:00 مساءً"

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

"a²+b²=c²",

"sin θ",

"cos θ",

"tan θ"

];

const background=document.getElementById("math-background");

if(background){

const total=

window.innerWidth>768

?20

:8;

for(let i=0;i<total;i++){

const item=document.createElement("div");

item.className="math-item";

item.innerHTML=

formulas[

Math.floor(

Math.random()*formulas.length

)

];

item.style.left=Math.random()*100+"%";

item.style.top=Math.random()*100+"%";

item.style.fontSize=

14+Math.random()*16+"px";

item.style.animationDuration=

20+Math.random()*10+"s";

background.appendChild(item);

}

}


/*=========================================
        شاشة التحميل
=========================================*/

window.addEventListener("load",()=>{

const loading=

document.getElementById("loading-screen");

setTimeout(()=>{

loading.style.opacity="0";

loading.style.visibility="hidden";

},500);

});


/*=========================================
        إنشاء الكروت
=========================================*/

const cardsContainer=

document.getElementById("schedule-cards");

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
card.dataset.stage=grade.stage;

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

<div class="schedule-actions">

<a

href="https://wa.me/201005339671"

target="_blank"

class="whatsapp-btn">

<i class="fa-brands fa-whatsapp"></i>

احجز واتساب

</a>

<a

href="tel:01005339671"

class="call-btn">

<i class="fa-solid fa-phone"></i>

اتصل الآن

</a>

</div>

</div>

</div>

`;

cardsContainer.appendChild(card);

});


document.querySelectorAll(".flip-card")

.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("is-flipped");

});

});

}
/*=========================================
        Reveal Animation
=========================================*/

const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll(){

    const trigger = window.innerHeight - 100;

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/*=========================================
        Hero Button
=========================================*/

const heroButton = document.querySelector(".hero-btn");

if(heroButton){

    heroButton.addEventListener("click",(e)=>{

        e.preventDefault();

        document.querySelector("#schedule")

        .scrollIntoView({

            behavior:"smooth"

        });

    });

}


/*=========================================
        Back To Top
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

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


/*=========================================
        Navbar Effect
=========================================*/

const navbar = document.querySelector(".navbar");

let lastScroll = 0;

window.addEventListener("scroll",()=>{

    const current = window.pageYOffset;

    if(current > 60){

        navbar.style.background="rgba(8,8,8,.92)";

        navbar.style.boxShadow=

        "0 10px 25px rgba(0,0,0,.22)";

    }else{

        navbar.style.background="rgba(8,8,8,.82)";

        navbar.style.boxShadow="none";

    }

    if(current > lastScroll && current > 120){

        navbar.style.transform="translateY(-100%)";

    }else{

        navbar.style.transform="translateY(0)";

    }

    lastScroll=current;

});


/*=========================================
        Flip Outside Close
=========================================*/

document.addEventListener("click",(e)=>{

    document.querySelectorAll(".flip-card").forEach(card=>{

        if(!card.contains(e.target)){

            card.classList.remove("is-flipped");

        }

    });

});


/*=========================================
        Card Hover
=========================================*/

if(window.innerWidth > 768){

document.querySelectorAll(".flip-card")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".3s";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

}


/*=========================================
        Performance
=========================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth < 768){

document.querySelectorAll(".flip-card")

.forEach(card=>{

card.style.transform="none";

});

}

});


/*=========================================
        Console
=========================================*/

console.clear();

console.log(

"%cالأستاذ محمد عيد",

"color:#f59e0b;font-size:28px;font-weight:bold"

);

console.log(

"%cMath Website Version 9",

"color:#ffffff;font-size:16px"

);
/*==============================
        Tabs
==============================*/

const tabs=document.querySelectorAll(".tab-btn");

tabs.forEach(tab=>{

tab.onclick=()=>{

tabs.forEach(btn=>btn.classList.remove("active"));

tab.classList.add("active");

const stage=tab.dataset.stage;

document.querySelectorAll(".flip-card").forEach(card=>{

card.style.display=

card.dataset.stage===stage

?"block"

:"none";

});

};

});
/*==============================
        Default Tab
==============================*/

document.querySelectorAll(".flip-card").forEach(card=>{

card.style.display=

card.dataset.stage==="prep"

?"block"

:"none";

});

document.querySelector(".tab-btn[data-stage='prep']")
.classList.add("active");
/*==============================
        Scroll Reveal
==============================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.15

});

document.querySelectorAll(".reveal")

.forEach(section=>{

observer.observe(section);

});
