function goToStepTwo(){
    checkName()
    checkPhoneNumber()
    checkMail()
    Achieve()
}

function checkName(){
    //id tag for for input field for name
    let myNameInput = document.getElementById("infoName")
    //span id "errorName"
    let myNameError = document.getElementById("errorName")
    //
    let myNameRegex = /^[a-zA-Z-\s]+$/;

    //removing the white parts
    if(myNameInput.value.trim()== "") {
        //displays the error message
        myNameError.innerHTML = "This field is required";
        //if the value the user is putting in fails myNameRegex
    } else if(myNameRegex.test(myNameInput.value)== false){
        //display this error message
        myNameError.innerHTML = "Please enter a valid name";
        //if the value that the user is putting in isn't a string
    } else if(myNameInput.value.trim() !== "") {
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
    let myRegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //the input field is a trimmed string
    if(myInputMail.value.trim() == ""){
        //return this error message 
        errorMail.innerHTML = "This field is required";
        //if the value the user puts in fails the regex test
    } else if(myRegexEmail.test(myInputEmail.value) == false){
        //return this error message
        errorMail.innerHTML = "Enter valid email";
    }
        else{ 
            errorMail.innerHTML = "";
        }
    }

    functio




