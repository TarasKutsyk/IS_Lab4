module.exports = class ShuffledAlphabet {
    constructor(alphabet) {
        this.alphabet = this.shuffleAlphabet(alphabet);
    }

    shuffleAlphabet(alphabet) {
        let shuffledAlphabet = alphabet.split('');

        let currentIndex = shuffledAlphabet.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            [shuffledAlphabet[currentIndex], shuffledAlphabet[randomIndex]] =
                [shuffledAlphabet[randomIndex], shuffledAlphabet[currentIndex]];
        }

        return shuffledAlphabet;
    }

    getMatchingIndex(letter) {
        return this.alphabet.indexOf(letter);
    }

    getMatchingLetter(index) {
        return this.alphabet[index];
    }

    getLength() {
        return this.alphabet.length;
    }
}