const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE1: Get all the notes using: GET: "/api/notes/fetchallnotes". Login required 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE2: Add a new note using: GET: "/api/notes/addnote". Login required 
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters long').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        // if there are errors return bad request and the errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE3: Update an existing note using: PUT: "/api/notes/updatenote/:id". Login required 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // create a new note object
        const newNote = {}
        if(title) {newNote.title = title}
        if(description) {newNote.description = description}
        if(tag) {newNote.tag = tag}

        // find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if(!note) { return res.status(404).send("Notes not found")}

        if(note.user.toString() !== req.user.id) { return res.status(401).send("Authentication invalid")}

        note = await Note.findOneAndUpdate(req.params.id, {$set: newNote}, {new: true});
        res.json({note});
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE4: Delete an existing note using: DELETE: "/api/notes/deletenote/:id". Login required 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // find the note to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if(!note) { return res.status(404).send("Notes not found")}

        // verify if the user is an authenticated one
        if(note.user.toString() !== req.user.id) { return res.status(401).send("Authentication invalid")}

        // continue to delete
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({"success":"Note has been deleted successfully", note: note});
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;