window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; 
  }

  switch (event.key) {
    case "ArrowDown":
        movePlayer(0, 10);
      break;
    case "ArrowUp":
        movePlayer(0, -10);
      break;
    case "ArrowLeft":
        movePlayer(-10, 0);
      break;
    case "ArrowRight":
        movePlayer(10, 0);
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
// the last option dispatches the event to the listener first,
// then dispatches event to window