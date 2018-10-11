/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


//function PlayerCard(name, gun, team) {
//    this.isSelected = false;
//    this.ActionPoints = 12;
//    this.playerName = name;
//    this.status = 'alive';
//    this.gun = gun;
//    this.team = team;
//}
//PlayerCard.prototype.AP = function() {
//    return this.ActionPoints;
//};
//
//
////playerConstructorObjects
//var playerBlue1 = new PlayerCard("Tom", "pistol", "Blue");
//var playerBlue2 = new PlayerCard("Bom", "pistol", "Blue");
//var playerBlue3 = new PlayerCard("Jhon", "rifle", "Blue");
//var playerBlue4 = new PlayerCard("Michele", "sniper", "Blue");


(function() {
function QuestionConstrutor(question,anwser,solution) {
    this.Question = question;
    this.Anwser = anwser;
    this.Solution = solution;
};

QuestionConstrutor.prototype.AddNumber = function(number) {
    this.Number = number;
    return this.Number;
};
QuestionConstrutor.prototype.CheckAnwser = function(userInput) {
    if(userInput == this.Solution) {
        console.log("Yey, this is a correct anwser. Well Done!")
    }
    else {
        console.log("Whoops, this is a wrong anwser O_o")        
        }
}

var Question1 = new QuestionConstrutor("What is UX design?",["Drawing pictures","Anwsering user needs","Programing web sites"],"2");
var Question2 = new QuestionConstrutor("What is Javascript?",["a pie name","a modern UI drawing tool","programming language"],"3");
var Question3 = new QuestionConstrutor("Where do you live?",["China","Russia","Moon"],"2");

var QuestionArrays = [Question1,Question2,Question3];



function getRandom(min,max) {
 return Math.floor(Math.random() * (max - min +1)) + min;   
};

(function() {
randomNumber = getRandom(0,QuestionArrays.length-1);

var randomQuestion = QuestionArrays[randomNumber]
console.log(randomQuestion.AddNumber(1) + ". " + randomQuestion.Question);

function AnwserList() {
for(i=0;i<randomQuestion.Anwser.length;i++){
console.log(i+1 + " " + randomQuestion.Anwser[i])
}
}
console.log("Anwsers:");
console.log(AnwserList());
var userInput = prompt("type a number of the correct anwser");
console.log("you input: " + userInput);
console.log("we expect: " + randomQuestion.Solution);
randomQuestion.CheckAnwser(userInput);
}());
}());
