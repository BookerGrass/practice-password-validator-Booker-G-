const readline = require('readline-sync');

let quest = readline.question("Enter Password. ");
let questLength = quest.length;
let questNumber = quest.includes("1");
let questNumberCheck = questNumber.toString()


while (questLength < 8){
    console.log("Password must have 8 or more characters. ");
    break
}

while (quest == quest.toLowerCase()){
    console.log("Password must contain an uppercase letter. ")
    break
}

while ("true" !== questNumberCheck){
    console.log("Password must contain the number 1. ")
    break
}


if (questLength >= 8)
if (quest !== quest.toLowerCase)
if ("true" === questNumberCheck)
    console.log("Valid Password");