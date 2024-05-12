import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://unwelcome8:123456A@cluster0.0y5ur0w.mongodb.net/TODO");
    console.log("DB Connected");
}