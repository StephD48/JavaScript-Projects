function Ride_Function() { //Defining a function
    var Height, Can_ride;//Defining a Variable
    Height = document.getElementById("Height").value ;//Defining a value
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";//Result depending on height input
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";//Result when you click the button
}

function Vote_Function() {//Defining a function
    var Age, Can_Vote;//Defining a Variable
    Age = document.getElementById("Age").value ;//Defining a value
    Can_Vote = (Age < 18) ? "You are too young to vote":"You are old enough to vote";//Result depending on age input
    document.getElementById("Vote").innerHTML = Can_Vote;//Result whe you click the button
}

document.write("<br>"); //Separating lines of code

function Vehicle(Make, Model, Year, Color) { // Assigning a Function 
    this.Vehicle_Make = Make;// defining a this object constructor
    this.Vehicle_Model = Model;//defining a this object constructor
    this.Vehicle_Year = Year;//defining a this object constructor
    this.Vehicle_Color = Color;//defining a this object constructor
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//Assiging a Variable
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and the Black");//Assigning a Variable
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");///Assigning a variable
function myFunction() {//Defining a function
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "manufactured in " + Erik.Vehicle_Year;//output  of the function 
}

function Movie(Genres, Year, Rating, Actor) {//Assiging a Function
    this.Movie_Genres = Genres;//defining a this object constructor
    this.Movie_Year = Year;//defining a this object constructor
    this.Movie_Rating = Rating;//defing a this object constructor
    this.Movie_Actor = Actor;//defining a this object constructor
}
var Titanic = new Movie("Drama", 1997, "PG-13", "Kate Winslet");//Assigning a Variable
var Notebook  = new Movie("Drama", 2004, "PG-13", "Rachel McAdams");//Assigning a variable
var Dune = new Movie("Sci-Fi", 2021, "PG-13", "Timothee Chalamet");//Assigning a variable
function myFunction2() {//Defining a Function
    document.getElementById("New_and_This").innerHTML = "The main actor is " + Dune.Movie_Actor;// output of the function
}

function adding_Function() { //Defining a Function
    document.getElementById("Nested_Function").innerHTML = Add () ;//Calling the function
    function Add() {//Defining a function
        var Starting_point = 25;//Defining a variable
        function Plus_five() {Starting_point += 5;}//Defining a nested function
        Plus_five() ;//The nested function
        return Starting_point;//output of the functions
    }

}