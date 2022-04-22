/**
 * ==================================================
 * ==================================================
 * GLOBAL VARIABLES
 * ==================================================
 * ==================================================
 */

// Game Constants
const MAX_HAND_LENGTH = 5;
const PAYOUTS = [
  { type: 'Royal Flush', multiplier: 800 },
  { type: 'Straight Flush', multiplier: 50 },
  { type: 'Four of a Kind', multiplier: 25 },
  { type: 'Full House', multiplier: 9 },
  { type: 'Flush', multiplier: 6 },
  { type: 'Straight', multiplier: 4 },
  { type: 'Three of a Kind', multiplier: 3 },
  { type: 'Two Pairs', multiplier: 2 },
  { type: 'Jacks or Better', multiplier: 1 },
];

// Debug Hands
const LOW_PAIR_HAND = [
  {
    name: 4,
    rank: 4,
    src: 'sprites/cards/card-spades-4.png',
    suit: 'spades',
    toSwap: false,
    isChanged: false,
  },
  {
    name: 4,
    rank: 4,
    src: 'sprites/cards/card-hearts-4.png',
    suit: 'hearts',
    toSwap: false,
    isChanged: false,
  },
  {
    name: 5,
    rank: 5,
    src: 'sprites/cards/card-hearts-5.png',
    suit: 'hearts',
    toSwap: false,
    isChanged: false,
  },
  {
    name: 3,
    rank: 3,
    src: 'sprites/cards/card-spades-3.png',
    suit: 'spades',
    toSwap: false,
    isChanged: false,
  }, {
    name: 2,
    rank: 2,
    src: 'sprites/cards/card-clubs-2.png',
    suit: 'clubs',
    toSwap: false,
    isChanged: false,
  },
];
const HIGH_PAIR_HAND = [{
  name: 'Jack',
  rank: 11,
  src: 'sprites/cards/card-spades-11.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 'Jack',
  rank: 11,
  src: 'sprites/cards/card-hearts-11.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 5,
  rank: 5,
  src: 'sprites/cards/card-hearts-5.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-spades-3.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
}, {
  name: 2,
  rank: 2,
  src: 'sprites/cards/card-clubs-2.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}];
const TWO_PAIR_HAND = [{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-spades-4.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-hearts-4.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 5,
  rank: 5,
  src: 'sprites/cards/card-hearts-5.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-spades-3.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
}, {
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-clubs-3.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}];
const THREE_OF_A_KIND_HAND = [{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-spades-4.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-hearts-4.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 5,
  rank: 5,
  src: 'sprites/cards/card-hearts-5.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-spades-3.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
}, {
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-clubs-4.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}];
const STRAIGHT_HAND = [{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-spades-4.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 6,
  rank: 6,
  src: 'sprites/cards/card-hearts-6.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 5,
  rank: 5,
  src: 'sprites/cards/card-hearts-5.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-spades-3.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
}, {
  name: 2,
  rank: 2,
  src: 'sprites/cards/card-clubs-2.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}];
const FLUSH_HAND = [{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-spades-4.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 7,
  rank: 7,
  src: 'sprites/cards/card-spades-7.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 10,
  rank: 10,
  src: 'sprites/cards/card-spades-10.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-spades-3.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
}, {
  name: 2,
  rank: 2,
  src: 'sprites/cards/card-spades-2.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
}];
const FULL_HOUSE_HAND = [{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-spades-4.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-hearts-4.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-hearts-3.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-spades-3.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
}, {
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-clubs-3.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}];
const FOUR_OF_A_KIND_HAND = [{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-spades-4.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-diamonds-3.png',
  suit: 'diamonds',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-hearts-3.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-spades-3.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
}, {
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-clubs-3.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}];
const STRAIGHT_FLUSH_HAND = [{
  name: 'Jack',
  rank: 11,
  src: 'sprites/cards/card-clubs-11.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
},
{
  name: 'King',
  rank: 13,
  src: 'sprites/cards/card-clubs-13.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
},
{
  name: 'Queen',
  rank: 12,
  src: 'sprites/cards/card-clubs-12.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
},
{
  name: 10,
  rank: 10,
  src: 'sprites/cards/card-clubs-10.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}, {
  name: 9,
  rank: 9,
  src: 'sprites/cards/card-clubs-9.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}];
const ROYAL_FLUSH_HAND = [{
  name: 'Jack',
  rank: 11,
  src: 'sprites/cards/card-clubs-11.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
},
{
  name: 'King',
  rank: 13,
  src: 'sprites/cards/card-clubs-13.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
},
{
  name: 'Queen',
  rank: 12,
  src: 'sprites/cards/card-clubs-12.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
},
{
  name: 10,
  rank: 10,
  src: 'sprites/cards/card-clubs-10.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}, {
  name: 'Ace',
  rank: 14,
  src: 'sprites/cards/card-clubs-14.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}];
const FAUX_STRAIGHT_HAND = [{
  name: 4,
  rank: 4,
  src: 'sprites/cards/card-spades-4.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
},
{
  name: 6,
  rank: 6,
  src: 'sprites/cards/card-hearts-6.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-hearts-3.png',
  suit: 'hearts',
  toSwap: false,
  isChanged: false,
},
{
  name: 3,
  rank: 3,
  src: 'sprites/cards/card-spades-3.png',
  suit: 'spades',
  toSwap: false,
  isChanged: false,
}, {
  name: 2,
  rank: 2,
  src: 'sprites/cards/card-clubs-2.png',
  suit: 'clubs',
  toSwap: false,
  isChanged: false,
}];

// game global variables
let deck;
let currentGold;
let wagerAmount;
let isDealState;
let currentHand;
let currentSongIndex;
let currentSongTitle;

let isDebug;

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
  const suits = ['spades', 'clubs', 'hearts', 'diamonds'];
  for (let i = 0; i < suits.length; i += 1) {
    const currentSuit = suits[i];
    for (let j = 1; j <= 13; j += 1) {
      let currentRank = j;
      let currentName = j;
      if (currentRank === 1) {
        currentName = 'Ace';
        currentRank = 14;
      } else if (currentRank === 11) {
        currentName = 'Jack';
      } else if (currentRank === 12) {
        currentName = 'Queen';
      } else if (currentRank === 13) {
        currentName = 'King';
      }
      const currentCard = {
        suit: currentSuit,
        rank: currentRank,
        name: currentName,
        src: `sprites/cards/card-${currentSuit}-${currentRank}.png`,
        toSwap: false,
        isChanged: false,
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
 * takes the top 5 cards in deck and put it in hand
 */
const initialDraw = () => {
  const drawnHand = [];
  while (drawnHand.length < MAX_HAND_LENGTH) {
    drawnHand.push(deck.pop());
  }
  return drawnHand;
};

/**
 * Find the minimum rank of a given card hand
 * @param {array} handToCheck array of the card hand object
 * @returns {number} the minimum rank of the given hand
 */
const findMinCard = (handToCheck) => {
  let currentMin;
  for (let i = 0; i < handToCheck.length; i += 1) {
    if (currentMin === undefined) { currentMin = handToCheck[i].rank; }
    if (handToCheck[i].rank < currentMin) { currentMin = handToCheck[i].rank; }
  }
  return currentMin;
};

/**
 * Tally the rank of a given hand
 * @param {array} handToCheck array of the card hand object
 * @returns {object} the tallied rank as an object
 */
const tallyRank = (handToCheck) => {
  const tally = {};
  for (let i = 0; i < handToCheck.length; i += 1) {
    const cardRank = handToCheck[i].rank;
    if (cardRank in tally) { tally[cardRank] += 1; }
    else { tally[cardRank] = 1; }
  }
  return tally;
};

/**
 * Tally the suit of a given hand
 * @param {array} handToCheck array of the card hand object
 * @returns {object} the tallied suit as an object
 */
const tallySuit = (handToCheck) => {
  const tally = {};
  for (let i = 0; i < handToCheck.length; i += 1) {
    const cardSuit = handToCheck[i].suit;
    if (cardSuit in tally) { tally[cardSuit] += 1; }
    else { tally[cardSuit] = 1; }
  }
  return tally;
};

/**
 * Check to see if hand has a pair
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if a pair is present, false otherwise
 */
const checkPair = (handToCheck) => {
  const handTally = tallyRank(handToCheck);
  for (const cardRank in handTally) {
    if (handTally[cardRank] === 2) return true;
  }
  return false;
};

/**
 * Check to see if hand has a high pair (Jacks or Better)
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if a high pair is present, false otherwise
 */
const checkHighPair = (handToCheck) => {
  const handTally = tallyRank(handToCheck);
  for (const cardRank in handTally) {
    if (handTally[cardRank] === 2 && cardRank > 10) return true;
  }
  return false;
};

/**
 * Check to see if hand has two pairs
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if two pair is present, false otherwise
 */
const checkTwoPairs = (handToCheck) => {
  let counter = 0;
  const handTally = tallyRank(handToCheck);
  for (const cardRank in handTally) {
    if (handTally[cardRank] === 2) {
      counter += 1;
      if (counter === 2) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Check to see if hand has three of a kind
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if a three of a kind is present, false otherwise
 */
const checkThreeOfAKind = (handToCheck) => {
  const handTally = tallyRank(handToCheck);
  for (const cardRank in handTally) {
    if (handTally[cardRank] === 3) return true;
  }
  return false;
};

/**
 * Check to see if hand has straight
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if a straight is present, false otherwise
 */
const checkStraight = (handToCheck) => {
  const handTally = tallyRank(handToCheck);
  const handMinimumCardRank = findMinCard(handToCheck);
  const handMaximumCardRank = handMinimumCardRank + 5;

  let counter = 0;
  for (const cardRank in handTally) {
    if (cardRank >= handMinimumCardRank && cardRank < handMaximumCardRank) {
      counter += 1;
      if (counter === 5) { return true; }
    }
  }

  return false;
};

/**
 * Check to see if hand has flush
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if a flush is present, false otherwise
 */
const checkFlush = (handToCheck) => {
  const handTally = tallySuit(handToCheck);
  for (const cardSuit in handTally) {
    if (handTally[cardSuit] === 5) return true;
  }
  return false;
};

/**
 * Check to see if hand has full house
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if a full house is present, false otherwise
 */
const checkFullHouse = (handToCheck) => {
  if (checkPair(handToCheck) && checkThreeOfAKind(handToCheck)) { return true; }
  return false;
};

/**
 * Check to see if hand has four of a kind
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if a four of a kind is present, false otherwise
 */
const checkFourOfAKind = (handToCheck) => {
  const handTally = tallyRank(handToCheck);
  for (const cardRank in handTally) {
    if (handTally[cardRank] === 4) return true;
  }
  return false;
};

/**
 * Check to see if hand has straight flush
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if a straight flush is present, false otherwise
 */
const checkStraightFlush = (handToCheck) => {
  if (checkFlush(handToCheck) && checkStraight(handToCheck)) { return true; }
  return false;
};

/**
 * Check to see if hand has royal flush
 * @param {array} handToCheck array of the card hand object
 * @returns {boolean} True if a royal flush is present, false otherwise
 */
const checkRoyalFlush = (handToCheck) => {
  const handMinimumCardRank = findMinCard(handToCheck);
  if (checkStraightFlush(handToCheck) && handMinimumCardRank > 9) { return true; }
  return false;
};

/**
 * Check to see if there is a win in hand
 * @param {array} handToCheck array of the card hand object
 * @returns {number} index of the winning hand as defined in the payouts array, -1 if no win
 */
const checkWin = (handToCheck) => {
  if (checkRoyalFlush(handToCheck)) { return 0; }

  if (checkStraightFlush(handToCheck)) { return 1; }

  if (checkFourOfAKind(handToCheck)) { return 2; }

  if (checkFullHouse(handToCheck)) { return 3; }

  if (checkFlush(handToCheck)) { return 4; }

  if (checkStraight(handToCheck)) { return 5; }

  if (checkThreeOfAKind(handToCheck)) { return 6; }

  if (checkTwoPairs(handToCheck)) { return 7; }

  if (checkHighPair(handToCheck)) { return 8; }

  return -1;
};

/**
 * Copes hand and strips the hand of any cards that has the toSwap attribute.
 * @param {array} hand hand to strip
 * @returns {array} copied, stripped hand of the cards without any cards with the toSwap attribute
 */
const stripHand = (hand) => {
  const clonedHand = hand.slice();
  for (let i = 0; i < clonedHand.length; i += 1) {
    // take off any toSwap hands
    if (clonedHand[i].toSwap) {
      clonedHand.splice(i, 1);
    }
  }
  return clonedHand;
};

/**
 * A function to tally all the possible hands from the hand provided
 * @param {array} hand Array of all cards in hand, without any cards with the toSwap attribute
 * @param {array} deckToCompare the current available deck
 * @returns {object} an object with the probability of the winType values
 */
const probabilityTally = (hand, deckToCompare) => {
  const winTypeTally = {
    RoyalFlush: 0,
    StraightFlush: 0,
    FourofAKind: 0,
    FullHouse: 0,
    Flush: 0,
    Straight: 0,
    ThreeofAKind: 0,
    TwoPairs: 0,
    HighPair: 0,
    NoWin: 0,
  };

  const clonedDeck = deckToCompare.slice();
  const clonedHand = hand.slice();

  // if hand is 5, add +1 to winType of any win
  if (clonedHand.length === MAX_HAND_LENGTH) {
    const winIndex = checkWin(clonedHand);

    switch (winIndex) {
      case 0:
        winTypeTally.RoyalFlush += 1;
        break;
      case 1:
        winTypeTally.StraightFlush += 1;
        break;
      case 2:
        winTypeTally.FourofAKind += 1;
        break;
      case 3:
        winTypeTally.FullHouse += 1;
        break;
      case 4:
        winTypeTally.Flush += 1;
        break;
      case 5:
        winTypeTally.Straight += 1;
        break;
      case 6:
        winTypeTally.ThreeofAKind += 1;
        break;
      case 7:
        winTypeTally.TwoPairs += 1;
        break;
      case 8:
        winTypeTally.HighPair += 1;
        break;
      default:
        winTypeTally.NoWin += 1;
    }
    return winTypeTally;
  }

  // if hand is lesser than 5, do recursion
  // only do recursion when clonedDeck is more than 0, because it can't pop out cards otherwise
  while (clonedDeck.length > 0) {
    clonedHand.push(clonedDeck.pop());
    const recursiveTally = probabilityTally(clonedHand, clonedDeck);

    // remove the extra card so that it will go through the next iteration
    clonedHand.pop();

    // add the values
    winTypeTally.RoyalFlush += recursiveTally.RoyalFlush;
    winTypeTally.StraightFlush += recursiveTally.StraightFlush;
    winTypeTally.FourofAKind += recursiveTally.FourofAKind;
    winTypeTally.FullHouse += recursiveTally.FullHouse;
    winTypeTally.Flush += recursiveTally.Flush;
    winTypeTally.Straight += recursiveTally.Straight;
    winTypeTally.ThreeofAKind += recursiveTally.ThreeofAKind;
    winTypeTally.TwoPairs += recursiveTally.TwoPairs;
    winTypeTally.HighPair += recursiveTally.HighPair;
    winTypeTally.NoWin += recursiveTally.NoWin;
  }

  return winTypeTally;
};
