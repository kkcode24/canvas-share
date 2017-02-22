/*
canvas元素绘制图像的时候有两种方法，分别是

        ctx.fill()//填充

        ctx.stroke()//绘制边框


style:在进行图形绘制前，要设置好绘图的样式

    ctx.fillStyle//填充的样式

    ctx.strokeStyle//边框样式
*/


var myCanvas = document.getElementById("myCanvas");

var ctx = myCanvas.getContext("2d");

ctx.fillStyle = "red";

ctx.fillRect(0,0,100,100);

// ctx.fillRect(x,y,width,height)  ctx.strokeRect(x,y,width,height)
// ctx.fillStyle = "$color"  ctx.strokeStyle = "$color"

//清除矩形区域 ctx.clearRect(x,y,width,height)
