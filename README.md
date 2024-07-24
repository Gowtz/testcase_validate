# A Web application to manage testcase
#### Reactjs for the frontend
#### Flask for the backend
#### Postgress for the database


## How to run this Project
1. download and install postgress database or create cloud instance.Create a database named `testcase`
 ```sql
 CREATE DATABASE testcase
 ```
2. Go to `./backend` folder and create a virtual enviroment for this project and activate
```bash
cd backend
python -m virtualenv

# for Windows 
. venv\scripts\activate

#for linux or mac 
source venv/bin/activate
```
3. if the data base created in local skip this step. Else get the database URL and copy to 
```
backend/flaskr/bd.py on line number 8
host="Your DATABASE URL"
``` 
4. Install the Library and run the project
```bash
#Install 
pip install -r requirements.txt

# Run The application 
flask --app flaskr run --debug

```
### Backend over Done
### Frontend
1. Goto `./testcase-management` folder and install dependencies
```bash
cd tescase-management
npm i
```
2. Run the Project
```bash
npm run dev
```

### Initaly the data will be not empty click on the add sample data button and refresh the website