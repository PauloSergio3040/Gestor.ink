/*ScrollReveal é uma biblioteca JavaScript para animar facilmente elementos 
conforme eles entram/sai da janela de visualização.*/


ScrollReveal({
    reset: true,
    distance: '80px', 
    duration: 1600,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portifolio-box, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });