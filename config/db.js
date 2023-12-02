import mongoose from "mongoose";
const connectDb=async ()=>{
    try{ mongoose.set('strictQuery', false);
        const con=await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser : true,
useUnifiedTopology: true,useUnifiedTopology:true,
useNewUrlParser:true,


        })
        console.log(`Mongo Connected:${con.connection.host}`)

    }catch(err){
        console.log(`Error: ${err.message}` )
        process.exit(1)
    }
}
export default connectDb