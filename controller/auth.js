import { db } from "../database/db.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const insertUser = (req, res) => {
   
    const { name, email, password, phone, age } = req.body;
    const image = req.file;
    console.log(image, ":Image");
    
//     const q = "select * from user where email = ? ";

//     db.query(q, [email], (err, result) =>{
//         if(err){
//             return res.send(err);
//         }
//         if(result.length > 0){
//             return res.send({message : "User already exists"});
//         }

//         const salt = bcrypt.genSaltSync(10);
//         const hashPassword = bcrypt.hashSync(password, salt);
//         console.log(hashPassword, ":hashPassword");
    
//     const qr = "insert into user(`name`, `email`, `password`, `phone`,`age`, `image`) values (?, ?, ?, ?, ?, ?)";

//     db.query(qr, [name, email, hashPassword, phone, age, image], (err, data) => {
//         if (err) {
//            return res.send(err);
//         } else {
//             return  res.send({data, message : "User inserted Successfully"});
//         }
//     });
// });
};

export const getUser = (req, res) => {
    const q = "select * from user";

    db.query(q, [email, password], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });

};

export const login = (req, res) => {
    const { email, password } = req.body;
    const q = "select * from user where email = ?";

    db.query(q, [email], (err, data) => {
        if (err) {
           return res.send({ err, message: "Database error" });
        } 
        
        if (data.length === 0) {
              return  res.send({ message: "User Not Found" });


        } 

        const checkPassword = bcrypt.compareSync(password, data[0].password);
        if(!checkPassword){
            return res.send({message : "Password is Incorrect"});

        }
        const token = jwt.sign({id: data[0].id},"secretkey");
        return res.send({message : "Login Successful", data, token});


        
        


    });

        
};