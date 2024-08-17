const BRAILLE = {
    ' ': '⠀',   // space bar to dot-0
    '_': '⠸',
    '-': '⠤',
    ',': '⠠',
    ';': '⠰',
    ':': '⠱',
    '!': '⠮',
    '?': '⠹',
    '.': '⠨',
    '(': '⠷',
    '[': '⠪',
    '@': '⠈',
    '*': '⠡',
    '/': '⠌',
    '\'': '⠄',
    '\"': '⠐',
    '\\': '⠳',
    '&': '⠯',
    '%': '⠩',
    '^': '⠘',
    '+': '⠬',
    '<': '⠣',
    '>': '⠜',
    '$': '⠫',
    '0': '⠴',
    '1': '⠂',
    '2': '⠆',
    '3': '⠒',
    '4': '⠲',
    '5': '⠢',
    '6': '⠖',
    '7': '⠶',
    '8': '⠦',
    '9': '⠔',
    'A': '⠁',
    'B': '⠃',
    'C': '⠉',
    'D': '⠙',
    'E': '⠑',
    'F': '⠋',
    'G': '⠛',
    'H': '⠓',
    'I': '⠊',
    'J': '⠚',
    'K': '⠅',
    'L': '⠇',
    'M': '⠍',
    'N': '⠝',
    'O': '⠕',
    'P': '⠏',
    'Q': '⠟',
    'R': '⠗',
    'S': '⠎',
    'T': '⠞',
    'U': '⠥',
    'V': '⠧',
    'W': '⠺',
    'X': '⠭',
    'Z': '⠵',
    ']': '⠻',
    '#': '⠼',
    'Y': '⠽',
    ')': '⠾',
    '=': '⠿'
};

const ASCII = {
    '⠀': ' ',   // dot-0 to space bar
    '⠸': '_',
    '⠤': '-',
    '⠠': ',',
    '⠰': ';',
    '⠱': ':',
    '⠮': '!',
    '⠹': '?',
    '⠨': '.',
    '⠷': '(',
    '⠪': '[',
    '⠈': '@',
    '⠡': '*',
    '⠌': '/',
    '⠄': '\'',
    '⠐': '\"',
    '⠳': '\\',
    '⠯': '&',
    '⠩': '%',
    '⠘': '^',
    '⠬': '+',
    '⠣': '<',
    '⠜': '>',
    '⠫': '$',
    '⠴': '0',
    '⠂': '1',
    '⠆': '2',
    '⠒': '3',
    '⠲': '4',
    '⠢': '5',
    '⠖': '6',
    '⠶': '7',
    '⠦': '8',
    '⠔': '9',
    '⠁': 'A',
    '⠃': 'B',
    '⠉': 'C',
    '⠙': 'D',
    '⠑': 'E',
    '⠋': 'F',
    '⠛': 'G',
    '⠓': 'H',
    '⠊': 'I',
    '⠚': 'J',
    '⠅': 'K',
    '⠇': 'L',
    '⠍': 'M',
    '⠝': 'N',
    '⠕': 'O',
    '⠏': 'P',
    '⠟': 'Q',
    '⠗': 'R',
    '⠎': 'S',
    '⠞': 'T',
    '⠥': 'U',
    '⠧': 'V',
    '⠺': 'W',
    '⠭': 'X',
    '⠵': 'Z',
    '⠻': ']',
    '⠼': '#',
    '⠽': 'Y',
    '⠾': ')',
    '⠿': '='
};

function convertToBraille() {
    const inputText = document.getElementById('inputText').value;
    let brailleText = '';
    for (let char of inputText.toUpperCase()) {
        brailleText += BRAILLE[char] || '?';
    }
    document.getElementById('outputText').value = brailleText;
}

function convertToText() {
    const inputText = document.getElementById('inputText').value;
    let asciiText = '';
    for (let symbol of inputText) {
        asciiText += ASCII[symbol] || '?';
    }
    document.getElementById('outputText').value = asciiText;
}

function addBrailleSymbol(symbol) {
    document.getElementById('inputText').value += symbol;
}
