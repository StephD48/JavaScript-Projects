function Sentence_1() {//Defining a function
    var part_1 = "This is ";//assigining a variable
    var part_2 = "my example ";//assigning a variable
    var part_3 = "of a concatenated ";//assigning a variable
    var part_4 = "sentence for this assignment.";//assigning a variable
    var whole_concatenated_sentence = part_1.concat(part_2, part_3, part_4);//assiging the concat() method
    document.getElementById("My Sentence").innerHTML = whole_concatenated_sentence;//output of the concatenation
}

function slice_Method() {//Defining a Function
    var Sentence = "I would like to travel to Africa some day soon! ";//Assiging a variable
    var Section = Sentence.slice(25,32);//Assiging a variable for the sliced section
    document.getElementById("Slice_1").innerHTML = Section;//The output after the sliced section  
}

function uppercase_Method() {//Defining aFunction
    var str  = 'how do we make this sentence uppercase?' ; //Assigning a  string variable
    var string = str.toUpperCase();//assigning a variable to the string
    document.getElementById("uppercase").innerHTML = string;//the result displayed in uppercase
}

function search_Method() {//Defining a function
var text = "My name is Stephanie and I live in Portland, Oregon";//Defining a variable
var position = text.search("Portland");//assiging a variable position
document.getElementById("search").innerHTML = position;//Output result
}

function string_Method_1() { //Defining a Function
    var Y =567;//Assiging a variable
    document.getElementById("Number_string").innerHTML = Y.toString();//output result
}

function Precision_Method1() {//Defining a function
    var P = 34668.9784301743767840305; //Assigning a variable
    document.getElementById("precision_example").innerHTML = P.toPrecision(15); // Output result
}

function Value_Method() { //Assigning a function
    var text = "Happy Birthday!" ;//Assiging a variable
    var result = text.valueOf();//assingning the result of the variable
    document.getElementById("value of").innerHTML = result;//output result
}

function Fixed() { //Defining a function
    var num = 7.894532; //Assigning a variable
    var n = num.toFixed(3);//assigning the result of the variable
    document.getElementById("Fixed").innerHTML = n;//Output Result

}