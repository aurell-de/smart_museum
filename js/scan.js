window.onload = function(){

    // =======================
    // QR CAMERA
    // =======================

    function onScanSuccess(decodedText){

        console.log(decodedText);

        if(decodedText === "TONGKAT"){
            window.location.href = "detail-tngkat.html";
        }

        else if(decodedText === "REMPAH"){
            window.location.href = "detail-rempah.html";
        }

        else if(decodedText === "BATIK"){
            window.location.href = "detail-batik.html";
        }

    }

    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        onScanSuccess
    ).catch(err => {

        console.log(err);
        alert("Kamera tidak dapat diakses");

    });


    // =======================
    // FILE UPLOAD
    // =======================

    const uploadBtn = document.getElementById("uploadBtn");
    const fileInput = document.getElementById("fileInput");

    uploadBtn.addEventListener("click", function(){

        fileInput.click();

    });

    fileInput.addEventListener("change", function(e){

        const file = e.target.files[0];

        if(file){

            html5QrCode.scanFile(file, true)
            .then(decodedText => {

                onScanSuccess(decodedText);

            })
            .catch(err => {

                alert("QR Code tidak terbaca");

            });

        }

    });

}