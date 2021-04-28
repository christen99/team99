const cities = [
    "Гонолулу",
    "Чикаго",
    "Патонг",
    "Минск",
    "Львов",
    "Казань", 
];

const icons = [
    {name: "Солнечно", type: "fas", pic: "fa-sun"},
    {name: "Облачно", type: "fas", pic: "fa-cloud"},
    {name: "Проливной дождь", type: "fas", pic: "fa-cloud-showers-heavy"},
    {name: "Снег", type: "fas", pic: "fa-snowflake"},
    {name: "Радуга", type:"fas", pic: "fa-rainbow"},
    {name: "Облачно с прояснениями", type:"fas", pic: "fa-cloud-sun-ra" },
    {name: "" type:"fas", pic: ""
    {name: "" type:"fas", pic: ""
    {name: "" type:"fas", pic: ""
    {name: "" type:"fas", pic: ""
    {name: "" type:"fas", pic: ""
    {name: "" type:"fas", pic: ""
];

function getNumber(max, min = 0) {
    return Math.floor(Math.random() * ( max-min) + min);
}

/* 
получить тэг в котором будет погола 

в этом тэге добавить иконку ( рандомно )
в этом тэге добавить температуру ( рандомно)
в этом тэне добавить город ( рандомно)
 */ 

// let tag = document.body.fistElementChild; 

let tag = document.firstElemenById("weather"); 
// получить html - элемент по значению его атрибута "id"
tag.firstElementChild