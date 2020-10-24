const task3Element = document.getElementById('task-3');

function showAlert1(){
    alert("Hello there");
}

function showAlert2(name){
    alert(name);
}

function stringConcate(fname,lname,otherName){
    return fname +' '+ lname +' '+ otherName;
}

showAlert1();
showAlert2('Sumaila');
alert(stringConcate('Addo','Issah','Mensah'))
task3Element.addEventListener('click',showAlert1);