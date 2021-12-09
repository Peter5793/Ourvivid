const scriptURL = 'https://script.google.com/home/projects/1CM0ZtPcZae87pqnB1SE9ByK-w84wzQR91bwEKz7MZBiNQGi8KzFgiYis/edit'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })