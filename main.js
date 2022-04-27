async function pictureButtonHandler() {
    const pictureInput = document.querySelector('input')
    const url = 'https://api.unsplash.com/search/photos/?client_id=U593A96VvuX0wAYUrayYqBHxwVyASPltFOBkKrSctLk&query=' + pictureInput.value
    console.log(url)
        const span = document.getElementById ('errorMessage')

    try {
        span.innerText = ''
        const response = await fetch(url)
        const data = await response.json()
        const randomNumber = Math.floor(Math.random() * data.results.length);
        console.log(data.results[randomNumber].alt_description)
        document.querySelector('h2').innerText = data.results[randomNumber].alt_description
        document.querySelector('img').src = data.results[randomNumber].urls.regular

    } catch (error) {
        span.innerText = 'Sorry Server Not Responding Try Again Later!'
        console.log('API Failed', error)
    }
}

const pictureButton = document.querySelector('button')
pictureButton.addEventListener('click', pictureButtonHandler)

