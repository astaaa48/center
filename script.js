console.log("lol hhh")
        // Mobile menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', function () {
            document.querySelector('nav ul').classList.toggle('active');
        });

        // Gallery view functionality
        document.addEventListener('DOMContentLoaded', function () {
            const mainContent = document.getElementById('main-content');
            const galleryContainer = document.getElementById('gallery-container');
            const galleryButtons = document.querySelectorAll('.activity-btn');
            const returnButtons = document.querySelectorAll('.return-btn');

            // Initialize - hide all galleries
            const galleries = document.querySelectorAll('.gallery');
            galleries.forEach(gallery => {
                gallery.style.display = 'none';
            });
            galleryContainer.style.display = 'none';

            // Add click event to "View Gallery" buttons
            galleryButtons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Get the gallery ID from data attribute
                    const galleryId = this.getAttribute('data-gallery');

                    // Hide main content
                    mainContent.style.display = 'none';

                    // Show gallery container
                    galleryContainer.style.display = 'block';

                    // Hide all galleries first
                    galleries.forEach(gallery => {
                        gallery.style.display = 'none';
                    });

                    // Show the selected gallery
                    document.getElementById(galleryId + '-gallery').style.display = 'block';

                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            // Add click event to "Return to Main Page" buttons
            returnButtons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Hide gallery container
                    galleryContainer.style.display = 'none';

                    // Show main content
                    mainContent.style.display = 'block';

                    // Scroll to activities section
                    const activitiesSection = document.querySelector('.activities');
                    activitiesSection.scrollIntoView({ behavior: 'smooth' });
                });
            });
        });

 