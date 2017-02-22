
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

//创建图片的对象(img对象)
var img = new Image();
img.src = "img/2.jpg";

img.onload = function(){
	/*drawImage(image,
				sourceX,
				sourceY,
				sourceWidth,
				sourceHeight,
				destX,
				destY,
				destWidth,
				destHeight);
	 drawImage(img,x,y,width,height):将图片绘制到对应的canvas标签上面.
	 该方法的参数共分为三种
	 1.含有三个参数:参数1代表绘制的参考图片,参数2,3代表图片绘制的初始位置.
	 2.含有5个参数:参数1,2,3同上,参数4,5代表图片在canvas中绘制的区域范围.
	 3.含有9个参数:参数1,代表绘制参考图片,参数2,3,4,5代表从参考图片中截取的图片范围
	 参数6,7,8,9代表将截取的图片绘制在canvas中的时候对应的绘制范围.
	 */
	ctx.drawImage(img,0,0);
//	ctx.drawImage(img,0,0,500,600);
//	ctx.drawImage(img,200,100,100,100,20,20,200,200);
	
	//获取canvas标签上指定区域的像素点
	/*
	 getImageData():获取指定区域的图片的像素点,返回值是一个ImageData类型的对象.
	 
	 imagePoints.data返回一个一维数组
	 数组中存的值是R,G,B,A,R,G,B,A....
	 
	 putImageData():将修改后的像素点插入到canvas中对应的位置.共7个参数
	 参数1:修改之后的像素点
	 参数2,3:插入的初始位置坐标
	 参数4,5,6,7:对应需要插入的像素的范围
	 */
	var imagePoints = ctx.getImageData(0,0,500,500);
	var datas = imagePoints.data;

	for(var i = 0;i < datas.length;i+=4){

		var sum = datas[i]+datas[i+1]+datas[i+2];

		datas[i] = 255-datas[i];
		datas[i+1] = 255-datas[i+1];
		datas[i+2] = 255-datas[i+2];
	}

	ctx.putImageData(imagePoints,0,0,0,150,500,350);
	
	/*
	 toDataURL():将canvas标签上面的图像转换成对应的图片链接.
	 */
	
	var URL = myCanvas.toDataURL();
	console.log(URL);
	//window.location.href = URL;

}




