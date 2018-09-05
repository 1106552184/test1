var map = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 
	10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18];
function $(id){
	return document.getElementById(id);
}

//初始化函数
function init(){
	restart();
	startBtn = $('startBtn')
	startBtn.value = '游戏进行中';
	startBtn.disabled = true;
	startBtn.style.color='#666';
	
	for(i = 0 ; i <= 35 ; i ++){
		//finishedArray[i] = false;
		$('img' + i).src = 'img0.gif';
	}
	
	finished = 0;//已完成数量清零
	oktoclick = true;//设置允许单击图片
	scramble();//进行图片位置混淆
	showImage();
}
function restart(){
	
	startBtn = $('startBtn')
	startBtn.value = '开始游戏';
	startBtn.disabled = false;
	startBtn.style.color='#000';
	
	for(i = 0 ; i <= 35 ; i ++){
		//finishedArray[i] = false;
		$('img' + i).src = 'img0.gif';
	}
	for(i = 0 ; i <= 6 ; i ++){
		var index = parseInt((36) * Math.random());
		$('img' + index).parentNode.parentNode.style.background= 'red';
	}
	
}
function scramble(){
	
	var index = 0;
	var temp = 0;
	
	for(i = 0 ; i <= 35 ; i++ ){
		
		var index = parseInt((36) * Math.random());
		
			temp = map[index];
		  map[index]  =  map[i];
			map[i] = temp;
	}
	
}
function showImage(){
		
		
		for(i = 0; i <= 35 ;i ++){
			
		if($('img' + i).parentNode.parentNode.style.background == 'red'){
			continue;
		}else{
			$('img' + i).src == 'img1.gif';
		}
		}
	
}
