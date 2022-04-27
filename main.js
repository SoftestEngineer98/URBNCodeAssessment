function pictureButtonHandler() {
    const pictureInput = document.querySelector('input')
    console.log(pictureInput.value)
}

const pictureButton = document.querySelector('button')
pictureButton.addEventListener('click', pictureButtonHandler)

