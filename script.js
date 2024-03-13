const max=prompt("enter the maximum number");
console.log(max)

// let random=Math.floor((Math.random()*max)+1);
let c=0;
// const max=60;
const random=Math.floor((Math.random()*1000)%max)
console.log(random)

let guess=prompt("enter your guess");
while(true)
{
    if(c==3)
    {
        console.log(alert("you are out of moves.you have lost the game"));
        break;
    }
    if(guess=="quit")
    {
        console.log("Alas! you have lost the game");
        break;
    }
    if(guess==random){
        console.log("congratulations! you guessed it right");
        break;
    }
    else if(guess<random){
        guess=prompt("HINT: The number you guessed is too small!, PLease try Again!");
        c++;
    }
    else if(guess>random){
        guess=prompt("HINT: The number you guessed is too large!, PLease try Again!");
        c++
    }
    
    
}
