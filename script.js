const body = document.body;
const selectionButtons = document.querySelectorAll('[data-selection]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const finalColumn = document.querySelector('[data-final-column]')
let input = document.querySelector('input')
let p = document.querySelector('#welcom')
let div1 =document.getElementById('1')
let h6 = document.querySelector('h6')

// console.log(finalColumn);
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊🏽',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '🖐🏽',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌🏽',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    if (yourWinner) incrementScore(yourScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
    console.log(yourScoreSpan)
    
    
}


function incrementScore(scoreSpan) {
     scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
    
     if (yourScoreSpan.innerText === '5') {
        alert(`${input.value} Win!`)
        location.reload;
        computerScoreSpan.innerText = 0;
        yourScoreSpan.innerText = 0;
     
    }
    
    if (computerScoreSpan.innerText === '5') {
        alert ('Pc win!')
        computerScoreSpan.innerText = 0;
        yourScoreSpan.innerText = 0;
    }
    
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji;
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
    
}
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

 input.addEventListener('keyup', function (event) {
    h6.innerText = `${input.value}`;
     if (event.key === 'Enter') {
        input.style.display = 'none';

     }
})

