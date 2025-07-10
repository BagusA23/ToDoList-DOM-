//get elemen by id
const judul = document.getElementById('judul-utama')
console.log(judul)


//get elemeen by class
const semuaparagraf = document.getElementsByClassName('paragraf')
console.log(semuaparagraf)
console.log(semuaparagraf[0])


//get eleemen by tag
const semuatagp = document.getElementsByTagName('p')
console.log(semuatagp)

//gat elemen by selectro
const judul1 = document.querySelector('#judul-utama')
const paragrafpertama = document.querySelector('.paragraf')
const inputnama = document.querySelector('input[name=username]') 

console.log(inputnama)

const allparagraf = document.querySelectorAll('.paragraf');
allparagraf.forEach(paragraf =>{
    console.log(paragraf)
})