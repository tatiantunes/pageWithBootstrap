/**
 * Acessando o DOM
 * Javascript Linguagem Case Sensitive
 *  
 *      tag = getElementByTag()
 *      id = getElementById()
 *      Nome = getElementsByName()
 *      Classes = getElementsByClassName()
 *      Seletor = querySelector()
 */
 let nome = window.document.getElementById('nome')
 let email = document.querySelector('#email')
 let opcao = document.querySelector('#opcoes')

 let nomeOK = false
 let emailOK = false
 let opcoesOK = false

 nome.style.width = '100%'
 email.style.width = '100%'

 function validaNome()
 {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <3){
        /*alert('nome invalido')*/
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'


    }else{
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green'
        nomeOK = true
    }

 }


 function validaEmail()
 {
    let txtEmail = document.querySelector('#txtEmail')   
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
    {
        txtEmail.innerHTML = "Email invalido"
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = "Email valido"
        txtEmail.style.color = 'green'
        emailOK = true

    }

 }

function validaOpcoes(){
    let x = document.querySelector('#opcoes')
    if (x.value.indexOf('Insira sua opção de intercambio') == -1) {
       opcoesOK = false
    }else{
        opcoesOK = true
     
    }

}


 function enviar()
 {  
    
     if(nomeOK == true && emailOK == true )
     {
        alert('Formulario enviado com sucesso')
     }else{
         alert('Preencha o formulario corretamente')
     }
 }

 
    
 