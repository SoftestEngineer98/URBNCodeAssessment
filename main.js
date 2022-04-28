async function pictureButtonHandler() {
    const pictureInput = document.querySelector('input')
    const url = 'https://api.unsplash.com/search/photos/?client_id=U593A96VvuX0wAYUrayYqBHxwVyASPltFOBkKrSctLk&query=' + pictureInput.value
    console.log(url)
    const span = document.getElementById('errorMessage')

    try {
        span.innerText = ''
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if (data.results.length === 0) {
            document.querySelector('h2').innerText = ''
            document.querySelector('img').src = ''
            span.innerText = 'No results found for search'
            console.log('No results')
        } else {
            const randomNumber = Math.floor(Math.random() * data.results.length);
            console.log(data.results[randomNumber].alt_description)
            document.querySelector('h2').innerText = data.results[randomNumber].alt_description
            document.querySelector('img').src = data.results[randomNumber].urls.regular
        }

    } catch (error) {
        document.querySelector('h2').innerText = ''
        document.querySelector('img').src = ''
        span.innerText = 'Sorry Server Not Responding Try Again Later!'
        console.log('API Failed', error)
    }
}

const pictureButton = document.querySelector('button')
pictureButton.addEventListener('click', pictureButtonHandler)

pictureInput.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn").click();
    }
});