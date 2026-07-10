/*==================================================
        الأستاذ محمد عيد
        script.js
        Version 10 - Phase 1 Upgrade
==================================================*/

/*=========================================
        صياغة عدد المجموعات بشكل صحيح لغويًا
=========================================*/

function groupCountText(count){

if(count===1)return"مجموعة واحدة";

if(count===2)return"مجموعتان";

if(count>=3&&count<=10)return count+" مجموعات";

return count+" مجموعة";

}

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
        معادلات شاشة التحميل
=========================================*/

const loaderFormulasBox=document.getElementById("loader-formulas");

if(loaderFormulasBox){

const formulaCount=window.innerWidth>768?10:6;

for(let i=0;i<formulaCount;i++){

const f=document.createElement("span");

f.className="loader-formula";

f.textContent=formulas[Math.floor(Math.random()*formulas.length)];

f.style.left=Math.random()*100+"%";

f.style.top=Math.random()*100+"%";

f.style.fontSize=12+Math.random()*10+"px";

f.style.animationDuration=2.5+Math.random()*2+"s";

f.style.animationDelay=Math.random()*1.5+"s";

loaderFormulasBox.appendChild(f);

}

}

/*=========================================
        تحرير الترانسفورم بعد أنيميشن الدخول
=========================================*/

const heroPhotoAnim=document.querySelector(".hero-photo");

if(heroPhotoAnim){

heroPhotoAnim.addEventListener("animationend",()=>{

/* تثبيت الصورة على شكلها النهائي بعد انتهاء الفيد */

heroPhotoAnim.style.opacity="1";

heroPhotoAnim.style.animation="none";

},{once:true});

}

/*=========================================
        شاشة التحميل
=========================================*/

window.addEventListener("load",()=>{

sessionStorage.setItem("visited","1");

const loading=

document.getElementById("loading-screen");

const loadingText=document.getElementById("loading-text");

/* رسائل تحميل متتابعة */

if(loadingText){

setTimeout(()=>{

loadingText.textContent="جاري تحميل المجموعات...";

},900);

setTimeout(()=>{

loadingText.textContent="جاهز ✔";

},1700);

}

setTimeout(()=>{

loading.style.opacity="0";

loading.style.visibility="hidden";

},2200);
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

<div class="group-badge">

<i class="fa-solid fa-layer-group"></i>

${groupCountText(grade.groups.length)}

</div>

<div class="grade-number">

${grade.number}

</div>

<h3>

${grade.title}

</h3>

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

.forEach((card,index)=>{

card.style.setProperty("--i",index);

card.addEventListener("click",()=>{

card.classList.toggle("is-flipped");

});

});

/*=========================================
        تأثير الميل التفاعلي (Tilt) للكروت
=========================================*/

if(window.matchMedia("(hover:hover) and (pointer:fine)").matches){

document.querySelectorAll(".flip-card").forEach(card=>{

const front=card.querySelector(".card-front");

const back=card.querySelector(".card-back");

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=(e.clientX-rect.left)/rect.width-.5;

const y=(e.clientY-rect.top)/rect.height-.5;

const rotateY=x*10;

const rotateX=y*-10;

const tiltValue=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

if(front)front.style.transform=tiltValue;

if(back)back.style.transform=`rotateY(180deg) ${tiltValue}`;

});

card.addEventListener("mouseleave",()=>{

if(front)front.style.transform="";

if(back)back.style.transform="";

});

});

}

}
/*=========================================
        Reveal Animation (يتم التعامل معاه
        عبر IntersectionObserver في آخر الملف)
=========================================*/


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

let visibleIndex=0;

document.querySelectorAll(".flip-card").forEach(card=>{

const isVisible=card.dataset.stage===stage;

if(isVisible){

card.classList.remove("active");

card.style.display="block";

card.style.setProperty("--i",visibleIndex);

visibleIndex++;

/* إعادة تشغيل الأنيميشن مع كل تبديل تبويب */

requestAnimationFrame(()=>{

requestAnimationFrame(()=>{

card.classList.add("active");

});

});

}else{

card.style.display="none";

}

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

/* ترقيم كروت المميزات وطريقة العمل والتواصل عشان الأنيميشن المتدرج */

document.querySelectorAll(

".benefits-grid .benefit-card, .about-grid .about-card, .contact-container .contact-card"

).forEach((el,index)=>{

el.style.setProperty("--i",index);

});

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

/* أنيميشن دخول كروت المواعيد عند الظهور في الشاشة */

const cardObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.15

});

document.querySelectorAll(".flip-card")

.forEach(card=>{

cardObserver.observe(card);

});

/*==================================================
        التنقل الكامل بين السيكشنز
        كل سكرول يودي للجزء اللي بعده مباشرة
==================================================*/

const mainSections=document.querySelectorAll(

".hero, .benefits-section, .about-section, .schedule-section, .contact-section, footer"

);

if(mainSections.length && window.innerWidth>768){

const transitionOverlay=document.createElement("div");

transitionOverlay.id="section-transition";

document.body.appendChild(transitionOverlay);

let currentSectionIndex=0;

let isAutoScrolling=false;

let wheelCooldown=false;

/* تحديث السيكشن الحالي حسب الظاهر على الشاشة */

const sectionTracker=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting && entry.intersectionRatio>.6 && !isAutoScrolling){

currentSectionIndex=

Array.from(mainSections).indexOf(entry.target);

}

});

},{threshold:[.6]});

mainSections.forEach(sec=>sectionTracker.observe(sec));

function goToSection(index){

if(index<0||index>=mainSections.length)return;

isAutoScrolling=true;

currentSectionIndex=index;

transitionOverlay.classList.add("active");

setTimeout(()=>{

mainSections[index].scrollIntoView({behavior:"smooth"});

},120);

setTimeout(()=>{

transitionOverlay.classList.remove("active");

},420);

setTimeout(()=>{

isAutoScrolling=false;

},1000);

}

window.addEventListener("wheel",(e)=>{

if(wheelCooldown||isAutoScrolling)return;

wheelCooldown=true;

setTimeout(()=>{wheelCooldown=false;},900);

if(e.deltaY>25){

goToSection(currentSectionIndex+1);

}else if(e.deltaY<-25){

goToSection(currentSectionIndex-1);

}

},{passive:true});

/* دعم السوايب على الشاشات اللي بتدعم اللمس مع الماوس (تابلت) */

let touchStartY=0;

window.addEventListener("touchstart",(e)=>{

touchStartY=e.touches[0].clientY;

},{passive:true});

window.addEventListener("touchend",(e)=>{

if(wheelCooldown||isAutoScrolling)return;

const diff=touchStartY-e.changedTouches[0].clientY;

if(Math.abs(diff)<60)return;

wheelCooldown=true;

setTimeout(()=>{wheelCooldown=false;},900);

if(diff>0){

goToSection(currentSectionIndex+1);

}else{

goToSection(currentSectionIndex-1);

}

},{passive:true});

}

/*==================================================
        المرحلة 2: العدادات المتحركة
==================================================*/

function animateCounter(el){

const target=parseFloat(el.dataset.target);

const prefix=el.dataset.prefix||"";

const suffix=el.dataset.suffix!==undefined?el.dataset.suffix:"";

const duration=1600;

const start=performance.now();

function step(now){

const progress=Math.min((now-start)/duration,1);

const eased=1-Math.pow(1-progress,3);

const value=Math.round(target*eased);

el.textContent=prefix+value+suffix;

if(progress<1){

requestAnimationFrame(step);

}else{

el.textContent=prefix+target+suffix;

el.classList.add("counted");

}

}

requestAnimationFrame(step);

}

const statCounters=document.querySelectorAll(".stat-card strong[data-target]");

const ringFill=document.querySelector(".ring-fill");

let countersStarted=false;

function startCounters(){

if(countersStarted)return;

countersStarted=true;

statCounters.forEach(el=>animateCounter(el));

if(ringFill){

const percent=parseFloat(

document.querySelector(".ring-card strong").dataset.target

);

const circumference=264;

const offset=circumference-(circumference*percent/100);

requestAnimationFrame(()=>{

ringFill.style.strokeDashoffset=offset;

});

}

}

if(statCounters.length){

const statsObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounters();

statsObserver.disconnect();

}

});

},{threshold:.4});

statsObserver.observe(document.querySelector(".hero-stats"));

}

/*==================================================
        المرحلة 3: Ripple Effect
==================================================*/

document.querySelectorAll(

".hero-btn, .footer-btn, .tab-btn, .whatsapp-btn, .call-btn"

).forEach(btn=>{

btn.addEventListener("click",function(e){

const rect=this.getBoundingClientRect();

const ripple=document.createElement("span");

const size=Math.max(rect.width,rect.height);

ripple.className="ripple";

ripple.style.width=ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

this.appendChild(ripple);

setTimeout(()=>ripple.remove(),650);

});

});

/*==================================================
        المرحلة 3: Cursor Glow
==================================================*/

if(window.matchMedia("(hover:hover) and (pointer:fine)").matches){

const glow=document.createElement("div");

glow.id="cursor-glow";

document.body.appendChild(glow);

let glowX=0,glowY=0,visible=false;

document.addEventListener("mousemove",e=>{

glowX=e.clientX;

glowY=e.clientY;

glow.style.transform=`translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;

if(!visible){

glow.classList.add("visible");

visible=true;

}

});

document.addEventListener("mouseleave",()=>{

glow.classList.remove("visible");

visible=false;

});

}

/*==================================================
        شريط تقدم السكرول
==================================================*/

const scrollProgressBar=document.getElementById("scroll-progress");

if(scrollProgressBar){

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const docHeight=

document.documentElement.scrollHeight-window.innerHeight;

const percent=docHeight>0?(scrollTop/docHeight)*100:0;

scrollProgressBar.style.width=percent+"%";

},{passive:true});

}

/*==================================================
        زرار نسخ رقم الهاتف
==================================================*/

const copyPhoneBtn=document.querySelector(".copy-phone-btn");

if(copyPhoneBtn){

copyPhoneBtn.addEventListener("click",async()=>{

const phone=copyPhoneBtn.dataset.phone;

try{

await navigator.clipboard.writeText(phone);

}catch(err){

const temp=document.createElement("textarea");

temp.value=phone;

document.body.appendChild(temp);

temp.select();

document.execCommand("copy");

temp.remove();

}

const originalHTML=copyPhoneBtn.innerHTML;

copyPhoneBtn.innerHTML='<i class="fa-solid fa-check"></i> تم النسخ';

copyPhoneBtn.classList.add("copied");

setTimeout(()=>{

copyPhoneBtn.innerHTML=originalHTML;

copyPhoneBtn.classList.remove("copied");

},1800);

});

}
