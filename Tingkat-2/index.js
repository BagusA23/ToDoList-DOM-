//mengubah konten elemen
const judul = document.getElementById('judul-halaman');
judul.textContent = 'selamat datang di dunia manipulasi dom';
judul.innerHTML = '<em>selamat datang di dunia manipulasi dom<em>';

//mengubahan atribut
const linkgoogle = document.getElementById('link-eksternal');
const gambarprofil = document.querySelector('gambar-utama');

linkgoogle.href = 'https://www.youtube.com';
linkgoogle.textContent = 'kunjungi youtube';

judul.style.color = 'blue';
judul.style.fontFamily = 'arial';

judul.classList.add('highlight');


//tambah elemen baru
const tugasbaru = document.createElement('li')
tugasbaru.textContent= 'mengerjekan tugas latihan 2';
tugasbaru.classList.add('tugas');

const listTugas = document.getElementById('daftar-tugas');
listTugas.append(tugasbaru)
