const Readlinesync = require("readline-sync")
console.clear();
console.log('Welcome To Javascript Quiz ');
console.log('Each Question Carries 2 Points\nFor Each Correct Answer You Score 2 Points\nFor Each Wrong Answer You Score 0 Points\n\n\n');

const quiz=[{
  question:'Q1:Who created javascript?',
  options:{
    A:'James Gosling',
    B:'Brendan Eich',
    C:'Dennis M Ritchie',
    D:'Tim Berners Lee',  
  },
  correct:'b'
},
{
  question:'Q2:In which year javascript was invented',
  options:{
    A:'1985',
    B:'1990',
    C:'1995',
    D:'1992',  
  },
  correct:'c'
},
{
  question:'Q3:Which type of JavaScript language is ___',
  options:{
    A:'Object-Oriented',
    B:'Object-Based',
    C:'Assembly-language',
    D:'High-level',  
  },
  correct:'b'
},
{
  question:'Q4:The "function" and " var" are known as:',
  options:{
    A:'Keywords',
    B:'Data types',    
    C:'Declaration statements',
    D:'Prototypes',  
  },
  correct:'c'
},
{
  question:'Q5:In the JavaScript, which one of the following is not considered as an error:',
  options:{
    A:'Syntax error',
    B:'Missing of semicolons',
    C:'Division by zero',
    D:'Missing of Bracket',  
  },
  correct:'b'
}];
let points=0;
for(const elements of quiz ){
  console.log(elements.question);
  console.log(elements.options);
  
  const answer = Readlinesync.question("Your Answer\n");
  if (answer=== elements.correct) {
  points += 2;
  console.clear();
  console.log("correct answer. Your Points is " + points);
}   else {
    console.clear();
    console.log("Wrong Answer.\nCorrect Answer is " + elements.correct + " Your points is "+points);
}
}
if(points >= 8){
  console.clear();
  console.log("Your Final points is " + points + " OUTSTANDING")
}else if(points >=5 ){
  console.clear();
  console.log("Your Final points is " + points + " GOOD");
}else{
  console.clear();
  console.log("Your Final points is " + points + " PLEASE TRY AGAIN")
}  
