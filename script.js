// Tentukan tanggal batas akhir upload (6 Maret 2025, pukul 23:59:59)
const deadline = new Date("March 6, 2025 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const remainingTime = deadline - now;

    if (remainingTime > 0) {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days} hari ${hours} jam ${minutes} menit ${seconds} detik semangat`;
    } else {
        document.getElementById("countdown").innerHTML = "Waktu pengumpulan sudah berakhir!";
    }
}

// Update hitungan mundur setiap detik
setInterval(updateCountdown, 1000);
updateCountdown();
