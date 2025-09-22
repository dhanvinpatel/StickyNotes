import express from "express";
import { getAllNotes, createNote, deleteNote } from "./noteController.js";

const router = express.Router();

router.get('/', getAllNotes);
router.post('/', createNote);
router.delete('/:id', deleteNote);

const noteRoutes = router;
export default noteRoutes;