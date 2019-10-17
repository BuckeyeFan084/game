import { getRandomInt } from './util';

let squares: NodeListOf<HTMLDivElement>;
export function runApp() {
    // 1. Find alll the squares.
    const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;
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

function handleClick(e: any) {
    const clickedSquare = this as HTMLDivElement;
    if (clickedSquare.dataset.secret === 'true') {
        clickedSquare.classList.add('winner');
        const message = document.getElementById('message') as HTMLElement;
        message.innerText = 'Whoa! Awesome! You found it!';
        squares.forEach(s => {
            if (s !== clickedSquare) {
                s.classList.add('loser');
            }
        });
    } else {
        clickedSquare.classList.add('loser');
    }
}



function getSecretNumber() {
    return getRandomInt(0, 5);
}
