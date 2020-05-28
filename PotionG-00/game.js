var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var centerX;
var centerY;
var radius;

function main() {

	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

	centerX=canvas.width/2;
	centerY=canvas.height/2;

	radius=100;

	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	ctx.beginPath();
	ctx.fillStyle="#FFCBEA";
	ctx.arc(centerX,centerY,radius,radius,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();

}

main();
