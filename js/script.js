let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () =>{
    menu.classList.toggle('la-bars');
    navlist.classList.toggle('.open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.comeback', {delay:200, origin:'top'});
sr.reveal('.artwork img', {delay:200, origin:'top'});