async function pictureButtonHandler() {
    const pictureInput = document.querySelector('input')
    const url = 'https://api.unsplash.com/search/photos/?client_id=U593A96VvuX0wAYUrayYqBHxwVyASPltFOBkKrSctLk&query=' + pictureInput.value

    const response = await fetch(url)
    const data = await response.json()
    document.querySelector('h2').innerText = data.results[0].alt_description
}

const pictureButton = document.querySelector('button')
pictureButton.addEventListener('click', pictureButtonHandler)

