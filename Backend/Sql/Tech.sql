CREATE TABLE tech(
id SERIAL PRIMARY KEY,
name VARCHAR(50) UNIQUE NOT NULL,
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




INSERT INTO tech(name, question, answer)
VALUES 
    ('HTML','HTML','<h1>HelloWorld</h1>'),
    ('CSS','CSS','background-color:red;'),
    ('Javascript','Javascript','for(let i=0; i<data.length; i++)'),
    ('React','React','const[movies,setMovie]=useState("");'),
    ('Express.js','How do you install Express.js','npm i express'),
    ('Node.js','Node.js','npm run start'),
    ('Api','REST','Representational State Transfer'),
    ('Swagger','Swagger','CODE 200 DESCRIPTION: SUCCESSFULLY CREATES A NEW TO DO ITEM'),
    ('Postgres','POSTGRESQL','SELECT*FROM _'),
    ('CommandLine','CommandLine','LS');


INSERT INTO login_test(firstname, lastname, password, email, leaderscore)
VALUES
    ('jack','ryan','test123','jackryan@gmail.com',90),
    ('david','lee','test321','davidlee@gmail.com',80);