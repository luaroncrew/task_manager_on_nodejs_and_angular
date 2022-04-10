# task_manager_on_nodejs_and_angular
this is just development description


# lesson 2 basic ui creation

as I use windows while coding this project:

* installing angular + node.js 
  I used this guide
  https://ccbill.com/kb/install-angular-on-windows
  
* creating first project structure
  `mkdir api`
  `ng new frontend --routing=true --style=scss`
 
* then installing BULMA: opensource css framework
  `npm install bulma --save` (inside frontend directory)
  
## (commit "customizing files")
* customising styles in frontend/src/main-styles.scss

* looking at beatiful and working app
  `ng serve`
  
* clear the test contents of main page, let's delete all the code from src/app/app.component.html
  except for `<router-outlet></router-outlet>`
  
* creating first component
  in new terminal: `ng generate component pages/TaskView` (inside frontend directory)

## commit (main page contents)
* setting routing in app-routing.module.ts 

* modify contents in task-view.component.html
 
* creating styles for modified contents in task-view.component.scss


# Lesson 3 basic api

## first steps 
* going to api/ to then do `npm init` to init a package manager here

* install Express js by `npm install express --save`

* create a file app.js

* changes in appjs from commit "api first setup"

* installing nodemon globally `npm install -g nodemon`

* start server by `nodemon app.js`

* testing application using Postman

## writing placeholders for future functions (commit placeholders)

## db implementation (mongoose connection commit)
* need to install mongodb client from https://www.mongodb.com/try/download/community
  otherwise connections will be rejected

* installing Mongoose `npm install mongoose --save`

* connection file modifications mongoose.js

* creating moodels and exporting them

## manipulating objects in view funcions (all in app.js) (commit db manipulation from views)

* we need to use a middleware for it so `npm install body-parser --save`


# lesson 4 connecting frontend

## first service

* creating a new angular service `ng generate service Task` (from frontend directory)
  this will be a service responsible for modifying our task data

* modify this service's file (src/app/task.service.ts)

* creating another service `ng generate service WebRequest`