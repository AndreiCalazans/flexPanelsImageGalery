const panels = document.querySelectorAll(".panel");

function addOpen(){
  this.classList.toggle("open");

}
function addActive(e) {
  if(e.propertyName.includes("flex")){
    this.classList.toggle("open-active");
  }
}
panels.forEach( panel => panel.addEventListener("click" , addOpen));
panels.forEach(panel => panel.addEventListener("transitionend", addActive));
