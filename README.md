# Calculator-Challenge

* Create a web app using any language which logs calculations as they happen and shares those calculations with everyone connected to the app.

* For example, user A and user B go to your app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4". This calculates to “12” and displays “3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

* Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest. The calculator only needs to implement basic arithmetic operations, although you can add other math functions if you would like to impress. But don't forget to meet the basic requirements of the exercise first!

* The app must be hosted and deployed to be publicly accessible to engineers at Sezzle so that we can grade the project.

#### Functionality

* This is a calculator app that will allow multiple users to input numerical values and use arithmetic operations: x / + -  to generate calculations. Users can type in any numerical value for 'input one' and any numerical value greater than 0 for 'input two'. Next they can select a basic arithmetic operation and click 'calculate' to generate their calculation. Calculations will be logged below the calculator and visible to other users. Unfortunately, I was unable to limit visible calculations to only the last 10. 

#### Start the application on your local server

I was unable to get app deployed on Heroku. You may type the following in your command line: "node server.js" and then go to the url "localhost:3000" in your internet browser.  

## Technology used
* Node.js
* Express NPM Package
* HTML 5
* CSS 3
* Bootstrap 4
* JavaScript

