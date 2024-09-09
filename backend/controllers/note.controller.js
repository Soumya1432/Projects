const db = require('../db/db.js');
const Notes = db.notes;
const createNotes = async(req,res)=>{
    const { title, content } = req.body;
   try {
    const note = await Notes.create({title,content});
    res.status(201).json({
        note,
        message:"Created Successfully",
        success:true
    })
   } catch (error) {
       res.status(500).json({error:error.message});
   }
}
const getAllNotes =async(req,res)=>{
    try {
        const notes = await Notes.findAll();
        res.status(200).json({
            notes,
            success:true
        })
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
const updateNote= async(req,res)=>{
     const { id }= req.params;
     const { title, content }= req.body;
     try {
        const note = await Notes.findByPk(id);
        if(note)
        {
            note.title=title;
            note.content=content;
            await note.save();
            res.status(200).json({
                note,
                message:"Successfullly updated",
                success:true
            })
        }
        else
        {
            res.status(404).json({ error: 'Note not found' });
        }
     } catch (error) {
        res.status(500).json({error:error.message});
     }
}
const deleteNote =async(req,res)=>{
  const { id } = req.params;
  try {
     const note = await Notes.findByPk(id);
     if(note )
     {
        await note.destroy();
        res.status(204).json({
            note,
            message:"Empty",
            success:false
        })
     }
     else {
        res.status(404).json({ error: 'Note not found' });
      }
  } catch (error) {
    res.status(500).json({error:error.message});
  }
}
module.exports = {
    createNotes,
    getAllNotes,
    updateNote,
    deleteNote
}