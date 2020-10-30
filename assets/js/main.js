let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

const target = document.getElementById('skill');
const start = 0;
const endProjects = 548;
const endHours = 1475;
const endFeed = 612;
const endClients = 735;
let animateFigures = true

li.forEach(el => {
    el.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    })
});

function animateValue(id, start, end, duration, animateFigures) {
    if (animateFigures) {
        if (start === end) return;
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range * 100));
        console.log(stepTime)
        let obj = document.getElementById(id);
        let timer = setInterval(() => {
            current += increment;
            obj.innerHTML = current;
            if (current === end)
                clearInterval(timer);
        }, stepTime);
    }
}

document.addEventListener('scroll', () => {
    if (window.scrollY >= target.getBoundingClientRect().bottom) {
        animateValue("projects", start, endProjects, 70, animateFigures);
        animateValue("hours", start, endHours, 5, animateFigures);
        animateValue("feed", start, endFeed, 50, animateFigures);
        animateValue("clients", start, endClients, 70, animateFigures);
        animateFigures = false;
    }
});