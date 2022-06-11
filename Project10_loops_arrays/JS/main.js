//while loop
// function Call_Loop() {
//   var Digit = "";
//   var X = 1;
//   while (X < 11) {
//     Digit += "<br>" + X;
//     X++;
//   }
//   document.getElementById("Loop") .innerHTML = Digit;
// }

//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments") .innerHTML = Content;
}