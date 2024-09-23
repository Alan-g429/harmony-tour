document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Initially hide all sections except for Home
    sections.forEach(section => {
        section.classList.add('hidden'); // Hide all sections
    });
    document.getElementById('home').classList.remove('hidden'); // Show Home section by default

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = link.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Find the target section

            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show the clicked section
            targetSection.classList.remove('hidden');

            // Scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
