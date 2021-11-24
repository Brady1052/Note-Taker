const router = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      throw err
    }
    res.send(data);
  })
})

router.post("/api/notes", (req, res) => {
  var newNote = req.body
  newNote.id = uuidv4()
  console.log(newNote)
  
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      throw err
    }
    console.log(data)
    var oldNotes = JSON.parse(data)
    console.log("This is the old notes", oldNotes)
    oldNotes.push(newNote)
    console.log("This is the update notes", oldNotes)
    var updatedNotes = JSON.stringify(oldNotes)
  fs.writeFile("./db/db.json",updatedNotes,(err)=>{
    if(err){
      throw err
    }
    res.json(newNote)
  })  
  })
}),
  module.exports = router;