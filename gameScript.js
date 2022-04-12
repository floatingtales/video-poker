/**
 * Sprites used:
 * Background --> stringstar fields by trixie: https://trixelized.itch.io/starstring-fields
 * Foreground --> Free Cute Tileset by Namatnieks: https://aamatniekss.itch.io/free-pixelart-tileset-cute-forest
 * h1 Font ---> Scream When You're Ready To Die by Chequered Ink: https://www.fontspace.com/scream-when-youre-ready-to-die-font-f31092
 * h2 font --> A goblin appears by Chequered Ink: https://www.fontspace.com/a-goblin-appears-font-f30019
 *
 */

/**
 * ==================================================
 * ==================================================
 * GLOBAL VARIABLES
 * ==================================================
 * ==================================================
 */

let deck = {};

const bardName = 'Etienne';

let betAmount;

const payouts = [
  { type: 'Royal Flush', multiplier: 800 },
  { type: 'Straight Flush', multiplier: 50 },
  { type: 'Four of a Kind', multiplier: 25 },
  { type: 'Full House', multiplier: 9 },
  { type: 'Flush', multiplier: 6 },
  { type: 'Straight', multiplier: 4 },
  { type: 'Three of a Kind', multiplier: 3 },
  { type: 'Two Pair', multiplier: 2 },
  { type: 'Jacks or Better', multiplier: 1 },
];

const mainBlock = document.getElementsByTagName('main')[0];

const mainContainer = document.createElement('div');
mainContainer.id = 'game-container';

// payouts window divs
const payoutDiv = document.createElement('div');
payoutDiv.id = 'payouts';

const payoutTitle = document.createElement('h2');
payoutTitle.innerText = 'Payouts';

// game zone divs
const gameZone = document.createElement('div');
gameZone.id = 'game-zone';

const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';

const addWagerBtn = document.createElement('button');
addWagerBtn.innerText = '+1';

const subtractWagerBtn = document.createElement('button');
subtractWagerBtn.innerText = '-1';

const wagerDisplay = document.createElement('div');

// jukebox divs
const jukebox = document.createElement('div');
jukebox.id = 'jukebox';

const jukeboxTitle = document.createElement('h2');
jukeboxTitle.innerText = 'Bard\'s Tunes';

const jukeboxIconsZone = document.createElement('div');
jukeboxIconsZone.id = 'jukebox-icons';

const jukeboxPlayBtn = document.createElement('button');
jukeboxPlayBtn.innerText = 'Play a Tune!';

const jukeboxPauseBtn = document.createElement('button');
jukeboxPauseBtn.innerText = 'Halt it!';

const jukeboxNextBtn = document.createElement('button');
jukeboxNextBtn.innerText = 'Next tune!';

const jukeboxDisplayZone = document.createElement('div');
jukeboxDisplayZone.id = 'jukebox-display';

const jukeboxBardDiv = document.createElement('div');
jukeboxBardDiv.id = 'bard-img';

const jukeboxBardImg = document.createElement('img');
jukeboxBardImg.src = 'sprites/characters/bard2.png';

const jukeboxBardTextDiv = document.createElement('div');
jukeboxBardTextDiv.id = 'bard-text';

const jukeboxBardName = document.createElement('div');
jukeboxBardName.id = 'bard-name';
jukeboxBardName.innerText = bardName;

const jukeboxBardConvo = document.createElement('div');
jukeboxBardConvo.id = 'bard-convo';
jukeboxBardConvo.innerText = 'Now Playing ...';

/**
 * ==================================================
 * ==================================================
 * HELPER FUNCTIONS
 * ==================================================
 * ==================================================
 */

/**
 * Randomize the index of an array of size (max).
 * @param {number} max size of the array
 * @returns {number} randomized index of the array
 */
const randomizeIndex = (max) => Math.floor(Math.random() * max);

/**
 * Creates a standard 52 card deck.
 * @returns {Array} an array of a standard 52 card deck.
 */
const deckCreator = () => {
  const createdDeck = [];
  const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
  const suitSymbols = ['♠', '♣', '♥', '♦'];
  for (let i = 0; i < suits.length; i += 1) {
    const currentSuit = suits[i];
    const currentSymbol = suitSymbols[i];
    const currentColour = i < 2 ? 'black' : 'red';
    for (let j = 1; j <= 13; j += 1) {
      const currentRank = j;
      let currentName = j;
      let currentDisplayName = j;
      if (currentRank === 1) {
        currentName = 'Ace';
        currentDisplayName = 'A';
      } else if (currentRank === 11) {
        currentName = 'Jack';
        currentDisplayName = 'J';
      } else if (currentRank === 12) {
        currentName = 'Queen';
        currentDisplayName = 'Q';
      } else if (currentRank === 13) {
        currentName = 'King';
        currentDisplayName = 'K';
      }
      const currentCard = {
        suit: currentSuit,
        symbol: currentSymbol,
        colour: currentColour,
        rank: currentRank,
        name: currentName,
        displayName: currentDisplayName,
      };

      createdDeck.push(currentCard);
    }
  }
  return createdDeck;
};

/**
 * Shuffles an array, simulates a deck shuffling
 * @param {Array} deckToShuffle an array (of decks) to shuffle
 * @returns {Array} a complete shuffled deck
 */
const deckShuffler = (deckToShuffle) => {
  for (let i = 0; i < deckToShuffle.length; i += 1) {
    const currentCard = deckToShuffle[i];
    const randomCardIndex = randomizeIndex(deckToShuffle.length);
    const randomCard = deckToShuffle[randomCardIndex];
    deckToShuffle[i] = randomCard;
    deckToShuffle[randomCardIndex] = currentCard;
  }
  return deckToShuffle;
};

/**
 * ==================================================
 * ==================================================
 * GAME/DOM FUNCTIONS
 * ==================================================
 * ==================================================
 */

/**
 * recalculate and update the payout table
 */
const updatePayout = () => {
  payoutDiv.innerHTML = '';
  payoutDiv.append(payoutTitle);

  const payoutTable = document.createElement('table');

  for (let i = 0; i < payouts.length; i += 1) {
    const tableRow = document.createElement('tr');

    const tablePayoutType = document.createElement('td');
    tablePayoutType.innerText = payouts[i].type;

    const tablePayoutMultiplier = document.createElement('td');
    tablePayoutMultiplier.innerText = payouts[i].multiplier * betAmount;

    tableRow.append(tablePayoutType, tablePayoutMultiplier);
    payoutTable.append(tableRow);
  }
  payoutDiv.append(payoutTable);
};

/**
 * create jukebox function
 */
const createJukebox = () => {
  jukebox.innerHTML = '';
  jukeboxBardTextDiv.append(jukeboxBardName, jukeboxBardConvo);
  jukeboxBardDiv.append(jukeboxBardImg);
  jukeboxDisplayZone.append(jukeboxBardDiv, jukeboxBardTextDiv);
  jukeboxIconsZone.append(jukeboxTitle, jukeboxPauseBtn, jukeboxPlayBtn, jukeboxNextBtn);
  jukebox.append(jukeboxIconsZone, jukeboxDisplayZone);
};

const createGameZone = () => {
  gameZone.innerHTML = '';
  wagerDisplay.innerHTML = betAmount;
  gameZone.append(wagerDisplay, addWagerBtn, subtractWagerBtn);
};

/**
 * initialize the game
 */
const gameInit = () => {
  deck = deckShuffler(deckCreator());
  mainContainer.append(payoutDiv, gameZone, jukebox);
  mainBlock.append(mainContainer);
  console.log(deck);

  betAmount = 1;

  updatePayout();
  createGameZone();
  createJukebox();
};

gameInit();

addWagerBtn.addEventListener('click', () => {
  betAmount += 1;
  if (betAmount > 5) { betAmount = 5; }
  wagerDisplay.innerText = betAmount;
  updatePayout();
});

subtractWagerBtn.addEventListener('click', () => {
  betAmount -= 1;
  if (betAmount < 1) { betAmount = 1; }
  wagerDisplay.innerText = betAmount;
  updatePayout();
});
