//добавить в избранное

const addToFavourites = document.querySelector('.heart')

addToFavourites.addEventListener('click', function() {
    addToFavourites.classList.toggle("activeHeart");
});



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


