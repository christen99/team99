const images = [images/"flower.svg", "deer.svg"];

const radioItems = document.getElementsByName("print");
const tShirt = document.querySelector("t-shirt");
const color = document.getElementsById
const pos =
const size = 

for (let i = 0; i < radioItems.length; i++) {
    radioItems[i].nextElementSibling.setAttribute("data-src", images[i]);
    radioItems[i].nextElementSibling.style.backgroundImage = `url(${images[i]})`;
    rsdioItems.addEventListener("click", function(e) {
        if ( this.checked) {
            tShirt.style.backgroundImage = `url(${this.nextElementSibling.getAttribute("data-src")}`;
        }
    });
}
