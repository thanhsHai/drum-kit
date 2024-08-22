const crashSound = new Audio("./sounds/crash.mp3");
const kickBassSound = new Audio("./sounds/kick-bass.mp3");
const snareSound = new Audio("./sounds/snare.mp3");
const tom01Sound = new Audio("./sounds/tom-1.mp3");
const tom02Sound = new Audio("./sounds/tom-2.mp3");
const tom03Sound = new Audio("./sounds/tom-3.mp3");
const tom04Sound = new Audio("./sounds/tom-4.mp3");

const buttons = document.querySelectorAll("button");

//  Detecting button press
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    makeSound(this.innerHTML);
    animationBtn(this.innerHTML);
  });
});

// Detecting keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  animationBtn(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      crashSound.play();
      $("h1").text("Drum 🥁 Kit");
      break;

    case "a":
      kickBassSound.play();
      $("h1").text("Drum 🥁 Kit");
      break;

    case "s":
      snareSound.play();
      $("h1").text("Drum 🥁 Kit");
      break;

    case "d":
      tom01Sound.play();
      $("h1").text("Drum 🥁 Kit");
      break;

    case "j":
      tom02Sound.play();
      $("h1").text("Drum 🥁 Kit");
      break;

    case "k":
      tom03Sound.play();
      $("h1").text("Drum 🥁 Kit");
      break;

    case "l":
      tom04Sound.play();
      $("h1").text("Drum 🥁 Kit");
      break;

    default:
      $("h1").slideUp(500).slideDown(500);

      setTimeout(() => {
        $("h1").text("Keypress invalid !");
      }, 500);
      break;
  }
}

function animationBtn(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 100);
}
