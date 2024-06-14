CREATE TABLE tech(
id SERIAL PRIMARY KEY,
question VARCHAR(500) NOT NULL,
answer VARCHAR(500) NOT NULL
);

CREATE TABLE login_test(
id SERIAL PRIMARY KEY,
firstname VARCHAR(50),
lastname VARCHAR(50),
password VARCHAR(100),
email VARCHAR(100),
leaderscore INTEGER 
);




INSERT INTO tech( question, answer)
VALUES 
    ('HTML','<h1>HelloWorld</h1>'),
    ('CSS','background-color:red;'),
    ('Javascript','for(let i=0; i<data.length; i++)'),
    ('React','const[movies,setMovie]=useState("");'),
    ('How do you install Express.js','npm i express'),
    ('Node.js','npm run start'),
    ('REST','Representational State Transfer'),
    ('Swagger','CODE 200 DESCRIPTION: SUCCESSFULLY CREATES A NEW TO DO ITEM'),
    ('POSTGRESQL','SELECT*FROM _'),
    ('CommandLine','LS');


INSERT INTO login_test(firstname, lastname, password, email, leaderscore)
VALUES
    ('jack','ryan','test123','jackryan@gmail.com',90),
    ('david','lee','test321','davidlee@gmail.com',80);