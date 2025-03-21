const home = document.querySelector(".home")
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const option = document.querySelectorAll("p");

Array.from(option);

option[0].addEventListener("click",()=>{
    home.style.display = "none";
    first.style.display = "block"
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    document.body.style.backgroundColor = "#EB5B00"
});


option[1].addEventListener("click",()=>{
    first.style.display = "none";
    second.style.display = "block"
    home.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    document.body.style.backgroundColor = "#A0C878"
});


option[2].addEventListener("click",()=>{
    second.style.display = "none";
    third.style.display = "block"
    home.style.display = "none";
    first.style.display = "none";
    fourth.style.display = "none";
    document.body.style.backgroundColor = "#143D60"
});

option[3].addEventListener("click",()=>{
    third.style.display = "none";
    fourth.style.display = "block"
    home.style.display = "none";
    first.style.display = "none";
    second.style.display = "none";
    document.body.style.backgroundColor = "#DDEB9D"
});
