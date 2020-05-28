var radius;
var radiusIncr;

function draw() {
	var centerX=canvas.width/2;
	var centerY=canvas.height/2;

	setFillStyle("#000000");
	fillRect(0,0,canvas.width,canvas.height);

	setFillStyle("#FFCBEA");
	fillCircle(centerX,centerY,radius);

	radius+=radiusIncr;

	if(radius<0) { radius=0; radiusIncr=Math.abs(radiusIncr); }
	if(radius>100) { radius=100; radiusIncr=-Math.abs(radiusIncr); }
}

function main() {

	radius=0;
	radiusIncr=4;

	setInterval(draw,1000/60);
}

main();
