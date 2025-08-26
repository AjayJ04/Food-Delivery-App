import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ajayjadhav:Ajay0409@cluster0.tlz18wv.mongodb.net/food-del').then(()=>console.log("DB connected"));
}