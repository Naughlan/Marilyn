// connection to database
import mongoose from "mongoose";

const connectDatabase = async() => {
    console.log(process.env.MONGO_URI)

    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected!!! ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
  
};

export default connectDatabase;