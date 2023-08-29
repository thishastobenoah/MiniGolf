let userScore = Number(0);

let name = prompt("Welcome to GC mini golf! What is your name?");

let numberOfPutts = Number(0);

numberOfPutts = Number(prompt(`Hi, ${name}! Would you like to play 3 or 6 holes?`));

if (numberOfPutts === 3){
    for(let i = 0; i < numberOfPutts; i++)
    userScore += Number(prompt(`How many putts for hole ${i + 1}? (par: 3)`));
}else if(numberOfPutts === 6){
    for(let i = 0; i < numberOfPutts; i++)
    userScore +=  Number(prompt(`How many putts for hole ${i + 1}? (par: 3)`));
}

    let isPositive = false;

    if (numberOfPutts === 3){
        if(userScore <= 9){
        userScore = Number(9) - userScore;
        isPositive = false;
    }else {
        userScore = userScore - Number(9);
        isPositive = true;
    }
    }else if (numberOfPutts === 6){
        if(userScore <= 18){
        userScore = Number(18) - userScore;
        isPositive = false;
    }else {
        userScore = userScore - Number(18);
        isPositive = true;
    }
    }

if (numberOfPutts === 3){
    if(userScore > 0 && isPositive === true){
        console.log(`Nice try, ${name}. Your total par was: +` + userScore);

    }else if (userScore === 0){
        console.log(`Good game, ${name}. Your total par was: ` + (userScore * 0));

    }else {
        console.log(`Great job, ${name}. Your total par was: -` + userScore);
    }
}else if (numberOfPutts === 6){
    if(userScore > 0 && isPositive === true){
        console.log(`Nice try, ${name}. Your total par was: +` + userScore);

    }else if (userScore === 0){
        console.log(`Good game, ${name}. Your total par was: ` + (userScore * 0));

    }else {
        console.log(`Great job, ${name}. Your total par was: -` + userScore);

    }
}

