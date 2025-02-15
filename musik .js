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

