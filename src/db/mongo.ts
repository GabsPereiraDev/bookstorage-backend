import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const MongoDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_DB as string)
    console.log('conectado com sucesso')
  }catch(error){
    console.log('erro na conexao', error)
  }
};
