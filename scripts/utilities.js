function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function showText(id, text){
    const span = document.getElementById(id);
    span.innerText = text;
}

function scoreUp(curentScore){
    let value = curentScore + 1;
    return value;
}

function livesDown(currentLive){
    let value = currentLive -1;
    return value;
}

function highlightLetter(letter){
    const target = document.getElementById(letter);
    target.classList.add('bg-orange-300')
}
function removeHighlightLetter(letter){
    const target = document.getElementById(letter);
    target.classList.remove('bg-orange-300')
}

function score(){
    const currentScoreText = document.getElementById('current-score').innerText;
    const currentScore = parseInt(currentScoreText);
    return currentScore;
}

function lives(){
    const currentLivesText = document.getElementById('lives').innerText;
    const currentLives = parseInt(currentLivesText);
    return currentLives;
}

function getRandomLetter(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    const index = Math.round(Math.random() * 25);
    const randomLetter = alphabets[index];
    return randomLetter;
}

function keyPressed(event){
    
    const expectedLetter = document.getElementById('current-letter').innerText.toLowerCase();
    const pressedLetter = event.key; 
    
    if(pressedLetter === 'Escape'){
        gameOver();
    }
    if(expectedLetter === pressedLetter){
        const currentScore = parseInt(document.getElementById('current-score').innerText);
        const updatedScore = currentScore + 1;
        showText('current-score', updatedScore);
        removeHighlightLetter(expectedLetter);
        continuePlay();
    }else{
        const currentLives = parseInt(document.getElementById('lives').innerText);
        const updatedLives = currentLives - 1;
        showText('lives', updatedLives);
        if(updatedLives === 0){
            gameOver();
        }
    }
    
}

document.addEventListener('keyup', keyPressed);

function continuePlay(){
    const randomLetter = getRandomLetter();
    showText('current-letter',randomLetter);
    highlightLetter(randomLetter);
}

function gameOver(){
    hideElement('home');
    hideElement('playground');

    const finalScore = parseInt(document.getElementById('current-score').innerText);
    showText('final-score', finalScore)
    showElement('score-card');
    const currentLetter = document.getElementById('current-letter').innerText.toLowerCase();
    removeHighlightLetter(currentLetter);
}

function play(){
    const defaultScore = 0;
    const defaultLives = 5;

    showText('lives', defaultLives);
    showText('current-score', defaultScore);

    continuePlay();
}