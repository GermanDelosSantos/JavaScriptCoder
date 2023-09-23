let score = 0;
 let questionIndex = 1; // Índice de la pregunta actual

 // Pregunta 1
let question1 = "¿Cuál es el nombre del Pokémon inicial de fuego de la primera generación?";
let option1a = "a) Charmander";
let option1b = "b) Squirtle";
let option1c = "c) Bulbasaur";
let correctAnswer1 = "a";

 // Pregunta 2
let question2 = "¿Qué tipo de Pokémon es Pikachu?";
let option2a = "a) Agua";
let option2b = "b) Eléctrico";
let option2c = "c) Fuego";
let correctAnswer2 = "b";

 // Pregunta 3
let question3 = "¿Cuál es el Pokémon legendario que representa el tiempo?";
let option3a = "a) Dialga";
let option3b = "b) Palkia";
let option3c = "c) Giratina";
let correctAnswer3 = "a";

    while (questionIndex <= 3) {
    let userAnswer = prompt(getQuestion(questionIndex));

    if (userAnswer === null) {
     // El usuario canceló el juego
    break;
    }
let correctAnswer = getCorrectAnswer(questionIndex);

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    alert("¡Vamos bien!");
    score++;
    } else {
    alert("No sea bobo mijo. La respuesta correcta es: " + correctAnswer);
    }

    questionIndex++;
}
alert("Juego terminado. Tu puntuación es: " + score + " de 3");


 // Función para obtener la pregunta según el índice
function getQuestion(index) {
    switch (index) {
    case 1:
    return question1 + "\n" + option1a + "\n" + option1b + "\n" + option1c;
    case 2:
    return question2 + "\n" + option2a + "\n" + option2b + "\n" + option2c;
    case 3:
    return question3 + "\n" + option3a + "\n" + option3b + "\n" + option3c;
    }
}

 // Función para obtener la respuesta correcta según el índice
function getCorrectAnswer(index) {
    switch (index) {
    case 1:
    return correctAnswer1;
    case 2:
    return correctAnswer2;
    case 3:
    return correctAnswer3;
    }
}