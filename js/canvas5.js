var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

/*
 canvas变换:
 1.平移
 2.旋转
 3.缩放
 */

ctx.fillStyle = "red";
ctx.fillRect(0,0,100,100);

/*
*  1.平移操作只会影响后面图形的位置,
* 但是不会影响平移之前的图形位置
*/
ctx.translate(50,50);//平移分别设置x,y方向的平移量
ctx.rotate(Math.PI/4);//旋转,设置对应的旋转角度,弧度
ctx.scale(0.5,0.5);//缩放,分别设置x,y方向的缩放比例,小于1代表缩小,大于1代表放大
ctx.fillStyle = "blue";
ctx.fillRect(0,0,100,100);
		
		
/*
*图形的移动
*/

// var centerX = 10,centerY = 10;
// var timer = setInterval(function(){
// 	//清除画布的操作,用来清除canvas标签上面的所有内容
// 	ctx.clearRect(0,0,myCanvas.width,myCanvas.height);

// 	ctx.beginPath();
// 	ctx.arc(centerX,centerY,10,0,Math.PI*2,false);
// 	ctx.closePath();

// 	ctx.fillStyle = "red";
// 	ctx.fill();

// 	centerX += 1;
// 	centerY += 1;
// },24);