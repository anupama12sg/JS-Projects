const body = document.getElementsByTagName("body")[0]

function setColour(name) {
    body.style.backgroundColor = name;
}

function randomColour() {
    const green = Math.round(Math.random() * 255)
    const red = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const colour = `rgb(${green}, ${red}, ${blue})`
    body.style.backgroundColor = colour;
}

