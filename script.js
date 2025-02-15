document.addEventListener("DOMContentLoaded", function () {
    console.log("Script JS telah dimuat!"); // Debugging untuk cek apakah JS berjalan

    // **🔹 Fungsi untuk Pindah Halaman dengan Efek Fade-out**
    window.goToPage = function (page) {
        console.log("Navigasi ke:", page); // Debugging
        document.body.style.opacity = "0"; // Efek fade-out sebelum pindah
        setTimeout(() => {
            window.location.href = page; // Pindah ke halaman yang dituju
        }, 1000);
    };

    // **🔹 Pastikan Tombol "Kembali ke Awal" Bisa Diklik**
    const backButton = document.getElementById("back-to-home");
    if (backButton) {
        backButton.addEventListener("click", function () {
            goToPage("index1.html");
        });
        console.log("Tombol kembali ditemukan!"); // Debugging
    } else {
        console.log("Tombol kembali tidak ditemukan!"); // Jika tombol tidak muncul
    }

    // **🔹 Kode untuk Mengecek Password di Halaman 1**
    window.checkCode = function () {
        let code = document.getElementById("passcode").value;
        let message = document.getElementById("message");

        if (code === "Love123") { // Ganti dengan kode yang kamu mau
            message.innerHTML = "💕 Kode benar! Mengarahkan ke kejutan... 💕";
            message.style.color = "green";

            setTimeout(() => {
                document.body.style.opacity = "0"; // Efek fade-out sebelum pindah
                setTimeout(() => {
                    window.location.href = "index2.html"; // Pindah ke halaman kedua
                }, 1000);
            }, 2000);
        } else {
            message.innerHTML = "😢 Kode salah! Coba lagi yaa~";
            message.style.color = "red";
        }
    };

    // **🔹 Hitung Waktu Bersama di Halaman 2**
    window.hitungHari = function () {
        let mulai = new Date("2024-06-20"); // Ganti dengan tanggal jadian
        let sekarang = new Date();
        let selisih = Math.floor((sekarang - mulai) /  (1000 * 60 * 60 * 24)); // Konversi ke hari

        let counter = document.getElementById("counter");
        if (counter) {
            counter.innerHTML = `Kita sudah bersama selama ❤️ ${selisih} hari! ❤️`;
        }
    };
    hitungHari(); // Jalankan fungsi saat halaman dimuat

    // **🔹 Musik Tetap Menyala Saat Pindah Halaman**
    const music = document.getElementById("valentine-music");
    const toggleMusic = document.getElementById("toggle-music");

    if (music && toggleMusic) {
        toggleMusic.addEventListener("click", function () {
            if (music.paused) {
                music.play();
                toggleMusic.innerText = "🔇 Pause";
            } else {
                music.pause();
                toggleMusic.innerText = "🎵 Play";
            }
        });

        // Cek apakah musik harus tetap dimainkan setelah pindah halaman
        if (sessionStorage.getItem("musicPlaying") === "true") {
            music.play();
            toggleMusic.innerText = "🔇 Pause";
        }

        // Simpan status musik saat diputar atau dijeda
        music.onplay = () => sessionStorage.setItem("musicPlaying", "true");
        music.onpause = () => sessionStorage.setItem("musicPlaying", "false");
    }

    // **🔹 Animasi Love Jatuh**
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    setInterval(createHeart, 200);

    // **🔹 Animasi Hati Melayang**
    function createFloatingHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart-floating");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createFloatingHeart, 500);

    // **🔹 Animasi Balon Cinta**
    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = Math.random() * 5 + 4 + "s";
        document.body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 7000);
    }
    setInterval(createBalloon, 2000);
});
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("valentine-music");
    const toggleMusicBtn = document.getElementById("toggle-music");

    toggleMusicBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            toggleMusicBtn.innerText = "🎵 Pause";
        } else {
            music.pause();
            toggleMusicBtn.innerText = "🎶 Play";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("valentine-music");
    const toggleMusicBtn = document.getElementById("toggle-music");

    // Periksa apakah ada musik yang sudah dimainkan sebelumnya
    if (localStorage.getItem("musicPlaying") === "true") {
        music.play();
        toggleMusicBtn.innerText = "🎵 Pause";
    }

    toggleMusicBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            toggleMusicBtn.innerText = "🎵 Pause";
            localStorage.setItem("musicPlaying", "true"); // Simpan status musik
        } else {
            music.pause();
            toggleMusicBtn.innerText = "🎶 Play";
            localStorage.setItem("musicPlaying", "false"); // Simpan status musik
        }
    });

    // Simpan posisi musik agar tidak restart saat pindah halaman
    music.addEventListener("timeupdate", function () {
        localStorage.setItem("musicTime", music.currentTime);
    });

    // Ambil posisi terakhir musik
    if (localStorage.getItem("musicTime")) {
        music.currentTime = localStorage.getItem("musicTime");
    }
});



    // Jika halaman di-refresh atau berpindah, lanjutkan dari waktu terakhir
    window.addEventListener("beforeunload", function () {
        localStorage.setItem("musicTime", music.currentTime);
    });

