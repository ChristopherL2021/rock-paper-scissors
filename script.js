function computerPlay() {
    const number = Math.floor(Math.random() * 100) + 1;

    if (number < 33) {
        return 'rock';
    } else if (number >= 33 && number <= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}