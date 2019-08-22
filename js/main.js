'use strict';

{

	const contents = document.getElementsByClassName('content');
	const selects = document.getElementsByClassName('level') ;

	
	for(let i=0;i<selects.length;i++){

		selects[i].addEventListener('click', function() {

			contents[0].classList.remove('fade1');
			contents[0].classList.add('fade2');
			function fadein2(){
				contents[1].classList.add('fade1');
				contents[1].style.visibility='visible';
				contents[0].style.display='none';
			}
			setTimeout(fadein2, 900);
			let n =  Number(selects[i].dataset.level);

			if(n){

				let num=n;
				let max = num * num;
				
				const frame = document.getElementById('frame');


				if(num!=3){
					let size = String(50*num) + 'px';
					frame.style.width = size;
					frame.style.height = size;
				}

				contents[1].style.height = String(250 + (num * 20)) + 'px';



				for(let i = 1; i <= num; i++){
				for(let j = 1; j <= num; j++){

						const panel = document.createElement('div');
						let n = (i-1) * num + j; 
						
						panel.classList.add('panel');
						panel.id = 'panel' + n;
						panel.dataset.map = String(i) + String(j);
						mapping(panel);



						if(n!=max){panel.textContent = n;}
						else{panel.style.backgroundColor = 'orange';}
						

						frame.appendChild(panel);
						
				}
				}
				

				function direction (move_panel) {
				
					let d = Number(move_panel.dataset.map)-Number(document.getElementById('panel' + String(max)).dataset.map);
				
					return d;
				}


				function reset(){
	
					for(let i=1; i<=max; i++){
				
						let element = document.getElementById( 'panel' + i ) ;//パネル走査
						element.classList.remove('point');//クラスリセット
						if(i<=(max-1)){//空白パネル以外処理
				
							let d = direction(element);
							let judge = Math.abs(d);
				
							if(judge==10 || judge==1){
								element.classList.add('point');
							}
							
							
						}
				
				
					}
				
				
				}
	
	
	
				reset();

				for(let i=1; i<=max; i++){
				
					let element = document.getElementById( 'panel' + i ) ;//パネル走査
					if(i<=(max-1)){//空白パネル以外処理
				
						element.addEventListener('click', function() {
							
								
								if(element.classList.contains('point')){

								let p_max = document.getElementById('panel' + String(max));
								let ex = element.dataset.map;
								element.dataset.map = p_max.dataset.map;
								p_max.dataset.map = ex;
				
								mapping(element);
								mapping(p_max);

								reset();
								}
							
						
						
						});
				
						
				
					}
				
				
				}


			}

		
		});
		
	}
	



	
	function mapping(panel){
	
		let m = Number(panel.dataset.map);
	
		let top = String((Math.floor(m/10)-1) * 50) + 'px';
		let left = String(((m%10)-1) * 50) + 'px';
	
		panel.style.top = top;
		panel.style.left = left;
	
	}





}