// seleciona todas as metas
const checks = document.querySelectorAll(".check");


const barra = document.getElementById("barra");


const texto = document.getElementById("textoProgresso");






function atualizar(){


let total = checks.length;


let concluidas = 0;






checks.forEach((check,i)=>{


if(check.checked){


concluidas++;


}


});






let porcentagem = (concluidas/total)*100;






barra.style.width = porcentagem+"%";


texto.textContent = Math.round(porcentagem)+"%";






// salva no navegador


localStorage.setItem("progresso",JSON.stringify(


Array.from(checks).map(c=>c.checked)


));


}






// recupera progresso salvo


let dados = JSON.parse(localStorage.getItem("progresso"));


if(dados){


checks.forEach((check,i)=>{


check.checked = dados[i];


});


}






checks.forEach(check=>{


check.addEventListener("change",atualizar);


});






atualizar();

