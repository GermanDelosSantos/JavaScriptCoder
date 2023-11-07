
// Variables para el modal
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");
const saveNameBtn = document.getElementById("saveNameBtn");
const nameInput = document.getElementById("nameInput");

// Variables globales
let score = 0;
let questions = [];
let currentQuestionIndex = 0;

//// const de dom
const questionHtmlElement = document.getElementById("questionHtml");
const optionAButton = document.getElementById("optionA");
const optionBButton = document.getElementById("optionB");
const optionCButton = document.getElementById("optionC");
const LocalstorageQuestionIndex = localStorage.getItem('questionHtml');


// Cargar el estado de la app al cargar la página
window.onload = () => {
    const savedName = localStorage.getItem('savedName');
    const savedScore = JSON.parse(localStorage.getItem('savedScore'));

    if (savedName) {
        sweetAlert(savedName, savedScore);
        displaySavedQuestion();
    } else {
        // Abrir el modal automáticamente al cargar la página
        modal.style.display = "block";
    }
    // Cerrar el modal
    closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    });
};

//sweetAlert
const sweetAlert = (savedName, savedScore) => {
    Swal.fire({
        title: `Bienvenido de nuevo ${savedName}`,
        text: `Tu puntaje actual es: ${savedScore}`,
        icon: "success"
    });
};

const sweetAlertBasic = (name) =>{
    Swal.fire(`Bienvenido entrenador ${name}`);
};

// Función para guardar el nombre del usuario
function saveUserName(name) {
    localStorage.setItem('savedName', name);
};

// funcion para dar la bienvenida si el user ya esta registrado
function displayBienvenida(savedName) {
    const savedScore = JSON.parse(localStorage.getItem('savedScore'));

    if (savedName === nameInput.value) {
        sweetAlert(savedName, savedScore);
    }
};

function traerPregunta () {
    fetch('./js/preguntasJson.json')
    .then(res => {
        if(!res.ok){
            throw new Error ('No se cargaron las Preguntas');
        };
        return res.json();
    })
    .then(data => {
        console.log(data);
        questions = data;
        displayCurrentQuestion();
    })
    .catch(error => console.log('Hubo un error: ', error));
};

//// funcion pa pintar botones
function colorButons(correct){
    let opciones = document.getElementsByClassName('opciones');
    if(correct+1){
        for (let i = 0; i < opciones.length; i++) {
            opciones[i].classList.add('incorrect');
        }
        document.getElementsByClassName('opciones')[correct].classList.add('correcto');
    };
};

function unColorbuttons(){
    let opciones = document.getElementsByClassName('opciones');
    for (let i = 0; i <opciones.length; i++) {
        opciones[i].classList.remove('incorrect');
        opciones[i].classList.remove('correcto');
        
    }
};

//// funcion pa mostrar las preguntas
function displayCurrentQuestion() {
    if (questions.length > 0) {
        currentQuestionIndex = (Math.floor(Math.random() * (1 + questions.length - 1)));
        const currentQuestion = questions[currentQuestionIndex];
        questionHtmlElement.innerHTML = '';
        for (let i = 0; i < currentQuestion.question.length; i++) {
            const span = document.createElement('span');
            span.setAttribute('class', 'fall letras');
            span.setAttribute('style', `animation-delay: ${i / 20}s`);
            span.textContent = currentQuestion.question[i];
            questionHtmlElement.appendChild(span);
            console.log(currentQuestion.question);
        }

        optionAButton.textContent = currentQuestion.option[0];
        optionBButton.textContent = currentQuestion.option[1];
        optionCButton.textContent = currentQuestion.option[2];
        colorButons();

    } else {
        questionHtmlElement.textContent = `Juego terminado ${score > 0 ? 'tu puntaje es : ' + score : + 'Perdiste Bobo'}`;
        optionAButton.style.display = "none";
        optionBButton.style.display = "none";
        optionCButton.style.display = "none";
        localStorage.clear();
    }

};
//// funcion para checkar respuesta
function checkAnswer(userAnswer) {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
        colorButons(currentQuestion.correctAnswer);
        questions.splice(currentQuestionIndex, 1);
        setTimeout(() => {
            displayCurrentQuestion();
            unColorbuttons();
        }, 1000);
        saveCurrentQuestion();
    }
};
//funcion pa guardar el estado de la app   
function saveCurrentQuestion() {
    if (questions.length >= 0) {
        const currentQuestionIndex = Math.floor(Math.random() * questions.length);
        const currentQuestion = questions[currentQuestionIndex];

        localStorage.setItem('Savedquestions', JSON.stringify(questions));
        localStorage.setItem('savedScore', JSON.stringify(score));
    }
};
// funcion pa cargar el estado de la app
function displaySavedQuestion() {
    const savedQuestionString = localStorage.getItem('Savedquestions');
    const savedQuestion = JSON.parse(savedQuestionString);
    const savedScore = JSON.parse(localStorage.getItem('savedScore'));
    if (savedQuestion != null && savedQuestion.length > 0 ) {
        questions = savedQuestion;
        score = savedScore;
        displayCurrentQuestion();
    }else {
        traerPregunta();
    }
};

// Agregar el evento click al botón saveNameBtn
saveNameBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const savedName = localStorage.getItem('savedName');
    const savedScore = JSON.parse(localStorage.getItem('savedScore'));

    if (savedName === name) {
        sweetAlert();
    } else {
        saveUserName(name);
        sweetAlertBasic(name);
    }

    modal.style.display = "none";
    displaySavedQuestion();
});

optionAButton.addEventListener("click", function () {
    checkAnswer(0);
});

optionBButton.addEventListener("click", function () {
    checkAnswer(1);
});

optionCButton.addEventListener("click", function () {
    checkAnswer(2);
});
/// corre el jueguito en el navegador
// displaySavedQuestion();
