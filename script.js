
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const sections = document.querySelectorAll('section, header');
            const navLinks = document.querySelectorAll('.links a');

            // 1. Change Header Background on Scroll
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // 2. Highlighting Active Section
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });