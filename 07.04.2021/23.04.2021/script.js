const box = document.querySelector(".textBox");

/*
	События клавиатуры:
	- onkeypress (когда клавиша клавиатуры была нажата и отжата) ~ onclick (для мышки)
	- onkeydown (когда клавиша была нажата, но не отжата) ~ onmousedown
	- onkeyup (когда клавиша была отжата) ~ onmouseup
*/

let cnt = 0;
document.addEventListener("keypress", function(e) {
	cnt++;
	// console.log("Click", cnt);
	// console.log(e.key);
	if (e.code === "Space") {
		box.innerHTML += "&#32;";
	} else if (e.key === "Enter") {
		box.innerHTML += "<br>";
	} else {
		box.innerHTML += e.key;
	}
	if (e.code === "KeyC" && e.ctrlKey) {
		console.log(box.innerText);
	}
	/* 
		e.key - Отображение (название) клавиши, которая была нажата (работают только символы - буквы и цифры и знаки пунктуации + Enter)
	*/
});
document.addEventListener("keydown", function(e) {
	if (e.key === "Backspace") {
		let text = box.innerText;
		text = text.split("");
		// text = Array.from(text);
		text.pop();
		box.innerText = text.join("");
		// do smth;
	}
	// console.log(e);
});
