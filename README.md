# task_manager_on_nodejs_and_angular
this is just development description


# lesson 2

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
