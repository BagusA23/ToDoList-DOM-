const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    //cegah agar halamaan tidak refresh
    e.preventDefault();

    //ambil nilai dari input yang ada di dalam form
    const input =document.querySelector('input');
    console.log('nilai input: ', input.value)
    alert(`data yang dikirim: ${input.value}`)
});

const daftarTugas = document.getElementById('daftar-tugas');

daftarTugas.addEventListener('click', function(e) {
    // Cek apakah yang diklik adalah elemen yang punya class 'tombol-hapus'
    if (e.target.classList.contains('tombol-hapus')) {
        // Hapus elemen <li> yang menjadi induk dari tombol tersebut
        const itemLi = e.target.parentElement;
        itemLi.remove();
        console.log('Item berhasil dihapus!');
    }
});