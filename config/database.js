import mongoose from 'mongoose'

let connected = false
const connectDB = async () => {
    mongoose.set('strictQuery', true)
    if (connected) {
        console.log('mongoDB is already connected')
        return;
    }
    
    //connect to the database
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        connected = true
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log( error)
        
    }

}
export default connectDB