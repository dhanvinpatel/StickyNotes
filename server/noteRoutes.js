import express from "express";
import { getAllNotes, createNote } from "./noteController.js";

const router = express.Router();

router.get('/', getAllNotes);
router.post('/', createNote);

const noteRoutes = router;
export default noteRoutes;