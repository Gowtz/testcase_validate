# A Web application to manage testcase
#### Reactjs for the frontend
#### Flask for the backend
#### Postgress for the database


## How to run this Project
1. download and install postgress database setup username and password.Create a database named `testcase`. 
    ```sql
    CREATE DATABASE testcase

     ```
2. Confiure you database in the code
   
    ```python
    #backend/flaskr/bd.py 
    host="DATABASE URL" # keep localhost
    user="USERNAME",
    password="PASSWORD",
    
    ```
3. Go to `./backend` folder and create a virtual enviroment for this project and activate
    ```bash
     cd backend
     python -m virtualenv

     # for Windows 
     . venv\scripts\activate

     #for linux or mac 
     source venv/bin/activate
    ```

4. Install the Library and run the project
```bash
#Install 
pip install -r requirements.txt

# Run The application 
flask --app flaskr run --debug # Keep the server running

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