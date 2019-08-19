'use strict';

{

	const num = 3;

	const frame = document.getElementById('frame');

	for(let i = 1; i <= num; i++){
	for(let j = 1; j <= num; j++){

			const panel = document.createElement('div');
			let n = (i-1) * 3 + j; 
			
			panel.classList.add('panel');
			panel.id = 'panel' + n;
			panel.dataset.map = String(i) + String(j);
			mapping(panel);



			if(n!=9){panel.textContent = n;}
			

			frame.appendChild(panel);

	}
	}





	function direction (move_panel) {
	
		let d = Number(move_panel.dataset.map)-Number(document.getElementById('panel9').dataset.map);
	
		return d;
	}
	
	
	
	function mapping(panel){
	
		let m = Number(panel.dataset.map);
	
		let top = String((Math.floor(m/10)-1) * 50) + 'px';
		let left = String(((m%10)-1) * 50) + 'px';
	
		panel.style.top = top;
		panel.style.left = left;
	
	}
	
	
	function reset(){
	
		for(let i=1; i<=9; i++){
	
			let element = document.getElementById( 'panel' + i ) ;//パネル走査
			element.classList.remove('point');//クラスリセット
			if(i<=8){//空白パネル以外処理
	
				let d = direction(element);
				let judge = Math.abs(d);
	
				if(judge==10 || judge==1){
					element.classList.add('point');
				}
				
				
			}
	
	
		}
	
	
	}
	
	
	
	reset();
	
	for(let i=1; i<=9; i++){
	
		let element = document.getElementById( 'panel' + i ) ;//パネル走査
		if(i<=8){//空白パネル以外処理
	
			element.addEventListener('click', function() {
				
					
					if(element.classList.contains('point')){

					let p9 = document.getElementById('panel9');
					let ex = element.dataset.map;
					element.dataset.map = p9.dataset.map;
					p9.dataset.map = ex;
	
					mapping(element);
					mapping(p9);

					reset();
					}
				
			
			
			});
	
			
	
		}
	
	
	}
	

			






}