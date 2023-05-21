$(document).ready(onReady);

//////Submit button function//////
function onReady() {

    $('#submit').on('click', createTask);
    // $('#tasksList').on('click', '.deleteButton', deleteTask);
    // $('#tasksList').on('click', '.completeButton', completeTask);
    //     console.log('submit button is working'); 
        getToDoList();
    };


//////create task function//////
function createTask(event){
    event.preventDefault();

    console.log('activateSubmit function is working');
    const inputObject = $('#taskInput').val();
    console.log(inputObject);


    function postToDoList(){
        $.ajax({
            type: 'POST', 
            url: '/tasksRouter',
            data: {
            inputObject: inputObject
            }
        }).then(function(response){
            console.log('Post tasklist on client js needs a bit more care');
            postToDoList();
        })
    }




//do a getToDoList function 

function getToDoList(){
    $('#tasksList').empty();
    $.ajax({
        type: 'GET', 
        //tasks or tasksRouter????
        url: '/tasks'
    }).then(function(response){
        renderToDom(response);
    }).catch(function(error){ 
    console.log('error in GET', error);
    });

    
}
function renderToDom(){
    $('#tasksList').append(`
        <tr>
            <td>${response.task}</td>
            <td><button class="completeButton">Complete</button></td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>
    `)
}

function deleteTask(){
    console.log('delete button is working');
    const taskId = $(this).closest('tr').data('id');
    console.log('delete button is working', taskId);
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}`
    }).then(function(response){
        console.log('delete task on client js needs a bit more care');
        getToDoList();
    }).catch(function(error){
        console.log('error in delete', error);
    })
}

function completeTask(){
    console.log('complete button is working');
    const taskId = $(this).closest('tr').data('id');
    console.log('complete button is working', taskId);
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`
    }).then(function(response){
        console.log('complete task on client js needs a bit more care');
        getToDoList();
    }).catch(function(error){
        console.log('error in complete', error);
    })
}
