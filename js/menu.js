document.getElementById('menuToggle').addEventListener("click", function(e){
  if (document.getElementById('menu').classList.contains("fechado")) {
    document.getElementById('menu').classList.remove("fechado");
    document.getElementById('menu').classList.add("aberto");
  }else {
    document.getElementById('menu').classList.add("fechado");
    document.getElementById('menu').classList.remove("aberto");
  }
});
