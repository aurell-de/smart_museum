const questions = [
{
    question: "Mesin ketik pertama masuk ke Indonesia pada masa?",
    options: [
        "Kerajaan Sriwijaya",
        "Kolonial Belanda",
        "Pendudukan Jepang",
        "Era Reformasi"
    ],
    answer: 1,
    explanation: "Mesin ketik pertama dibawa oleh pemerintah kolonial Belanda pada akhir abad ke-19."
},

{
    question: "Pada masa kolonial, mesin ketik digunakan untuk?",
    options: [
        "Permainan",
        "Alat musik",
        "Administrasi dan dokumen resmi",
        "Perhiasan"
    ],
    answer: 2,
    explanation: "Mesin ketik digunakan untuk administrasi pemerintahan dan dokumen resmi."
},

{
    question: "Pada masa kemerdekaan, mesin ketik berperan penting dalam?",
    options: [
        "Pertanian",
        "Perjuangan dan diplomasi",
        "Perdagangan emas",
        "Pembuatan senjata"
    ],
    answer: 1,
    explanation: "Mesin ketik digunakan untuk mengetik proklamasi dan surat diplomatik."
},

{
    question: "Era kejayaan mesin ketik Brother Deluxe 750TR terjadi pada masa?",
    options: [
        "Majapahit",
        "Kolonial Inggris",
        "Orde Baru",
        "Reformasi"
    ],
    answer: 2,
    explanation: "Mesin ketik Brother Deluxe banyak digunakan pada era Orde Baru."
},

{
    question: "Profesi yang sangat dibutuhkan pada era mesin ketik adalah?",
    options: [
        "Pelukis",
        "Juru ketik",
        "Petani",
        "Nelayan"
    ],
    answer: 1,
    explanation: "Juru ketik menjadi profesi bergengsi dan sangat dibutuhkan."
},

{
    question: "Siapakah Joseph Collett?",
    options: [
        "Raja Bengkulu",
        "Gubernur Belanda",
        "Gubernur Jenderal EIC di Bengkulu",
        "Pejuang kemerdekaan"
    ],
    answer: 2,
    explanation: "Joseph Collett adalah Gubernur Jenderal EIC Bengkulu periode 1712–1717."
},

{
    question: "Joseph Collett dikenal sebagai tokoh penting dalam pembangunan?",
    options: [
        "Monas",
        "Benteng Rotterdam",
        "Fort Marlborough",
        "Istana Merdeka"
    ],
    answer: 2,
    explanation: "Joseph Collett adalah otak di balik pembangunan Fort Marlborough."
},

{
    question: "Fort Marlborough dibangun sebagai?",
    options: [
        "Tempat wisata",
        "Pusat perdagangan dan pertahanan",
        "Pasar rakyat",
        "Sekolah kolonial"
    ],
    answer: 1,
    explanation: "Benteng dibangun sebagai pusat pertahanan, perdagangan, dan administrasi Inggris."
},

{
    question: "Joseph Collett mulai menjabat di Bengkulu pada tahun?",
    options: [
        "1712",
        "1812",
        "1945",
        "1901"
    ],
    answer: 0,
    explanation: "Joseph Collett menjabat sebagai Gubernur Jenderal EIC Bengkulu mulai tahun 1712."
},

{
    question: "Kepentingan utama Inggris di Bengkulu pada masa Collett adalah?",
    options: [
        "Pariwisata",
        "Pertanian padi",
        "Perdagangan lada",
        "Perikanan"
    ],
    answer: 2,
    explanation: "Inggris sangat berkepentingan terhadap perdagangan lada Bengkulu."
},

{
    question: "Fort Marlborough kini menjadi?",
    options: [
        "Bandara",
        "Warisan budaya",
        "Pelabuhan",
        "Kawasan industri"
    ],
    answer: 1,
    explanation: "Fort Marlborough kini menjadi warisan budaya bersejarah Bengkulu."
},

{
    question: "Mesin ketik pada era Orde Baru digunakan di?",
    options: [
        "Sekolah dan kantor pemerintahan",
        "Sawah",
        "Tambang emas",
        "Pelabuhan"
    ],
    answer: 0,
    explanation: "Mesin ketik digunakan luas di sekolah, universitas, dan kantor pemerintahan."
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