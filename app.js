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

const emailCard = document.getElementById('email-card');

if (emailCard) {
    emailCard.addEventListener('click', (e) => {
        // Copy the email to the clipboard automatically
        navigator.clipboard.writeText('systematicoapp@gmail.com');
        
        // Find the action text span and change it temporarily
        const actionText = emailCard.querySelector('.contact-card__action-text');
        const originalText = actionText.innerHTML;
        
        actionText.innerHTML = 'Copied to clipboard! ✓';
        actionText.style.color = '#10B981'; // Optional: changes text to a success green
        
        // Reset the text back to normal after 2.5 seconds
        setTimeout(() => {
            actionText.innerHTML = originalText;
            actionText.style.color = ''; 
        }, 2500);
    });
}