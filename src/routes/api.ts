import { Router } from "express";

import * as bookController from "../controllers/bookController";
import * as authorsController from "../controllers/authorsController";

const router = Router();

router.post("/books", bookController.createBookStorage);
router.get("/books", bookController.listBookStorage);
router.put("/books/:id", bookController.updateAutor);

router.post("/authors", authorsController.createAuthor);
router.get("/authors", authorsController.listAuthor);
router.delete("/authors/:id", authorsController.deleteAuthor);

export default router;
