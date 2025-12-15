// Smooth scroll for hero button
const heroBtn = document.querySelector('.hero .btn');

heroBtn.addEventListener('click',function(e){
    e.preventDefault();

    //Smooth Scroll
    const projectSection = document.querySelector('#projects');
    projectSection.scrollIntoView({behavior:'smooth'});

    //Bounce Effect
    heroBtn.style.transform = "scale(1.1)";
    setTimeout(() => {
        heroBtn.style.transform = "scale(1)";
    }, 150);
});

// Select all sections to reveal
const sections = document.querySelectorAll('section');

// Create observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
