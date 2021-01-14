const { FILL } = require("./p5");

function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
	textSize(32);
	// fill(180);
	stroke('green');
	for (let i = 0; i < hour(); i++){
		noFill();
		circle(300, 160, i * 7);
	}

	for (let i = 0; i < minute()/2; i++){
		noFill();
		stroke('blue');
		circle(600, 300, i * 6);
	}
	stroke('red');
	for (let i = 0; i < second()/2; i++){
		// noFill();
		secColor = color('red');
		secColor.setAlpha(128 + 128 * sin(PI * millis() / 1000));
		fill(secColor);
		circle(190, 410, i * 10);
	}
}
