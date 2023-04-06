const footerButton = document.querySelector('.footerSend')
let footerInput = document.querySelector('.infoinput')

footerButton.addEventListener('click', function(){
    if (footerInput.value != ''){
        window.location.href = 'subscribtion.html'
    }

})

