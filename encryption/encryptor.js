module.exports = (inputText, gammaWord, shuffledAlphabet) => {
    let encryptedText = [];

    let encryptedLetter,
        indicesSum,
        gammaWordIndex = 0;

    for (let textIndex = 0; textIndex < inputText.length; textIndex++, gammaWordIndex++) {
        gammaWordIndex %= gammaWord.length;

        indicesSum = shuffledAlphabet.getMatchingIndex(inputText[textIndex]) + shuffledAlphabet.getMatchingIndex(gammaWord[gammaWordIndex]);

        encryptedLetter = shuffledAlphabet.getMatchingLetter(indicesSum  % shuffledAlphabet.getLength());
        encryptedText.push(encryptedLetter);
    }

    return encryptedText.join('');
}