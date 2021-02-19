function calcular(tipo, valor){

    if(tipo === 'acao'){

        if(valor === 'c'){
            //limpar visor
            document.getElementById('result').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('result').value += valor
        }

        if(valor === '='){
           var valor_campo = eval(document.getElementById('result').value)

           document.getElementById('result').value = valor_campo;
        }

    }else if(tipo === 'valor'){
        document.getElementById('result').value += valor
    }

}