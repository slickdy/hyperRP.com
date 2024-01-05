// Close any open dropdowns when clicking elsewhere on the page
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Toggle the dropdown content when clicking on the dropdown button
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropbtn').forEach(function(dropbtn) {
        dropbtn.onclick = function() {
            this.nextElementSibling.classList.toggle('show');
        }
    });
});
// Example: JavaScript for a responsive menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    });
});
