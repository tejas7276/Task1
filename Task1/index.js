const quizData = [
    {
        question: "What is the biggest animal in the world?",
        options: ["Elephant", "Blue Whale", "Crocodile", "Rhinoceros",],
        correct: 1,
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Ganga River", "Godavari River",],
        correct: 1,
    },
    {
        question: "What year did World War II end?",
        options: ["1945", "1941", "1948", "1950",],
        correct:0,
    },
    {
        question:"Which planet has the most moons?",
        options:["Mars","Venus","Jupiter","Earth",],
        correct:2,
    },
    {
        question:"What is the chemical symbol for Gold?",
        options:["Gd","Ag","Go","Au",],
        correct:3,
    },
    {
        question:"What is the world's largest ocean?",
        options:["Indian Ocean","Pacific Ocean","Southern Ocean","Atlantic Ocean,"],
        correct:0,
    },
    {
        question:"How many players are there in a cricket team?",
        options:["6","11","9","15"],
        correct:1,
    },
    {
        question:"Who is a CEO of Tesla?",
        options :["Mark Zuckerberg","Tim Cook","Jeff Bezos","Elon Musk",],
        correct:3,
    },
    {
        question:"What type of animal is a penguin?",
        options :["Insect","Reptile","Bird","Mammal",],
        correct:2,
    },
    {
        question:"What is the largest country in the world by area?",
        options :["India","Pakistan","China","Russia",],
        correct:3,
    },
];

//  Initialization

const answerElement = document.querySelectorAll(".answer");
const [questionElement, option_1, option_2, option_3, option_4]=
document.querySelectorAll("#question,  .option_1, .option_2, .option_3, .option_4");

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

//Load

const quiz = document.querySelector('#quiz');
const loadQuiz = () =>{
    const { question, options } = quizData[currentQuiz];
    

    questionElement.innerText = `${currentQuiz+1}: ${question}`;
    options.forEach(
        (currentOption, index)=>(window[`option_${index + 1}`].innerText = currentOption )
    );
};
loadQuiz();

//Selected Answer

const getSelecetedOption = () => {
    const answerElements = Array.from(answerElement); 
    return answerElements.findIndex((curElement) => curElement.checked); 
};

const deselectedAnswers = () =>{
    return answerElement.forEach((curElement)=> curElement.checked = false);
}


submitBtn.addEventListener("click",()=>{
    const selectedOptionIndex = getSelecetedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score+1;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length){
        deselectedAnswers();
        loadQuiz();
    }else{
        quiz.innerHTML=`<div class="result">
        <h2> 🏆 Your Score: ${score}/${quizData.length } Correct Answer</h2>
        <p>Congratulations on Completing The Quiz !!<p>
        <button class="reload-button"onclick="location.reload()">Restart🔁</button>
        </div>`
    }
});