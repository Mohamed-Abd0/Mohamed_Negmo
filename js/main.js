
// show and hide the side bar 
let toggle_button = document.getElementById('menu');
let close = document.getElementById('close');
let side_bar = document.getElementById('side-bar');

toggle_button.addEventListener('click', ()=>{
    side_bar.classList.add('show')
})

close.addEventListener('click' , () =>{
    side_bar.classList.remove('show')
})

// remove side bar on scrolling
window.addEventListener('scroll', function(){
    side_bar.classList.remove('show')
})



// to top buttom

let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

document.addEventListener('DOMContentLoaded', function() {
    const goTopButton = document.querySelector('[data-action="gotop"]');
    const windowViewPortHeight = window.innerHeight; // browser viewport height
    let isRequestingAnimationFrame = false;

    if (!goTopButton) {
    return;
    }

    goTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (!isRequestingAnimationFrame) {
            requestAnimationFrame(filterGoTopButtonVisibility);
            isRequestingAnimationFrame = true;
        }
    });

    function filterGoTopButtonVisibility(timestamp) {
        let windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
        if (windowPageYOffset > windowViewPortHeight) {
            goTopButton.classList.add('show');
            isRequestingAnimationFrame = false;
        } else {
            goTopButton.classList.remove('show');
            requestAnimationFrame(filterGoTopButtonVisibility);
        }
    }
})

