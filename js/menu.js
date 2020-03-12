try {
  document.getElementById('menuToggle').addEventListener("click", function(e){
    if (document.getElementById('menu').classList.contains("fechado")) {
      document.getElementById('menu').classList.remove("fechado");
      document.getElementById('menu').classList.add("aberto");
    }else {
      document.getElementById('menu').classList.add("fechado");
      document.getElementById('menu').classList.remove("aberto");
    }
  });
} catch (e) {

}

var offset = 0;
var div = document.getElementById("menu");
var isDown = false;
// Add Pointer Event Listener

document.getElementById('puxador').addEventListener('touchstart', function(e) {
  isDown=true;
  offset =event.touches[0].clientX;
}, true);
document.getElementById('puxador').addEventListener('touchend', function() {
  isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
  event.preventDefault();
  if (isDown) {
    if (event.clientX - offset > 100) {
      document.getElementById('menu').classList.remove("fechado");
      document.getElementById('menu').classList.add("aberto");
      document.getElementById("inpu").checked = true;
      isDown = false;
      document.getElementById('puxador').style.left = "300px";
    }else {
      document.getElementById('menu').classList.add("fechado");
      document.getElementById('menu').classList.remove("aberto");
      document.getElementById("inpu").checked = false;
      document.getElementById('puxador').style.left = "0px";
    }
    if (event.clientX - offset > 300 || event.clientX - offset <= 0 ) {
      isDown = false;
    }
  }
}, true);
document.addEventListener('touchmove', function(event) {
  if (isDown) {
    if (event.touches[0].clientX - offset > 100) {
      document.getElementById('menu').classList.remove("fechado");
      document.getElementById('menu').classList.add("aberto");
      document.getElementById("inpu").checked = true;
      isDown = false;
      document.getElementById('puxador').style.left = "300px";
    }else {
      document.getElementById('menu').classList.add("fechado");
      document.getElementById('menu').classList.remove("aberto");
      document.getElementById("inpu").checked = false;
      document.getElementById('puxador').style.left = "0px";
    }
    if (event.touches[0].clientX - offset > 300 || event.touches[0].clientX - offset <= 0 ) {
      isDown = false;
    }
  }
}, true);
