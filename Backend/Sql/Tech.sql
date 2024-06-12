CREATE TABLE tech(
id SERIAL PRIMARY KEY,
name VARCHAR(50) UNIQUE NOT NULL,
question_img VARCHAR(500) NOT NULL,
answer_img VARCHAR(500) NOT NULL
);

CREATE TABLE login(
id SERIAL PRIMARY KEY,
firstname VARCHAR(50),
lastname VARCHAR(50),
password VARCHAR(100),
email VARCHAR(100),
leaderscore INTEGER 
);




INSERT INTO tech(name, question_img, answer_img)
VALUES 
    ('HTML','/Users/corcoding/Code-Refresher/Backend/Images/frontcardhtml.png','Backend/Images/frontcardhtmlconcept.png'),
    ('CSS','/Users/corcoding/Code-Refresher/Backend/Images/frontcardcss.png','Backend/Images/frontcardcssconcept.png'),
    ('Javascript','/Users/corcoding/Code-Refresher/Backend/Images/frontcardjavascript.png','Backend/Images/frontcardjavascriptconcept.png'),
    ('React','/Users/corcoding/Code-Refresher/Backend/Images/frontcardreact.png','Backend/Images/frontcardreactconcept.png'),
    ('Express.js','/Users/corcoding/Code-Refresher/Backend/Images/frontcardexpress.png','Backend/Images/frontcardexpressconcept.png'),
    ('Node.js','/Users/corcoding/Code-Refresher/Backend/Images/frontcardnode.png','Backend/Images/frontcardnodejsconcept.png'),
    ('Api','/Users/corcoding/Code-Refresher/Backend/Images/frontcardapi.png','Backend/Images/frontcardapiconcept.png'),
    ('Swagger','/Users/corcoding/Code-Refresher/Backend/Images/frontcardswagger.png','Backend/Images/frontcardswaggerconcept.png'),
    ('Postgres','/Users/corcoding/Code-Refresher/Backend/Images/frontcardsql.png','Backend/Images/frontcardsqlconcept.png'),
    ('CommandLine','/Users/corcoding/Code-Refresher/Backend/Images/frontcardcli.png','Backend/Images/frontcardcliconcept.png');