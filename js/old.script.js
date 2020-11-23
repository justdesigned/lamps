'use strict';

const btns = document.querySelectorAll('.product-selection__item');

function hideLamps(classname) {
    const lamps = document.querySelectorAll(classname);
    lamps.forEach(e => {
        e.classList.remove('show');
        e.classList.add('hide');
    });
}

hideLamps('.image__lamp');
hideLamps('.product__image');
showLamps('.image__lamp', 0);
showLamps('.product__image', 0);


function showLamps(classname, i) {
    const lamps = document.querySelectorAll(classname);
    lamps[i].classList.remove('hide');
    lamps[i].classList.add('show');
    
}

btns.forEach((e, i) => {
    e.addEventListener('click', () => {
        console.log(i);
        hideLamps('.image__lamp');
        showLamps('.image__lamp', i);
        hideLamps('.product__image');
        showLamps('.product__image', i);
        showDescr(i);
    });
});

const imageOverflow = document.querySelector('.image__overflow'),
    switchers = document.querySelectorAll('.switch');

function animateClick(parentSelector) {   
    const elements = document.querySelectorAll(parentSelector);
    
    elements.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.add('active');
            btn.addEventListener("animationend", (e) => {
                if (e) {
                    btn.classList.remove('active');
                }
            });
        });
    });
}

animateClick('.switch');

animateClick('.product-selection__item');

switchers.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.getAttribute('data-night') === 'on') {
            imageOverflow.classList.remove('image__overflow--fadeOut');
            imageOverflow.classList.add('image__overflow--fadeIn');
        } else {
            imageOverflow.classList.remove('image__overflow--fadeIn');
            imageOverflow.classList.add('image__overflow--fadeOut');
        }
    });
});

const productField = document.querySelectorAll('.product-descr__field'),
    lampsDescr = {
        descr: ['H 33 x W 15 x D 15', 'H 31 x W 17 x D 19', 'H 33 x W 11 x D 20'],
        material: ['Copper', 'Metal', 'Plastic'],
        weight: ['2.5kg', '2.7kg', '3kg'],
        electr: ['LED 10W | G9 | 220-240V | 50 Hz', 'LED 10W | G9 | 220-240V | 50 Hz']
    };


function showDescr(i) {
    productField.forEach(e => {
        let span = document.createElement('span');
        if (e.textContent.match('D')){
            span.textContent = lampsDescr.descr[i];
            e.append(span);
        } else if (e.textContent.match('M')){
            span.textContent = lampsDescr.material[i];
            e.append(span);
        } else if (e.textContent.match('N')){
            span.textContent = lampsDescr.weight[i];
            e.append(span);
        } else if (e.textContent.match('E')){
            span.textContent = lampsDescr.electr[i];
            e.append(span);
        }
    });
}


// H 33 x W 15 x D 15
// Copper
// 2,5 kg
// LED 10W | G9 | 220-240V | 50 Hz