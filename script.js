function menuFunc() {
    let menuVar = document.querySelector(".smallnav li ul");
    if (menuVar.style.display === "block") {
      menuVar.style.display = "none";
    } else {
      menuVar.style.display = "block";
    }
    // document.getElementById('smallnav-overlay').style.display = 'block';
  }

  function mainMenuFunc() {
    const subMenu = document.querySelector(".mainnav li ul");
    subMenu.style.display = 'none';
    setTimeout(() => {
        subMenu.style.display = '';
    }, 100);
}