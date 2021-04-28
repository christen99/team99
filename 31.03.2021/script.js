let colors = docuemnt.getElementsByClassName("color"); // получить все тэги с соответствующим классом 


// const colors = document.getElementsByClassName("color");// Получить все теги с соответствующим классом 
console.log(colors);

// colors.forEach(function (item);

// });
colors = Array.from(colors); // Массив из неМассива
const box = document.getElementsByClassName("container")[0];
console.log(box);

colors.forEach(item => {
    item.style.backgroundColor = item.getAttrubite("data-color");
    item.onclick = (e) => {
    console.log(e);
    box.style.backgroundColor = e.target.getAttrubite("data-color");
    }
});

/* 

   Методы объекта document 
   .getElementById("id")
   .getelementByClassName("class")
   .getElementByTagName("tag")
   .getElementByName("name")

   Методы узлов элементов для работы с атрибутами 
   .getAttribute("name") - возвращает значение заданного атрибута
   .setAtttribute("name", "value") - создает атрибут name  со значением value 

*/