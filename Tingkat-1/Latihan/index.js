//get elemeen by id
const judul = document.getElementById('judul-utama')
console.log(judul)

const listTugas = document.getElementById('daftar-tugas')
console.log(listTugas)

const linkGoogle = document.getElementById('link-google')
console.log(linkGoogle)

//get elemeen by class
const semuabuah = document.getElementsByClassName('item-buah')
console.log(semuabuah)

const semuatugas = document.getElementsByClassName('tugas')
console.log(semuatugas)

const semuaParagraf = document.getElementsByClassName('paragraf')
console.log(semuaParagraf)

//get elemen by tag
const semualistitem = document.getElementsByTagName('li')
console.log(semualistitem)

const semuasubjudul = document.getElementsByTagName('h2')
console.log(semuasubjudul)

const semuatagp = document.getElementsByTagName('p')
console.log(semuatagp)

//queryselector
const paragrafPertama = document.querySelector('.paragraf-pembuka')
console.log(paragrafPertama)

const tugasPrioritasPertama = document.querySelector('.prioritas')
console.log(tugasPrioritasPertama)

const buahPertama = document.querySelector('.item-buah')
console.log(buahPertama.textContent)

const inputusername = document.querySelector('input[name=username]')
console.log(inputusername)

//queryselectorall
const semuaitembuah = document.querySelectorAll('.item-buah')
semuaitembuah.forEach(buah => {
    console.log(buah.textContent)
})

const semuatugasprioritas = document.querySelectorAll('.prioritas')
semuatugasprioritas.forEach(tugas => {
    console.log(tugas.textContent)
})

const subjudulkonten = document.querySelectorAll('#konten-utama h2')
subjudulkonten.forEach(subjudul => {
    console.log(subjudul.textContent)
})