export function getRandomThrow() {

    const randomThrow = Math.ceil(Math.random() * 3);

    if (randomThrow === 1) {
        return 'rock';
    }
    if (randomThrow === 2) {
        return 'paper';
    }
    if (randomThrow === 3) {
        return 'scissors';
    }
};
