// every btn has addEventListerner
btnStart.addEventListener('click', startGame);
btnNext.addEventListener('click', () => {
    currentQuestion++;
    setNextQuestion();
});
btnChangeCategory.addEventListener('click', () => location.reload());
chooseCategoryBtnMath.addEventListener('click', chooseCategory);
chooseCategoryEnglish.addEventListener('click', chooseCategory);

const writeMistakes = () => wrongAnswersConatiner.innerHTML = `BŁĘDÓW: ${wrongAnswer}/5`;

let addPoint = () => {
    isAnswer = true;
    pointsBoard.innerHTML = `PUNTKY: ${points}/${questionCategory.length*2}`
}

const setNextQuestion = () => {
    resetState();
    showQuestion(suffledQuestion[currentQuestion]);
}

const showQuestion = question => {
    timerInSide = 0;
    timerLock = false;
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.answer;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectedAnswer);
        answerButtonsElement.appendChild(button);
    });
}

const resetState = () => {
    isAnswer = false;
    clearStatusClass(document.body);
    btnNext.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function colorEveryButton() {
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.style.cursor = "default";
        button.style.borderColor = "black";
    });
    suffledQuestion.length > currentQuestion + 1 ? btnNext.classList.remove('hide') : setTimeout(endGame, 200);
}

const selectedAnswer = e => {
    timerLock = true;
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    !isAnswer ? setStatusClass(document.body, correct) : null;

    colorEveryButton();

    if(!isAnswer && !correct){
        wrongAnswer++;
        writeMistakes();
        wrongAnswer == 5 ? setTimeout(endGame, 250) :  null;
    }

    if(!isAnswer && correct) {
        points += 2;
        addPoint();
    } else if(!isAnswer && points > 0 && !correct) {
        points--;
        addPoint();
    }
    isAnswer = true;
}

const setStatusClass = (element, correct) => correct ? element.classList.add('correct') : element.classList.add('wrong');

const clearStatusClass = element => {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}