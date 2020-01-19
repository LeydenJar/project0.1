


document.addEventListener('DOMContentLoaded', ()=>{

	var botao_mais = document.getElementById('ler_mais');
	var botao_menos = document.getElementById('ler_menos');
	var texto_mais = document.getElementById('texto_mais');
	var botoes_play = document.querySelectorAll('.play');
	var botoes_pause = document.querySelectorAll('.pause');

	
	if(botao_mais){
		botao_mais.onclick = ()=>{
			texto_mais.classList.remove('d-none');
			botao_menos.classList.remove('d-none');
			botao_mais.classList.add('d-none');
		}

		botao_menos.onclick = ()=>{
			texto_mais.classList.add('d-none');
			botao_menos.classList.add('d-none');
			botao_mais.classList.remove('d-none');
		}
	
	
	}
	
	if(botoes_play){
		botoes_play.forEach((btn)=>{
			btn.onclick = (e)=>{
				e.stopPropagation();
				brothers = btn.parentElement.childNodes;
				uncles = btn.parentElement.parentElement.childNodes;
				btn.classList.add('d-none');
				for (var i=0; i<brothers.length; i++){
					if (brothers[i].classList){
						if (brothers[i].classList.contains('pause')){
							brothers[i].classList.remove('d-none');
						}
					}
				}
	
				for(var i=0; i<uncles.length; i++){
					if (uncles[i].classList){
						if (uncles[i].classList.contains('audio')){
							uncles[i].play();
						}
					}
				}
			}
		}
		);
	
		botoes_pause.forEach((btn)=>{
			btn.onclick = (e)=>{
				e.stopPropagation();
				brothers = btn.parentElement.childNodes;
				uncles = btn.parentElement.parentElement.childNodes;
				btn.classList.add('d-none');
				for (var i=0; i<brothers.length; i++){
					if (brothers[i].classList){
				
						if (brothers[i].classList.contains('play')){
						
							brothers[i].classList.remove('d-none');
						}
					
					}
				}
				for(var i=0; i<uncles.length; i++){
					if (uncles[i].classList){
						if (uncles[i].classList.contains('audio')){
							console.log(uncles[i]);
							uncles[i].pause();
						}
					}
				}
			
			}
		}
		);

	}

	

});
