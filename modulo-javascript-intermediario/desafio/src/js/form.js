const form = document.querySelector(".preenchimento-form")
const nomeForm = document.getElementById("nome")
const emailForm = document.getElementById("email")
const telForm = document.getElementById("telefone")
const msgForm = document.getElementById("mensagem")
let txtCampoObrigatorio = document.getElementById("p-obrigatorio")
let mensagemDeErro = document.querySelectorAll("span")

console.log(mensagemDeErro)

form.addEventListener("submit", function(event){
    event.preventDefault()
    validadorDoForm()

    function validadorDoForm() {
        if (nomeForm.value === "") {
            nomeForm.classList.add("erro-formulario")
            nomeForm.classList.remove("acerto-formulario")
            mensagemDeErro[0].classList.add("msg-erro-nome")
        } else {
            nomeForm.classList.add("acerto-formulario")
            mensagemDeErro[0].classList.remove("msg-erro-nome")
            console.log('Nome: ' + nomeForm.value)
        }

        if (emailForm.value === "") {
            emailForm.classList.add("erro-formulario")
            emailForm.classList.remove("acerto-formulario")
            mensagemDeErro[1].classList.add("msg-erro-email")
        } else {
            emailForm.classList.add("acerto-formulario")
            mensagemDeErro[1].classList.remove("msg-erro-email")
            console.log("Email: " + emailForm.value)
        }

        if (telForm.value === "") {
            telForm.classList.add("erro-formulario")
            telForm.classList.remove("acerto-formulario")
            mensagemDeErro[2].classList.add("msg-erro-tel")
        } else {
            telForm.classList.add("acerto-formulario")
            mensagemDeErro[2].classList.remove("msg-erro-tel")
            console.log('Telefone: ' + telForm.value)
        }

        if (msgForm.value === "") {
            msgForm.classList.add("erro-formulario")
            msgForm.classList.remove("acerto-formulario")
            mensagemDeErro[3].classList.add("msg-erro-mensagem")
            txtCampoObrigatorio.classList.add("margem-no-erro")
        } else {
            msgForm.classList.add("acerto-formulario")
            mensagemDeErro[3].classList.remove("msg-erro-mensagem")
            txtCampoObrigatorio.classList.remove("margem-no-erro")
            console.log('Mensagem: ' + msgForm.value)
        }
    }
})