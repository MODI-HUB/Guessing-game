const max=prompt("enter the maximum number");
let max1=max-'0';
const random=Math.floor((Math.random()*100)%max1)
console.log(random);
// let random=Math.floor((Math.random()*max)+1);

let guess=prompt("enter your guess");
let guess1=guess-'0';
while(true)
{
    if(guess1>max1)
    {
        console.log(max1)
        console.log("Alas! you have lost the game");
        break;
    }
    if(guess1==random){
        console.log("congratulations! you guessed it right");
        break;
    }
    else if(guess1<random){
        guess1=prompt("HINT: The number you guessed is too small!, PLease try Again!");
    }
    else if(guess1>random){
        guess1=prompt("HINT: The number you guessed is too large!, PLease try Again!");
    }
}

// let a=50;