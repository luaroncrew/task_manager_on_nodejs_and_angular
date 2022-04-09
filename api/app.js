const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');

// loading mongoose models
const { List, Task } = require('./db/models');

// load middleware
app.use(bodyParser.json());


/* ROUTE HANDLERS */


/* LIST ROUTES */


/*
* GET lists/
* purpose: get all lists
*  */
app.get('/lists/', (req, res) => {
   // we want to return the array of all the lists in the database
    List.find().then((lists) => {
        res.send(lists);
    })
});


/*
* POST lists/
* purpose: create a new list
*  */
app.post('/lists/', (req, res) =>{
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
});


/*
* DELETE lists/
* purpose: delete a list
*  */
app.delete('/lists/:id', (req, res) => {
    // we want to delete a list by his id
});



app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

