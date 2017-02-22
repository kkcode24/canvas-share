
//JS版
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

ctx.fillStyle = "lightgray";
ctx.fillRect(0,0,500,500);

ctx.globalCompositeOperation = "destination-out";

myCanvas.onmousedown = function(e){
	
	myCanvas.onmousemove = function(e){
		var even = e || event;

		var x = even.clientX-400;
		var y = even.clientY-50;

		ctx.beginPath();
		ctx.arc(x,y,20,0,Math.PI*2,false);
		ctx.closePath();
		ctx.fillStyle = "rgba(0,0,0,1)";
		ctx.fill();
		
		adjustPrefix();
	}
}

//定义函数 用来判断canvas标签上边对应图形的像素点
function adjustPrefix(){
	//获取canvas标签上面所有的像素点
	var  imagePoints = ctx.getImageData(0,0,myCanvas.width,myCanvas.height);
	var count = 0;//记录当前透明的像素点个数
	var datas = imagePoints.data;
	for(var i = 0;i < datas.length;i+=4){
		if(datas[i+3] == 0){
			count++;
		}
		if(2*count >= datas.length/4){
		//将canvas标签上面的图形转换成透明
			myCanvas.style.opacity = 0;
		}
	}
}

document.onmouseup = function(){
	myCanvas.onmousemove = null;
}



//JQ版

//	$(window).on("load", function() {
//		ctx.fillStyle = "lightgray";
//		ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
//		ctx.globalCompositeOperation = "destination-out";
//		$("#myCanvas").on("mousedown",function() {
//			$(document).on("mousemove", function(e) {
//				var centerX = e.pageX - $("#myCanvas").offset().left;
//				var centerY = e.pageY - $("#myCanvas").offset().top;
//				
//				ctx.beginPath();
//				ctx.arc(centerX, centerY, 20, 0, Math.PI*2, false);
//				ctx.closePath();
//				ctx.fillStyle = "red";
//				ctx.fill();
//				
//				adjustPrefix();
//				
//			});
//		})
//		//定义函数 用来判断canvas标签上边对应图形的像素点
//		function adjustPrefix(){
//			//获取canvas标签上面所有的像素点
//			var  imagePoints = ctx.getImageData(0,0,myCanvas.width,myCanvas.height);
//			var count = 0;//记录当前透明的像素点个数
//			var datas = imagePoints.data;
//			for(var i = 0;i < datas.length;i+=4){
//				if(datas[i+3] == 0){
//					count++;   
//				}
//				if(2*count >= datas.length/4){
//				//将canvas标签上面的图形转换成透明
//					myCanvas.style.opacity = 0;
//				}
//			}
//		}
		
		
		
		
		
//		$(document).on("mouseup", function() {
//			$(document).off("mousemove");
//		});
//	});












