(function() {
  let resetCount = 0;
  let oneHitCount = 0;
  let twoHitCount = 0;

  let oneShotCount = 0;
  let twoShotCount = 0;

  let teamOneShootButton = document.querySelector("#teamone-shoot");
  let teamTwoShootButton = document.querySelector("#teamtwo-shoot");

  let teamOneShotCountElement = document.querySelector("#teamone-numshots");
  let teamOneHitCountElement = document.querySelector("#teamone-numhits");

  let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots");
  let teamTwoHitCountElement = document.querySelector("#teamtwo-numhits");

  let resetCountElement = document.querySelector("#num-resets");

  let resetButton = document.querySelector("#reset");

  let successChance = 0.5

  teamOneShootButton.addEventListener('click', function() {
    oneShotCount++;
    if (Math.random() > successChance) {
      oneHitCount++;
    }
    teamOneShotCountElement.innerHTML = oneShotCount;
    teamOneHitCountElement.innerHTML = oneHitCount;
  });

  teamTwoShootButton.addEventListener('click', function() {
    twoShotCount++;
    if (Math.random() > 0.5) {
      twoHitCount++;
    }
    teamTwoShotCountElement.innerHTML = twoShotCount;
    teamTwoHitCountElement.innerHTML = twoHitCount;
  });

  resetButton.addEventListener('click', function() {
    resetCount++;
    oneHitCount = 0;
    twoHitCount = 0;
    oneShotCount = 0;
    twoShotCount = 0;

    teamOneShotCountElement.innerHTML = oneShotCount;
    teamOneHitCountElement.innerHTML = oneHitCount;
    teamTwoShotCountElement.innerHTML = twoShotCount;
    teamTwoHitCountElement.innerHTML = twoHitCount;
    resetCountElement.innerHTML = resetCount;
  });
})();
