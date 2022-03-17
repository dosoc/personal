// random message generator 
const quotes = ['Take care of your body, it\'s the only place you have to live.',
             'If you ain\'t first, you\'re last.', 
             'Never pass up the opportunity to reduce your hand.', 
             'Optimism has unlimited upside', 
            'You miss 100% of the shots you dont take.',
            'Optimism is the key to sucess',
            'Being optimistic is a choice.'];
const bitcoin = ['There will never be more than 21 million.', 
                '100 sats is a bit, 1 million bits is a bitcoin.', 
                'Bitcoin was created by Satoshi Nakamoto.', 
                'Don\'t trust; verify', ];
const golfTips = ['Develop a good and repeatable preshot routine.', 
                'Practice like you play, and play like you practice.', 
                'Clean your clubs', 'Dont over swing.', 
                'Swing aggresively to conservative targets', 
                'Always putt to make it.', 
                'You pre-shot routine should settle you into the shot.'];
const messages = ['random-quote', 'random-bitcoin','random-golf']

// Golf Button

function getRandomGolf() {
    let i = Math.floor(Math.random() * golfTips.length);
    document.getElementById('random-golf').innerHTML =golfTips[i];
}
const golfButton = document.getElementById('get-golf');

golfButton.onclick = getRandomGolf;

// Quote Button

function getRandomQuote() {
    let i = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').innerHTML =quotes[i];
}
const quoteButton = document.getElementById('get-quote');

quoteButton.onclick = getRandomQuote;

// Bitcoin Button

function getRandomBitcoin() {
    let i = Math.floor(Math.random() * bitcoin.length);
    document.getElementById('random-bitcoin').innerHTML =bitcoin[i];
}
const bitcoinButton = document.getElementById('get-tidbit');

bitcoinButton.onclick = getRandomBitcoin;

