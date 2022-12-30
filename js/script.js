async function buscaCEP(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        consultaCEPjson = await consultaCEP.json();

        if(consultaCEPjson.erro){
            throw Error('CEP inexistente!');
        } 
        
        console.log(consultaCEPjson);
        
    } catch(erro) {
        console.log(erro)
    }   

}

buscaCEP('66033196')
