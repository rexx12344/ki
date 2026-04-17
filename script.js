const ucapan = "Habede, Dini. Semoga di usia yang bertambah ini, kamu senantiasa diberikan kesehatan, kebahagiaan, dan kemudahan dalam segala hal yang sedang kamu jalani. Aku berharap semua cita-cita dan impian yang sedang kamu kejar bisa tercapai satu per satu dengan lancar. Tetaplah menjadi pribadi yang baik dan terus memberikan dampak positif bagi orang-orang di sekitarmu. Selamat merayakan hari spesialmu, semoga tahun ini membawa banyak cerita indah dan kesuksesan yang lebih besar dari tahun sebelumnya.";

function mulaiSurat() {
    // Hilangkan tombol amplop
    document.getElementById('tombol-amplop').style.display = 'none';
    
    // Munculkan wadah konten
    const konten = document.getElementById('konten-ultah');
    konten.classList.remove('tersembunyi');
    
    // Beri jeda sedikit agar efek transisi CSS (muncul dari bawah) terlihat
    setTimeout(() => {
        document.getElementById('kotak-kaca').classList.add('muncul');
        efekKetik(ucapan, "teks-ucapan", 45); // Kecepatan ketik sedikit disesuaikan
    }, 50);
    
    // Jalankan animasi bintang
    setInterval(buatBintang, 200); // Bintang muncul lebih sering
}

function efekKetik(teks, elemenId, kecepatan) {
    let i = 0;
    const elemen = document.getElementById(elemenId);
    elemen.innerHTML = ""; // Pastikan kosong sebelum mengetik
    function mengetik() {
        if (i < teks.length) {
            elemen.innerHTML += teks.charAt(i);
            i++;
            setTimeout(mengetik, kecepatan);
        }
    }
    mengetik();
}

function buatBintang() {
    const wadah = document.getElementById('wadah-bintang');
    const bintang = document.createElement('div');
    bintang.classList.add('bintang');
    bintang.innerHTML = '✨';
    
    // Acak ukuran bintang agar terlihat lebih natural (antara 10px - 25px)
    const ukuran = Math.random() * 15 + 10;
    bintang.style.fontSize = ukuran + 'px';
    
    // Acak posisi horizontal
    bintang.style.left = Math.random() * 100 + 'vw';
    
    // Acak kecepatan melayang
    bintang.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    wadah.appendChild(bintang);
    
    // Hapus elemen bintang setelah lewat layar agar web tidak berat
    setTimeout(() => { bintang.remove(); }, 7000);
}
