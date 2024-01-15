const boletoPago = true

console.log('valor do boleto', boletoPago)

if (boletoPago){
    alert('O boleto está pago')
}else if(boletoPago === false){
    alert('O boleto não está pago!')
}