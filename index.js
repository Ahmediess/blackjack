
let cards = [];
let Totalscore = 0;
let hasBlackjack = false;
let isAlive = false;
let player = {
    name: "Ahmed",
    chips: 159
};
let playerEl = document.getElementById("player_el");
let messageEl = document.getElementById("messageEl");
let sumEl = document.querySelector("#sumEl");
let cardEl = document.querySelector("#CardEl");

function startgame(){
    let Firstcard = getRandomcard();
    let Secandcard = getRandomcard();
    cards = [Firstcard ,Secandcard];
    Totalscore = cards[0] + cards[1];
    hasBlackjack = false;
    isAlive = true;

    rendergame();
}

function rendergame(){
    let length = cards.length;
    let temp = "";
    
    for(let i = 0 ; i < length ; i++){
          temp += cards[i] + " ";
    }
    cardEl.innerHTML = "Cards: " + temp;
    sumEl.innerHTML = "sum: "+ Totalscore;
    

    if(Totalscore <= 20){
        message = ("You'r still in the game,draw a new card ?");
    }else if(Totalscore === 21){
        message = ("BlackJack !!");
        hasBlackjack = true;
    }else{
        message = ("You'r Out");
        isAlive = false;
    }

    playerEl.innerHTML = player.name + ": $" + player.chips;
    messageEl.innerHTML = message;
}

function drawNewcard(){
    if( isAlive === true && hasBlackjack === false ){
        new_Card =  getRandomcard();
        cards.push(new_Card);
        Totalscore += new_Card; 
        rendergame(); 
    }
}
 function getRandomcard(){
    let random = Math.floor(Math.random()*13)+1;

    if(random == 1){
        random = 11
    }
    else if(random >10  && random < 14 ){
        random = 10
    }
    
    return random;
 }
