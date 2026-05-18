
const questions = [
    {
        question: "Mengapa tujuh buah paku hitam berkarat koleksi Fort Marlborough dalam dunia arkeologi secara spesifik disebut 'hand-wrought nail'?",
        options: [
            "Sebab diproduksi massal menggunakan mesin cetak otomatis pabrikan Eropa.",
            "Sebab dibuat satu per satu secara manual dengan tangan oleh pandai besi menggunakan palu dan landasan.",
            "Sebab paku tersebut sengaja dibentuk tidak beraturan agar terlihat kuno.",
            "Sebab paku terbuat dari campuran tembaga murni hasil tambang lokal Bengkulu."
        ],
        answer: 1,
        explanation: "Paku tempa kuno disebut hand-wrought nail karena proses pengerjaannya dilakukan manual oleh pandai besi (blacksmith). Besi dipanaskan hingga membara lalu ditempa di atas landasan, sehingga bentuk kepala dan batangnya tidak seragam."
    },
    {
        question: "Oksidasi alami selama ratusan tahun pada paku besi tempa kolonial menghasilkan warna hitam pekat. Dalam ilmu arkeologi, fenomena ini menjadi bukti utama atas...",
        options: [
            "Kerusakan fatal material arsitektur benteng.",
            "Keaslian (autentisitas) serta estimasi usia riil dari artefak kuno tersebut.",
            "Buruknya kualitas logam yang dipasok oleh kongsi dagang EIC.",
            "Tingginya kadar garam air laut di sekitar pesisir Teluk Segara."
        ],
        answer: 1,
        explanation: "Warna hitam pekat hasil oksidasi ratusan tahun menjadi penanda waktu alami yang berharga bagi arkeolog untuk membuktikan keaslian dan mengidentifikasi umur riil benda tersebut."
    },
    {
        question: "Dalam sejarah renovasi besar benteng oleh Joseph Walsh (1723–1728), berapa kuantitas material bata yang dihabiskan untuk memperkuat lini pertahanan?",
        options: [
            "Sekitar 120.000 buah bata",
            "Sekitar 500.000 buah bata",
            "Sekitar 720.000 buah bata",
            "Sekitar 1.000.000 buah bata"
        ],
        answer: 2,
        explanation: "Berdasarkan catatan kolonial, renovasi masif di bawah kepemimpinan Joseph Walsh menghabiskan anggaran sebesar 9.000 dollar dan memerlukan sedikitnya 720.000 buah bata."
    },
    {
        question: "Di area mana material paku kuno hand-wrought ini umumnya berhasil ditemukan dalam proses ekskavasi arkeologi di Fort Marlborough?",
        options: [
            "Hanya tertanam di meja kerja pribadi milik Deputi Governor James Macrae.",
            "Di dalam struktur interior yang runtuh serta area lapisan tanah tempat jatuhnya paku dari kayu yang lapuk.",
            "Di dasar sumur tua bagian tengah luar gerbang parit benteng.",
            "Di dalam gua-gua alam di sepanjang jalur pegunungan Bukit Barisan."
        ],
        answer: 1,
        explanation: "Lokasi temuan paku terintegrasi langsung di dalam area struktur benteng, tertanam pada reruntuhan rangka atap, kusen pintu/jendela, serta tertimbun dalam lapisan tanah di kompleks Jalan Benteng."
    },
    {
        question: "Dari manakah jaringan suplai utama paku-paku besi bernilai tinggi ini didatangkan oleh pihak East India Company (EIC)?",
        options: [
            "Pabrik-pabrik lokal di sekitar Batavia dan Palembang.",
            "Jaringan pelabuhan penyuplai komoditas lada di wilayah Maluku.",
            "Jaringan suplai dari India (Madras dan Calcutta) serta sebagian dari daratan Eropa.",
            "Hasil barter langsung dengan para penambang emas liar di daerah Lebong."
        ],
        answer: 2,
        explanation: "Paku besi kuno bernilai sangat berharga saat itu dan dikirim dari dua sumber: dikirim via jalur laut berbulan-bulan lewat basis EIC di India (Madras dan Calcutta) atau ditempa langsung oleh pandai besi/tenaga kerja paksa di Bengkulu."
    },
    {
        question: "Berdasarkan naskah dokumen Perjanjian Dagang 17 April 1724 yang kini disimpan di British National Archive London, apa kewajiban yang dibebankan kepada setiap Kepala Keluarga di Bencoolen?",
        options: [
            "Wajib menyerahkan 50 gram emas murni hasil dulang setiap bulan.",
            "Wajib menanam sebanyak 1.000 batang pohon lada.",
            "Wajib menyediakan tenaga kerja gratis untuk memproduksi 720.000 bata.",
            "Wajib menyerahkan hak kepemilikan lahan pemukiman di pesisir barat kepada EIC."
        ],
        answer: 1,
        explanation: "Isi Perjanjian Dagang 1724 mewajibkan setiap Kepala Keluarga di Bencoolen menanam 1.000 pohon lada dengan timbal balik harga beli sebesar 15 dollar Portugis untuk setiap bahan lada yang diserahkan."
    },
    {
        question: "Siapakah tokoh yang diutus oleh Kantor Dagang Inggris pada tahun 1723 untuk memimpin pemulihan relasi diplomatik sekaligus memperbaiki kerusakan infrastruktur benteng?",
        options: [
            "Joseph Walsh",
            "Eugene Kassel",
            "Captain James Macrae",
            "Haji Ismael"
        ],
        answer: 2,
        explanation: "Deputi Governor James Macrae diutus bersama juru tulis untuk memulihkan Bengkulu, memperbaiki benteng yang runtuh paska-serangan rakyat, sebelum akhirnya ia dipromosikan menjadi Presiden di Madras pada tahun 1725."
    },
    {
        question: "Apa istilah yang digunakan oleh kolonial Inggris untuk menyebut material plester dinding pelapis benteng yang terbuat dari campuran kulit kerang, kapur, dan pasir?",
        options: [
            "Chunam",
            "Blacksmith",
            "Vein Quarts",
            "Bencoolen Mortar"
        ],
        answer: 0,
        explanation: "Material tersebut dinamakan 'Chunam', sebuah istilah yang diserap dari bahasa Tamil yang lazim digunakan dalam konstruksi pelapis dinding bangunan di India."
    },
    {
        question: "Eksplorasi pertambangan emas modern skala besar di kawasan Lebong Donok dimulai setelah seorang Eropa bernama Eugene Kassel dipandu oleh warga setempat yang bernama...",
        options: [
            "Joseph Walsh",
            "James Macrae",
            "Haji Ismael",
            "Raden Sentot"
        ],
        answer: 2,
        explanation: "Bola salju eksploitasi emas swasta Belanda (Mijnbouw Maatschappij Redjang Lebong) menggelinding setelah penemuan penambangan lokal milik warga Bengkulu bernama Haji Ismael yang memandu Eugene Kassel."
    },
    {
        question: "Sebagai bukti otentik kekayaan bumi Bengkulu, emas seberat 50 kg yang kini bertengger menghiasi puncak Tugu Monas (Jakarta) berasal dari kawasan tambang...",
        options: [
            "Lebong Donok",
            "Lebong Sulit",
            "Lebong Tandai",
            "Kebun Keling"
        ],
        answer: 2,
        explanation: "Emas pada lidah api Monas Jakarta (50 kg dari total 72 kg) diproduksi dan dipasok dari tambang Lebong Tandai, Bengkulu, yang disumbangkan oleh pengusaha kaya atas dasar nasionalisme kemerdekaan."
    }
];

let currentQuestionIndex = 0;
let hasAnswered = false;
let totalCorrectAnswers = 0;
let visitorName = ""; 

// Fungsi memproses input nama di awal halaman
function submitName() {
    const inputElement = document.getElementById('visitor-name-input');
    const nameValue = inputElement.value.trim();

    if (nameValue === "") {
        alert("Mohon masukkan nama Anda terlebih dahulu untuk memulai kuis!");
        return;
    }

    visitorName = nameValue; 
    
    // Sembunyikan layar nama, tampilkan layar kuis
    document.getElementById('name-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    initQuiz();
}

function initQuiz() {
    currentQuestionIndex = 0;
    totalCorrectAnswers = 0;
    hasAnswered = false;
    
    document.getElementById('score-screen').classList.add('hidden');
    loadQuestion();
}

function loadQuestion() {
    hasAnswered = false;
    document.getElementById('feedback-box').classList.add('hidden');
    document.getElementById('btn-next').classList.add('hidden');

    const currentQuestion = questions[currentQuestionIndex];
    
    document.getElementById('question-counter').innerText = `Pertanyaan ${currentQuestionIndex + 1}/${questions.length}`;
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    document.getElementById('question-text').innerText = currentQuestion.question;

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerText = option;
        button.onclick = () => checkAnswer(index, button);
        optionsList.appendChild(button);
    });
}

function checkAnswer(selectedIndex, clickedButton) {
    if (hasAnswered) return; 
    hasAnswered = true;

    const currentQuestion = questions[currentQuestionIndex];
    const allButtons = document.querySelectorAll('.option-btn');

    if (selectedIndex === currentQuestion.answer) {
        clickedButton.classList.add('correct');
        totalCorrectAnswers++;
    } else {
        clickedButton.classList.add('wrong');
        allButtons[currentQuestion.answer].classList.add('correct');
    }

    document.getElementById('feedback-text').innerText = currentQuestion.explanation;
    document.getElementById('feedback-box').classList.remove('hidden');
    document.getElementById('btn-next').classList.remove('hidden');
    
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('btn-next').innerText = "Lihat Hasil Skor";
    } else {
        document.getElementById('btn-next').innerText = "Lanjut Kuis →";
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showFinalScoreScreen();
    }
}

function showFinalScoreScreen() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('score-screen').classList.remove('hidden');

    // Tampilkan nama di tulisan selamat
    document.getElementById('display-visitor-name').innerText = visitorName;

    // Kalkulasi nilai (0-100)
    const finalScoreValue = Math.round((totalCorrectAnswers / questions.length) * 100);
    
    document.getElementById('final-score').innerText = finalScoreValue;
    document.getElementById('score-summary').innerText = `Anda menjawab benar ${totalCorrectAnswers} dari ${questions.length} pertanyaan.`;
}

function restartQuiz() {
    document.getElementById('score-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    initQuiz();
}