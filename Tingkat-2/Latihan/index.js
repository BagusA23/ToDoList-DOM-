const judul = document.getElementById('judul-halaman')
judul.textContent = "latihan manipulasi dom"

const paragrafPembuka = document.getElementById('paragraf-pembuka')
paragrafPembuka.innerHTML = "Selamat! Kamu sedang belajar salah satu bagian <strong>paling penting</strong> dalam JavaScript."

const LinkExternal = document.getElementById('link-eksternal')
LinkExternal.href = "https://www.google.com/search?q=javascript+dom"
LinkExternal.textContent = "Cari Info DOM di Google"

const gambarutama = document.getElementById('gambar-utama')
gambarutama.src = "https://via.placeholder.com/150/FACC15/000000?Text=Diubah+JS!"
gambarutama.alt = "Gambar yang sudah diubah oleh JavaScript"

const body = document.querySelector('body')
body.style.backgroundColor = "#f0f8ff"

const judulYangAda = document.getElementById('judul-halaman')
judulYangAda.classList.add('text-sukses')

const semuatugas =document.querySelectorAll('.tugas')
const tugaskedua = semuatugas[1]
tugaskedua.classList.add('highlight')

const selesai = document.querySelectorAll('li')
const kedua = selesai[0]
kedua.classList.toggle('selesai')

const tugasbaru = document.createElement('li')
tugasbaru.textContent = "Mengerjakan Latihan 3"
tugasbaru.classList.add('tugas')

const baru = document.getElementById('daftar-tugas')
baru.appendChild(tugasbaru)

const hapus = semuatugas[0]
hapus.remove()