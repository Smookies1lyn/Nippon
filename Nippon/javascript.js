        
        let scrollcontainer = document.querySelector(".slideshow");
        let tbKnap = document.getElementById("tbKnap");
        let fremKnap = document.getElementById("fremKnap");
    
        tbKnap.addEventListener("click", ()=>{ scrollcontainer.style.scrollBehavior = "smooth";
            scrollcontainer.scrollLeft += 350; // Corrected this line
        });
    
        fremKnap.addEventListener("click", ()=>{
            scrollcontainer.scrollLeft -= 350; // This line was correct
        });
    
     //   function changeimage(image, isHovering) {
   // if (isHovering) {
   //     image.src = image.getAttribute('data-hover');
     //   image.style.width = '400px';
       // image.style.height = '400px';
    // } else {
       // image.src = image.getAttribute('data-original');
       // image.style.width = 'originalWidth';
        // image.style.height = 'originalHeight';
    //}
//}

document.addEventListener('DOMContentLoaded', function() {
    const kasses = document.querySelectorAll('.kasse1, .kasse2, .kasse3, .kasse4');

    kasses.forEach(function(kasse) {
        kasse.addEventListener('mouseenter', function() {
            // Set opacity to 100% for a solid color
            this.style.opacity = '1';

            // Apply specific box-shadow color based on the class
            if (this.classList.contains('kasse1')) {
                this.style.boxShadow = '10px 10px #859049'; // Example shadow color for kasse1
            } else if (this.classList.contains('kasse2')) {
                this.style.boxShadow = '10px 10px #ACA45D'; // Example shadow color for kasse2
            } else if (this.classList.contains('kasse3')) {
                this.style.boxShadow = '10px 10px #9E7E61'; // Example shadow color for kasse3
            } else if (this.classList.contains('kasse4')) {
                this.style.boxShadow = '10px 10px #918147'; // Example shadow color for kasse4
            }
        });

        kasse.addEventListener('mouseleave', function() {
            // Reset styles on mouse leave
            this.style.opacity = ''; // Or set to the initial opacity if not 100%
            this.style.boxShadow = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const kasses = document.querySelectorAll('.picKnap');

    kasses.forEach(function(picKnap) {
        picKnap.addEventListener('mouseenter', function() {
            // Set opacity to 100% for a solid color
            this.style.opacity = '1';

            // Apply specific box-shadow color based on the class
            if (this.classList.contains('picKnap')) {
                this.style.boxShadow = '10px 10px #859049'; // Example shadow color for kasse1
            }
        });

        picKnap.addEventListener('mouseleave', function() {
            // Reset styles on mouse leave
            this.style.opacity = ''; // Or set to the initial opacity if not 100%
            this.style.boxShadow = '';
        });
    });
});





