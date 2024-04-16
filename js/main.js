let questions = [
    {
        question: "كم عدد المناطق في روسيا؟",
        answers: [
            {text: "10", correct: false},
            {text: "11", correct: true},
            {text: "12", correct: false},
            {text: "13", correct: false},
        ]
    },
    {
        question: "ما هو الزهرة الوطنية لليابان؟",
        answers: [
            {text: "زهرة اللوتس", correct: false},
            {text: "زهرة ياقوتية", correct: false},
            {text: "زهرة الكرز", correct: true},
            {text: "خزامي", correct: false},
        ]
    },
    {
        question: "كم عدد الشرائط في علم الولايات المتحدة الامريكية؟",
        answers: [
            {text: "12", correct: false},
            {text: "13", correct: true},
            {text: "15", correct: false},
            {text: "20", correct: false},
        ]
    },
    {
        question: "ما اصغر دولة في العالم؟",
        answers: [
            {text: "انترماتيكا", correct: false},
            {text: "الفاتيكان", correct: true},
            {text: "فيجي", correct: false},
            {text: "كندا", correct: false},
        ]
    },
    {
        question: "ghdtf",
        answers: [
            {text: "sg", correct: false},
            {text: "jhg", correct: true},
            {text: "kk", correct: false},
            {text: "jj", correct: false},
        ]
    },
    {
        question: "ghdtf",
        answers: [
            {text: "sg", correct: false},
            {text: "jhg", correct: true},
            {text: "kk", correct: false},
            {text: "jj", correct: false},
        ]
    },
    {
        question: "ghdtf",
        answers: [
            {text: "sg", correct: false},
            {text: "jhg", correct: true},
            {text: "kk", correct: false},
            {text: "jj", correct: false},
        ]
    },
    {
        question: "ghdtf",
        answers: [
            {text: "sg", correct: false},
            {text: "jhg", correct: true},
            {text: "kk", correct: false},
            {text: "jj", correct: false},
        ]
    },
    {
        question: "ghdtf",
        answers: [
            {text: "sg", correct: false},
            {text: "jhg", correct: true},
            {text: "kk", correct: false},
            {text: "jj", correct: false},
        ]
    },
    {
        question: "ghdtf",
        answers: [
            {text: "sg", correct: false},
            {text: "jhg", correct: true},
            {text: "kk", correct: false},
            {text: "jj", correct: false},
        ]
    }
];

let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer_buttons");
let nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    Score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
}
}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Score ${score} out of ${Questions.lenght}!`
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
next.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.lenght){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
