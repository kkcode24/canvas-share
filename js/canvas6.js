var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

/*
 绘制贝塞尔曲线
 
 ctx.quadraticCurveTo():绘制二次贝塞尔曲线,拥有四个参数
 参数1,2代表曲线的起点和终点之间点的坐标,参数3,4代表终点坐标

 bezierCurveTo():绘制三次贝塞尔曲线,拥有六个参数
 参数1,2,3,4代表曲线起点和终点之间的两个点坐标,参数5,6代表终点坐标

*/

ctx.beginPath();
ctx.moveTo(20,200);

//2次贝塞尔曲线
ctx.quadraticCurveTo(60,20,200,200);
//3次贝塞尔曲线
// ctx.bezierCurveTo(50,100,80,300,200,200);
// ctx.strokeStyle = "blue";

ctx.lineWidth = 3;
ctx.closePath();
ctx.stroke();