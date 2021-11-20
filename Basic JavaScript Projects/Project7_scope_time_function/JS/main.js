var S = 45;// Assigning a Variable
function Multiply_Numbers_1() {//Defining a  Global Function
    document.write(36 * S + "<br>"); // Output Result 
}
function Multiply_Numbers_2() {//Defining a global function
    document.write( S * 75);// Output Result
}
Multiply_Numbers_1();//Output Function
Multiply_Numbers_2();//Output Function

document.write("<br>");//Separation of codes

function Subtract_Numbers_1() {//Defining a local function
    var D = 64;//Assigning a variable
    document.write( 345 - D + "<br>");// Output Result
}
Subtract_Numbers_1();//Function

document.write("<br>"); //Separation of codes

function Add_Numbers_1() {//Defining a Function
    var G = 322;//Assigning a Variable
    console.log(15 + G);//Console log to check for debugging
}
function Add_Numbers_2() {//Defining a Function
    console.log(G + 64);//console log
}
Add_Numbers_1();//Function
Add_Numbers_2();//Function

document.write("<br>");//Separation between codes

function get_Date() {//Defining a function
    if (new Date().getHours() <18 ) {//If statement
        document.getElementById("Hello").innerHTML = "Hello, How are you doing today?";//Output of if statement
    }
}

document.write("<br>");//Separation of codes

function Numbers() {//Defining a function
    if (8 < 16) {//If Statement
        document.getElementById("Numbers").innerHTML = "The number on the right is greater than the number on the left!";//output of if statement
    }
}

function Over_Age_Function()  {//Defining a function
    Age = document.getElementById("Over_Age").value ;//Defining a value
    if (Age >= 21) {//If statement
        Drink = "You are old enough to drink alcohol!";//Output If "if" statement is true
    }
    else {//Else Statement
        Drink = "You are not old enough to drink alcohol!";//Output if else statement is true
        
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;//Result
}