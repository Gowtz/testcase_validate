import psycopg2
from psycopg2 import OperationalError
from flask import g
SQL_FILE="schema.sql"
def get_db():
    if "db" not in g:
        conn = psycopg2.connect(database="testcase",
                            host="localhost",
                            user="gowtz",
                            password="gowtz",
                            port="5432")
        g.db =  conn
        return g.db
    return g.db
    
def close_db():
    db = g.pop('db',None)
    if db is not None:
        db.close()
        
        
def gettestcase():
    cursor = get_db().cursor()
    cursor.execute("SELECT * from testcase")
    tests = cursor.fetchall()
    testjson = [{"id":test[0],"testcase_name":test[1],"est_time":test[2],"module":test[3],"prioty":test[4],"status":test[5]} for test in tests]
    close_db()
    return testjson

def updateStatus(id,status):
    cursor = get_db().cursor()
    cursor.execute(f"UPDATE testcase SET status = '{status}' WHERE id = {id};")
    g.db.commit()
    close_db()
    
def initializeDB():
    cursor = get_db().cursor()
    try:
        cursor = get_db().cursor()
        with open(SQL_FILE, 'r') as file:
            sql = file.read()
            cursor.execute(sql)
            g.db.commit()
            print("SQL file executed successfully")
            
    except (psycopg2.DatabaseError, psycopg2.OperationalError) as e:
        g.db.rollback()
        print(f"Database error: {e}")

    close_db()
    return {"msg":"done"}


