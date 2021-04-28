// Три

// const form = document.forms[0];
const form = document.forms.cactusForm;

/* 

Список всех форм на текущей странице (HTMLFormCollection)
HTMLCollection - список с штмл объектами 
NodeList - список узлов (все что есть в DOM вместе с тегами )

*/ 
const getOrder = function() {
    // form.elements - собрать все теги формы (input, select, textarea
    // button, fieldset??)
    let formBody = {};

    for (let i = 0; i < form.elements.length; i++ ) {
        let el = form.elements[i];
       //  console.log(el, el.type, el.name, el.value) 
       if ( el.name) {
           formBody[el.name] = el.value || // забираем элемент формы с атрибутом
           //  name и передаем данные в тело формы в формате name : value для
           // дальнейшей обработки 
       }
    }
     console.log(form.formBody);
}

let orderBox = form.nextElementSibling;

let link = orderBox.nextElementSibling;
console.log(link);
link.href = "http://ya.ru"
link.target = "_self";  /* _self */ 
link.onclick = function(event) => {
    event.preventDefault(); // остановить действие поумолчанию ( не дать ссылке ветси себя как ссылка)
    console.log(this.textContent);
    // console.log(event);
    // console.log(event.target);// == this === link 
}
/* 
// link.onclick = (event) => {
  //  event.preventDefault(); // остановить действие поумолчанию ( не дать ссылке ветси себя как ссылка)
   // console.log(event.target.textContent);
   // console.log(event);
}
*/ 

form.onsubmit = function(e) { // отправить форму на север 
    e.preventDefault();
    let data = getOrder();
    console.log(data);

/* 
заказ от Name (h2)
кактус количесто (p => <span зеленый> <span большой>)
коментарии:
... ( <pre>)
*/ 
orderBox.innerHTML = "";
let caption = document.createElement("h2"); // создали html тэг
caption.innerText = `заказ от  ${data.name}`;
orderBox.apperChild(caption); // добавить дочерний тэг в конец родителя 
let text = document.createElement("p"); 
text.innerHTML = `<span class="orderText">${data.cactus}</span> - 
<span>${data.cnt}</span> шт.`;

orderBox.appendChild(text);

caption.style.color = "blue";

orderBox.innerText += "<br> комментарии:"
let msg = document.createElement("pre");
msg.innerText = data.comments
// orderBox.appendChild(msg);
orderBox.insertBefore(orderBox.firstElementChild , msg);
// insertBefore()
   // папа/вставить перед ( новый тэг , пеерд кем вставить)

   // caption.style.color = "blue";


   let box = document.createElement("div");
   link.parentNode.insertBefore(box,link);

}


// добавить в select фразу Другое... 
/* При выборе слова "Другое" = появляетя ввода нового значнеия 
и кнопка добавления этого значения в селект 
*/ 