let sIndex = 0;
function nextSlide(n) { /*fonction pour passer à l'image suivante*/
    sIndex = sIndex +  n;
    displaySlide();
}


let auto= setInterval(nextSlide, 8000,1);
    

function displaySlide() {   /*fonction pour afficher les images du diaporama*/
    let i;
    let slides = document.getElementsByClassName("slides");

    if (sIndex >= slides.length) {
        sIndex = 0;

    }
        
    
    if (sIndex < 0) {
        sIndex = slides.length - 1
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[sIndex].style.display = "block";
    
}

function cach(){
    document.getElementById("dson").style.display = "block";
}

