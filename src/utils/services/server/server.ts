import mongoose from "mongoose";

const isDBConnected = async () => {
    try {

        if(mongoose.connection.readyState !== 1){
            await mongoose.connect(process.env.DB_URI!);
            console.log("Database connected successfully");
        }
        
    } catch (error) {
        console.error(error);
    }
}

export {
    isDBConnected
}