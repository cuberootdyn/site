/* Main JavaScript */
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    window.toggleMenu = function () {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'white';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        }
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Contact Form Handling
    window.openContactForm = function (planName) {
        const select = document.getElementById('interest');
        if (select) {
            select.value = planName;
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Production-Ready Form Submission
    window.handleFormSubmit = async function (e) {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        const successMsg = document.getElementById('form-success');
        const errorMsg = document.getElementById('form-error');

        // Hide previous messages
        if (successMsg) successMsg.style.display = 'none';
        if (errorMsg) errorMsg.style.display = 'none';

        // Show loading state
        btn.innerText = 'Sending...';
        btn.disabled = true;

        // Collect form data
        const formData = {
            fullName: form.querySelector('input[name="fullName"]')?.value || '',
            email: form.querySelector('input[name="email"]')?.value || form.querySelector('input[type="email"]')?.value || '',
            company: form.querySelector('input[name="company"]')?.value || '',
            industry: form.querySelector('select[name="industry"]')?.value || form.querySelector('.form-select')?.value || '',
            interest: form.querySelector('select[name="interest"]')?.value || '',
            challenges: form.querySelector('textarea[name="challenges"]')?.value || form.querySelector('textarea')?.value || ''
        };

        try {
            // TODO: Replace with your actual API endpoint when backend is deployed
            const API_ENDPOINT = 'https://api.cuberootdynamics.com/api/leads';
            
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Success
                if (successMsg) {
                    successMsg.style.display = 'block';
                    successMsg.textContent = 'Thank you! A security specialist will contact you within 24 hours.';
                } else {
                    alert('Thank you! A security specialist will contact you within 24 hours.');
                }
                form.reset();
                
                // Track conversion (Google Analytics)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'send_to': 'AW-CONVERSION_ID',
                        'value': formData.interest.includes('Enterprise') ? 3000 : 1500,
                        'currency': 'USD'
                    });
                }
            } else {
                throw new Error('Server returned error status');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Show error message
            if (errorMsg) {
                errorMsg.style.display = 'block';
                errorMsg.textContent = 'There was an error submitting your request. Please email us directly at security@cuberootdynamics.com';
            } else {
                alert('There was an error. Please email us at security@cuberootdynamics.com');
            }
        } finally {
            // Restore button state
            btn.innerText = originalText;
            btn.disabled = false;
        }
    }
});
