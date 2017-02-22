

//canvas 绘制线段
/*
1.开启轨迹路径
2.设置线段的起始点
3.设置线段的终点
4.设置线段的样式
5.开始绘制线段
*/


var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

//1.开启轨迹的绘制
ctx.beginPath();

//2.设置线段绘制的起始点
ctx.moveTo(20,20);

//3.设置线段绘制的结束点
ctx.lineTo(20,200);

//以上一条线段的终点作为下一条线段的起始点
ctx.lineTo(200,20);

//使整个轨迹的绘制形成一个封闭的轨迹
ctx.closePath();

//4:设置线段的样式(可选)
ctx.lineWidth = 6;//线条宽度
ctx.lineJoin = "round";

var grans = ctx.createLinearGradient(20,0,200,0);
grans.addColorStop(0,"red");
grans.addColorStop(0.5,"yellow");
grans.addColorStop(0.8,"blue");
ctx.strokeStyle = grans;

//5:让画笔按照上面设置开始绘制线段
ctx.stroke();


//设置线段其他样式

/*绘制渐变色（线性渐变）
 createLinearGradient():四个参数分别对应开始渐变的位置坐标
 和结束渐变的位置坐标,四个参数决定整个渐变的方向
 */
var grans = ctx.createLinearGradient(20,0,200,0);
grans.addColorStop(0,"red");
grans.addColorStop(0.5,"yellow");
grans.addColorStop(0.8,"blue");
/*
ctx.addColorStop(offset,color);
参数1:设定的颜色离渐变结束点的偏移量,值[0,1]
参数2:对应的是一个具体的颜色,是一个字符串类型
*/

//ctx.strokeStyle = grans;//线条颜色
//ctx.lineCap = "square";//设置线条两端的样式,默认是butt(边界)
//ctx.lineJoin = "miter";
//设置线条交点的样式默认是miter(尖角),除此之外还有bevel(斜角),round(圆角)
