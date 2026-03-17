// Mobile Menu Toggle

const mobileMenu = document.getElementById('mobile-menu');

const navLinks = document.getElementById('nav-links');



mobileMenu.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    // Change icon based on state

    if (navLinks.classList.contains('active')) {

        mobileMenu.innerHTML = '✕'; // Close icon

    } else {

        mobileMenu.innerHTML = '☰'; // Hamburger icon

    }

});


// 2. Active Link Highlighting (For separate HTML pages)
const currentPath = window.location.pathname.split("/").pop(); 

// If the path is empty (homepage), set it to index.html
const activePage = currentPath === "" ? "index.html" : currentPath;

document.querySelectorAll('.nav-links a').forEach(link => {
    // Check if the link's href matches the current page name
    if (link.getAttribute('href') === activePage) {
        link.classList.add('active');
    }
});




// Smooth page transition effect for links

document.querySelectorAll('a[href^=""]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const target = this.getAttribute('href');

       

        // Only apply transition to internal pages, not email links or external

        if(target && !target.startsWith('mailto:') && !target.startsWith('http')) {

            e.preventDefault();

            document.body.style.animation = 'fadeIn 0.1s ease-in-out reverse forwards';

           

            setTimeout(() => {

                window.location.href = target;

            }, 200); // Wait for the fade-out animation to finish

        }

    });

});