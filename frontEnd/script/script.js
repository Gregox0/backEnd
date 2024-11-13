var current = {
    eye: false,
    type: false
}
function toggleEye(){  
    let eyeIcon = document.getElementById('eyeIcon')
    let passInput = document.getElementById('passInput')
    if(!current.eye){
        eyeIcon.src = 'assets/images/eye-solid.svg'
        current.eye = true
        passInput.type = 'text'
    }else{
        eyeIcon.src = 'assets/images/eye-slash-solid.svg'
        current.eye = false
        passInput.type = 'password'
    }
}
function toggleType(){
    let h1 = document.getElementById('h1')
    let loginCadSideTitle = document.getElementById('loginCadSideTitle')
    let sideTitleP = document.getElementById('sideTitleP')
    let button = document.getElementById('button')
    let p = document.getElementById('p')
    if(!current.type){
        h1.innerText = 'Seja bem vindo'
        sideTitleP.innerText = 'Crie uma conta para poder usar nosso site'
        loginCadSideTitle.innerText = 'Cadastro'
        button.innerText = 'Cadastrar'
        p.innerHTML = 'Já tem uma conta? <span onclick="toggleType()">clique aqui.</span>' 
        current.type = true
    }else{
        h1.innerText = 'É muito bom te ter de volta'
        sideTitleP.innerText = 'Faça login para poder usar nosso site'
        loginCadSideTitle.innerText = 'Login'
        button.innerText = 'Logar'
        p.innerHTML = 'Ainda não tem uma conta? <span onclick="toggleType()">clique aqui.</span>' 
        current.type = false
    }
}
function verify(){
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passregex = /^[A-Za-z\d\-]{6,}$/
    let emailInput = document.getElementById('emailInput')
    let passInput = document.getElementById('passInput')
    let inputLine = document.querySelector('.inputLine')
    let inputLinePass = document.querySelector('.inputLinePass')
    if (!emailregex.test(emailInput.value)) {
        setTimeout(() => {
            inputLine.style.borderColor= 'transparent'
        },1000)
        inputLine.style.borderColor = 'red'
        return
    }
    if (!passregex.test(passInput.value)) {
        setTimeout(() => {
            inputLinePass.style.borderColor= 'transparent'
        },1000)
        inputLinePass.style.borderColor = 'red'
        return
    }
      emailInput.value = ''
      passInput.value = ''
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verify()
    }
})