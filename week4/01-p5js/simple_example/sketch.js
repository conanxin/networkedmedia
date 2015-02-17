// Runs once at the start
function setup() {

	console.log('setup.');
	createCanvas(600, 400);

}

// Runs in a loop, over and over again
function draw() {

	console.log('draw!');

	// background
	background(42, 169, 217);

	// ellipse
	fill(242, 228, 21);
	ellipse(100,100,100,100);

	//rectangle
	fill(162, 217, 39);
	rect(300,100,150,150);

}