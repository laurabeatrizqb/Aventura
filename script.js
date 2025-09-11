const avanca =document. querySelectorAll('.btn-proximo');
const reiniciar = document.getElementById('btn-reiniciar');

avanca.forEach(button={
button.addEventListener('click', function(){
const atual = document.querySelector('.ativo');
const proximoPasso= 'passo-'+this.getElementById('data-proximo');

atual.classList.remove('ativo');
const proximoElemento= document.getElementById(proximoPasso);

if(proximoElemento){
   proximoElemento.classList.add('ativo');
   }else{
         console.error(`Elemento com ID "${proximoPasso}" nao encontrado.`)
        }
        });
      });



      //Reiniciar o jogo ao clicar no botão de reinício
       if (reiniciarBtn) {
        reiniciarBtn.addEventlistenner(' click' ,()=> {
        const atual = document.querySelector('.ativo');
         atual.classList.remove('ativo');
         document.getElementById ('passo-0').classList.add('ativo');
         
        });
       }