import { Schema, model, connection } from "mongoose";

type BookStorageType = {
  title: string;
  authorId:string
};

const schema = new Schema<BookStorageType>({
  title: { type: String, required: true },
  authorId:{ type: String, required: true }
});

const modelName = "books";

export default connection && connection.models[modelName]
  ? connection.models[modelName]
  : model<BookStorageType>(modelName, schema);
