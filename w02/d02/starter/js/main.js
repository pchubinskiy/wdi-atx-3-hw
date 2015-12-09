// Make sure to psuedocode out your adventure!!!
// One way to get input is to use the prompt() command
// You can have your adventure play out using alerts or in the console using console.log().

console.log("You wake under your uncle's staircase. You get up so abruptly that you hit your forehead on the stairs and black out, leaving you with a permanent scar. You wake again in a hospital, and your uncle starts to call you The One Who Lived. A carrier owl sends you a message that invites you to Hogwarts. You realize you must go to a Pokemon Center to find a broomstick. You can also take a detour by catching a ride on the local Chocolate Frogmobile.");

var answer1 = prompt('Type "Y" to go to the Pokemon Center, and "N" to catch a ride on the Frogmobile.');

if (answer1 === "Y") {
  var answer2 = prompt("Would you like to silly-walk on your way there?");
  if (answer2 === "Y") {
    var answer3 = prompt("At 55 mph?");
    if (answer3 === "Y") {
      console.log("People applaud your arrival and you remember that the owl's note gave you codes for broomsticks. The Master Broomstick is the fastest, but it will bind your soles to Voldemort and cost you the most pounds. Hermoine's Broomstick is mindbogglingly reliable and travels at a medium speed. Ron's Broomstick is the slowest, but will compensate for it by way of a strange placebo effect that gives you iron confidence and resolve that some wizards liken to eating breakfast tacos.");
      var answer4 = prompt("Enter anything from 1 to 33 for Ron's model, anything from 34 to 66 for Hermoine's model, or anything from 67 to 100 for the Master Broomstick.");
    } else {
        console.log("You arrive at the Pokemon Center and get mistaken for a Slowpoke. You then remember that the owl's note gave you codes for broomsticks. The Master Broomstick is the fastest, but it will bind the soles of your shoes to Voldemort and cost you the most pounds. Hermoine's Broomstick is reliable and travels at a medium speed. Ron's Broomstick is the slowest, but compensates by way of a strange placebo effect that gives you an iron confidence and resolve that some wizards liken to eating breakfast tacos.");
        var answer4 = prompt("Enter anything from 1 to 33 for Ron's model, anything from 34 to 66 for Hermoine's model, or anything from 67 to 100 for the Master Broomstick.");
    }
  } else {
    console.log("A muggle walk makes for a muggle adventure. You sell fish and chips while attending LSE.");
  }
} else {
  console.log("N: You arrive at the Chocolate Frogmobile station to find that the train's hydraulics prevent you from boarding.");
  var answer2 = prompt("You have to speak BaconTongue in order to board. Do you dare to whisper something into its ear?");
  if (answer2.indexOf("bacon") > -1) {
    console.log("The Frogmobile calms down and you are allowed to pass. Justin Beiber steps out of the driver's seat and begins to weep and rhetorically apologize for spending half of his life's savings on a Frogmobile.");
    var answer3 = prompt("Do you comfort Beiber?");
    if (answer3 === "Y") {
      console.log("Beiber feels better, but many women and a few men swarm around him, blocking any exits. Almost all of them faint. You must subsist on the chocolate melting from the Frogmobile and your adventure ends.")
    } else {
      console.log("You hijack the Frogmobile and speed towards the Pokemon Center.")
      var answer4 = prompt("Enter the speed you drive away at--anything from 1 to 100 mph.");
    }
  } else {
    console.log("You didn't say bacon! The ghost of Idris Elba steps out of the drivers seat and demands that you fry him some bacon.");
    var answer3 = prompt("Do you turn on the grill? 'Y,' 'N,' or 'O' for 'Option.'");
    if (answer3 === "Y") {
      console.log("Idris Elba uses his charisma to convince you to leave for a beer and abandon your adventure. You arrive on the set of the next James Bond film.")
    } else if (answer3 === "N") {
      console.log("You become a minor character on the set of Luther. Luther protects you from Voldemort.");
    } else if (answer3 === "O") {
      console.log("You cook up a business plan. Idris takes you onto the set of The Wire.")
    }
  }
}

if (answer4 <= 33) {
  console.log("You encounter Taco Eaters on your journey. Your iron confidence and resolve make them suspect you have eaten breakfast tacos. They chase you into a Radio Shack, where your broom loses wi-fi and you are forced to quit your adventure.");
} else {
  if (answer4 <= 66) {
    console.log("You get followed by the Wicked Witch of the North, but stun her with 'winguardian leviosa.' You get to a fork in the road: 'Kansas' and 'Not Kansas Anymore.'");
    answer5 = prompt("Do you want to leave Kansas?");
  } else if (answer4 > 100) {
    console.log("You either made a typo or had trouble counting from 1 to 100. You become sentenced to life as an airdancer in a reenactment of Dante's Inferno.");
  } else if (answer4 >= 67) {
    console.log("You travel quickly, but your soles begin to wear out and you are forced to land. Your shoes turn into Horcruxes, so you destroy them (from somewhere in the ether, a voice screams, 'Stop! That tickles!').");
    answer5 = prompt("Because you resume traveling with no shoes on, people mistake you for a hobbit and remind you that you can rest in a local hobbit hole. Do you enter the hole?");
  }
}

if (answer5 === "Y") {
  console.log("You rest in the hobbit hole and incidentally avoid the army from Mordor that pillages the land. You quickly arrive at the Hogwarts, find your broomstick and wand, and 3-D print yourself a pair of crocodile skin Crocs. The next day is the first day of school! Draco Malfoy asks you if you'd like to trade your Crocs to him for 50% stock of Manchester United.");
} else {
  console.log("You fly into an army from Mordor and ask for the quickest way to simply walk into Mordor. They lead you to the back of the set, where paparazzi swarm you with questions about your noncomittal acting.");
}


