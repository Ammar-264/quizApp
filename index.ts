import inquirer from 'inquirer'
import questions from './questions.js'

let totalPoints = questions.length;
let winPoints = 0

for(let i=0 ; i<questions.length ; i++){

    let mcq = await inquirer.prompt({
        type:'list',
        name:"answer",
        message:questions[i].question,
        choices:questions[i].options
    })
    console.log('\n');

    if(mcq.answer === questions[i].correctOption){
        winPoints += 1
    }
    
}

console.log(`\nYou Got ${winPoints} Out Of ${totalPoints}`);
