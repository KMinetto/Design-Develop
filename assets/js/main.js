let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

const target = document.getElementById('skill');
const start = 0;
const endProjects = 548;
const endHours = 1475;
const endFeed = 612;
const endClients = 735;


li.forEach(el => {
    el.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    })
});

function animateValue(id, start, end, duration) {
    if (start === end) return;
    let range = end - start;
    let current = start;
    let increment = end > start ? 1: -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current;
        if (current === end)
            clearInterval(timer);
    }, stepTime);
}

document.addEventListener('scroll', () => {
    if (window.scrollY >= target.getBoundingClientRect().top) {
        animateValue("projects", start, endProjects, 500);
        animateValue("hours", start, endHours, 5);
        animateValue("feed", start, endFeed, 500);
        animateValue("clients", start, endClients, 500);
    }
});