# polling-api
This back end project polling api is developed using nodejs in where user can make a call to different api and 
can be used where polling/voting type of situation is expected . In this api user can 


## Features
- Create a questions (you can add as many questions as you want)
- Add Options to the questions
- Delete the questions
- View questions along with its options
- Delete Options
- Add Votes to the options

## Important endpoints of the API
- show all the created questions : http://13.233.111.71:8005/ 
- Create your own questions: http://13.233.111.71:8005/questions/create
- Delete the questions: http://13.233.111.71:8005/questions/:id/delete
- Add Options to the questions: http://13.233.111.71:8005/questions/:id/options/create
- View questions along with its options: http://13.233.111.71:8005/questions/:id
- Add Votes to the options: http://13.233.111.71:8005/options/:id/add_vote
- Delete Options: http://13.233.111.71:8005/options/:id/delete

### Tech Stack used
- NodeJs 
- express
- mongodb
