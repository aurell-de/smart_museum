window.onload = function(){

    const webcamStatus = document.getElementById("webcam-status");
    const scanStatusText = document.getElementById("scan-status-text");
    const resultImg = document.getElementById("result-img");
    const resultText = document.getElementById("result-text");
    const resultId = document.getElementById("result-id");
    const detailBtn = document.getElementById("detail-btn");

    // === INI BAGIAN UTAMA YANG DIPERBAIKI ===
    function onScanSuccess(decodedText) {
        const teksAsli = decodedText.trim();

        if (teksAsli.startsWith("http")) {
            // 1. Ambil ID artefak dari URL (Contoh: "detail-keris.html" menjadi "keris")
            const namaFile = teksAsli.split("/").pop().replace(".html", "").replace("detail-", "");
            
            // 2. Tampilkan teks nama dan ID ke panel kanan
            resultText.innerText = namaFile.toUpperCase();
            resultId.innerText = "(ID: " + namaFile + ")";

            // 3. SEKARANG GAMBAR BISA BERUBAH OTOMATIS
            // Mencari gambar di folder dengan nama sesuai ID, misal: assets/img/galeri/keris.jpg
            resultImg.src = "assets/img/galeri/" + namaFile + ".jpg"; 
            
            // Jika file gambarnya tidak ada/salah nama, pasang gambar default agar tidak rusak
            resultImg.onerror = function() {
                this.src = "assets/img/galeri/default.jpg";
            };

            // 4. Ubah teks status di bawah kamera
            scanStatusText.innerText = "Scan Sukses! Data Ditampilkan.";
            
            // 5. Memunculkan tombol detail dan mengarahkan ke link asli jika diklik
            if (detailBtn) {
                detailBtn.classList.remove("hidden-btn"); // Hapus class hidden jika ada di CSS
                detailBtn.style.display = "block";
                detailBtn.onclick = function() {
                    window.location.href = teksAsli;
                };
            }

            // 6. Jeda kamera sebentar supaya tidak terus-menerus memindai QR yang sama
            if (html5QrCode.isScanning) {
                html5QrCode.stop().then(() => {
                    webcamStatus.innerText = "Kamera Dijeda (Hasil Muncul)";
                    webcamStatus.style.color = "blue";
                }).catch(err => console.error(err));
            }

        

        } else {
            alert("QR tidak dikenali: " + teksAsli);
        }
    }
    // =======================================

    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        onScanSuccess
    ).then(() => {
        webcamStatus.innerText = "Webcam Aktif";
        webcamStatus.style.color = "green";
    }).catch(err => {
        console.log(err);
        webcamStatus.innerText = "Kamera Gagal Aktif / Diblokir";
        webcamStatus.style.color = "red";
        alert("Kamera tidak dapat diakses. Pastikan Anda menggunakan protokol HTTPS atau Localhost.");
    });

    const uploadBtn = document.getElementById("uploadBtn");
    const fileInput = document.getElementById("fileInput");

    uploadBtn.addEventListener("click", function(){
        fileInput.click();
    });

    fileInput.addEventListener("change", function(e){
        const file = e.target.files[0];
        if(!file) return;

        scanStatusText.innerText = "Memproses file gambar...";

        if (html5QrCode.isScanning) {
            html5QrCode.stop().then(() => {
                webcamStatus.innerText = "Kamera Nonaktif (Mode File)";
                webcamStatus.style.color = "orange";
                prosesScanFile(file);
            }).catch(err => {
                console.error("Gagal mematikan kamera:", err);
                prosesScanFile(file);
            });
        } else {
            prosesScanFile(file);
        }
    });

    function prosesScanFile(file) {
        html5QrCode.scanFile(file, true)
            .then(decodedText => {
                onScanSuccess(decodedText);
            })
            .catch(err => {
                console.error("Eror Scan File:", err);
                scanStatusText.innerText = "Menunggu Scan...";
                alert("QR Code tidak terbaca. Pastikan gambar jelas, tidak blur, dan berisi QR Code yang valid.");
                bukaKembaliKamera();
            });
    }

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