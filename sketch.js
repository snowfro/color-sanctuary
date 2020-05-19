const hash = "0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6";

/*
take first 20 hex pairs and sort them to set segment points
take character to determine style (horizontal, vertical, radial, diagonal)
take character to determine rift point
add 6 segments of thin lines with random colors


*/
function setup() {
	createCanvas(windowHeight, windowHeight,SVG);
	background(100);
	colorMode(HSB,255);
	noLoop();
}

function draw() {
	let gradStyle = random();
	let startColorA = random(255);
	let spreadA = random(10,25);
	//console.log(spreadA);
	let startColorB = (startColorA+20)%255;
	let spreadB = random(25,50);
	//console.log(spreadB);
	for (let i=0; i< windowHeight+500; i++){
		let fillColor = ((i/spreadA)+startColorA)%255;
		if (gradStyle<1){
		noStroke();
		fill(fillColor,255,255);
		circle(windowHeight/2,windowHeight/2,windowHeight+500-i);
		} else {
		stroke(fillColor,255,255);
		line(i,0,i,windowHeight);
		}

	}
	for (let j=0; j<windowHeight+500;j = j+300){
		let widthRandomizer = random(40);
		let strokeRandomizer = random(5,100);
	noFill();
	strokeWeight(strokeRandomizer);
	stroke(((j/spreadB)+startColorB)%255,255,255);
	circle(windowHeight/2,windowHeight/2,j+widthRandomizer);
	stroke(((j/spreadB)+startColorB+5)%255,255,240);
	strokeWeight(3);
	circle(windowHeight/2,windowHeight/2, j+widthRandomizer+strokeRandomizer);
		stroke(((j/spreadB)+startColorB-5)%255,255,240);
	circle(windowHeight/2,windowHeight/2, j+widthRandomizer-strokeRandomizer);
	}


}

/*

*/
