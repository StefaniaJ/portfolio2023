"use strict";
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('div ul li a');
let mobileNavLinks = document.querySelectorAll('nav ul li a');

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


// When you scroll down 20px from the top of the page,you can see the button
// Inspiration: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
window.onscroll = () => {
    scroll();

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        // console.log(id);
    
    
    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('div ul li a[href*=' + id + ']').classList.add('active');
        });

        mobileNavLinks.forEach(mobLinks => {
            mobLinks.classList.remove('active-mobile');
            document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active-mobile');
        });

        closeNav();
    };
        });
};

function scroll() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("btn-top").style.display = "block";
    } else {
        document.getElementById("btn-top").style.display = "none";
    }
}

// When you click on the button,you will see the top of the page
function topFunction() {
    document.documentElement.scrollTop = 0;
}


function scrollDownFunction(){
    document.documentElement.scrollTop = 600;
}
