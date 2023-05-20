$(document).ready(onReady);

const e = require('express');



function onReady() {
    $('#submit').on('click',activateSubmit);
       e.preventDefault();
        console.log('submit button is working');
        activateSubmit();
    };


let inputObject = {
    task: $('#taskInput').val(),

}

function activateSubmit(){
    console.log('activateSubmit function is working');

    $.ajax({
        type: 'POST', 
        url: '/tasksRouter',
        data: {
        inputObject:$('#taskInput').val()
        }
    }).then(function(response){
        getToDoList();
    }).catch()
};

//do a getToDoList function 

function getToDoList(){
    $('#tasksList').empty();
    $.ajax({
        type: 'GET', 
        url: '/tasksRouter'
    }).then(function(response){
        console.log('Get tasklist on client js needs a bit more care');
        for (let i =0; i < response.length; i++){
            //append to DOM 
        }
    }).catch(function(error){
        console.log('error in GET', error);
      });
    } 
