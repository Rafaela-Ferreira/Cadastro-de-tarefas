const showTarefas = (Tarefas) => {
 console.log('cheguei no show Tarefas');

  console.log(Tarefas);

  console.log(Tarefas.length);
   for(let i = 0; i < Tarefas.length; i++){
      console.log(Tarefas[i].nomeTarefas);

    let tagDivCard = document.createElement('div'); // criar uma div
    tagDivCard.setAttribute('class', ' mx-auto');
    tagDivCard.setAttribute('style' ,'width: 400px; margin-bottom:20px; margin-top:20px;');

    let tagH1 = document.createElement('h1');
    tagH1.setAttribute('class', 'card-title text-center');
    let textNode = document.createTextNode(Tarefas[i].nomeTarefa);
    tagH1.appendChild(textNode);
    tagDivCardBody.appendChild(tagH1);

    let tagP = document.createElement('p');
    tagP.setAttribute('class', 'card-text text-justify');
    textNode = document.createTextNode(Tarefas[i].dataConclusao);
    tagP.appendChild(textNode);
    tagDivCard.appendChild(tagP);

    div = document.getElementById('cadastros');
    div.appendChild(tagDivCard);
   }
  
}

const fetchTarefas = () => {
    console.log("Cheguei na script para carregar as tarefas");
    //carregar as tarefas do banco de dados
    //Entrega da api http://localhost:8000/Get.php

    fetch('http://localhost:8000/Get.php')
    .then((Response) => {
        if (Response.status >= 200 && Response.status < 300){
            return Response.json()
        }
        throw new Error(Response.statusText);
    })
    .then((Tarefas) => {
        console.log (Tarefas)
        showTarefas(Tarefas);

    })
    .catch((error) => {
        console.log(error);
    });
}