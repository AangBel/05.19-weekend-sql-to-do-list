$(document).ready(onReady);

//////Submit button function//////OK
function onReady() {

    $('#submit').on('click', createTask);
    // $('#tasksList').on('click', '.deleteButton', deleteTask);
    // $('#tasksList').on('click', '.completeButton', completeTask);
    //     console.log('submit button is working'); 
        getToDoList();
    };


//////create task function//////OK
function createTask(event){
    event.preventDefault();

    console.log('activateSubmit function is working');
    let inputObject = $('#taskInput').val();
    console.log(inputObject);
}

//// post to do list function/////OK
function postToDoList(){
        $.ajax({
            type: 'POST', 
            url: '/tasks',
            data: {inputObject}
        }).then(function(response){
            console.log('response from server', response);
            postToDoList();
        }).catch(function(error){
            console.log('error in POST', error);
        }
        )
    }


//do a getToDoList function//OK
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


//do a renderToDom function
//still needs the changes to the background and all 
function renderToDom(){
    $('#tasksList').empty();
    for (let i =0; i < response.length; i++){
    $('#tasksList').append(`
        <tr>
            <td>${response.task}</td>
            <td><button class="completeButton">Complete</button></td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>
    `)
}
}

//do a putToDoList function
function putToDoList(){
    $.ajax({
        type: 'PUT', 
        url: `/tasks/${taskId}`
        data: ` {{inputObject}}`
    })
    .then(function(response){
        getToDoList();
    })
    .catch(function(error){
    console.log('error in PUT', error);
    });
}

//do a deleteTask function
function deleteTask(){
    console.log('delete button is working');
    const taskId = $(this).closest('tr').data('id');
    console.log('delete button is working', taskId);
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}`
    }).then(function(response){
        console.log('delete task is working on client js');
        getToDoList();
    }).catch(function(error){
        console.log('error in delete', error);
    })
}

// function completeTask(){
//     console.log('complete button is working');
//     const taskId = $(this).closest('tr').data('id');
//     console.log('complete button is working', taskId);
//     $.ajax({
//         method: 'PUT',
//         url: `/tasks/${taskId}`
//     }).then(function(response){
//         console.log('complete task on client js needs a bit more care');
//         getToDoList();
//     }).catch(function(error){
//         console.log('error in complete', error);
//     })
// }