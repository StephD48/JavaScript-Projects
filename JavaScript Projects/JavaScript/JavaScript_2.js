function validateForm() {//Defining a function
    let x = document.forms["myForm"]["fname"].value;//let statement
    if (x == "") {//if statement
        alert("Form must be filled out");//alert if form not filled out completely
        return false;
    }
}