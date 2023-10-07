let userName = prompt('Ingresa tu nombre entrenador')
alert('bievenido ' + userName)
let score = '0'

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
    console.log(questions[(Math.floor(Math.random() * (1 + questions.length - 1)))]);

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