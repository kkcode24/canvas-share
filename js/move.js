//获取canvas元素
var myCanvas = document.getElementById("myCanvas");
//获取canvas内置画笔
var ctx = myCanvas.getContext("2d");
//移动坐标的位置
ctx.translate(250, 250);

	function clock(){
		//开启轨迹路径
		ctx.beginPath();
		//开始设置圆形圆心坐标,半径,开始弧度,结束弧度,顺时针
		ctx.arc(0, 0, 200, 0, Math.PI * 2, false);
		//关闭轨迹路径
		ctx.closePath();
		//设置线宽
		ctx.lineWidth = 5;
		//设置画笔颜色
		ctx.strokeStyle = "green";
		//开始绘制圆形
		ctx.stroke();
		
		
		
		//绘制秒针
		var startAngel = 0;
		for(var i = 0; i < 60; i++) {
			ctx.save();
		
			ctx.rotate(startAngel);
			startAngel += Math.PI / 30;
		
			ctx.fillStyle = "black";
			ctx.fillRect(-2.5, -180, 5, 5);
		
			ctx.restore();
		}
		//绘制时针(矩形)
		var startAngel = 0;
		for(var i = 0; i < 12; i++) {
			ctx.save();
			ctx.rotate(startAngel);
			startAngel += Math.PI / 6;
		
			ctx.fillStyle = "red";
			ctx.fillRect(-5, -190, 10, 20);
		
			ctx.restore();
		}
		
			// draw numbers
		    ctx.font = '30px Arial';
		    ctx.fillStyle = '#000';
		    ctx.textAlign = 'center';
		    ctx.textBaseline = 'middle';
		    for (var n = 1; n <= 12; n++) {
		        var theta = (n - 3) * (Math.PI * 2) / 12;
		        var x = 200 * 0.75 * Math.cos(theta);
		        var y = 200 * 0.75 * Math.sin(theta);
		        ctx.fillText(n, x, y);
		    }
	}
	
		

	function pointers(){
		
		//获取时间
		var today = new Date();
		var hour = today.getHours();
		hour = hour > 12 ? hour - 12:hour;
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();
		//时针的角度由小时和分钟决定
		var hdeg = hour*30 + minutes/60*30;
		//分针的角度由分钟和秒数决定
		var mdeg = minutes*6 + seconds/60*6;
		//秒针的角度由秒决定
		var sdeg = seconds*6;
		
		//转化弧度
		hdeg = Math.PI/180*hdeg; 
		mdeg = Math.PI/180*mdeg;
		sdeg = Math.PI/180*sdeg;
		//画时针,
		drawPointers(hdeg,10,-80,"red");
		//画分针
		drawPointers(mdeg,6,-90,"cyan");
		//画秒针
		drawPointers(sdeg,4,-110,"black");
	}
	
	function drawPointers(angle,lineWidth,length,color){
		ctx.beginPath();
		ctx.save();
		
		ctx.rotate(angle);
		
		ctx.moveTo(0,0);
		ctx.lineTo(0,length);
		ctx.lineWidth = lineWidth;
		ctx.lineCap = "round";
		ctx.strokeStyle = color;
		ctx.stroke();
		
		ctx.restore();
	}
	
	clock();
	pointers();
	var timer = setInterval(function(){
		//清除画布
		ctx.clearRect(-250,-250,500,500);
		clock();
		pointers();
	},10);