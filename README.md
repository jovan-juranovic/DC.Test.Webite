# Dynamic Credit - Web Application Developer assignment

I've hosted application on my local machine so it should be accessible via [this dynamic ip](http://95.180.30.150:8987/).

In order to start application in local environment first start .NET Web API project and after that angular SPA running gulp serve from the CLI. Just make sure that you've run npm install and bower install first and adjusted baseApiUrl constant in angular app's main controller.

Database backup file along with stored procedures sql scripts can be found in Database folder. Connection string to the db is using Windows authentication.

The most difficult part for me was writing stored procedures for test db because I wasn't sure I understood requirements and logic behind them and this is the reason why I must say that I am unsure about data accuracy displayed on the UI.

## Unfinished tasks and further improvements

Here is a list of assignments that I haven't finished in time and functionalities I would like to fix or improve:

- Tests – write more unit tests on both Back-End and Front-End.
- Database improvements – to add indexes based on results with 4M rows using SSMS execution plan and statistics.
- Extend database to 4M records and test performances.
- Search filters on Back-End - rethink implementation; current implementation is pretty coupled with lots of code smells.
- Search filters validation on client side. Add DateTime picker for date fields.
- Better implementation of graphs.
- Refactoring angular app's main controller and services.
- Overall UX and styling of application
- Print whole page

Of course, this and all other parts that I have not included in this list will be discussed during the interview.
