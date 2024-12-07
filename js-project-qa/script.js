const quizQuestions = [
    {
        question: "What is the correct syntax to print a message to the console?",
        options: ["console.log('Hello')", "print('Hello')", "echo('Hello')", "System.out.println('Hello')"],
        answer: "console.log('Hello')" // Answer key
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Number", "Boolean", "Float"],
        answer: "Float" // Answer key
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["let varName;", "variable varName;", "declare varName;", "var varName;"],
        answer: "let varName;" // Answer key
    },
    {
        question: "What is the output of `typeof NaN` in JavaScript?",
        options: ["number", "NaN", "undefined", "string"],
        answer: "number" // Answer key
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: [".push()", ".pop()", ".shift()", ".unshift()"],
        answer: ".push()" // Answer key
    },
    {
        question: "What will `2 + '2'` evaluate to in JavaScript?",
        options: ["4", "'22'", "undefined", "NaN"],
        answer: "'22'" // Answer key
    },
    {
        question: "Which of the following is the correct way to create an object?",
        options: [
            "let obj = { key: 'value' };",
            "let obj = (key = 'value');",
            "let obj = [key: 'value'];",
            "let obj = key: 'value';"
        ],
        answer: "let obj = { key: 'value' };" // Answer key
    },
    {
        question: "What will `setTimeout` return in JavaScript?",
        options: ["The delay time", "An ID that can be used to clear the timeout", "Undefined", "A Promise"],
        answer: "An ID that can be used to clear the timeout" // Answer key
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["/*", "//", "#", "!--"],
        answer: "//" // Answer key
    },
    {
        question: "How can you convert a string to an integer in JavaScript?",
        options: ["parseInt()", "toInteger()", "Number()", "All of the above"],
        answer: "parseInt()" // Answer key
    }
];

let slide = document.getElementById('slide');
let feedbackElement = document.getElementById("feedback");
let timerElement = document.getElementById("timer");
let next = document.getElementById("next");
let submitt = document.getElementById("submit");
let count = 0;
let score = 0;
let data = quizQuestions[count];
let timeLeft = 15;
let timerInterval;

const displayQuestion = (index) => {
    const question = quizQuestions[index];
    slide.innerHTML = `
        <div class="qes">
            <h3>${index + 1}. ${question.question}</h3>
            <p><input type="radio" name="q" value="${question.options[0]}"> a. ${question.options[0]}</p>
            <p><input type="radio" name="q" value="${question.options[1]}"> b. ${question.options[1]}</p>
            <p><input type="radio" name="q" value="${question.options[2]}"> c. ${question.options[2]}</p>
            <p><input type="radio" name="q" value="${question.options[3]}"> d. ${question.options[3]}</p>
        </div>
        <button id="submit">Submit</button>
        <div id="feedback"></div>`;

    resetTimer();
    
    const submitButton = document.getElementById("submit");
    submitButton.disabled = false; 

    submitButton.removeEventListener('click', submitbtn); 
    submitButton.addEventListener('click', submitbtn); 
};

const startTimer = () => {
    clearInterval(timerInterval); 
    timeLeft = 15; 
    timerElement.innerHTML = `Time Left: ${timeLeft}s`; 
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval); 
            disablebtn(); 
            feedbackElement.innerHTML = "<span style='color: red;'>Time's up!</span>";
        }
    }, 1000);
};

const disablebtn = () => {
    const submitButton = document.getElementById("submit");
    if (submitButton) {
        submitButton.disabled = true; 
    }
};

const validateAnswer = () => {
    let ans = document.querySelector('input[name="q"]:checked');
    if (!ans) return;

    let selectedAnswer = ans.value;
    if (selectedAnswer.trim() === data.answer.trim()) {
        score++;
        feedbackElement.innerHTML = "<span style='color: green; font-size: 1.2rem;'>Correct Answer!</span>";
    } else {
        feedbackElement.innerHTML = "<span style='color: red; font-size: 1.2rem;'>Incorrect Answer!</span>";
    }
};

const submitbtn = () => {
    let ans = document.querySelector('input[name="q"]:checked');
    if (!ans) {
        alert("Please select an answer.");
        return;
    }

    validateAnswer();
    disablebtn();

    if (count < quizQuestions.length - 1) {
        count++;
        data = quizQuestions[count];
        displayQuestion(count);
    } else {
        feedbackElement.innerHTML = `Quiz Completed! Your score: ${score}/${quizQuestions.length}`;
        clearInterval(timerInterval);
    }
};

next.addEventListener('click', () => {
    let ans = document.querySelector('input[name="q"]:checked');
    if (!ans) {
        alert("Please select an answer.");
        return;
    }
    if (count < quizQuestions.length - 1) {
        count++;
        data = quizQuestions[count];
        displayQuestion(count);
    } else {
        feedbackElement.innerHTML = `Quiz Completed! Your score: ${score}/${quizQuestions.length}`;
        clearInterval(timerInterval); 
    }
});

const resetTimer = () => {
    timeLeft = 15;
    timerElement.innerHTML = `Time Left: ${timeLeft}s`;
};

displayQuestion(count);
startTimer();
