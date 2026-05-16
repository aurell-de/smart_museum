const questions = [

{
    question: "Apa arti kata 'Besurek' dalam bahasa Bengkulu?",
    options: [
        "Berwarna",
        "Bersurat/Bertulisan",
        "Berukiran",
        "Berbunga"
    ],
    answer: 1,
    explanation: "Besurek berarti bersurat atau bertulisan yang merujuk pada motif kaligrafi Arab."
},

{
    question: "Destar Besurek digunakan khusus untuk?",
    options: [
        "Perempuan",
        "Anak-anak",
        "Kaum laki-laki",
        "Penari adat"
    ],
    answer: 2,
    explanation: "Destar Besurek digunakan oleh kaum laki-laki dalam upacara adat Bengkulu."
},

{
    question: "Motif utama pada kain Besurek adalah?",
    options: [
        "Burung Kuau",
        "Harimau",
        "Naga",
        "Bunga"
    ],
    answer: 0,
    explanation: "Burung Kuau menjadi motif utama khas kain Besurek."
},

{
    question: "Burung Kuau melambangkan?",
    options: [
        "Kesedihan",
        "Kemiskinan",
        "Keagungan dan kejantanan",
        "Perdagangan"
    ],
    answer: 2,
    explanation: "Burung Kuau melambangkan keagungan, kebebasan, dan kejantanan."
},

{
    question: "Tulisan Arab pada Besurek menunjukkan pengaruh budaya?",
    options: [
        "Hindu",
        "Budha",
        "Islam",
        "Eropa"
    ],
    answer: 2,
    explanation: "Kaligrafi Arab menunjukkan pengaruh Islam yang kuat di Bengkulu."
},

{
    question: "Motif segitiga di bagian bawah kain disebut?",
    options: [
        "Mega Mendung",
        "Pucuk Rebung",
        "Parang",
        "Sogan"
    ],
    answer: 1,
    explanation: "Pucuk Rebung melambangkan pertumbuhan dan harapan."
},

{
    question: "Teknik pembuatan Batik Besurek menggunakan?",
    options: [
        "Mesin cetak",
        "Canting",
        "Pahat",
        "Ukiran"
    ],
    answer: 1,
    explanation: "Batik Besurek dibuat menggunakan canting dan malam panas."
},

{
    question: "Tamlia pada alat tenun berfungsi untuk?",
    options: [
        "Menghias kain",
        "Memotong kain",
        "Meluruskan benang",
        "Mewarnai benang"
    ],
    answer: 2,
    explanation: "Tamlia digunakan untuk meluruskan dan menekan benang."
},

{
    question: "Petung dibuat dari bahan?",
    options: [
        "Emas",
        "Kayu",
        "Bambu",
        "Besi"
    ],
    answer: 2,
    explanation: "Petung dibuat dari bambu besar."
},

{
    question: "Gong digunakan sebagai?",
    options: [
        "Perhiasan",
        "Alat musik adat",
        "Senjata",
        "Mainan"
    ],
    answer: 1,
    explanation: "Gong digunakan dalam upacara adat dan musik tradisional."
},

{
    question: "Gong masuk ke Nusantara melalui jalur?",
    options: [
        "Perdagangan",
        "Peperangan",
        "Pertanian",
        "Perburuan"
    ],
    answer: 0,
    explanation: "Gong masuk melalui jalur perdagangan Asia."
},

{
    question: "Seruling Bengkulu biasa dimainkan saat?",
    options: [
        "Pernikahan adat",
        "Perang",
        "Panen",
        "Berburu"
    ],
    answer: 0,
    explanation: "Seruling digunakan dalam prosesi adat pernikahan Bengkulu."
},

{
    question: "Rudus adalah?",
    options: [
        "Alat musik",
        "Kain adat",
        "Senjata tradisional",
        "Mahkota"
    ],
    answer: 2,
    explanation: "Rudus adalah senjata tradisional khas Bengkulu."
},

{
    question: "Rudus menjadi simbol?",
    options: [
        "Perdagangan",
        "Perlawanan kolonial",
        "Kesedihan",
        "Kemiskinan"
    ],
    answer: 1,
    explanation: "Rudus menjadi simbol perlawanan rakyat Bengkulu."
},

{
    question: "Motif ular pada tongkat raja melambangkan?",
    options: [
        "Kelemahan",
        "Kesedihan",
        "Penjaga dan pelindung",
        "Kemalasan"
    ],
    answer: 2,
    explanation: "Ular dianggap sebagai simbol pelindung dan kekuatan spiritual."
},

{
    question: "Gajah Sumatera saat ini berstatus?",
    options: [
        "Aman",
        "Tidak dilindungi",
        "Kritis",
        "Umum"
    ],
    answer: 2,
    explanation: "Gajah Sumatera berstatus Critically Endangered."
},

{
    question: "Fort Marlborough dibangun oleh?",
    options: [
        "Belanda",
        "Portugis",
        "Inggris",
        "Jepang"
    ],
    answer: 2,
    explanation: "Fort Marlborough dibangun oleh Inggris di Bengkulu."
},

{
    question: "Komoditas utama Bengkulu pada masa kolonial adalah?",
    options: [
        "Emas",
        "Lada",
        "Kopi",
        "Beras"
    ],
    answer: 1,
    explanation: "Lada menjadi komoditas utama Bengkulu."
},

{
    question: "Tokoh Inggris yang mendokumentasikan Bengkulu adalah?",
    options: [
        "Daendels",
        "Raffles",
        "Diponegoro",
        "Hayam Wuruk"
    ],
    answer: 1,
    explanation: "Thomas Stamford Raffles mendokumentasikan Bengkulu."
},

{
    question: "Masakan Bengkulu terkenal karena penggunaan?",
    options: [
        "Keju",
        "Mentega",
        "Rempah-rempah",
        "Coklat"
    ],
    answer: 2,
    explanation: "Masakan Bengkulu terkenal kaya rempah."
}

];
let currentQuestionIndex = 0;
let hasAnswered = false;
let totalCorrectAnswers = 0;
let visitorName = ""; // Variabel penampung nama pengguna

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