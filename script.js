// Selection of HTML objects
const bar = document.querySelector('.bar i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav() {
    bar.classList.toggle('fa-bars');
    bar.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
 }

// Calling the function after click event occurs
bar.addEventListener('click', function() {
    toggleNav();
});