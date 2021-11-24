function Fruit_Function() {//Defining a function
    var Fruit_Output;//Assigning a variable
    var Fruits = document.getElementById("Fruit_Input") .value;//Assigning a variable value
    var Fruit_String = " are a yummy fruit!";//Variable string output
    switch(Fruits) {//Assigning a switch statement
        case "Apples"://Assigning a case
            Fruit_Output = "Apples" + Fruit_String;//Output if this is the fruit chosen
        break;//stop running this function if this is the fruit chosen
        case "Oranges":
            Fruit_Output = "Oranges" + Fruit_String;
        break;
        case "Bananas":
            Fruit_Output = "Bananas" + Fruit_String;
        break;
        case "Pears":
            Fruit_Output = "Pears" + Fruit_String;
        break;
        case "Strawberries":
            Fruit_Output = "Strawberries" + Fruit_String;
        break;
        case "Blueberries":
            Fruit_Output = "Blueberries" + Fruit_String;
        break;
        case "Kiwi":
            Fruit_Output = "Kiwi" + Fruit_String;
        break;
        case "Star Fruit":
            Fruit_Output = "Star Fruit" + Fruit_String; 
        break;
        default:
        Fruit_Output = "Please enter a fruit exactly as written on the above list.";//Directions on input to the user
    }
    document.getElementById("Output").innerHTML = Fruit_Output;//Return Output
}

function Hello_World_Function() {//Defining a function
    var A = document.getElementsByClassName("Click");//assigning a variable
    A[0].innerHTML = "The sentence has changed!";//output
}


var c = document.getElementById("myCanvas");//Output of the linear gradient method
var ctx = c.getContext("2d");//assigning a variable
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170, 0);//Assiging a variable
my_gradient.addColorStop(0, "black");//assiging a color in my gradient
my_gradient.addColorStop(0.5, "red");//assigning a color in my gradient
my_gradient.addColorStop(1, "white");//assigning a color in my gradient
ctx.fillStyle = my_gradient;//setting the fill style to equal my gradient
ctx.fillRect(50, 50, 200, 100);//where the gradient will be in the canvas

