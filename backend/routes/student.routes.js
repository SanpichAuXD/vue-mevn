const express = require('express')
const studentRoute = express.Router()

let StudentModel = require('../models/Student')
//get data
studentRoute.route('/').get((req, res, next) =>{
    StudentModel.find((error, data)=>{
        if(error){
            return  next(error);
        }else{
            res.json(data);
        }
    })
})
//create
studentRoute.route('/create-student').post((req, res, next) => {
    StudentModel.create(req.body, (error,data) =>{
        if (error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})
//edit
studentRoute.route('/edit-student/:id').get((req, res , next) =>{
    StudentModel.findById(req.params.id, (error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
//updata
studentRoute.route('/update-student/:id').put((req, res , next) =>{
    StudentModel.findByIdAndUpdate(req.params.id,{
        $set: req.body    
    }, (error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
            console.log("update la")
        }
    })
})
//delete
studentRoute.route('/delete-student/:id').delete((req, res , next) =>{
    StudentModel.findByIdAndDelete(req.params.id, (error,data)=>{
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
})
module.exports = studentRoute;