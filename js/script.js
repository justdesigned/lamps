'use strict'

const btns = document.querySelectorAll('.product-selection__item');
    

function hideLamps(classname) {
    const lamps = document.querySelectorAll(classname);
    lamps.forEach(e => {
        e.classList.remove('show');
        e.classList.add('hide');
    })
}

hideLamps('.image__lamp');
hideLamps('.product__image');
showLamps('.image__lamp', 0);
showLamps('.product__image', 0);


function showLamps(classname, i) {
    const lamps = document.querySelectorAll(classname);
    lamps[i].classList.add('show');
}

btns.forEach((e, i) => {
    e.addEventListener('click', () => {
        console.log(i);
        hideLamps('.image__lamp');
        showLamps('.image__lamp', i);
        hideLamps('.product__image');
        showLamps('.product__image', i);
    })
})

const switchNight = document.querySelector('.switch--night'),
    switchDay = document.querySelector('.switch--day'),
    imageOverflow = document.querySelector('.image__overflow');

switchNight.addEventListener('click', ()=>{
    imageOverflow.classList.remove('hide');
    imageOverflow.classList.add('show');
});

switchDay.addEventListener('click', ()=>{
    imageOverflow.classList.remove('show');
    imageOverflow.classList.add('hide');
});