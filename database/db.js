import mysql from 'mysql2'
export const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'test_database',

});

db.connect((err) => {
    if (err) {
        console.error("error connecting: ", err);
        return;
    }else{
        console.log("Connected to the database successfully!");
    }
   
});
    