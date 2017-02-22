


//canvas圆弧的绘制
var myCanvas = document.getElementById("myCanvas");

var ctx = myCanvas.getContext("2d");



ctx.beginPath();

/*var cles = ctx.createRadialGradient(250,250,50,250,50,200);
cles.addColorStop(0,"red");
cles.addColorStop(.5,"yellow");
cles.addColorStop(1,"blue");
*/

//角度按照顺时针false的方向计算的
ctx.arc(250,250,200,0,Math.PI,false);

//ctx.lineTo(250,250);
ctx.closePath();
ctx.lineWidth = 2;
//ctx.fillStyle = cles;

ctx.stroke();