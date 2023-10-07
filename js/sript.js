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
/// Metodo de simulacion con for de manera aleatoria
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

    let score = 0;
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