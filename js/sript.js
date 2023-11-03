// let userName = prompt('Ingresa tu nombre entrenador')
// alert('bievenido ' + userName)
let score = 0

/////////////////////////////////////////////////////////////////////////////
//Array preguntas

let questions =[{
    question: '¿cual es pokemon de fuego inicial de la primera generacion?',
    option:['a)Charmander','B)Boulbasour','c)Squirtle'],
    correctAnswer:0

},
{
    question:'¿Qué tipo de Pokémon es Pikachu?',
    option:['a)Electrico','b)Fuego','c)Agua'],
    correctAnswer:0
},
{
    question:'¿Cuál es el Pokémon legendario que representa el tiempo?',
    option:['a)Dialga','b)Palkia','c)Giratina'],
    correctAnswer:0
}
];

//// const de dom
const questionHtmlElement = document.getElementById("questionHtml");
const optionAButton = document.getElementById("optionA");
const optionBButton = document.getElementById("optionB");
const optionCButton = document.getElementById("optionC");
const LocalstorageQuestionIndex = localStorage.getItem('questionHtml');

let currentQuestionIndex = 0;




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
            span.setAttribute('class', 'fall');
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
    }

}
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
}
//funcion pa guardar el estado de la app   
function saveCurrentQuestion() {
    if (questions.length >= 0) {
        const currentQuestionIndex = Math.floor(Math.random() * questions.length);
        const currentQuestion = questions[currentQuestionIndex];
        const nameInputValue = document.getElementById("nameInput").value;

        localStorage.setItem('Savedquestions', JSON.stringify(questions));
        localStorage.setItem('savedScore', JSON.stringify(score));
        localStorage.setItem('savedName', JSON.stringify(nameInputValue));
    }
}
// funcion pa cargar el estado de la app
function displaySavedQuestion() {
    const savedQuestionString = localStorage.getItem('Savedquestions');
    const savedQuestion = JSON.parse(savedQuestionString);
    const savedScore = JSON.parse(localStorage.getItem('savedScore'));
    if (savedQuestion != null && savedQuestion.length > 0 ) {
        questions = savedQuestion;
        score = savedScore;
    }
    displayCurrentQuestion();
}
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
// displayCurrentQuestion();
displaySavedQuestion();


window.onload = () => {
    // Elementos del modal
    const modal = document.getElementById("myModal");
    const closeModalBtn = document.getElementById("closeModal");
    const saveNameBtn = document.getElementById("saveNameBtn");
    const nameInput = document.getElementById("nameInput");
  
    // Abrir el modal automáticamente al cargar la página
    modal.style.display = "block";
  
    // Cerrar el modal
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Guardar el nombre ingresado y cerrar el modal
    saveNameBtn.addEventListener("click", () => {
      const name = nameInput.value;
      if (name) {
        alert("Hola, " + name + "!");
        modal.style.display = "none";
        saveCurrentQuestion();
      } else {
        alert("Por favor, ingresa tu nombre.");
      }
    });
  
    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };