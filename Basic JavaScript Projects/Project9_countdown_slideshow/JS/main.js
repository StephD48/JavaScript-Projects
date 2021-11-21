function countdown() { //Defining a Function
    var seconds = document.getElementById("seconds").value ; //Assigning a variable

    function tick() { //Defining a function 
        seconds = seconds -1; //assigning a value to seconds
        timer.innerHTML = seconds; // assigning a value to timer in HTML
        var time = setTimeout(tick, 1000); //Assigning a variable to time
        if (seconds == -1) { //Creating an IF statement
            alert("Time's up!") ;//Setting an alert statement
            clearTimeout(time); //Resetting the time
            timer.innerHTML = "";//Timer in  HTML output
        }
    }
    tick();//Function tick 
}

var slideIndex = 1;//Assigning a variable
showSlides(slideIndex);


function plusSlides(n) {//Defining a function for Next/Previous Controls
  showSlides(slideIndex += n);
}


function currentSlide(n) {//Defining a Function for the Thumbnail Control
  showSlides(slideIndex = n);
}

function showSlides(n) {//Defining a Function 
  var i;//Assigning a variable
  var slides = document.getElementsByClassName("mySlides");//Assigning a variable for slides
  var dots = document.getElementsByClassName("dot");//Assigning a variable for dots
  if (n > slides.length) {slideIndex = 1}//If Statement
  if (n < 1) {slideIndex = slides.length}//If Statement
  for (i = 0; i < slides.length; i++) {//For Statement
      slides[i].style.display = "none";// Output of For Statement
  }
  for (i = 0; i < dots.length; i++) {//For Statement
      dots[i].className = dots[i].className.replace(" active", "");//Output of For Statement
  }
  slides[slideIndex-1].style.display = "block";//Display of slides
  dots[slideIndex-1].className += " active";//Display of dots
}