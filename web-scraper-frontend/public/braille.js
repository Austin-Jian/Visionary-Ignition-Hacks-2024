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


function highlightBrailleButton(character) {
    // Clear any previous highlights
    const brailleButtons = document.querySelectorAll('.braille-button');
    brailleButtons.forEach(button => {
        button.classList.remove('highlighted');
    });

    // Create a mapping of characters to Braille symbols
    const charToBraille = {
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓',
        'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏',
        'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭',
        'y': '⠽', 'z': '⠵',
        '0': '⠴', '1': '⠂', '2': '⠆', '3': '⠒', '4': '⠲', '5': '⠢', '6': '⠖', '7': '⠶',
        '8': '⠦', '9': '⠔',
        ' ': '⠀'  // Braille space
    };

    // Get Braille symbol
    const brailleSymbol = charToBraille[character.toLowerCase()];

    // Highlight Braille button if exists
    if (brailleSymbol) {
        const buttonToHighlight = Array.from(brailleButtons).find(button => button.textContent.trim() === brailleSymbol);
        if (buttonToHighlight) {
            buttonToHighlight.classList.add('highlighted');
        }
    }
}

document.getElementById('inputText').addEventListener('input', function (e) {
    // Get the last character typed
    const lastChar = e.target.value.slice(-1);
    // Highlight the corresponding Braille button
    highlightBrailleButton(lastChar);
});
