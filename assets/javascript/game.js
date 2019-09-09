(function() {
  let goalSound = new Audio('assets/sounds/goal.mp3') 
  let resetCount = 0;
  
  let teamOneShotCount = 0;
  let teamOneGoalCount = 0;

  let teamTwoShotCount = 0;
  let teamTwoGoalCount = 0;

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
    teamOneShotCount = teamOneShotCount + 1;
    if (Math.random() > successChance) {
      teamOneGoalCount++;
      goalSound.play()
    }
    teamOneShotCountElement.innerHTML = teamOneShotCount;
    teamOneGoalCountElement.innerHTML = teamOneGoalCount;
  });

  teamTwoShootButton.addEventListener('click', function() {
    teamTwoShotCount = teamTwoShotCount + 1;
    if (Math.random() > successChance) {
      teamTwoGoalCount++;
      goalSound.play()
    }
    teamTwoShotCountElement.innerHTML = teamTwoShotCount;
    teamTwoGoalCountElement.innerHTML = teamTwoGoalCount;
  });

  resetButton.addEventListener('click', function() {
    resetCount = resetCount + 1;
    teamOneGoalCount = 0;
    teamTwoGoalCount = 0;
    teamOneShotCount = 0;
    teamTwoShotCount = 0;

    teamOneShotCountElement.innerHTML = teamOneShotCount;
    teamOneGoalCountElement.innerHTML = teamOneGoalCount;
    teamTwoShotCountElement.innerHTML = teamTwoShotCount;
    teamTwoGoalCountElement.innerHTML = teamTwoGoalCount;
    resetCountElement.innerHTML = resetCount;
  });
})();
