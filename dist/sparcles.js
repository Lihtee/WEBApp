"use strict";

document.getElementById("sparcles_on").addEventListener("click", function () {
  var sparkles = [];
  var rnd = myRandom(20, 40);

  for (var i = 0; i < rnd; i++) {
    var sparkEl = document.createElement("div");
    sparkEl.classList.add('sparkle');
    sparkEl.classList.add('glyphicon');
    sparkEl.classList.add('glyphicon-asterisk');
    sparkles.push(sparkEl);
  }

  var xRnd;
  var yRnd;
  sparkles.forEach(function (el) {
    xRnd = myRandom(0, window.innerWidth);
    yRnd = myRandom(0, window.innerHeight);
    el.style.left = "".concat(xRnd, "px");
    el.style.top = "".concat(yRnd, "px");
    document.getElementById('sparcles').appendChild(el);
  });
});
$('#rotate-sparcles').click(function () {
  var $sparkles = $('.sparkle');
  var rotClasses = ['rot-slow', 'rot-med', 'rot-fast'];
  $sparkles.each(function (ind, el) {
    var $el = $(el);
    var swRnd = myRandom(0, 1 + 1);

    if (swRnd === 1) {
      var hasRotation = $el.attr("class").split(' ').filter(function (className) {
        return rotClasses.indexOf(className) >= 0;
      }).length > 0;

      if (hasRotation) {
        rotClasses.forEach(function (className) {
          $el.removeClass(className);
        });
      } else {
        var rotRnd = myRandom(0, 2 + 1);
        $el.addClass(rotClasses[rotRnd]);
      }
    }
  });
  myRotate($sparkles);
});
var rotIntervals = [];

function myRotate($sparkles) {
  rotIntervals.forEach(function (interval) {
    clearInterval(interval);
  });
  rotIntervals = [];
  var $slowSparcles = $sparkles.filter(function (ind, el) {
    return $(el).hasClass('rot-slow');
  });
  var slowSpeed = 1;
  var slowAngle = 0;
  var slowTimer = setInterval(function () {
    slowAngle += slowSpeed;
    $slowSparcles.rotate(slowAngle);
  }, 20);
  var $medSparcles = $sparkles.filter(function (ind, el) {
    return $(el).hasClass('rot-med');
  });
  var medSpeed = 2;
  var medAngle = 0;
  var medTimer = setInterval(function () {
    medAngle += medSpeed;
    $medSparcles.rotate(medAngle);
  }, 20);
  var $fastSparcles = $sparkles.filter(function (ind, el) {
    return $(el).hasClass('rot-fast');
  });
  var fastSpeed = 3;
  var fastAngle = 0;
  var fastTimer = setInterval(function () {
    fastAngle += fastSpeed;
    $fastSparcles.rotate(fastAngle);
  }, 20);
  rotIntervals.push(slowTimer);
  rotIntervals.push(medTimer);
  rotIntervals.push(fastTimer);
}

function myRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//# sourceMappingURL=sparcles.js.map