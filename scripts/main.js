var text = ["Hola!", "Bonjour!", "Hi!"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1500);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
     clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}


//change text
const image = document.getElementById('change');

let andrea2 = "images/andrea2.jpg";
let andrea = "images/andrea.jpg";

image.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', andrea);
};

image.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', andrea2);
};
