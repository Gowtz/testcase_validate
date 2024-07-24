CREATE TABLE testcase(
    id SERIAL PRIMARY KEY,
    testcase_name VARCHAR(50),
    est_time VARCHAR(50),
    module VARCHAR(50),
    prioty VARCHAR(50),
    status VARCHAR(50)
);

INSERT INTO testcase (testcase_name,est_time,module,prioty) VALUES('Random test 2',5,'User Log In','Medium'),('Random test 2',5,'User Log In','Medium'),('Randomw test 3',5 ,'Password','High');
