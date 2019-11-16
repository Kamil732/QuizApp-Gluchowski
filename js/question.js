const questionMathCategory = [
    {
        question: 'Ile to 2+2*2',
        answers: [
            { answer: '2', correct: false},
            { answer: '3', correct: false},
            { answer: '6', correct: true},
            { answer: '222', correct: false},
        ]
    },
    {
        question: 'Ile to 2^2?',
        answers: [
            { answer: '3', correct: false},
            { answer: '1', correct: false},
            { answer: '2', correct: false},
            { answer: '4', correct: true},
        ]
    },
    {
        question: 'Ile to 10*10 / 10?',
        answers: [
            { answer: '5', correct: false},
            { answer: '10', correct: true},
            { answer: '50', correct: false},
            { answer: '25', correct: false},
        ]
    },
    {
        question: 'Ile to 1.12 / 2',
        answers: [
            { answer: '0.56', correct: true},
            { answer: '0.22', correct: false},
            { answer: '0.64', correct: false},
            { answer: '1.06', correct: false},
        ]
    },
    {
        question: 'ile to 1 / 3 * 3',
        answers: [
            { answer: '3', correct: false},
            { answer: '1', correct: false},
            { answer: '0.(9)', correct: true},
            { answer: '0.5', correct: false},
        ]
    },
    {
        question: 'ile to 100 / 2 * 3',
        answers: [
            { answer: '50', correct: false},
            { answer: '120', correct: false},
            { answer: '16.(6)7', correct: false },
            { answer: '150', correct: true },
        ]
    },
    {
        question: 'Ile to 10 + 10.01',
        answers: [
            { answer: '50.01', correct: false},
            { answer: '20.00', correct: false},
            { answer: '19', correct:  false},
            { answer: '.1267261762', correct: false },
            { answer: '20.01', correct: true},
            { answer: '19.99', correct: false},
        ]
    },
];

const questionEnglishCategory = [
    {
        question: "Co to znaczy 'What'?",
        answers: [
            { answer: 'tak', correct: false},
            { answer: 'Nie wiem', correct: false},
            { answer: 'co', correct: true},
            { answer: 'może', correct: false },
        ]
    },
    {
        question: 'Przetłumacz zdanie: "I do not like anybody"',
        answers: [
            { answer: 'Nie lubie nikogo', correct: true},
            { answer: 'Nie lubie ludzi', correct: false},
            { answer: 'Nie nawidze nikogo', correct: false},
            { answer: 'Nie moge lubić nikogo', correct: false },
        ]
    },
]