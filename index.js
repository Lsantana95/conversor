function ConverterTemp() {

    let valorElemento = document.getElementById("valor")
    let valorGraus = document.getElementById(valorElemento.value)

    let TempFahrenheit = (valorGraus * 9) / 5 + 32
    let TempKelvin = valorGraus + 273.15

    let elementoFahrenheit = document.getElementById("valorConvertido")
    let elementoKelvin = document.getElementById("valorConvertido1")

    elementoFahrenheit.innerHTML =  `O valor em ºF = ${TempFahrenheit}`
    elementoKelvin.innerHTML = `O valor em K = ${TempKelvin}`

}