function menuFunc() {
    let menuVar = document.querySelector(".mainnav li ul");
    if (menuVar.style.display === "block") {
      menuVar.style.display = "none";
    } else {
      menuVar.style.display = "block";
    }
  }