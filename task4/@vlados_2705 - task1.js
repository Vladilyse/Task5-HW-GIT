class VigenèreCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    encode(message) {
        return this.processMessage(message, 'encode');
    }

    decode(encodedMessage) {
        return this.processMessage(encodedMessage, 'decode');
    }

    processMessage(message, operation) {
        const keyLength = this.key.length;
        let result = '';

        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            if (this.alphabet.includes(char)) {
                const keyChar = this.key[i % keyLength];
                const charIndex = this.alphabet.indexOf(char);
                const keyIndex = this.alphabet.indexOf(keyChar);

                let shiftedIndex;
                if (operation === 'encode') {
                    shiftedIndex = (charIndex + keyIndex) % this.alphabet.length;
                } else {
                    shiftedIndex = (charIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
                }

                result += this.alphabet[shiftedIndex];
            } else {
                result += char;
            }
        }

        return result;
    }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';
const c = new VigenèreCipher(key, alphabet);
console.log(c.encode('codewars'));
console.log(c.decode('laxxhsj'));