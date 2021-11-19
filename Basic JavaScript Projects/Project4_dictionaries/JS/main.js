function my_Dictionary() { //Defining a function my-Dictionary
    var Movies = { // Defining a variable 
        Type:"Comedy",//Defining a KVP
        Rating: "R",//Defining a KVP
        Length: ">2hrs",// Defining a KVP
        Year: "After 2000",//Defining a KVP
        Actor: "Melissa McCarthy"//Defining a KVP
    };
    delete Movies.Actor;//Deleting a KVP form dictionary
    document.getElementById("Dictionary").innerHTML = Movies.Actor;// The output of the function

}