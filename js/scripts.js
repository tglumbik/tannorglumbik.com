console.log('Ok');

// this works for only the first class item
const trigger = document.querySelector('.portfolioItem');
const target = document.querySelector('.portfolioItemText');
const targetTwo = document.querySelector('.portfolioItemBG')

trigger.addEventListener('click', () => {
    target.classList.toggle('portfolioOverlayText');
    targetTwo.classList.toggle('portfolioOVerlayBG');
})


