var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Sandy";
var enemyHealth = 50;
var enemyAttack = 12;

// function expression
var fight = function () {
  window.alert("Welcome to rpg game.");
  var promptFight = window.prompt(
    "Would you like to fight or skip the battle? Enter 'FIGHT' or 'SKIP' to choose."
  );
  // convert to uppercase
  promptFight = promptFight.toUpperCase();

  if (promptFight === "FIGHT") {
    // player attack
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      `${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining`
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + "has died");
      // return;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // enemy attack
    playerHealth = playerHealth - enemyAttack;
    console.log(playerHealth);

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player choses to skip
  } else if (promptFight === "SKIP") {
    // confirm that player wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to quit?");

    if (confirmSkip) {
      window.alert("You chose to skip. There is a health penalty!!");
      playerMoney = playerMoney - 2;
    } else {
      fight();
    }
  } else {
    window.alert("You entered an invalid choice. ");
  }
  // protective code to handle edge cases (What if the user enters something incorrect?)
};

fight();
