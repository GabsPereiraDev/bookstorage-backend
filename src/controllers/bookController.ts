import { Request, Response } from "express";
import BookStorage from "../model/books";

export const createBookStorage = async (req: Request, res: Response) => {
  const { book } = req.body;

  let newAuthor = await BookStorage.create({ book });

  res.status(201);
  res.json({ corpo: newAuthor.id, book: book });
};

export const listBookStorage = async (req: Request, res: Response) => {
  const data = await BookStorage.find()

  res.json( data );
};

export const updateAutor = async (req: Request, res: Response) => {
  let { id } = req.params;
  const { name, book } = req.body;

  let bookstorage = await BookStorage.findById(id);

  if (bookstorage) {
    bookstorage.book = book;

    await bookstorage.save();

    res.json({ bookstorage });
  } else {
    res.json({ error: "Frase não encontrada" });
  }
};

export const deleteBookStorage = async (req: Request, res: Response) => {
  let id = req.params.id;

  await BookStorage.deleteOne({ where: { id: id } });

  res.json({});
};



