
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

ctx.translate(250,250);
ctx.beginPath();
ctx.arc(0,0,20,0,Math.PI*2,false);
ctx.closePath();
ctx.strokeStyle = "red";
ctx.stroke();
var starAngle = 0;

for(var i = 0;i < 12;i++){
	ctx.save();
	
	ctx.rotate(starAngle);
	starAngle += Math.PI/12;
	ctx.beginPath();
	ctx.moveTo(0,-100);
	ctx.quadraticCurveTo(-40,0,0,100);
	ctx.fillStyle = "green";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(0,-100);
	ctx.quadraticCurveTo(40,0,0,100);
	ctx.fillStyle = "green";
	ctx.fill();
	
	ctx.restore();
}

var starAngle = 0;
for(var i = 0;i < 12;i++){
	ctx.save();
	
	ctx.rotate(starAngle);
	starAngle += Math.PI/12;
	ctx.beginPath();
	ctx.moveTo(0,-100);
	ctx.quadraticCurveTo(-40,0,0,100);
	ctx.strokeStyle = "red";
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(0,-100);
	ctx.quadraticCurveTo(40,0,0,100);
	ctx.strokeStyle = "red";
	ctx.stroke();
	
	ctx.restore();
}





















