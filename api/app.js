const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');

// loading mongoose models
const { List, Task } = require('./db/models');
const {response} = require("express");

// load middleware
app.use(bodyParser.json());

// allow CORS

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* ROUTE HANDLERS */


/* LIST ROUTES */

/*
* GET lists/
* purpose: get all lists
*  */
app.get('/lists', (req, res) => {
   // we want to return the array of all the lists in the database
    List.find().then((lists) => {
        res.send(lists);
    });
});


/*
* POST lists/
* purpose: create a new list
*  */
app.post('/lists', (req, res) =>{
    // we want to create a new list and return a new list document back to the user (which includes the id)
    // the list information will be passed via JSON request body
    let title = req.body.title;
    let new_list = new List({
        title
    });
    new_list.save().then((listDoc) =>{
        // the full list document is returned (including id)
        res.send(listDoc);
    });
});


/*
* PATCH lists/
* purpose: update a list
*  */
app.patch('/lists/:id', (req, res) =>{
    // we want to update the specified
    // list (list document with id in the url) with the new values specified in JSON body
    let list_id = req.params.id
    List.findOneAndUpdate({ _id: list_id }, {
        $set: req.body }).then(() => {
            res.sendStatus(200)
    });
});


/*
* DELETE lists/
* purpose: delete a list
*  */
app.delete('/lists/:id', (req, res) => {
    // we want to delete a list by his id
    let list_id = req.params.id;
    List.findOneAndDelete({ _id: list_id},{
        $set: req.body }).then((deletedListDoc) => {
            res.send(deletedListDoc)
        });
});


/* TASK ROUTES */

/*
* GET lists/:listId/tasks
* purpose: get all the tasks from a specific list
*  */
app.get('/lists/:listId/tasks', (req, res) => {
    // we want to return all tasks that belong to a specific list
    let listId = req.params.listId
    Task.find({
        _listId: listId
    }).then((tasks) => {
        res.send(tasks)
    });
})


/*
* POST lists/:listId/tasks
* purpose: get all the tasks from a specific list
*  */
app.post('/lists/:listId/tasks', (req, res) => {
    // we want to create a new task associated to a specific list
    let listId = req.params.listId;
    let title = req.body.title;
    let newTask = new Task({
        title: title,
        _listId: listId
    });
    newTask.save().then((taskDoc) => {
        res.send(taskDoc)
    });
})


/*
* PATCH lists/:listId/tasks/:taskId
* purpose: edit a specific task of a specific list
*  */
app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
    let taskId = req.params.taskId;
    Task.findOneAndUpdate({
        _id: taskId,
        },
        { $set: req.body}).then(() =>{
        res.sendStatus(200)
        });
})


/*
* DELETE lists/:listId/tasks/:taskId
* purpose: delete a specific task
*  */
app.delete('/lists/:listId/tasks/:taskId', (req, res) =>{
    let taskId = req.params.taskId;
    Task.findOneAndDelete({
        _id: taskId
    }, {
        $set: req.body
    }).then((deletedTaskDoc) =>{
        res.send(deletedTaskDoc)
    });
});


/*
* GET lists/:listId/tasks/:taskId
* purpose: get a specified task document by id
*  */
app.get('/lists/:listId/tasks/:taskId', (req, res) => {
    let taskId = req.params.taskId;
    Task.findOne({
        _id: taskId
    }).then((taskDoc) => {
        res.send(taskDoc)
    });
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

