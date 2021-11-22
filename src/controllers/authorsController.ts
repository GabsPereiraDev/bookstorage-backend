import { Request, Response } from "express";
import authors from "../model/author";

export const createAuthor = async (req: Request, res: Response) => {
  const { authors } = req.body;

  let newAuthor = await authors.create({ authors });

  res.status(201);
  res.json({ corpo: newAuthor.id, book: authors });
};

export const listAuthor = async (req: Request, res: Response) => {
  const data = await authors.find()

  res.json( data );
};

export const updateAutor = async (req: Request, res: Response) => {
  let { id } = req.params;
  const { authors } = req.body;

  let bookstorage = await authors.findById(id);

  if (bookstorage) {
    bookstorage.book = authors;

    await bookstorage.save();

    res.json({ bookstorage });
  } else {
    res.json({ error: "Frase não encontrada" });
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  let id = req.params.id;

  await authors.deleteOne({ where: { id: id } });

  res.json({});
};



