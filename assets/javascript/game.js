(function() {
  let resetCount = 0;
  let oneGoalCount = 0;
  let twoGoalCount = 0;
  let oneShotCount = 0;
  let twoShotCount = 0;

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
    oneShotCount++;
    if (Math.random() > successChance) {
      oneGoalCount++;
    }
    teamOneShotCountElement.innerHTML = oneShotCount;
    teamOneGoalCountElement.innerHTML = oneGoalCount;
  });

  teamTwoShootButton.addEventListener('click', function() {
    twoShotCount++;
    if (Math.random() > 0.5) {
      twoGoalCount++;
    }
    teamTwoShotCountElement.innerHTML = twoShotCount;
    teamTwoGoalCountElement.innerHTML = twoGoalCount;
  });

  resetButton.addEventListener('click', function() {
    resetCount++;
    oneGoalCount = 0;
    twoGoalCount = 0;
    oneShotCount = 0;
    twoShotCount = 0;

    teamOneShotCountElement.innerHTML = oneShotCount;
    teamOneGoalCountElement.innerHTML = oneGoalCount;
    teamTwoShotCountElement.innerHTML = twoShotCount;
    teamTwoGoalCountElement.innerHTML = twoGoalCount;
    resetCountElement.innerHTML = resetCount;
  });
})();
