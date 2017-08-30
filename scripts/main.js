/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
// let cardPicks=[];
// for (var i = 0, sum = 0; i < cardPicks.length; sum += cardPicks[i++]);
function handValue (hand) {

let total= 0;

for (var i = 0; i < hand.length; i++){

  if (Number(hand[i]) > 0 && Number(hand[i]) < 10) {
    total += Number(hand[i]);
  } else if (hand[i] === "A"){
     if (total<11){
       total += 11;
     }else if (total>10 && total<21){
       total += 1;
      }
    }else if(hand[i] === "K"||hand[i]==="Q"|| hand[i]==="J"){
      total += 10;
     }

}
if (total >21 && hand.includes("A")){
  total-= 10;
}
console.log(total)
return total;
}
