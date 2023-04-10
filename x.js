//добавить в избранное

const addToFavourites = document.querySelectorAll('.heart')
for (const fav of addToFavourites) {
    fav.addEventListener('click', () => {
         fav.classList.toggle('activeHeart')
    })
}




// переход на страницу подписки при заполненном инпуте

const footerButton = document.querySelector('.footerSend')
let footerInput = document.querySelector('.infoinput')

footerButton.addEventListener('click', function(){
    if (footerInput.value != ''){
        window.location.href = 'subscribtion.html'
    }

})

//burger menu
const buttonBurger = document.querySelector(".menu_burger");
const menu = document.querySelector(".menu");
const categories = document.querySelector(".categories");

buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('active')
    menu.classList.toggle('active')
    categories.classList.toggle('active')
})

//slider для меню
const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('mouseover', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

// рандомное добавление продуктов в класс "просмотренное"