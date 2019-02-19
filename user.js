var db = require('./db');
var express = require('express');
var router  = express.Router();

router.post('/fillform', function(req, res){
    var data = req.body;
    var sql = "INSERT into user(name,age,hometown,occupation,qualification) values('"+data.name+"','"+data.age+"','"+data.hometown+"','"+data.occupation+"','"+data.qualification+"')"
    console.log(sql)
    db.query(sql, function(error, response){
        if(error){
            console.log(error)
            res.json({
                success: false,
                message: error
            })
        }else{
            if(response.affectedRows > 0){
                res.json({
                    success: true,
                    message: "User deatils saved"
                })
            }else{
                res.json({
                    success: false,
                    message: "Something went wrong, try again!!"
                })
            }
        }
    })
})

module.exports = router;