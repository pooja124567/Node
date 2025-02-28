
import {db} from "../database/db.js"

export const insertUser = (req, res) => {
    const {name, email, password, phone, age, image} = req.body;
    const q = "insert into user(`name`, `email`, `password`, `phone`, `age`, `image`) values(?, ?, ?, ?, ?, ?)";
    db.query(q, [name, email, password, phone, age, image],(err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send({result, message: "User inserted successfully"});
        }
    });
};


export const getUser = (req, res) => {
    const role= 'user';
    const q= "select * from user where role = ?";
    db.query(q, [role] ,(err, result)=> {
        if(err){
            res.send(err);
        }else{
            res.json({result , message: "User Found"});
        }
    });
};
