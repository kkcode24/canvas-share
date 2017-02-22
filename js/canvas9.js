
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

var video = document.getElementById("video");
/*
 requestAnimationFrame():任务的执行根据浏览器自身的频率执行

 它和setInterval()的区别是:
 (1)requestAnimationFrame()可以过滤隐藏的标签元素,同时可以监听当前的页面是否切换,
 如果切换,会自动暂停对应任务的执行,但是setInterval不可以

 (2)requestAnimationFrame()的执行根据浏览器自身绘制频率执行,但是setInterval()是
 人为规定时间,因此可能会出现丢帧现象

 cancelAnimationFrame()取消动画,但是有兼容问题,低版本支持的不好

*/
video.oncanplay = function(){
	video.play();
	function startDraw(){
		ctx.drawImage(video,0,0,500,500);
		window.requestAnimationFrame(startDraw);
	}
	startDraw();
}






