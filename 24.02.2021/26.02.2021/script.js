// let childrens = document.body.childNode;- все дочерные узлы
let childrens = document.body.children; // все дети - теги 
console.log(childrens.length); 
// enter = текстовый узел 

let colors = ["red", "orange", "yellow", "lime",
 "yellowgreen", "forestgreen", "seagreen", "cyan", "blue", 
"darkorchid", "magenta"];

for (let ch = 0; ch < document.body.childElementCount; ch++)
{
    childrens[ch].style.background = colors[ch]; 
}

document.body.firstElementChild.style.color = "white"; //  обновлется название веб страницы ! 

document.body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.
nextElementSibling.nextElementSibling.style.color = "white";

let abz = document.body.firstElementChild.nextElementSibling;

abz.firstElementChild.style.font = "30px sans-serif";
let text = abz.lastChild;
text.nodeValue = "what is what?";
console.log(text.nodeValue); 
abz.style.display = "flex";