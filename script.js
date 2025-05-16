document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO MENU MOBILE ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('#primary-navigation');
    const iconHamburger = mobileNavToggle.querySelector('.icon-hamburger');
    const iconClose = mobileNavToggle.querySelector('.icon-close');

    mobileNavToggle.addEventListener('click', () => {
        const isVisible = primaryNav.getAttribute('data-visible') === 'true';
        
        if (isVisible) {
            primaryNav.setAttribute('data-visible', 'false');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            iconHamburger.style.display = 'block';
            iconClose.style.display = 'none';
        } else {
            primaryNav.setAttribute('data-visible', 'true');
            mobileNavToggle.setAttribute('aria-expanded', 'true');
            iconHamburger.style.display = 'none';
            iconClose.style.display = 'block';
        }
    });

    // Fechar o menu ao clicar em um link
    primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (primaryNav.getAttribute('data-visible') === 'true') {
                primaryNav.setAttribute('data-visible', 'false');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                iconHamburger.style.display = 'block';
                iconClose.style.display = 'none';
            }
        });
    });


    // --- LÓGICA DAS ANIMAÇÕES AO ROLAR (SCROLL REVEAL) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcional: parar de observar depois que a animação ocorreu
                    // observer.unobserve(entry.target); 
                } else {
                    // Opcional: remover a classe se quiser que a animação ocorra toda vez que rolar para dentro/fora
                    // entry.target.classList.remove('is-visible'); 
                }
            });
        }, {
            rootMargin: '0px', 
            threshold: 0.1  
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
});