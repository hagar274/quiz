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
            {text: "15", correct: false},
            {text: "20", correct: false},
            {text: "13", correct: true},
        ]
    },
    {
        question: "ما اصغر دولة في العالم؟",
        answers: [
            {text: "الفاتيكان", correct: true},
            {text: "انترماتيكا", correct: false},
            {text: "فيجي", correct: false},
            {text: "كندا", correct: false},
        ]
    },
    {
        question: "ما هو الاسم العالمي لمدينة نيويورك؟",
        answers: [
            {text: "بابوا نيو غينيا", correct: false},
            {text: "جوقام", correct: true},
            {text: "كيريباتي", correct: false},
            {text: "ميكرونيزيا", correct: false},
        ]
    },
    {
        question: "متي تم افتتاح مترو لندن؟",
        answers: [
            {text: "1863", correct: true},
            {text: "1862", correct: false},
            {text: "1888", correct: false},
            {text: "1860", correct: false},
        ]
    },
    {
        question: "متي تم نشر العدل الاول من مجلة فوغ؟",
        answers: [
            {text: "1960", correct: false},
            {text: "2000", correct: false},
            {text: "1892", correct: true},
            {text: "1860", correct: false},
        ]
    },
    {
        question: "كم عدد المفاتيح في بيانو كلاسيكي؟ ",
        answers: [
            {text: "99", correct: false},
            {text: "77", correct: false},
            {text: "88", correct: true},
            {text: "66", correct: false},
        ]
    },
    {
        question: "ما هو الحيوان الوطني لاستراليا؟",
        answers: [
            {text: "الدب القطبي", correct: false},
            {text: "الباندا", correct: false},
            {text: "البطريق", correct: false},
            {text: "الكنغر الاحمر", correct: true},
        ]
    },
    {
        question: "كم يستغرف دوران الارض حول الشمس؟",
        answers: [
            {text: "360 يوم", correct: false},
            {text: "365 يوم", correct: true},
            {text: "350 يوم", correct: false},
            {text: "370 يوم", correct: false},
        ]
    }
];

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer_buttons");
let nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
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
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Score ${score} out of ${questions.length}!`;
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
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
