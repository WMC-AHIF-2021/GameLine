const quizData = [
    {
        question: "When did Ant Attack come out",
        a: "2000",
        b: "1990",
        c: "1983",
        d: "1978",
        correct: "c",
    },
    {
        question: "In what time was the game wolfensteiner 3d",
        a: "2000",
        b: "World War 1",
        c: "1970",
        d: "World War 2",
        correct: "d",
    },

    {
        question: "What genre was Unreal Tournament",
        a: "Thriller",
        b: "Loveromance",
        c: "Ego-Shooter",
        d: "Fantasy",
        correct: "c",
    },
    {
        question: "When did Unreal Tournament come out",
        a: "1999",
        b: "1970",
        c: "2005",
        d: "1988",
        correct: "a",
    },
    {
        question: "What genre was Wolfensteiner 3d",
        a: "Fantasy",
        b: "Ego-shooter",
        c: "Loveromance",
        d: "Thriller",
        correct: "b",
    },
    {
        question: "What was the goal of Unreal Tournament",
        a: "fall in love",
        b: "kill everyone",
        c: "save lives",
        d: "competitions with money",
        correct: "d",
    },
    {
        question: "What genre was Ant Attack",
        a: "Jump and Run",
        b: "Ego-Shooter",
        c: "Thriller",
        d: "Loveromance",
        correct: "a",
    },
    {
        question: "Who were the developers of Unreal Tournament",
        a: "Riot Games",
        b: "Epic Games",
        c: "Fortnite",
        d: "Blizzard",
        correct: "b",
    },
    {
        question: "Who were the publisher of Ant Attack",
        a: "Quicksilva",
        b: "Deep Silver",
        c: "GT Interactive",
        d: "Blizzard",
        correct: "a",
    },
    {
        question: "What was the goal of Ant Attack",
        a: "to achive new items",
        b: "to fall in love",
        c: "to kill everyone",
        d: "to be a hero, heroine",
        correct: "d",
    },
    {
        question: "Who were the Publisher of Unreal Tournament",
        a: "Deep Silver",
        b: "Gameforge",
        c: "GT Interactive",
        d: "Astragon",
        correct: "c",
    },
    {
        question: "How long did Unreal Tournament work for the game",
        a: "6 months",
        b: "23 monts",
        c: "2 year",
        d: "18 months",
        correct: "d",
    },
    {
        question: "What playmode das Unreal Tournament have",
        a: "Search and Hide",
        b: "Jump and Run",
        c: "1v1",
        d: "Deathmatch",
        correct: "d",
    },
    {
        question: "Who designed the website GameLine",
        a: "Collin and Rodrigo",
        b: "Samuel and Michael",
        c: "Raphael and Mehmet",
        d: "Lena and Jan",
        correct: "b",
    },
    {
        question: "How can u get to the next level on Wolfensteiner 3d",
        a: "automatic next level",
        b: "to safe and press next",
        c: "trough a elevator",
        d: "trough stairs",
        correct: "c",
    },
    {
        question: "Whats the Name of our video Game",
        a: "Bot mechanic",
        b: "Hover Figther",
        c: "Online Stob",
        d: "Gempo",
        correct: "b",
    },
    /*
    {
        question: "What is the capital city of Tonga?",
        a: "Palikir",
        b: "Nuku'alofa",
        c: "Castries",
        d: "Basseterre",
        correct: "b",
    },
    {
        question: "What is the capital city of the United Arab Emirates?",
        a: "Dubai",
        b: "Seoul",
        c: "Abu Dhabi",
        d: "Muscat",
        correct: "c",
    },
    {
        question: "What is the capital city of Bhutan?",
        a: "Thimphu",
        b: "Damascus",
        c: "Phnom Penh",
        d: "Dhaka",
        correct: "a",
    },
    {
        question: "What is the capital city of Nicaragua?",
        a: "Castries",
        b: "Windhoek",
        c: "Basseterre",
        d: "Managua",
        correct: "d",
    },
    {
        question: "What is the capital city of Ethiopia?",
        a: "Addis Abada",
        b: "Victoria",
        c: "Djibouti",
        d: "Kinshasa",
        correct: "a",
    },
    {
        question: "What is the capital city of Bosnia and Hercegovina?",
        a: "Skopje",
        b: "Bukarest",
        c: "Sarajevo",
        d: "Zagreb",
        correct: "c",
    },
    {
        question: "What is the capital city of Guinea-Bissau?",
        a: "Dakar",
        b: "Bissau",
        c: "Moroni",
        d: "Managua",
        correct: "b",
    },
    {
        question: "What is the capital city of North Korea?",
        a: "Pyongyang",
        b: "Tokio",
        c: "Seoul",
        d: "Peking",
        correct: "a",
    },
    {
        question: "What is the capital city of Poland?",
        a: "Belgrade",
        b: "Minsk",
        c: "Moskau",
        d: "Warsaw",
        correct: "d",
    },*/
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let rightOrWrong = "";
let currentQuiz = 0
let index = 0;
let score = 0
let questionsAsked = [quizData.length];

loadQuiz()

function WasQuestionAsked() {
    for (let i = 0; i < questionsAsked.length; i++) {
        if(questionsAsked[i] === currentQuiz){
            return true;
        }
    }
    return false;
}

function calculateNewQuestionIndex() {
    currentQuiz = Math.floor(Math.random() * quizData.length);
}

function loadQuiz() {

    deselectAnswers()
    calculateNewQuestionIndex()
    let QuestionAlreadyAsked = WasQuestionAsked();
    if(QuestionAlreadyAsked) {
        while(QuestionAlreadyAsked && index < quizData.length) {
            calculateNewQuestionIndex();
            QuestionAlreadyAsked = WasQuestionAsked();
        }
    }
    questionsAsked[index] = currentQuiz;
    console.log(currentQuiz);
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = '';
    if(index > 0) {
        if (rightOrWrong === "right") {
            questionEl.innerHTML = `<p>The last question was <span class="right">${rightOrWrong}</span>!<br>` + `Score: ${score}<br></p>`;
        } else {
            questionEl.innerHTML = `<p>The last question was <span class="wrong">${rightOrWrong}</span>!<br>` + `Score: ${score}<br></p>`;
        }
    }
    questionEl.innerHTML += `Question ${index + 1}: <br><p>${currentQuizData.question}</p>`;
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           rightOrWrong = "right";
       }
       else {
           rightOrWrong = "wrong";
       }
       index++

       if(index < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>`
       }
    }
})