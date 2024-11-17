document.addEventListener('DOMContentLoaded',()=>{
	const flappy = document.querySelector('.flappy');
	const ground = document.querySelector('.ground');
	const game = document.querySelector('.game');
	
	let flappyLeft = 250;
	let flappyBottom = 350;
	let gravity = 2;
	let isGameOver = false;
	
	function startGame(){
		flappyBottom = flappyBottom - gravity;
		flappy.style.left=flappyLeft+'px';
		flappy.style.bottom=flappyBottom+'px';
	}
	let time = setInterval(startGame,10);
	function jump(){
		if(flappyBottom < 480){
			flappyBottom = flappyBottom + 50;
		}
		flappy.style.bottom = flappyBottom+"px";
	}
	document.addEventListener('keyup',jump);
	
	function randomBlock(){
		let blockLeft = 500;
		let blockBottom = Math.random()*60;
		let block = document.createElement('div');
		if(isGameOver==false){
		block.classList.add('block');
		}
		game.appendChild(block);
		block.style.left = blockLeft+'px';
		block.style.bottom = blockBottom + 'px';
		
		function moveBlock(){
			blockLeft = blockLeft - 2;
			block.style.left=blockLeft+"px";
			if(blockLeft == 0){
				clearInterval(timeBlock);
				game.removeChild(block);
				
			}
			if(flappyBottom==0 || blockLeft>250 && blockLeft<310 && flappyLeft==250 && flappyBottom < blockBottom + 190){
				gameOver()
				clearInterval(timeBlock);
			}
		}
		let timeBlock = setInterval(moveBlock,12);
	}
	 if(isGameOver==false){
		 setInterval(randomBlock,2000)
	}
	function gameOver(){
		isGameOver = true;
		clearInterval(time);
		document.removeEventListener('keyup',jump);
	}
});