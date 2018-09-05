window.onload = function() {

	var btns = document.getElementsByTagName('a');
	var tipsItem = document.getElementsByTagName('li');
	var container = document.getElementById('container');
	var ps = document.querySelectorAll('#container .item');
	
	
	for (var i = 0; i < btns.length; i ++) {
		
			
		
		//利用闭包存储循环中的i；在onclick事件回调函数中使用
		(function(index) {
			
			btns[i].onclick = function() {
				
				for (k = 0; k < btns.length; k++) {

				btns[k].className = '';
				
				btns[index].className = 'shadow';
				}
				for (j = 0; j < ps.length; j++) {
					
					ps[j].style.display = 'none';
					ps[index].style.display = 'block';
					
				}

			}
			

		})(i);

	}

}