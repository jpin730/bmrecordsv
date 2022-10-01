hideMenu = true;

document.getElementById("menuBtn").addEventListener("click", toggleMenuDisplay);
document.getElementById("menu-list").addEventListener("click", toggleMenuDisplay);

function toggleMenuDisplay() {
  if(window.innerWidth <= 768) {
    hideMenu = !hideMenu;
    if (hideMenu) {
      document.getElementById("menu-list").style.left = "100vw";
      document.getElementById("menuBtn").style = "background: url('img/menu.svg') 50% 50% / 30px 30px no-repeat";
    } else {
      document.getElementById("menu-list").style.left = "0";
      document.getElementById("menuBtn").style = "background: url('img/x.svg') 50% 50% / 25px 25px no-repeat";
    }
  }
}