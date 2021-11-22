import { Schema, model, connection } from "mongoose";

type BookStorageType = {
  authors: string;
};

const schema = new Schema<BookStorageType>({
  authors: { type: String, required: true },
});

const modelName = "authors";

export default connection && connection.models[modelName]
  ? connection.models[modelName]
  : model<BookStorageType>(modelName, schema);
