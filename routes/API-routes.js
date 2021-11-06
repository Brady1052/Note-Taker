const router = require('express').Router()
const fs = require('fs')

router.get("/api/notes", (req,res)=> {
   fs.readFile("./db/db.json", (err, data) =>{
 if(err){
     throw err
 }
//  var notes = JSON.stringify(data);
//  console.log(notes);
 res.send(data);
   })
})
module.exports = router;