function myFunction() {  // Defining a Function and naming it
    var sentence = "One of my favorite places "; //Defining a variable
    sentence += " to travel to is Italy!";// Using an += operator to concatenate the string
    document.getElementById("Concatenate").innerHTML = sentence;//Putting the value of the sentence into HTML element with "Concatenate" id
}