let slides=document.querySelectorAll(".hero-slide");
let current=0;

setInterval(()=>{
slides[current].classList.remove("active");
current=(current+1)%slides.length;
slides[current].classList.add("active");
},5000);

function openForm(){
document.getElementById("bookingForm").classList.add("active");
}

function closeForm(){
document.getElementById("bookingForm").classList.remove("active");
}
window.addEventListener("scroll", function(){
const navbar = document.querySelector(".navbar");
if(window.scrollY > 50){
navbar.classList.add("shrink");
}else{
navbar.classList.remove("shrink");
}
});