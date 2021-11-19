//p1 基础的读入读出
function image2two(_data) {
	var h=_data.height;
	var w=_data.width;
	var arr=[];
	for(var i=0;i<h;i++){
		arr[i]=new Array();
		for(var j=0;j<w;j++)
			arr[i][j] = new Array(4);
	}

	for(var i=0;i<h;i++)
		for(var j=0;j<w;j++)
			for(var k=0;k<4;k++){
				arr[i][j][k]=_data.data[(i*w+j)*4+k];
			}
			// console.log(arr);
	return arr;
}

function image2one(_data) {
	var h = _data.length;
	var w = _data[0].length;
	//把三維矩陣平坦化
	var arr=_data.flat(2);
	arr=new Uint8ClampedArray(arr);
	// console.log(arr8,w,h);

	var data=new ImageData(arr,w,h);
	return data;
}




function imread(image) {

	let w = image.width;
	let h = image.height;
	var canvas = document.createElement('canvas');

	// Size the canvas to the element
	canvas.width = w;
	canvas.height = h;

	// Draw image onto the canvas
	var ctx = canvas.getContext('2d');
	ctx.drawImage(image, 0, 0);

	// Finally, get the image data
	// ('data' is an array of RGBA pixel values for each pixel)
	var data = ctx.getImageData(0, 0, w, h);


	console.log(data);
	//這樣data就是三維數組了
	data = image2two(data);
	// console.log("data3",data);
	return data;
}
function imshow(canvas_id, imgData) {
	var c = document.getElementById(canvas_id);
	var ctx = c.getContext("2d");
	ctx.putImageData(image2one(imgData), 0, 0);
}

//p2 一些基本的函数
function xy2index(imgData,x,y) {
	return (x * imgData.width + y) * 4;
	
}


function ChangeColor(imgData) {
	var h = imgData.length;
	var w = imgData[0].length;

	for(var i=0;i<h;i++)
		for(var j=0;j<w;j++)
			imgData[i][j][0]=255-imgData[i][j][0];
	return imgData;
}




// function mosaic(imgData, mosaic_size) {
// 	var i=0;
// 	var w=imgData.width;
// 	while (i<imgData.data.length){


// 		if(i%w+mosaic_size>w)
// 			i=parseInt(i/w)
// 	}

// }