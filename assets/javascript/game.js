(function() {
  let goalSound = new Audio('assets/sounds/goal.mp3') 

  let teamOneShootButton = document.querySelector("#teamone-shoot");
  let teamTwoShootButton = document.querySelector("#teamtwo-shoot");

  let teamOneShotCountElement = document.querySelector("#teamone-numshots");
  let teamOneGoalCountElement = document.querySelector("#teamone-numgoals");

  let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots");
  let teamTwoGoalCountElement = document.querySelector("#teamtwo-numgoals");

  let resetCountElement = document.querySelector("#num-resets");

  let resetButton = document.querySelector("#reset");

  let successChance = 0.5

  teamOneShootButton.addEventListener('click', function() {
    if (Math.random() > successChance) {
      teamOneGoalCountElement.innerHTML++;
      goalSound.play()
    }
    teamOneShotCountElement.innerHTML++;
  });

  teamTwoShootButton.addEventListener('click', function() {
    if (Math.random() > successChance) {
      teamTwoGoalCountElement.innerHTML++;
      goalSound.play()
    }
    teamTwoShotCountElement.innerHTML++;
  });

  resetButton.addEventListener('click', function() {
    teamOneShotCountElement.innerHTML = 0;
    teamOneGoalCountElement.innerHTML = 0;
    teamTwoShotCountElement.innerHTML = 0;
    teamTwoGoalCountElement.innerHTML = 0;
    resetCountElement.innerHTML++
  });
})();
