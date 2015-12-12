// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
    var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Create the arrays for the deck, and shuffled deck
  var cards = [
    {suit: suits[0], value: values[0]}, {suit: suits[0], value: values[1]},
    {'suit': suits[0], 'value': values[2]}, {'suit': suits[0], 'value': values[3]},
    {'suit': suits[0], 'value': values[4]}, {'suit': suits[0], 'value': values[5]},
    {'suit': suits[0], 'value': values[6]}, {'suit': suits[0], 'value': values[7]},
    {'suit': suits[0], 'value': values[8]}, {'suit': suits[0], 'value': values[9]},
    {'suit': suits[0], 'value': values[10]}, {'suit': suits[0], 'value': values[11]},
    {'suit': suits[0], 'value': values[12]},

    {'suit': suits[1], 'value': values[0]}, {'suit': suits[1], 'value': values[1]},
    {'suit': suits[1], 'value': values[2]}, {'suit': suits[1], 'value': values[3]},
    {'suit': suits[1], 'value': values[4]}, {'suit': suits[1], 'value': values[5]},
    {'suit': suits[1], 'value': values[6]}, {'suit': suits[1], 'value': values[7]},
    {'suit': suits[1], 'value': values[8]}, {'suit': suits[1], 'value': values[9]},
    {'suit': suits[1], 'value': values[10]}, {'suit': suits[1], 'value': values[11]},
    {'suit': suits[1], 'value': values[12]},

    {'suit': suits[2], 'value': values[0]}, {'suit': suits[2], 'value': values[1]},
    {'suit': suits[2], 'value': values[2]}, {'suit': suits[2], 'value': values[3]},
    {'suit': suits[2], 'value': values[4]}, {'suit': suits[2], 'value': values[5]},
    {'suit': suits[2], 'value': values[6]}, {'suit': suits[2], 'value': values[7]},
    {'suit': suits[2], 'value': values[8]}, {'suit': suits[2], 'value': values[9]},
    {'suit': suits[2], 'value': values[10]}, {'suit': suits[2], 'value': values[11]},
    {'suit': suits[2], 'value': values[12]},

    {'suit': suits[3], 'value': values[0]}, {'suit': suits[3], 'value': values[1]},
    {'suit': suits[3], 'value': values[2]}, {'suit': suits[3], 'value': values[3]},
    {'suit': suits[3], 'value': values[4]}, {'suit': suits[3], 'value': values[5]},
    {'suit': suits[3], 'value': values[6]}, {'suit': suits[3], 'value': values[7]},
    {'suit': suits[3], 'value': values[8]}, {'suit': suits[3], 'value': values[9]},
    {'suit': suits[3], 'value': values[10]}, {'suit': suits[3], 'value': values[11]},
    {'suit': suits[3], 'value': values[12]}
  ];
  // Make 52 card objects and store them in the "cards" array

  var shuffled_deck = shuffle(cards);
  // Shuffle the Deck
  var topcard = shuffled_deck[0].value + " of " + shuffled_deck[0].suit;
  // Pull the top card
  console.log("The deck has " + cards.length + " cards.\n\nThe top card is: " + JSON.stringify(topcard) + ". \n\nAs you can see, the deck has been shuffled: " + JSON.stringify(shuffled_deck));
  // Console log the results

  //BONUS
  var shufled_poker_deck = shuffle(cards);
  var topfive = shufled_poker_deck[0].value + " of " + shufled_poker_deck[0].suit + ", " + shufled_poker_deck[1].value + " of " + shufled_poker_deck[1].suit + ", " + shufled_poker_deck[2].value + " of " + shufled_poker_deck[2].suit + ", " + shufled_poker_deck[3].value + " of " + shufled_poker_deck[3].suit + ", " + shufled_poker_deck[4].value + " of " + shufled_poker_deck[4].suit + ", ";
  console.log("Your poker hand has these cards: " + topfive);

  //for loop version
  var shufled_poker_deck = shuffle(cards);
  console.log("Your poker hand has: ");
  for (var i = 0; i < 5; i++) {
    console.log("a " + shufled_poker_deck[i].value + " of " + shufled_poker_deck[i].suit);
  }
}

deck_o_cards();

// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
