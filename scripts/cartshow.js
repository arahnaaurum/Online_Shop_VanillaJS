'use strict';

const cartInfo = document.querySelector(".cart_info") //всплывающее окно
const cartIcon = document.querySelector(".cart_icon") //элемент корзины в меню

cartIcon.addEventListener('mouseenter', function(event) {
    cartInfo.classList.toggle('hidden');
})
cartIcon.addEventListener('mouseleave', function(event) {
    cartInfo.classList.toggle('hidden');
})

