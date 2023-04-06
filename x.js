const footerButton = document.querySelector('.footerSend')
let footerInput = document.querySelector('.infoinput')
let SubscribedMail = document.querySelector('.subscribedContent')

footerButton.addEventListener('click', function(){
    if (footerInput.value != ''){
        window.location.href = 'subscribtion.html'
    }

})

