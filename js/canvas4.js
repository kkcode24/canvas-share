var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
/*
 * canvas绘制文字
 */



// var fc = ctx.createLinearGradient(200,0,400,0);
// fc.addColorStop(0,"red");
// fc.addColorStop(.3,"yellow");
// fc.addColorStop(.6,"blue");



ctx.font = "50px STKaiTi";

//设置文字的阴影

//ctx.shadowOffsetX = 4; //设置阴影x方向的偏移
//ctx.shadowOffsetY = 4; //设置阴影y方向的偏移
//ctx.shadowColor = "gray"; //设置阴影的颜色
//ctx.shadowBlur = 5; //设置阴影的模糊程度

//ctx.fillStyle = fc;
ctx.fillText("诸葛亮",200,200,200);


// ctx.strokeStyle = fc;
// ctx.strokeText("诸葛亮",200,200,200);
