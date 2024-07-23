let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (listaAmigos.includes(nomeAmigo)) {
        alert(`${nomeAmigo} ja foi inserido.`)
        return
    } else if (nomeAmigo == '') {
        alert('Você não inseriu nenhum amigo!');
        return
    } else {
        listaAmigos.push(nomeAmigo);
        let amigosIncluidos = document.getElementById('lista-amigos');
        amigosIncluidos.textContent = listaAmigos.join(', ');
    }
    document.getElementById('nome-amigo').value = '';
    
}

function sortear() {
    embaralhar(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');
    if (listaAmigos.length >= 3){
        for (let i = 0; i < listaAmigos.length; i++) {
        
            if ( i == listaAmigos.length - 1){
                sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[i + 1] + '<br>';
            }
            
    
        }
    } else {
        alert('Número de amigos insuficiente para realizar sorteio.');
    }
    
}

function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}