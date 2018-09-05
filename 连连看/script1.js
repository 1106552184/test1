var map = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9
	,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18]
var oktoclick = false;//是否允许单击图片
var click1,click2; //单击过的两张图片数组记录 click1为第一张 click2为第二张
var clickCount = 0;//单击计数
var finished = 0;//已完成数量
var finishedArray = [];//记录图片的状态（是否已完成 false未完成 true完成）

function $(id){
	return document.getElementById(id);
}

//初始化函数
function init(){
	
	startBtn = $('startBtn')
	startBtn.value = '游戏进行中';
	startBtn.disabled = true;
	startBtn.style.color='#666';
	
	for(i = 0 ; i <= 35 ; i ++){
		finishedArray[i] = false;
		$('img' + i).src = 'img0.gif';
	}
	
	finished = 0;//已完成数量清零
	oktoclick = true;//设置允许单击图片
	scramble();//进行图片位置混淆
	
}
function restart(){
	
	startBtn = $('startBtn')
	startBtn.value = '开始游戏';
	startBtn.disabled = false;
	startBtn.style.color='#000';
	
	for(i = 0 ; i <= 35 ; i ++){
		finishedArray[i] = false;
		$('img' + i).src = 'img0.gif';
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
function showImage(imgNum){
	
	if(imgNum == click1)
	return;
	//判断是否点击已完成的图片
	if (finishedArray[imgNum])
	return;
	//如果允许点击(最多同时打开两幅图片)
	if (oktoclick) {

		oktoclick = false;//设置为不允许单击显示图片
	
		$('img' + imgNum).src = 'img' + map[imgNum] + '.gif';
		
		
		if(clickCount == 0){
			click1 = imgNum;
			clickCount ++;
			oktoclick = true;
			
		}else{
			clickCount = 0
			click2 = imgNum;
			oktoclick = false;
			setTimeout(check,500);
		}
		
		
	}
}
function check(){
	

	if(map[click1] == map[click2]){
		
		//设置已完成图片的状态
		finishedArray[click1] = true;
		finishedArray[click2] = true;

		finished ++; //完成数量加1	
		oktoclick = true;
		
	}else{
		
		$('img' + click1).src = 'img0.gif';
		$('img' + click2).src = 'img0.gif';
		oktoclick = true;
	}
	
	if (finished == 18){
		alert('恭喜，你赢了');
		startBtn = $('startBtn')
		startBtn.value = '再玩一局';
		startBtn.style.color='#000';
		startBtn.disabled = false;
	}
	
	
}
