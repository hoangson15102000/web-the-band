const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.modal');
const closeBtns = document.querySelector('.btn-close-footer');
const closeBtns2 = document.querySelector('.close-btn');
console.log(closeBtns, closeBtns2);

console.log(buyBtns);
function removeClass() {
    modal.classList.remove('open')
}
function handleClick() {
    modal.classList.add('open')
    console.log('122112');
}

for (const btn of buyBtns) {
    btn.addEventListener('click', handleClick)
}

closeBtns.addEventListener('click', removeClass)
closeBtns2.addEventListener('click', removeClass)


