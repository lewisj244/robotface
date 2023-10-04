var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var antenasize = randomNumber(10, 50);
var eyesize = randomNumber(10, 50);
var smile = randomNumber(20, 100);
var nose = randomNumber(5, 40);
background("lightblue");
fill(rgb(randomNumber(1, 255),randomNumber(1, 255),randomNumber(1, 255)));
regularPolygon(200, 200, 8, 150);
line(100, 100, 100, 10);
line(300, 100, 300, 10);
fill("yellow");
ellipse(100, 15, antenasize, antenasize);
ellipse(300, 15, antenasize, antenasize);
fill(rgb(randomNumber(1, 255),randomNumber(1, 255),randomNumber(1, 255)));
ellipse(250, 125, eyesize, eyesize);
ellipse(200, 150, eyesize, eyesize);
ellipse(150, 125, eyesize, eyesize);

fill("blue");
arc(200, 250, smile, smile, 0, 180);
fill(rgb(randomNumber(1, 255),randomNumber(1, 255),randomNumber(1, 255)));
regularPolygon(200, 200, 3, nose);
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
