// option 1: directly set on the HTML element
// <button onclick="console.log(65)">Another button</button>

// opton 2: add onclick function on the html function
// IMPORTANT: WE WILL USE THIS 
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3:
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option: 3 another [we will use this sometime]
const purplebutton = document.getElementById("make-purple");
purplebutton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// optipn: 4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option: 4 another
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option: 4 final
// IMPORTANT :we will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})