window.onload = function(){

    // Ambil elemen HTML yang dibutuhkan untuk update data
    const webcamStatus = document.getElementById("webcam-status");
    const scanStatusText = document.getElementById("scan-status-text");
    const resultImg = document.getElementById("result-img");
    const resultText = document.getElementById("result-text");
    const resultId = document.getElementById("result-id");
    const detailBtn = document.getElementById("detail-btn");

    // Pemetaan Data Koleksi Museum
    const dataKoleksi = {
        "TONGKAT": {
            nama: "TONGKAT - Pusaka Leluhur",
            id: "ID_TNG002",
            img: "assets/img/galeri/tongkat.jpg", // Sesuaikan dengan path gambarmu
            link: "detail-tngkat.html"
        },
        "Rempah Rempah": {
            nama: "Rempah Rempah",
            id: "ID_G0N001",
            img: "assets/img/galeri/rempah.jpg",
            link: "detail-rempah.html"
        },
        "BATIK": {
            nama: "BATIK - Karya Agung Nusantara",
            id: "ID_BTK003",
            img: "assets/img/galeri/batik.jpg",
            link: "detail-batik.html"
        }
    };
// Fungsi utama ketika QR Code sukses terbaca
    function onScanSuccess(decodedText) {
        // Hanya menghapus spasi di awal/akhir, huruf tidak diubah-ubah
        const teksAsli = decodedText.trim(); 
        console.log("QR Terdeteksi (Sesuai Huruf Asli):", teksAsli);
        
        // Cek apakah teks asli ini cocok dengan yang ada di dataKoleksi
        if (dataKoleksi[teksAsli]) {
            const item = dataKoleksi[teksAsli];

            // 1. Update Tampilan Hasil Pindai Terakhir di halaman
            resultImg.src = item.img;
            resultText.innerText = item.nama;
            resultId.innerText = `(ID: ${item.id})`;
            scanStatusText.innerText = "Scan Sukses! Mengalihkan...";
            
            // Tampilkan tombol detail dan arahkan fungsinya
            detailBtn.style.display = "block";
            detailBtn.onclick = function() {
                window.location.href = item.link;
            };

            // 2. Beri jeda 2 detik sebelum pindah halaman
            setTimeout(function() {
                window.location.href = item.link;
            }, 2000);

        } else {
            // Jika tidak terdaftar, alert akan memunculkan huruf aslinya agar kamu bisa cek tanda baca/spasinya
            alert("QR Code terbaca: '" + teksAsli + "' (Koleksi tidak terdaftar. Periksa huruf besar-kecil atau tanda strip-nya)");
        }
    }

    // Inisialisasi Html5Qrcode
    const html5QrCode = new Html5Qrcode("reader");

    // Menjalankan Kamera
    html5QrCode.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        onScanSuccess
    ).then(() => {
        // Jika kamera sukses aktif, ubah teks status pendeteksi
        webcamStatus.innerText = "Webcam Aktif";
        webcamStatus.style.color = "green";
    }).catch(err => {
        console.log(err);
        webcamStatus.innerText = "Kamera Gagal Aktif / Diblokir";
        webcamStatus.style.color = "red";
        alert("Kamera tidak dapat diakses. Pastikan Anda menggunakan protokol HTTPS atau Localhost.");
    });


    // =======================
    // FILE UPLOAD MODE
    // =======================
    // =======================
// FILE UPLOAD MODE (PERBAIKAN)
// =======================
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");

uploadBtn.addEventListener("click", function(){
    fileInput.click();
});

fileInput.addEventListener("change", function(e){
    const file = e.target.files[0];
    if(!file) return;

    scanStatusText.innerText = "Memproses file gambar...";

    // 1. Cek apakah kamera sedang berjalan
    if (html5QrCode.isScanning) {
        // 2. Hentikan kamera dulu sebelum membaca file gambar
        html5QrCode.stop().then(() => {
            webcamStatus.innerText = "Kamera Nonaktif (Mode File)";
            webcamStatus.style.color = "orange";
            
            // 3. Setelah kamera mati, baru scan filenya
            prosesScanFile(file);
        }).catch(err => {
            console.error("Gagal mematikan kamera:", err);
            // Jika gagal stop, paksa scan saja
            prosesScanFile(file);
        });
    } else {
        // Jika kamera memang sudah mati/tidak aktif, langsung scan
        prosesScanFile(file);
    }
});

// Fungsi bantuan untuk membaca QR dari file gambar
function prosesScanFile(file) {
    html5QrCode.scanFile(file, true)
        .then(decodedText => {
            // Jika sukses, lempar ke fungsi onScanSuccess yang sudah kita buat sebelumnya
            onScanSuccess(decodedText);
        })
        .catch(err => {
            console.error("Eror Scan File:", err);
            scanStatusText.innerText = "Menunggu Scan...";
            alert("QR Code tidak terbaca. Pastikan gambar jelas, tidak blur, dan berisi QR Code yang valid.");
            
            // OPSIONAL: Hidupkan kembali kamera jika scan file gagal
            bukaKembaliKamera();
        });
}

// Fungsi untuk menghidupkan ulang kamera jika diperlukan
function bukaKembaliKamera() {
    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        onScanSuccess
    ).then(() => {
        webcamStatus.innerText = "Webcam Aktif";
        webcamStatus.style.color = "green";
    }).catch(err => {
        console.log("Gagal membuka kembali kamera:", err);
    });
}

}