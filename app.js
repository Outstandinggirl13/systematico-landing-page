document.addEventListener('DOMContentLoaded', () => {
        const burgerBtn = document.querySelector('.header__burger-btn');
        const header = document.querySelector('.header');

        burgerBtn.addEventListener('click', () => {
            // Toggle the open class on the header
            header.classList.toggle('is-open');
            
            // Update the aria-expanded attribute for screen readers
            const isOpen = header.classList.contains('is-open');
            burgerBtn.setAttribute('aria-expanded', isOpen);
        });

        // Optional: Close the menu when a link is clicked
        const navLinks = document.querySelectorAll('.header__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('is-open');
                burgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    });

document.querySelectorAll('.faq-item__header').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        
        // Close other items (optional - remove if you want multiple open)
        document.querySelectorAll('.faq-item__header').forEach(btn => 
            btn.setAttribute('aria-expanded', 'false')
        );
        
        // Toggle current
        button.setAttribute('aria-expanded', !expanded);
    });
});