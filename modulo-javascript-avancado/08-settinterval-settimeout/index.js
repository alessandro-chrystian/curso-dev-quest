// setTimeout(function(){
//     alert('Olá Mundo!')
// }, 3000);

// setTimeout(() => {
//     console.log('console depois do setTimeout')
// }, 4000);

// setInterval(() => {
    //     console.log('Executando a cada 2 segundos')
    // }, 2000);

// console.log('console depois do setTimeout')

const idDoIntervalo = setInterval(() => {
                        console.log('Executando a cada 2 segundos')
                    }, 2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout()