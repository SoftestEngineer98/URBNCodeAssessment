async function pictureButtonHandler() {
    const pictureInput = document.querySelector('input')
    const url = 'https://api.unsplash.com/search/photos/?client_id=U593A96VvuX0wAYUrayYqBHxwVyASPltFOBkKrSctLk&query=' + pictureInput.value

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

const pictureButton = document.querySelector('button')
pictureButton.addEventListener('click', pictureButtonHandler)

