import express from "express";
import { getAllNotes, createNote, updateNote, deleteNote } from "./noteController.js";

const router = express.Router();

router.get('/', getAllNotes);
router.post('/', createNote);
router.patch('/:id', updateNote)
router.delete('/:id', deleteNote);

const noteRoutes = router;
export default noteRoutes;