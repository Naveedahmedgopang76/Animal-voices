var numberOfButtons = document.querySelectorAll(".animal").length;

for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".animal")
    [i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;

      switch (buttonInnerHTML) {
        case "Cat":
          var audio = new Audio("sounds/cute-cat-meow-sound-333770.mp3");
          audio.play();
          break;

        // You can add more cases here for other animals if needed
      }
    });
}
