const task3Element = document.getElementById('task-3');

function showAlert1(){
    alert("Hello there");
}

function showAlert2(name){
    alert(name);
}

showAlert1();
showAlert2('Sumaila');

task3Element.addEventListener('click',showAlert1);