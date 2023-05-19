$(document).ready(onReady);

function onReady() {
    $('#submit').on('click',activateSubmit);
    event.preventDefault();
}
let inputObject = {
    task: $('#taskInput').val(),
}

function activateSubmit(){
    console.log('activateSubmit function is working');

    $.ajax({
        type: 'POST', 
        url: '/tasksRouter',
        data: {
            task
        }
    })
};