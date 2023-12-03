function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const resultMessage = document.getElementById('result');
    resultMessage.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}.`;

    if (userChoice === computerChoice) {
        resultMessage.textContent += ' It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage.textContent += ' You win!';
    } else {
        resultMessage.textContent += ' You lose!';
    }
}