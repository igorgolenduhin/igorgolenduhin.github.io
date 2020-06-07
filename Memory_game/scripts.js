const cards = document.querySelectorAll('.memory-card');
const buttoncl = document.getElementById("button");;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipcard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    //second click
    hasFlippedCard = false;
    secondCard = this;

    //does cards match?
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    //match cards and they will not move again : they are not same, move again (using timer)
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);
    resetBoard();
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}

(function shuffleCards(){
    cards.forEach(card => {
        let randPos = Math.floor(Math.random()*12);
        card.style.order = randPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipcard));
buttoncl.addEventListener('click', () => location.reload());