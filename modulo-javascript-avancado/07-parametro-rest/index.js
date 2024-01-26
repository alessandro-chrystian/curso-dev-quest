// function(a, b, ...args) {
//      // ...    
// }

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabens por ter chego ao módulo de JavaScript avançado,', 'João', 'Pedro', 'Raphael', 1, true)