const checkForm = {
    nomeTarefa: false,

}
document.getElementById('nomeTarefa').addEventListener('input', function (e){
    const nomeTarefa = e.target.value;
    console.log(checkForm);
    if (nomeTarefa.length >= 50 || nomeTarefa.length <= 0 ) {
        console.log('O nome da tarefa deve ter no máximo 50 caracteres');
        document.getElementById('nomeTarefa-error').style.display = "block";
        checkForm.nomeTarefa = false;
    } else {
        document.getElementById('nomeTarefa-error').style.display = "none";
        checkForm.nomeTarefa = true;
    }
    enableButton()
});

function enableButton() {
    const butcad = document.getElementById("butcad");
    if (checkForm.nomeTarefa){
        butcad.disabled = false;
    } else {
        butcad.disabled = true;
    }
}