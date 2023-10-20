// let userName = prompt('Ingresa tu nombre entrenador')
// alert('bievenido ' + userName)
// let score = '0'

/////////////////////////////////////////////////////////////////////////////
//Array preguntas

const questions =[{
    question: '¿cual es pokemon de fuego inicial de la primera generacion?',
    option:['a)Charmander','B)Boulbasour','c)Squirtle'],
    correctAnswer:'a'

},
{
    question:'¿Qué tipo de Pokémon es Pikachu?',
    option:['a)Electrico','b)Fuego','c)Agua'],
    correctAnswer:'a'
},
{
    question:'¿Cuál es el Pokémon legendario que representa el tiempo?',
    option:['a)Dialga','b)Palkia','c)Giratina'],
    correctAnswer:'a'
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
    if(correct === 'a'){
        optionAButton.classList.add('correcto');
        optionBButton.classList.add('incorrect');
        optionCButton.classList.add('incorrect');
    }else if(correct === 'b'){
        optionBButton.classList.add('correcto');
    }
    else if(correct === 'c'){
        optionCButton.classList.add('correcto');
    }else{
        // optionAButton.style.background = '#ba2da3';
        // optionBButton.style.background = '#ba2da3';
        // optionCButton.style.background = '#ba2da3';
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
        optionAButton.classList.remove('correcto');
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
        setTimeout(displayCurrentQuestion, 1000);
    }
}
//// comparando las respuestas segun el boton
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

