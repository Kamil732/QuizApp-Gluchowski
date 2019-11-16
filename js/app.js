const btnStart = document.querySelector('#start-btn');
const btnNext = document.querySelector('#next-btn');
const btnChangeCategory = document.getElementById('change-category');
const chooseCategoryBtnMath = document.getElementById('categoryMath');
const chooseCategoryEnglish = document.getElementById('categoryEnglish');
const questionContainerElement = document.getElementById('question-container');
const gameContainer = document.getElementById('container');
const chooseCategoryContainer = document.getElementById('choose-category-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const pointsBoard = document.getElementById('points');
const wrongAnswersConatiner = document.getElementById('wrong-answers');
const timer = document.getElementById('time-to-answer-in');
const timerConatiner = document.getElementById('time-to-answer');

let timerInSide = 0;
let timerLock = false;
let questionCategory;
let suffledQuestion, currentQuestion;
let isAnswer = false;
let points = 0;
let wrongAnswer = 0;

function toggleStartClass() {
    btnChangeCategory.classList.toggle('hide');
    pointsBoard.classList.toggle('hide');
    wrongAnswersConatiner.classList.toggle('hide');
}

function startGame() {
    wrongAnswer = 0;
    writeMistakes();
    points = 0;
    addPoint();

    timerConatiner.classList.remove('hide');
    toggleStartClass();
    btnStart.classList.add('hide');

    suffledQuestion = questionCategory.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

const endGame = () => {
    let answerPointsName;
    const questionElementValue = suffledQuestion[currentQuestion].question;

    if(points == 1) answerPointsName = 'PUNKT';
    else if(points > 1 && points <= 4) answerPointsName = 'PUNKTY' 
    else if(points > 4 || points == 0) answerPointsName = 'PUNKTÓW';

    timerConatiner.classList.add('hide');
    toggleStartClass();
    btnNext.classList.add('hide');
    questionElement.innerHTML = `<h4 class='bold-font'>ZDOBYŁEŚ/AŚ <span class="color-purlple">${points}/${questionCategory.length*2}</span> ${answerPointsName}<br /><span class="color-red">${writeMistakes()}</span></h4>${questionElementValue}`;

    btnStart.innerText = 'OD NOWA!';
    btnStart.classList.remove('hide');

    currentQuestion = suffledQuestion.length;
}

// choose category function
function chooseCategory(e) {
    const buttonTarget = e.target;
    if(buttonTarget == chooseCategoryBtnMath) questionCategory = questionMathCategory;
    if(buttonTarget == chooseCategoryEnglish) questionCategory = questionEnglishCategory;

    chooseCategoryContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
}

function timerToAnswer() {
    setInterval(() => {
        if(timerInSide != 100 && !timerLock) {
            timerInSide++;
            timer.style.width = timerInSide+'%';
        } else if(timerInSide == 100) {
            colorEveryButton();

            if(!isAnswer) {
                wrongAnswer++;
                writeMistakes();
                wrongAnswer == 5 ? setTimeout(endGame, 250) :  null;
            }
            if(points > 0 && !isAnswer) {
                points--;
                addPoint();
            }

            isAnswer = true;
        }
    }, 120);
}
window.onload = timerToAnswer;