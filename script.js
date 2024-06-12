// Baseando-se nos conhecimentos obtidos com arrays, o objetivo é criar um sistema de login simplificado, nos seguintes moldes:
// Criação de uma página de login;
// Criação de uma página de cadastro;
// Criação de uma página logado;
// Utilizar arrays para armazenar dados;
// 1 array para username
// 1 array para password
// Os arrays devem estar vinculados por index
// Utilizaremos o window.location.href para transitar entre as págnas.
// A entrega deve ser via github (de preferência, utilizando o pages).
let loginsCadastrados = []
let senhasCadastradas = []

function entrar(){
    let login = document.getElementById('usarname').value;
    let senha = document.getElementById('password').value;
    if(loginsCadastrados.indexOf(login) != -1 && senhasCadastradas.indexOf(senha) != -1){
        window.open('about.html');
        // window.location.href ='about.html'
        
    }else{
        alert('Login e/ou senha incorretos.');
        document.getElementById('usarname').value = null;
        document.getElementById('password').value = null;
    }
    document.getElementById('usarname').value = null;
    document.getElementById('password').value = null;
}
function voltar(){
    // window.location.href = 'index.html';
    window.close()
}
// function cadastro(){
//     window.open('cadastro.html');
// }

function cadastrar(){
    let loginNovo = document.getElementById('usarname').value;
    let senhaNova = document.getElementById('password').value;

    if( loginsCadastrados.indexOf(loginNovo) == -1 && senhasCadastradas.indexOf(senhaNova) == -1 ){
        loginsCadastrados.push(loginNovo);
        senhasCadastradas.push(senhaNova);        
        alert('Cadastro concluído')
    }
    document.getElementById('usarname').value = null;
    document.getElementById('password').value = null;
}