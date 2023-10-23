// let userName = prompt('Ingresa tu nombre entrenador')
// alert('bievenido ' + userName)
// let score = '0'

/////////////////////////////////////////////////////////////////////////////
//Array preguntas

const questions =[{
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

/**
/////////////////////////////////////////////////////////////////////////////////
// Metodo de simulacion con ForEach de manera lineal

console.log(questions)
questions.forEach(questions => {
    let questionPrompt = questions.question + '\n' + questions.option.join('\n');
    const userAnswer = prompt(questionPrompt)
    
    if (userAnswer && userAnswer.toLowerCase() === questions.correctAnswer){
        alert('Vamo bien campeon')
        score++
    }else
    {
        alert('No sea bobo mijo, la respuesta era ' + questions.correctAnswer)
    }
    ;})
    alert('Juego terminado tu puntaje es ' + score)
    **/
    // console.log(questions[(Math.floor(Math.random() * (1 + questions.length - 1)))]);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Metodo de simulacion con for de manera azarosa
/** 
for (let index = 0; index < questions.length; index++) {
        
       let questionRmd = questions[(Math.floor(Math.random() * (1 + questions.length - 1)))];
    const userAnswer = prompt (questionRmd.question + '\n' + questionRmd.option.join('\n'));
        
    if(userAnswer && userAnswer.toLocaleLowerCase() === questionRmd.correctAnswer){
        alert('Vamo bien campeon');
        score++;
    }else{
        alert('No sea bobo mijo, la respuesta era ' + questions.correctAnswer);
    }
}
alert('Juego terminado tu puntaje es ' + score);
**/
    ///Trabajando con .slice para eliminar preguntas y que no se repitan
/*
    let remainingQuestions = questions.slice();
    
    while (remainingQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        const randomQuestion = remainingQuestions[randomIndex];
    
        const userAnswer = prompt(randomQuestion.question + '\n' + randomQuestion.option.join('\n'));
    
        if (userAnswer && userAnswer.toLowerCase() === randomQuestion.correctAnswer) {
            alert('¡Vamo bien campeon!');
            score++;
        } else {
            alert('No sea bobo mijo, la respuesta era ' + randomQuestion.correctAnswer);
        }
    
        remainingQuestions.splice(randomIndex, 1);
    }
    
    alert('Juego terminado, tu puntaje es: ' + score);
*/
    ///////////////////

//// const de dom
const questionHtmlElement = document.getElementById("questionHtml");
const optionAButton = document.getElementById("optionA");
const optionBButton = document.getElementById("optionB");
const optionCButton = document.getElementById("optionC");


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
        questionHtmlElement.textContent = currentQuestion.question;
        optionAButton.textContent = currentQuestion.option[0];
        optionBButton.textContent = currentQuestion.option[1];
        optionCButton.textContent = currentQuestion.option[2];
        colorButons();

    } else {
        questionHtmlElement.textContent = "¡Juego terminado!";
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
            
        } else {
        }
        colorButons(currentQuestion.correctAnswer);
        questions.splice(currentQuestionIndex, 1);
        setTimeout(() => {
            displayCurrentQuestion();
            unColorbuttons();
        }, 1000);

    }
}   
optionAButton.addEventListener("click", function () {
    checkAnswer("a");
});

optionBButton.addEventListener("click", function () {
    checkAnswer("b");
});

optionCButton.addEventListener("click", function () {
    checkAnswer("c");
});
/// corre el jueguito en el navegador
displayCurrentQuestion();

