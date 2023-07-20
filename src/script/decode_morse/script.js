const MORSE_CODE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decodeMorse(morseCode) {
  let morse = morseCode.trim().split(" ");
  let encoded = [];

  for (let i = 0; i < morse.length; i++) {
    if (morse[i] === "") {
      encoded.push(" ");
    } else {
      encoded.push(MORSE_CODE[morse[i]]);
    }
  }
  return encoded.join("").replace(/ {2}/g, " ");
}

console.log(decodeMorse(". "));
console.log(decodeMorse("   .... . -.--   "));
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
