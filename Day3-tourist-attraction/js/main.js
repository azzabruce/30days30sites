  var slideIndex = 1; //
    slideShow(slideIndex);

function nextSlide(n){
    slideShow(slideIndex += n);
}

function currentSlide(n){
    slideShow(slideIndex = n);
}


function slideShow(n){
    
    var i ; // starting point for the slidshow
    var slides = document.getElementsByClassName("slides"); //select all elements with class "slides"
    var dot = document.getElementsByClassName("dot"); //select all elements with class "dot"
    
    
    if ( n > slides.length) {
        slideIndex = 1;
    } 
    
    if (n < 1) {
        slideIndex = slides.length;
    }   
    
    for (i = 0; i <dot.length; i++){
        slides[i].style.display = "none";
    }
    
    for ( i = 0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dot[slideIndex-1].className += " active";
    
}



