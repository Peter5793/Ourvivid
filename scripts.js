const scriptURL = 'https://script.google.com/macros/s/AKfycbwoVaI2YcXVoGeJ9VRB1YK80aIi-UJIpB__zOS5dp06WvNRlKGPwvYw0b04t0nSl49Z/exec'
const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
})