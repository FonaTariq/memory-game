const cards = document.querySelectorAll('.memory-card');
let All =0;


let hasFlippedCard= false;
let lockBord = false;
let firstCard, secondCard;



//faten editer
/*

cards.forEach((card, index) => {
  const back = card.querySelector('.card-back');
   back.setAttribute("","")
  back.textContent = shuffledSymbols[index]; // فقط الخلفية تتغير
});
*/
//end faten editer



function flipCard(){
    if(lockBord) return;

    if(this === firstCard) return;

    this.classList.toggle('flip');

    if(!hasFlippedCard){
    hasFlippedCard =true;
    firstCard =this
    return;
    }
  
    secondCard = this;
    checkForMatch();
  
}

function checkForMatch(){
    let isMatch =firstCard.dataset.framework === secondCard.dataset.framework;
     isMatch? disableCards() : unflipCards();
}


function disableCards(){
        All=All+1;
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

       
        
        resetBord();
}

function unflipCards(){
    lockBord = true;
        setTimeout(()=> {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBord();
        },1500);
}

function resetBord(){
    [hasFlippedCard, lockBord] = [false,false];
    [firstCard , secondCard] =[null,null];
      
     if(All == 6) {
    const message = document.getElementById("message");
    message.style.display = "block";

  setTimeout(() => {
    message.style.display = "none";
  }, 2000); // يخفيه بعد ثانيتين

    }
}

(function shuffle(){

let symbols = [
  ["A","img/car.avif"],
  ["A","img/car.avif"],
  ["B","img/shap.png"],
  ["B","img/shap.png"],
  ["C","img/plant.jpg"],
  ["C","img/plant.jpg"],
  ["D","img/basclit.jpg"],
  ["D","img/basclit.jpg"],
  ["E","img/normal.jpg"],
  ["E","img/normal.jpg"],
  ["F","img/house.jpg"],
  ["F","img/house.jpg"],
];
const shuffledSymbols = symbols.sort(() => 0.5 - Math.random()); // مضاعفة 
//faten editer
cards.forEach((card, index) => {

    const back = card.querySelector('.front-face');
    card.setAttribute("data-framework",shuffledSymbols[index][0]);
    back.setAttribute("src",shuffledSymbols[index][1]);
  

});

//end faten editer




    /*
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()* 12);
        card.style.order = randomPos;
    });*/

})();




cards.forEach(card => card.addEventListener('click',flipCard));