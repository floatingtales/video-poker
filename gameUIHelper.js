/**
 * ==================================================
 * ==================================================
 * GLOBAL VARIABLES
 * ==================================================
 * ==================================================
 */

// Msg Speeds (in ms), the lesser the number the faster it is

const DEALER_MSG_SPEED = 15;
const BARD_MSG_SPEED = 20;
const DEAL_DELAY_SPEED = 5000;
const REMOVE_ANIMATE_DURATION = 1000;

// Text constants
const BARD_NAME = 'Etienne';
const DEALER_NAME = 'Kiloph';
const JUKEBOX_TITLE = 'Etienne\'s Music Troupe';
const GAMEBOARD_TITLE = 'Kiloph\'s Gambling Caravan';
const HEADER_TITLE = 'Cantrell Poker';

const DEALER_GREETING = 'Greetings adventurer!';
const SUBTRACT_WAGER_MSG = 'Don\'t want to part with too much gold eh?';
const CANT_SUBTRACT_WAGER_MSG = 'Can\'t play if you don\'t bet, adventurer!';
const ADD_WAGER_MSG = 'Feeling lucky, adventurer?';
const CANT_ADD_WAGER_MSG = 'Can\'t bet any more than this, adventurer!';
const DEALER_DEAL_MSG = 'Pick a card to swap, adventurer';
const DEALER_LOSE_MSG = 'Aww shucks! I\'ll take that gold from you now';
const DEALER_WIN_BIG_MSG = 'Can\'t send my daughter to potion school now!';
const DEALER_WIN_MED_MSG = 'Ugh that hurts my poor pockets!';
const DEALER_WIN_SMOL_MSG = 'You\'ve got good luck, adventurer!';
const DEALER_REPLAY_MSG = 'Dare you to play again, adventurer!';
const DEALER_GIVE_MONEY_START_MSG = 'Here\'s your';
const DEALER_GIVE_MONEY_END_MSG = 'gold, fancy another round?';

const BARD_GREETING = 'Any tunes, adventurer?';

const DEAL_MSG = 'Deal!';
const SWAP_MSG = 'Swap!';

// Image Source constants
const GOLD_IMAGE = 'sprites/characters/gold.png';
const DEALER_IMAGE = 'sprites/characters/dealer.png';
const BARD_IMAGE = 'sprites/characters/bard2.png';
const CARD_BACK = 'sprites/cards/card-back3.png';

// html elements
// header block
const headerBlock = document.createElement('header');

const headerText = document.createElement('h1');
headerText.innerText = HEADER_TITLE;

// main block
const mainBlock = document.createElement('main');

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

const gameBoardTitle = document.createElement('h2');
gameBoardTitle.innerText = GAMEBOARD_TITLE;

const gameBoardcardDisplay = document.createElement('div');
gameBoardcardDisplay.id = 'card-display';

const gameBoardInterface = document.createElement('div');
gameBoardInterface.id = 'game-interface';

const goldDisplayImg = document.createElement('img');
goldDisplayImg.src = GOLD_IMAGE;

const goldDisplay = document.createElement('div');

const addWagerBtn = document.createElement('button');
addWagerBtn.innerText = '+';

const subtractWagerBtn = document.createElement('button');
subtractWagerBtn.innerText = '-';

const dealSwapBtn = document.createElement('button');
dealSwapBtn.id = 'deal-btn';

const wagerDisplay = document.createElement('div');

const gameInfoDisplay = document.createElement('div');
gameInfoDisplay.id = 'game-info';

const gameDealerDiv = document.createElement('div');
gameDealerDiv.id = 'game-dealer';

const gameDealerImg = document.createElement('img');
gameDealerImg.src = DEALER_IMAGE;

const gameDealerTextDiv = document.createElement('div');
gameDealerTextDiv.id = 'dealer-text';

const gameDealerName = document.createElement('div');
gameDealerName.id = 'dealer-name';
gameDealerName.innerHTML = DEALER_NAME;

const gameDealerConvo = document.createElement('div');
gameDealerConvo.id = 'dealer-convo';
gameDealerConvo.innerText = DEALER_GREETING;

// jukebox divs
const jukebox = document.createElement('div');
jukebox.id = 'jukebox';

const jukeboxTitle = document.createElement('h2');
jukeboxTitle.innerText = JUKEBOX_TITLE;

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
jukeboxBardImg.src = BARD_IMAGE;

const jukeboxBardTextDiv = document.createElement('div');
jukeboxBardTextDiv.id = 'bard-text';

const jukeboxBardName = document.createElement('div');
jukeboxBardName.id = 'bard-name';
jukeboxBardName.innerText = BARD_NAME;

const jukeboxBardConvo = document.createElement('div');
jukeboxBardConvo.id = 'bard-convo';
jukeboxBardConvo.innerText = BARD_GREETING;

// footer block
const footerBlock = document.createElement('footer');

const footerDiv = document.createElement('div');
footerDiv.innerText = 'lorem ipsum yada yaada';

const footerAnimation = document.createElement('div');
footerAnimation.id = 'foreground-animation';

/**
 * ==================================================
 * ==================================================
 * DOM FUNCTIONS
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

  for (let i = 0; i < PAYOUTS.length; i += 1) {
    const tableRow = document.createElement('tr');

    const tablePayoutType = document.createElement('td');
    tablePayoutType.innerText = PAYOUTS[i].type;

    const tablePayoutMultiplier = document.createElement('td');
    tablePayoutMultiplier.innerText = PAYOUTS[i].multiplier * wagerAmount;

    tableRow.append(tablePayoutType, tablePayoutMultiplier);
    payoutTable.append(tableRow);
  }
  payoutDiv.append(payoutTable);
};

/**
 * create jukebox
 */
const createJukebox = () => {
  jukebox.innerHTML = '';
  jukeboxBardTextDiv.append(jukeboxBardName, jukeboxBardConvo);
  jukeboxBardDiv.append(jukeboxBardImg);
  jukeboxDisplayZone.append(jukeboxBardDiv, jukeboxBardTextDiv);
  jukeboxIconsZone.append(jukeboxTitle, jukeboxPauseBtn, jukeboxPlayBtn, jukeboxNextBtn);
  jukebox.append(jukeboxIconsZone, jukeboxDisplayZone);
};

/**
 * create CardZone where all the cards will be displayed
 */
const createCardZone = () => {
  gameBoardcardDisplay.innerHTML = '';
  for (let i = 0; i < MAX_HAND_LENGTH; i += 1) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const cardBack = document.createElement('img');
    cardBack.classList.add('face-down', 'card-face');
    cardBack.src = CARD_BACK;

    cardElement.append(cardBack);
    gameBoardcardDisplay.append(cardElement);

    cardBack.classList.add('animate__animated', 'animate__flipInY');
    setTimeout(() => {
      cardBack.classList.remove('animate__animated', 'animate__flipInY');
    }, REMOVE_ANIMATE_DURATION);
  }
};

/**
 * Create game-Zone
 */
const createGameZone = () => {
  gameZone.innerHTML = '';
  wagerDisplay.innerHTML = wagerAmount;
  goldDisplay.innerHTML = currentGold;
  createCardZone();
  gameBoardInterface.append(goldDisplayImg, goldDisplay, subtractWagerBtn, wagerDisplay,
    addWagerBtn, dealSwapBtn);
  gameBoard.append(gameBoardTitle, gameBoardcardDisplay, gameBoardInterface);
  gameDealerDiv.append(gameDealerImg);
  gameDealerTextDiv.append(gameDealerName, gameDealerConvo);
  gameInfoDisplay.append(gameDealerDiv, gameDealerTextDiv);
  gameZone.append(gameBoard, gameInfoDisplay);
};

/**
 * initialize the game
 */
const gameInit = () => {
  headerBlock.append(headerText);

  mainContainer.append(payoutDiv, gameZone, jukebox);
  mainBlock.append(mainContainer);

  footerBlock.append(footerDiv, footerAnimation);

  document.body.append(headerBlock, mainBlock, footerBlock);

  currentGold = 100;
  wagerAmount = 1;
  isDealState = true;
  isDebug = false;
  dealSwapBtn.innerText = DEAL_MSG;

  updatePayout();
  createGameZone();
  createJukebox();
};

/**
 * Sets the text of the replay message
 * @param {number} winAmount the amount of gold the player wins
 * @returns {string} the replay message
 */
const setReplayMessage = (winAmount) => {
  if (winAmount === undefined) {
    return DEALER_REPLAY_MSG;
  }
  return `${DEALER_GIVE_MONEY_START_MSG} ${winAmount} ${DEALER_GIVE_MONEY_END_MSG}`;
};

/**
 * Reveals text of a div one by one, for dialog purposes
 * @param {Array} characterArray array of all the characters in the dialog
 * @param {number} messageSpeed the speed in ms the character speaks
 */
const revealCharacters = (characterArray, messageSpeed) => {
  // take first character from array
  const nextChar = characterArray.splice(0, 1)[0];
  nextChar.classList.remove('convo-char');

  const delay = nextChar === ' ' ? 0 : messageSpeed;

  if (characterArray.length > 0) {
    setTimeout(() => {
      revealCharacters(characterArray, messageSpeed);
    }, delay);
  }
};

/**
 * Updates the dealer convo text
 * @param {string} message the message to be shown on the dealer dialog box
 */
const updateDealerConvo = (message) => {
  gameDealerConvo.innerHTML = '';
  const characterArray = [];
  message.split('').forEach((character) => {
    const msgCharacter = document.createElement('span');
    msgCharacter.classList.add('convo-char');
    msgCharacter.innerText = character;
    gameDealerConvo.appendChild(msgCharacter);
    characterArray.push(msgCharacter);
  });
  revealCharacters(characterArray, DEALER_MSG_SPEED);
};

/**
 * Updates the dealer convo text
 * @param {string} message the message to be shown on the bard dialog box
 */
const updateBardConvo = (message) => {
  jukeboxBardConvo.innerHTML = '';
  const characterArray = [];
  message.split('').forEach((character) => {
    const msgCharacter = document.createElement('span');
    msgCharacter.classList.add('convo-char');
    msgCharacter.innerText = character;
    jukeboxBardConvo.appendChild(msgCharacter);
    characterArray.push(msgCharacter);
  });
  revealCharacters(characterArray, BARD_MSG_SPEED);
};

/**
 * Handles card click: toggles the card toSwap status, with some animations
 * @param {number} index the index of the card selected
 * @returns {null}
 */
const handleCardClick = (index) => {
  const currentCardDiv = document.getElementsByClassName('card-face');
  if (!currentHand[index].toSwap) {
    currentCardDiv[index].src = CARD_BACK;
    currentHand[index].toSwap = true;
    updateDealerConvo('Don\'t like that one?');
    currentCardDiv[index].classList.add('animate__animated', 'animate__flipInY');
    setTimeout(() => currentCardDiv[index].classList.remove('animate__animated', 'animate__flipInY'), REMOVE_ANIMATE_DURATION);
    return;
  }
  updateDealerConvo('Changed your mind?');
  currentCardDiv[index].src = currentHand[index].src;
  currentHand[index].toSwap = false;
  currentCardDiv[index].classList.add('animate__animated', 'animate__flipInY');
  setTimeout(() => currentCardDiv[index].classList.remove('animate__animated', 'animate__flipInY'), REMOVE_ANIMATE_DURATION);
};

/**
 * ==================================================
 * ==================================================
 * EVENT LISTENER FUNCTIONS
 * ==================================================
 * ==================================================
 *
 */

addWagerBtn.addEventListener('click', () => {
  wagerAmount += 1;
  updateDealerConvo(ADD_WAGER_MSG);
  if (wagerAmount > 5) {
    wagerAmount = 5;
    updateDealerConvo(CANT_ADD_WAGER_MSG);
  }
  wagerDisplay.innerText = wagerAmount;
  updatePayout();
});

subtractWagerBtn.addEventListener('click', () => {
  wagerAmount -= 1;
  updateDealerConvo(SUBTRACT_WAGER_MSG);
  if (wagerAmount < 1) {
    wagerAmount = 1;
    updateDealerConvo(CANT_SUBTRACT_WAGER_MSG);
  }
  wagerDisplay.innerText = wagerAmount;
  updatePayout();
});

dealSwapBtn.addEventListener('click', () => {
  // if deal state
  if (isDealState) {
    // game manipulation
    deck = deckShuffler(deckCreator());
    currentHand = initialDraw();

    currentGold -= wagerAmount;
    isDealState = false;

    // ui manipulation
    const displayCards = document.getElementsByClassName('card-face');
    for (let i = 0; i < displayCards.length; i += 1) {
      displayCards[i].src = currentHand[i].src;
      displayCards[i].classList.add('animate__animated', 'animate__flipInY');
      displayCards[i].addEventListener('click', () => handleCardClick(i));
      setTimeout(() => displayCards[i].classList.remove('animate__animated', 'animate__flipInY'), REMOVE_ANIMATE_DURATION);
    }

    // player input UI
    goldDisplay.innerText = currentGold;
    addWagerBtn.disabled = true;
    subtractWagerBtn.disabled = true;
    dealSwapBtn.innerText = SWAP_MSG;

    // message board UI
    gameDealerConvo.innerText = DEALER_DEAL_MSG;
    return;
  }
  // if swap state

  // game manipulation
  for (let i = 0; i < currentHand.length; i += 1) {
    if (currentHand[i].toSwap) {
      currentHand.splice(i, 1, deck.pop());
      currentHand[i].isChanged = true;
    }
  }

  const winState = checkWin(currentHand);

  // losing scenario
  if (winState === -1) {
    updateDealerConvo(DEALER_LOSE_MSG);
  }
  else if (winState < 3) {
    updateDealerConvo(DEALER_WIN_BIG_MSG);
  } else if (winState < 6) {
    updateDealerConvo(DEALER_WIN_MED_MSG);
  } else {
    updateDealerConvo(DEALER_WIN_SMOL_MSG);
  }

  let winAmt;
  if (winState !== -1) {
    winAmt = wagerAmount * PAYOUTS[winState].multiplier;
    currentGold += winAmt;
  }

  // UI manipulation
  const displayCards = document.getElementsByClassName('card-face');
  for (let i = 0; i < displayCards.length; i += 1) {
    if (currentHand[i].isChanged) {
      displayCards[i].src = currentHand[i].src;
      displayCards[i].classList.add('animate__animated', 'animate__flipInY');
      setTimeout(() => displayCards[i].classList.remove('animate__animated', 'animate__flipInY'), REMOVE_ANIMATE_DURATION);
    }
    displayCards[i].replaceWith(displayCards[i].cloneNode());
  }
  dealSwapBtn.disabled = true;

  setTimeout(() => {
    updateDealerConvo(setReplayMessage(winAmt));
    goldDisplay.innerHTML = currentGold;
    addWagerBtn.disabled = false;
    subtractWagerBtn.disabled = false;
    dealSwapBtn.innerText = DEAL_MSG;
    dealSwapBtn.disabled = false;
    isDealState = true;

    for (let i = 0; i < displayCards.length; i += 1) {
      displayCards[i].src = CARD_BACK;
      displayCards[i].classList.add('animate__animated', 'animate__flipInY');
      setTimeout(() => displayCards[i].classList.remove('animate__animated', 'animate__flipInY'), REMOVE_ANIMATE_DURATION);
    }
  }, DEAL_DELAY_SPEED);
});

jukeboxPlayBtn.addEventListener('click', () => { updateBardConvo('Play btn'); });

jukeboxPauseBtn.addEventListener('click', () => { updateBardConvo('Pause btn'); });

jukeboxNextBtn.addEventListener('click', () => { updateBardConvo('Next btn'); });

window.addEventListener('keydown', (event) => {
  if (event.key === '/') {
    if (!isDebug) {
      isDebug = true;
      console.log('CHEAT MODE!');
    }
    else {
      isDebug = false;
      console.log('No more cheat mode!');
    }
  }

  if (isDebug) {
    if (event.key === '0') {
      deck.push(...ROYAL_FLUSH_HAND);
      console.log('draw will be Royal Flush');
    }
    if (event.key === '1') {
      deck.push(...STRAIGHT_FLUSH_HAND);
      console.log('draw will be Straight Flush');
    }
    if (event.key === '2') {
      deck.push(...FOUR_OF_A_KIND_HAND);
      console.log('draw will be Four of a kind');
    }
    if (event.key === '3') {
      deck.push(...FULL_HOUSE_HAND);
      console.log('draw will be Full House');
    }
    if (event.key === '4') {
      deck.push(...FLUSH_HAND);
      console.log('draw will be Flush');
    }
    if (event.key === '5') {
      deck.push(...STRAIGHT_HAND);
      console.log('draw will be Straight');
    }
    if (event.key === '6') {
      deck.push(...THREE_OF_A_KIND_HAND);
      console.log('draw will be Threee of a Kind');
    }
    if (event.key === '7') {
      deck.push(...TWO_PAIR_HAND);
      console.log('draw will be Two Pairs');
    }
    if (event.key === '8') {
      deck.push(...HIGH_PAIR_HAND);
      console.log('draw will be High Pair');
    }
  }
});

gameInit();
