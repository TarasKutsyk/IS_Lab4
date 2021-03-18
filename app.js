const encryptor = require('./encryption/encryptor');
const decryptor = require('./decryption/decryptor');
const fileService = require('./utility/fileService');
const ShuffledAlphabet = require('./utility/shuffledAlphabet');

const {Gamma} = require('./config');

const shuffledAlphabet = new ShuffledAlphabet(fileService.getAlphabet());

const encryptedData = encryptor(fileService.getInputText(), Gamma, shuffledAlphabet);

fileService.writeEncryptedData(encryptedData);

const decryptedData = decryptor(encryptedData, Gamma, shuffledAlphabet);

fileService.writeDecryptedData(decryptedData);
