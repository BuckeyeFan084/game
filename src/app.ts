import { getRandomInt } from './util';

let squares: NodeListOf<HTMLDivElement>;
let message: HTMLElement;
export function runApp() {
    // 1. Find alll the squares.
    message = document.getElementById('message') as HTMLElement;

    squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;
    const secret = getSecretNumber();
    squares.forEach((sq, index) => {
        if (index === secret) {
            sq.dataset.secret = 'true';
        }
        sq.addEventListener('click', handleClick);

    });
    // 2. pick one as the secret square and "mark it".
    // 3. make it so that when the player clicks the square...

}

let tries = 0;

function handleClick(e: any) {
    const clickedSquare = this as HTMLDivElement;
    if (clickedSquare.dataset.secret === 'true') {
        clickedSquare.classList.add('winner');
        const message = document.getElementById('message') as HTMLElement;
        message.innerText = 'Whoa! Awesome! You found it!';
        squares.forEach(s => {
            if (s !== clickedSquare) {
                s.classList.add('winner');
                s.removeEventListener('click', handleClick);
            }
        });
    } else {
        clickedSquare.classList.add('loser');
        tries++;
        if (tries === 5) {
            squares.forEach(sq => {
                if (sq.dataset.secret === 'true') {
                    sq.classList.add('winner');
                } else {
                    sq.classList.add('loser');
                }
                message.innerText = 'Wow! You Suck! I wouldn\'t play the lottery if I were you!';
            });
        }
    }
}



function getSecretNumber() {
    return getRandomInt(0, 5);
}
