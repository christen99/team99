console.log("Hi from file!");

/* 
    ECMAScript

    Ввод и вывод информации 
    console.log() Node == Chrome 
    print()
*/ 

// alert("Ты вошел в Браузер!");
let name = prompt("Введите ваше имя!");
console.log(name); // ""

let answer = confirm ("Your name " + name + "?");
console.log(answer);

/* 

игра угадай слово ( весилица)

*/ 

let words = [ "cat", "dog", "meat", "house", "bamboo", 
"pizza", "steak", "feijoa", "candy", "tea",
"printer", "water", "procrastination" , "cappuccino" , 
"pepsi" ]; 

// сначлала выбрать любое слово из массива 

const getNumber =  function(max = 11, min =0) {
    return Math.floor(Math.random() * ( max - min) +
    min); 
}

let word = words[getNumber(words.length)];
let questWord = "";

/* 

meat 
---

*/ 

for (let i = 0; i < word.length; i ++) {
    questWord += "-";
}

console.log(`Загаданное слово: ${word}`); 
console.log(`Загаданное слово: ${questWord}`); 



while (questWord.toLowerCase() !== word.toLowerCase()) {
let letter = prompt ("Введите букву:", "a");
console.log(letter); 

/* 
есть ли буква в слове? 

*/

let newWord = "";
for (let i = 0; i < word.length; i++ ) {
    if (word[i].toLowerCase() === letter.toLowerCase()
    ) {
        newWord += letter.toLowerCase();
    } else {
        newWord += questWord[i];
    }
}
console.log(newWord); 
questWord = newWord;
}

/* 
написать игру - угадай слово 

рандомное число от 0 до 100 

пользователь вводит число 
если чисто угадал - молодец 
если число рядом на 10 едини - горячо 
во всех остальных случаях - холодно 

число 25 

1 -холожно 
23 -горячо 
13 - холодно 
34 - тепло 


*/ 

