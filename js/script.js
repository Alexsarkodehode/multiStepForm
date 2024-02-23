//the div that's wrapping the whole document
const wrapperDiv = document.getElementById("wrapper")
//the aside side bar
const aside = document.getElementById("aside")
//the sidebar step buttons
let stepButtonOne = document.getElementById("step-btn-one")
let stepButtonTwo = document.getElementById("step-btn-two")
let stepButtonThree = document.getElementById("step-btn-three")
let stepButtonFour = document.getElementById("step-btn-four")
//the form slides
let slidesForm = document.getElementById("slides-form")
const form = document.getElementById("form")
//the next buttons to each form slide
let nextBtn = document.getElementById("next-btn")
//the babk buttons to each slide
let backBtn = document.getElementById("back-btn")
//the confirm buttons
const confirmButton = document.getElementById("confirm-btn")


let userName;
let email;
let phone;

document.getElementById("submit-btn-username").value = function () {
userName = document.getElementById("username").value 

}

document.getElementById("submit-btn-email").value = function () {
email = document.getElementById("email").value 
}

document.getElementById("submit-btn-phone").value = function () {
phone = document.getElementById("phone").value 
}

let stepCount = 0;
let selectorCount = 1;
let currentStep

function removeSelectors(){
    selector.forEach(select =>{
        select.classList.remove("active");
    })
}

function decrementSelector(){
    removeSelectors();
    selectorCount--;
    let select = selector[stepCount];   
    select.classList.add("active");
}

function incrementSelector(){
    removeSelectors();
    let select = selector[selectorCount];
    select.classList.add("active");
    selectorCount++;
}

function removeStep(){
    steps.forEach(step =>{
        step.classList.remove("active");
    })
}






