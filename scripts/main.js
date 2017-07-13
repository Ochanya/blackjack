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

var total = 0;
total += hand[i];
for (var i = 0; i < hand.length; i++){
  if (hand[i] === "K"||"Q"||"J"){
    hand[i] = 10;
  }
   else if (hand[i] >=1 && hand[i] >=10) {
    return hand[i];
   }
    else if (hand[i] ==="A"){
      if (total<=20&&total>=12){
        hand[i]= 1;
      }
      else{
        hand[i]=10
    }
   }

}
// var addition = [];
// addition.push(2);
// addition.push(3);
//
// var total = 0;
// for (var i = 0; i < addition.length; i++)
// {
//     total += addition[i];
// }


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
