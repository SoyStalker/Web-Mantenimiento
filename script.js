const botones = document.querySelector("#boton")

const stalker = document.querySelector("#stalker")

const cuadrado = document.querySelector("#clase")

const icon = document.querySelector("#icon1")

const icon1 = document.querySelector("#icon2")

const linea = document.querySelector("#linea")

botones.addEventListener('click', () => {
    document.body.classList.toggle('white')

    botones.classList.toggle('active')

    stalker.classList.toggle('white')

    cuadrado.classList.toggle('white')

    icon.classList.toggle('white')

    icon1.classList.toggle('white')

    linea.classList.toggle('white')
})