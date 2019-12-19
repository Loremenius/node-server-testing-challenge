const express = require('express');

const db = require('./route_one-model');

const router = express.Router();

router.get("/", (req,res)=>{
    db.find()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            res.status(500).json({message:"error getting users"},error);
        })
})

router.delete("/:id", (req,res)=>{
    db.remove(req.params.id)
        .then(data=>{
            res.status(200).json({message:`User successfully deleted`});
        })
        .catch(error=>{
            res.status(500).json({message:"error deleting users"},error);
        })
})

module.exports = router;