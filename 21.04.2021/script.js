/* 

ToDO-list(список задач)

*/ 

const workTags = document.querySelectorAll("[data-type]");
let inp, btn;
workTags.forEach(tag => {
    if( tag.getAttribute("data-type") === "input" ) {
        ing = tag;
    } else if (tag.getAttribute("data-type") = "buttom") {
        btn = tag;
    }
})
console.log(inp);