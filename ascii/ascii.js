let delay = 250;
let animationInterval;
let frameIndex = 0;
let animationFrames;
let isAnimationRunning = false;

function onAnimationSelected(){
    const animationOptionEl = document.getElementById('animation');
    const textAreaEl = document.getElementById("text-area");
    textAreaEl.value = ANIMATIONS[animationOptionEl.value];
}

function onFontSizeSelected(){
    const fontSizeOptions = {
        Tiny: "7px",
        Small: "10px",
        Medium: "12px",
        Large: "16px",
        "Extra Large": "24px",
        XXL: "32px",
    }
    const fontOption = document.getElementById("fontsize");
    const textAreaEl = document.getElementById("text-area");
    textAreaEl.style.fontSize = fontSizeOptions[fontOption.value];
}

function onStart(){
    const textArea = document.getElementById("text-area");
    animationFrames = textArea.value.split("=====\n");
    animationInterval = setInterval(runAnimation, delay);
    isAnimationRunning = true;
    document.getElementById("stop").disabled = false;
    toggleOnStart();
}

function onStop(){
    clearInterval(animationInterval);
    toggleOnStop();
    onAnimationSelected();
}

function onSpeedChange(){
    const turbo = document.getElementById("turbo");
    if (turbo.checked) {
      delay = 50;
      console.log("turbo");
    } else {
      delay = 250;
      console.log("slow down");
    }
    updateAnimation();
}

function updateAnimation(){
  if (isAnimationRunning) {
    clearInterval(animationInterval);
    animationInterval = setInterval(runAnimation, delay);
  }
}

function toggleOnStart(){
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
}

function toggleOnStop(){
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("stop").disabled = true;
    isAnimationRunning = false;
}

function runAnimation(){
    const textArea = document.getElementById("text-area");
    if(frameIndex < animationFrames.length) {
        textArea.value = animationFrames[frameIndex];
        frameIndex++;
    } else {
        frameIndex = 0;
    }
}
