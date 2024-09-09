const express= require('express');
const { getAllNotes, createNotes, updateNote, deleteNote } = require('../controllers/note.controller');
const router = express.Router();

router.get("/get-note",getAllNotes)
router.post("/create",createNotes);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

module.exports =router;