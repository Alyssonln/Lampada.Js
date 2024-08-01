const btnLigar = document.getElementById('btn-ligar')
const btnDesligar = document.getElementById('btn-desligar')
const imgLampada = document.getElementById('lampada')

function ligar() { 
  if (!verificar()) {
    imgLampada.src = "./img/lampada-acesa.png"
  }
}
btnLigar.addEventListener('click', ligar)
imgLampada.addEventListener('mouseover', ligar)

function desligar() {
  if (!verificar()) {
    imgLampada.src = "./img/lampada-apagada.png"
  }
}
btnDesligar.addEventListener('click', desligar)
imgLampada.addEventListener('mouseleave', desligar)

function quebrar() {
  imgLampada.src = "./img/lampada-quebrada.png"
}
imgLampada.addEventListener('dblclick', quebrar)

function verificar() {
  return imgLampada.src.indexOf('lampada-quebrada') > -1
}