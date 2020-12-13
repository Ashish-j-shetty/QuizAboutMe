var readLineSync=require('readline-sync')

let score=0;


const questions=[
{
  question: "Where do I live? :",
  answer: "Mangalore"
},
{
  question: "What is Ashish's favorite color? : ",
  answer: "black"
},
{
  question:"where do Ashish work ? :",
  answer:"Maersk"
}

]


function welcome(){
  var user=readLineSync.question("What is your name:");

  console.log("Welcome "+user+",Lets start quiz about Ashish");
}


function play(question,answer){
  var userAnswer=readLineSync.question(question);

  if(answer.toLowerCase()===userAnswer.toLowerCase()){
    console.log("Right answer !!!");
    score=score+1;
  }else{
    console.log("Wrong answer :(");
  }


  console.log("Current score: "+score);

}

function game(){
  for(let i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer);
  }
}


function showScore(){
 console.log("Yayy, your score is :"+score);
}




welcome();
game();
showScore();