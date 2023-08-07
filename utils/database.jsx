import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "prompt_ai",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected=true;

        console.log("Connected to MongoDB...");
    }
    catch(err){
        console.log(err);
    }
}