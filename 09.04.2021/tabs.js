// window.onload
window.addEventListener("load", () => {
    // const links = document.getElementsByTagName("a");
const links = document.querySelectorAll("nav>a");
//  найти список всех тэгов, соответствующих css-селектору 

// .querySelector("selector") - получить первый подходящий элемент по соответствующему селектору 

const articles = document.querySelectorAll("article");



console.log(links, articles);

links.className = "active"; // добавить атрибут класс
console.log(links[0].classList);

/* 

     .classList -  возвращает список всех классов выбранного элемента 
     .classList.add("class") - добавить класс
     .classList.remove("class") - удалить класс
     .classList.toggle("class") - если класс есть - удаляет, иначе добавляет
     .classList.contains("class") - проверить есть ли класс у элемента 

*/ 
articles[0].className = "active";
      for ( let i =0; i < links.length; i++) {
          links[i].addEventListener("click", e => {
              e.preventDefault(); // остановить событие по умолчанию
              if (!links[i].classList.contains("active")) {
              links[i].classList.add("active");
              articles[i].classList.add("active");
              for (let j = 0; j < links.length; j++) {
                  if (i !== j && links[j].classList.contains("active")) {
                      links[j].classList.remove("active");
                      articles[j].classList.remove("active");
                  }
              }
              }
          });
      }

});
