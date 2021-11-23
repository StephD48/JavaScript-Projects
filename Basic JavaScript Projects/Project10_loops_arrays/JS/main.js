var X = 175;//assiging a variable
document.write(X);// code return 
{
    let X = 54;//let keyword
    document.write("<br>" + X);//code return

}
document.write("<br>" + X);//code return



function Call_Loop() {//definging a function
    var digit = "";//assigning a variable
    var Y = 4;//assigning a variable
    while (Y < 30) {//while loop
        digit += "<br>" + Y;
        Y++;
    }
    document.getElementById("Loop").innerHTML = digit;//output
}

function String_Length() {//defining a function
    var text = "How long is this string?";//assigning a variable
    var length = text.length;//assigning a variable
    document.getElementById("Length").innerHTML = length;//return
}

var Instruments =["Piano","Oboe","Clarinet","Fiddle","Saxaphone","French Horn","Chello"];//assigning a variable
var Content = "";//assigning a variable
var I;//assigning a variable
function for_Loop() {//defining a function
    for (I = 0; I < Instruments.length; I++) {//for statement 
    Content += Instruments[I] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;//return
}

function array_Function() {//defining an array function
    var Travel_Picture = [];//assigning a variable
    Travel_Picture[0] = "Vietnam";//object in the array
    Travel_Picture[1] = "Africa";//object in the array
    Travel_Picture[2] = "England";//object in the array
    Travel_Picture[3] = "France";//object in the array
    document.getElementById("Array").innerHTML = "This is a picture, of a trip I took to " + Travel_Picture[3] + ".";//output of code
}

function constant_function() {//defining a function
    const Sports_Car = {type:"two-door", brand: "Ford", color: "red", year:1975 };//constant
    Sports_Car.color = "blue" ;//changing the color value
    Sports_Car.transmission = "manual";//adding property and value
    document.getElementById("Constant").innerHTML = "The best type of sports car is " + Sports_Car.color + " with a  " + Sports_Car.transmission + " transmission, built in " + Sports_Car.year;//code return
}



let dog = {//assigning a let keyword
    breed: "Golden Retriever",//assigning properties a value
    color: "brown fur",
    age: "3yrs old ",
    sound: "bark! ",
    description : function() {//method 
        return "My new dog is a  " + this.breed + ". He is " + this.age + "with " + this.color + " and likes to " + this.sound;
    }
};
document.getElementById("Dog_Object").innerHTML = dog.description();//return




