function goToStepTwo(){
    checkName()
    checkPhoneNumber()
    checkMail()
    Achieve()
}

//functions to change the plan buttons and get the info

checkBox = document
  .getElementById("monthArcade")
  .addEventListener("click", event => {
    monthArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
    monthArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*Rest of the background of the borders*/
    monthAdvanced.style.backgroundColor = "white";
    monthAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthPro.style.backgroundColor = "white";
    monthPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearArcade.style.backgroundColor = "white";
    yearArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearAdvanced.style.backgroundColor = "white";
    yearAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearPro.style.backgroundColor = "white";
    yearPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* In this way */
    document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
    document.getElementById("priceResume").innerHTML = "9$/mo";
    document.getElementById("modeTotal").innerHTML = "Total (per month)";
  });
checkBox = document
  .getElementById("monthAdvanced")
  .addEventListener("click", event => {
    monthAdvanced.style.backgroundColor = "hsl(217, 100%, 97%)";
    monthAdvanced.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*Rest of the background of the borders */
    monthArcade.style.backgroundColor = "white";
    monthArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthPro.style.backgroundColor = "white";
    monthPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearArcade.style.backgroundColor = "white";
    yearArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearAdvanced.style.backgroundColor = "white";
    yearAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearPro.style.backgroundColor = "white";
    yearPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* In this way */
    document.getElementById("modeResume").innerHTML = "Advanced (monthly)";
    document.getElementById("priceResume").innerHTML = "12$/mo";
    document.getElementById("modeTotal").innerHTML = "Total (per month)";
  });
checkBox = document
  .getElementById("monthPro")
  .addEventListener("click", event => {
    monthPro.style.backgroundColor = "hsl(217, 100%, 97%)";
    monthPro.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*Rest of the background of the borders */
    monthAdvanced.style.backgroundColor = "white";
    monthAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthArcade.style.backgroundColor = "white";
    monthArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearArcade.style.backgroundColor = "white";
    yearArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearAdvanced.style.backgroundColor = "white";
    yearAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearPro.style.backgroundColor = "white";
    yearPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* In this way */
    document.getElementById("modeResume").innerHTML = "Pro (monthly)";
    document.getElementById("priceResume").innerHTML = "15$/mo";
    document.getElementById("modeTotal").innerHTML = "Total (per month)";
  });
checkBox = document
  .getElementById("yearArcade")
  .addEventListener("click", event => {
    yearArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
    yearArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*rest of the backgrounds of the borders */
    monthArcade.style.backgroundColor = "white";
    monthArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthPro.style.backgroundColor = "white";
    monthPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthAdvanced.style.backgroundColor = "white";
    monthAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearAdvanced.style.backgroundColor = "white";
    yearAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearPro.style.backgroundColor = "white";
    yearPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* In this way */
    document.getElementById("modeResume").innerHTML = "Arcade (yearly)";
    document.getElementById("priceResume").innerHTML = "90$/yr";
    document.getElementById("modeTotal").innerHTML = "Total (per year)";
  });
checkBox = document
  .getElementById("yearAdvanced")
  .addEventListener("click", event => {
    yearAdvanced.style.backgroundColor = "hsl(217, 100%, 97%)";
    yearAdvanced.style.border = " solid 1px hsl(213, 96%, 18%)";
    /*Rest of the background of the borders */
    monthAdvanced.style.backgroundColor = "white";
    monthAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthPro.style.backgroundColor = "white";
    monthPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthArcade.style.backgroundColor = "white";
    monthArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearArcade.style.backgroundColor = "white";
    yearArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearPro.style.backgroundColor = "white";
    yearPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* In this way */
    document.getElementById("modeResume").innerHTML = "Advanced (yearly)";
    document.getElementById("priceResume").innerHTML = "12O$/yr";
    document.getElementById("modeTotal").innerHTML = "Total (per year)";
  });
checkBox = document
  .getElementById("yearPro")
  .addEventListener("click", event => {
    yearPro.style.backgroundColor = "hsl(217, 100%, 97%)";
    yearPro.style.border = " solid 1px hsl(213, 96%, 18%)";
    /* Rest of the background of the borders*/
    monthArcade.style.backgroundColor = "white";
    monthArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthPro.style.backgroundColor = "white";
    monthPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthAdvanced.style.backgroundColor = "white";
    monthAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearArcade.style.backgroundColor = "white";
    yearArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearAdvanced.style.backgroundColor = "white";
    yearAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    /* In this way */
    document.getElementById("modeResume").innerHTML = "Pro (yearly)";
    document.getElementById("priceResume").innerHTML = "150$/yr";
    document.getElementById("modeTotal").innerHTML = "Total (per year)";
  });

//Functions to get the add ons info

checkBox = document
  .getElementById("onlineMonth")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+1$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("storageMonth")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+2$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("customizableMonth")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+2$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("onlineYear")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+10$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("storageYear")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+20$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("customizableYear")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+20$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });

// function reset()

function reset() {
    document.getElementById("onlineMonth").checked = false;
    document.getElementById("storageMonth").checked = false;
    document.getElementById("customizableMonth").checked = false;
    document.getElementById("onlineYear").checked = false;
    document.getElementById("storageYear").checked = false;
    document.getElementById("customizableYear").checked = false;
    document.getElementById("onlinePrice").innerHTML = "+0$";
    document.getElementById("storagePrice").innerHTML = "+0$";
    document.getElementById("customizablePrice").innerHTML = "+0$";
    document.getElementById("onlinePrice").innerHTML = "+0$";
    document.getElementById("storagePrice").innerHTML = "+0$";
    document.getElementById("customizablePrice").innerHTML = "+0$";
    document.getElementById("modeResume").innerHTML = "Choose a plan";
    document.getElementById("priceResume").innerHTML = "0$";
    monthArcade.style.backgroundColor = "white";
    monthArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthPro.style.backgroundColor = "white";
    monthPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    monthAdvanced.style.backgroundColor = "white";
    monthAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearArcade.style.backgroundColor = "white";
    yearArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearAdvanced.style.backgroundColor = "white";
    yearAdvanced.style.border = " solid 1px hsl(229, 24%, 87%)";
    yearPro.style.backgroundColor = "white";
    yearPro.style.border = " solid 1px hsl(229, 24%, 87%)";
  }

// functions for the total price

const planPrice = "0";
console.log(planPrice);

function getPrice1() {
  const planPrice = "9";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

function getPrice2() {
  const planPrice = "12";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice3() {
  const planPrice = "15";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice4() {
  const planPrice = "90";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice5() {
  const planPrice = "120";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice6() {
  const planPrice = "150";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

//Checking the the inputs in stepInfo
function checkName(){
    //id tag for for input field for name
    let myInputName = document.getElementById("infoName")
    //span id "errorName"
    let myNameError = document.getElementById("errorName")
    //
    let myRegexName = /^[a-zA-Z-\s]+$/;

    //removing the white parts
    if(myInputName.value.trim()== "") {
        //displays the error message
        myNameError.innerHTML = "This field is required";
        //if the value the user is putting in fails myNameRegex
    } else if(myRegexName.test(myInputName.value)== false){
        //display this error message
        myNameError.innerHTML = "Please enter a valid name";
        //if the value that the user is putting in isn't a string
    } else if(myInputName.value.trim() !== "") {
        //make it a string
        myNameError.innerHTML = "";
    }
}

function checkPhoneNumber(){
    //id tag for for input field for phone number
    let myInputNum = document.getElementById("infoPhoneNumber")
    //the span id
    let myErrorNum = document.getElementById("errorPhoneNumber")
    //The number boundaries that the user can't cross
    let myRegexNum = /^[0-9\s]+$/;

    //if the value is a string after it's trimmed
    if(myInputNum.value.trim()==""){
        //display this string
        myErrorNum.innerHTML = "This field is required";
        //if the value the user puts in fails the regex test
    } else if(myRegexNum.test(myInputNum.value) == false){
        //display this string
        myErrorNum.innerHTML = "Enter number values"
    } else if(myInputNum.value.trim().length !== 10){
        myErrorNum.innerHTML = "Enter valid phone number"
    } else {
        myErrorNum.innerHTML = "";
    }
}

function checkMail() {
    //id tag for for input field for email
    let myInputMail = document.getElementById("infoEmail");
    //the span id error message
    let errorMail = document.getElementById("errorEmail");
    //the regex test for email
    let myRegexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //the input field is a trimmed string
    if(myInputMail.value.trim() == ""){
        //return this error message 
        errorMail.innerHTML = "This field is required";
        //if the value the user puts in fails the regex test
    } else if(myRegexMail.test(myInputEmail.value) == false){
        //return this error message
        errorMail.innerHTML = "Enter valid email";
    }
        else{ 
            errorMail.innerHTML = "";
        }
    }

    function Achieve(){
        let myInputNum = document.getElementById("infoPhoneNumber");
        let myInputMail = document.createElement("infoMail");
        let myInputName = document.getElementById("infoName");

        let myRegexName = /^[a-zA-Z-\s]+$/;
        let myRegexNum = /^[0-9\s]+$/;
        let myRegexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(myInputNum.value.trim().length === 10 &&
           myRegexNum.test(myInputNum.value)== true &&
           myInputMail.value.trim().length !== 0 &&
           myRegexMail.test(myInputMail.value)== true &&
           myInputName.value.trim().length !== 0 &&
           myRegexName.test(myInputName.value) === true){

            stepInfo.style.display = "none";
            stepPlan.style.display = "flex";
            circle1.style.color = "white";
            circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
            circle2.style.backgroundColor = "rgb(255, 255, 255)";
            circle2.style.color = "black";

        }

    }

    function checkPlan() {
        if (document.getElementById("modeResume").innerHTML == "Choose a plan") {
          stepInfo.style.display = "none";
          stepPlan.style.display = "flex";
          ring1.style.color = "white";
          ring1.style.backgroundColor = "rgba(255, 255, 255, 0)";
          ring2.style.backgroundColor = "rgb(255, 255, 255)";
          ring2.style.color = "black";
        } else {
          stepPlan.style.display = "none";
          stepAddOn.style.display = "flex";
          ring2.style.color = "white";
          ring2.style.backgroundColor = "rgba(255, 255, 255, 0)";
          ring3.style.backgroundColor = "rgb(255, 255, 255)";
          ring3.style.color = "black";
        }
      }



