let text = document.getElementById('text');
let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    pic2.style.top = value * -0.2 + 'px';
    pic3.style.left = value * 0.4 + 'px';

});