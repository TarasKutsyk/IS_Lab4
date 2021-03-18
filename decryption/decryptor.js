module.exports = (encryptedData, gammaWord, shuffledAlphabet) => {
    let decryptedText = [];

    let decryptedLetter,
        indicesDif,
        gammaWordIndex = 0;

    for (let textIndex = 0; textIndex < encryptedData.length; textIndex++, gammaWordIndex++) {
        gammaWordIndex %= gammaWord.length;

        indicesDif = shuffledAlphabet.getMatchingIndex(encryptedData[textIndex]) - shuffledAlphabet.getMatchingIndex(gammaWord[gammaWordIndex]);
        if (indicesDif < 0) {
            indicesDif += shuffledAlphabet.getLength();
        }

        // decryptedLetter = shuffledAlphabet.getMatchingLetter(indicesDif % shuffledAlphabet.getLength());
        decryptedLetter = shuffledAlphabet.getMatchingLetter(indicesDif);
        decryptedText.push(decryptedLetter);
    }

    return decryptedText.join('');
}