const router = require('express').Router();
const fs = require('fs');
const uniqid= require('uniqid');

router.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json','utf-8',(err,data)=>{
        if(err) throw err;
        return res.json(JSON.parse(data))
    })
}
)



router.post('/api/notes', (req, res) => {
    const dbData = JSON.parse(fs.readFileSync('db/db.json'));
    const newNote = req.body;
    const id ='id';
    const notesId = uniqid();
    newNote[id]= notesId;
    dbData.push(newNote);
    fs.writeFile('db/db.json',JSON.stringify(dbData),(err)=>{
        if(err) throw err;
        res.json(dbData);
    })
})


router.delete('/api/notes/:id',(req, res) => {
    const dbData = JSON.parse(fs.readFileSync('db/db.json'));
    const deleteNote = dbData.filter((delNote)=>delNote.id!==req.params.id);
    fs.writeFile('db/db.json',JSON.stringify(deleteNote),(err)=>{
        if(err) throw err;
        res.json(deleteNote);
    })
})







module.exports = router;