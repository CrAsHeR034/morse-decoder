const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
      const chunkSize = 10;
  const chunks = [];

  for (let i = 0; i < expr.length; i += chunkSize) {
    chunks.push(expr.slice(i, i + chunkSize));
  }

  const morseSymbols = chunks.map((chunk) => {
    if (chunk === "**********") {
      return " ";
    }

    const morseCode = chunk.replace(/10/g, ".").replace(/11/g, "-");

    return MORSE_TABLE[morseCode];
  });

  return morseSymbols.join("");
}

module.exports = {
    decode
}
