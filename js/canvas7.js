

var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

ctx.beginPath();
ctx.arc(100,100,50,0,Math.PI*2,false);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

/*
 ctx.globalCompositeOperation的值:

 source-in:绘制新图中和原图的重叠区域
 source-out:绘制新图中和原图的未重叠区域
 destination-in:绘制原图中和新图的重叠区域
 destination-out:绘制原图中和新图的未重叠区域
 destination-over:在原有图形下绘制新图形
 destination-atop:绘制原图中和新图的重叠区域以及新图中未重叠区域
 lighter:绘制新图和原图,但是重叠部分做加色处理
 copy:只绘制新图内容
 
 */


ctx.globalCompositeOperation = "destination-over";


ctx.beginPath();
ctx.arc(150,100,50,0,Math.PI*2,false);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();
