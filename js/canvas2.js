

//图形绘制

//canvas矩形的绘制
var myCanvas = document.getElementById("myCanvas");

var ctx = myCanvas.getContext("2d");



// var grans = ctx.createLinearGradient(0,200,0,300);
// grans.addColorStop(0.2,"red");
// grans.addColorStop(0.5,"yellow");
// grans.addColorStop(0.8,"green");
		
/*区别
 strokeRect():绘制矩形外边框
 fillRect():绘制矩形内部区域
*/
		
		
//ctx.strokeStyle = grans;
//ctx.strokeRect(200,200,100,100);
	
// ctx.fillStyle = grans;
ctx.fillRect(200,200,100,100);