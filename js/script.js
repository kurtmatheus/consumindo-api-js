const campoCEP = document.querySelector('#cep');
const elementosEndereco = document.querySelectorAll('[data-endereco]');
const divCep = document.querySelector('#cep_invalido');

campoCEP.addEventListener('keyup', (evento) => {
    evento.preventDefault();
    const entradaUsuarioCep = evento.target.value;
    if (entradaUsuarioCep.length == 8) {
        buscaCEP(entradaUsuarioCep);
    } else if(entradaUsuarioCep.length == 0) {
        elementosEndereco.forEach(element => {
            element.value = "";
            divCep.style.display = 'none';     
         });
    }
});

async function buscaCEP(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPjson = await consultaCEP.json();

        if(consultaCEPjson.erro) {
            divCep.style.display = 'inline-block';            
        } else { 
            elementosEndereco.forEach(element => {
               element.value = consultaCEPjson[element.id];
            });
        }

        
    } catch(erro) {
        console.log(erro)
    }   

}

