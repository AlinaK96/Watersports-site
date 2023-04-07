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

