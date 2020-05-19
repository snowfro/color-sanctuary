const hash = "0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6";

/*
take first 20 hex pairs and sort them to set segment points
take character to determine style (horizontal, vertical, radial, diagonal)
take character to determine rift point
add 6 segments of thin lines with random colors


*/

let style;
let density;
let rotate1=0;
let xOrSquare;
function setup() {
	//pixelDensity(1);
	createCanvas(windowHeight, windowHeight);
	background(255);
	colorMode(HSB,255);
	noLoop();
	style = 1;
	//style = Math.floor(random(0,4));
	density = random(200,500);
	//console.log(style);
	strokeCap(SQUARE);
	imageMode(CENTER);
	rectMode(CENTER);

}

function draw() {
	if (style==0){
		drawLines(4);
	} else if (style ==1) {
		drawCircles();
	}	else if (style ==2){
		drawCrosses();
	} else {
		drawSplit();
	}
}

function drawSplit(){

let splitPoint = Math.floor(random(30, width-30));
let gradSelect = Math.floor(random(0,2));
let startColor = random(255);
let gradDirection = random();
let spread = random(20,30);
let splitDifference = Math.floor(random(5,15));
	console.log(splitDifference);

	for (let i=0; i<width; i++){
		if (gradSelect===0?i<splitPoint-2:i>splitPoint+2){
			strokeWeight(1);
			let fillColor = (((gradSelect===0?i:255-i)/spread)+startColor)%255;
			stroke(fillColor,255,255);
			line(i,0,i,height);
		} else if (gradSelect===0?i>splitPoint+2:i<splitPoint-2){
			strokeWeight(1);
			let fillColor = (((gradSelect===0?splitPoint:255-splitPoint)/spread)+startColor+splitDifference)%255;
			stroke(fillColor,255,255);
			line(i,0,i,height);
		} else if (i==splitPoint) {
			strokeWeight(5);
			let fillColor = (((gradSelect===0?splitPoint:255-splitPoint)/spread)+startColor+(splitDifference/2))%255;
			stroke(fillColor,255,200);
			line(i,0,i,height);
			strokeWeight(1);
			fillColor = (((gradSelect===0?splitPoint:255-splitPoint)/spread)+startColor+(splitDifference/2)+5)%255;
			stroke(fillColor,200,180);
			line(i-2,0,i-2,height);
			line(i+2,0,i+2,height);

		}
	}
}

function drawCrosses(){
	xOrSquare=random();

	drawLines(1);

	let drawing = get();

	background(255);
	push();
		translate(width/2+sqrt(((width/2)*(width/2))+((width/2)*(width/2)))-1,height/2);
		rotate(radians(45));
		image(drawing,0,0);
	pop();

	push();
		translate(width/2,((sqrt(((width/2)*(width/2))+((width/2)*(width/2)))-width/2)*-1)+1);
		scale(-1,-1);
		rotate(radians(45));
		image(drawing,0,0);
	pop();

	push();
		translate(((sqrt(((width/2)*(width/2))+((width/2)*(width/2)))-width/2)*-1)+1,height/2);
		scale(-1,-1);
		rotate(radians(45));
		image(drawing,0,0);
	pop();

	push();
		translate(width/2,(width/2+sqrt(((width/2)*(width/2))+((width/2)*(width/2))))-1);
		scale(1,1);
		rotate(radians(45));
		image(drawing,0,0);
	pop();

	let drawing2 = get();

	push();
		scale(0.5,0.5);
		translate(width/2,height/2);
		rotate(radians(xOrSquare<0.5?90:0));
		image(drawing2,0,0);
	pop();

	push();
		translate(width/4,height-(height/4));
		scale(0.5,0.5);
		rotate(radians(xOrSquare>=0.5?90:0));
		image(drawing2,0,0);
	pop();

	push();
		translate(width-(width/4),height-(height/4));
		scale(0.5,0.5);
		rotate(radians(xOrSquare<0.5?90:0));
		image(drawing2,0,0);
	pop();

	push();
		translate(width-(width/4),height/4);
		scale(0.5,0.5);
		rotate(radians(xOrSquare>=0.5?90:0));
		image(drawing2,0,0);
	pop();
}

function drawLines(depth){


	let dirRandom =Math.floor(random(0,depth));
	let bleed = hypotenuse(width)-width;

	if (dirRandom==0){
		translate(0,0);
		rotate(0);
	} else if (dirRandom==1){
		translate(width,0);
		rotate(radians(90));
	} else if (dirRandom==2){
		translate(width/2,-(hypotenuse(width)/2-width/2));
		rotate(radians(45));
	} else if (dirRandom==3){
		translate((width/2)+hypotenuse(width)/2,height/2);
		rotate(radians(135));
	}

	let startColorA = random(255);
	let spreadA = random(10,25);
	let startColorB = (startColorA+20)%255;
	let spreadB = random(25,50);

	for (let i=-bleed; i< width+bleed; i++){
		let fillColor = ((i/spreadA)+startColorA)%255;
		stroke(fillColor,255,255);
		line(i,-bleed,i,height+bleed);
		}


	for (let j=-bleed; j<width-100+bleed;j = j+density){
		let widthRandomizer = random(80);
		let strokeRandomizer = random(10,70);
		let strokeRandomizer2 = random(2,10);
		let strokeRandomizer3 = random(2,10);
	noFill();
	strokeWeight(strokeRandomizer);
	stroke(((j/spreadB)+startColorB)%255,255,255);

	line(j+widthRandomizer,-bleed,j+widthRandomizer,height+bleed);

	if(j+widthRandomizer+strokeRandomizer<width) {
	strokeWeight(strokeRandomizer2);
	stroke(((j/spreadB)+startColorB+5)%255,255,240);
	line(j+widthRandomizer+strokeRandomizer,-bleed,j+widthRandomizer+strokeRandomizer,height+bleed);
	strokeWeight(1);
	stroke(((j/spreadB)+startColorB+8)%255,240,255);
	line(j+widthRandomizer+strokeRandomizer-(strokeRandomizer2/2),-bleed,j+widthRandomizer+strokeRandomizer-(strokeRandomizer2/2),height+bleed);
	stroke(((j/spreadB)+startColorB+2)%255,240,255);
	line(j+widthRandomizer+strokeRandomizer+(strokeRandomizer2/2),-bleed,j+widthRandomizer+strokeRandomizer+(strokeRandomizer2/2),height+bleed);
	}

	if(j+widthRandomizer-strokeRandomizer>0){
	strokeWeight(strokeRandomizer2);
	stroke(((j/spreadB)+startColorB-5)%255,255,240);
	line(j+widthRandomizer-strokeRandomizer,-bleed,j+widthRandomizer-strokeRandomizer,height+bleed);
	strokeWeight(1);
	stroke(((j/spreadB)+startColorB-8)%255,240,255);
	line(j+widthRandomizer-strokeRandomizer+(strokeRandomizer2/2),-bleed,j+widthRandomizer-strokeRandomizer+(strokeRandomizer2/2),height+bleed);
	stroke(((j/spreadB)+startColorB-2)%255,240,255);
	line(j+widthRandomizer-strokeRandomizer-(strokeRandomizer2/2),-bleed,j+widthRandomizer-strokeRandomizer-(strokeRandomizer2/2),height+bleed);
	}
	}
}

function drawCircles(){

	let startColorA = random(255);
	let spreadA = random(10,25);
	let startColorB = (startColorA+20)%255;
	let spreadB = random(25,50);


	for (let i=0; i< windowHeight+500; i++){
		let fillColor = ((i/spreadA)+startColorA)%255;
		noStroke();
		fill(fillColor,255,255);
		circle(height/2,height/2,height+500-i);
		}



	for (let j=0; j<windowHeight-40;j = j+100+density){
		let widthRandomizer = random(40);
		let strokeRandomizer = random(5,100);
	noFill();
	strokeWeight(strokeRandomizer);
	stroke(((j/spreadB)+startColorB)%255,255,255);
	circle(height/2,height/2,j+widthRandomizer);
	stroke(((j/spreadB)+startColorB+5)%255,255,240);
	strokeWeight(3);
	circle(height/2,height/2, j+widthRandomizer+strokeRandomizer);
	stroke(((j/spreadB)+startColorB-5)%255,255,240);
	circle(height/2,height/2, j+widthRandomizer-strokeRandomizer);
	}
}

function hypotenuse(x){
	return sqrt(Math.pow(x,2)+Math.pow(x,2));
}
