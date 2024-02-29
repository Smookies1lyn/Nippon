       

/* Variabler */
let kant = document.querySelectorAll(".griditem_menu");
let tilpasKnap = document.querySelectorAll(".tilpas_knap");



/* VISER KANT - MENU */
kant.forEach(function(element) {
    element.addEventListener("click", visBorder);
});

function visBorder() {
    this.style.border = "10px solid #F8CBA1";
}



/* VISER NY FARVE- TILPAS */
tilpasKnap.forEach(function(element) {
    element.addEventListener("click", nyFarve);
});

function nyFarve() {
    this.style.backgroundColor = "#F8CBA1";
}



/* ANIMATIONS */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');            
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.tilpas_container');
hiddenElements.forEach((el) => observer.observe(el));