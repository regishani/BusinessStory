require ('dotenv').config()
const mongoose = require ('mongoose')
const connectDB = async () =>{
        mongoose.connect("mongodb+srv://regishani:regishani@cluster0.o2veifw.mongodb.net/?retryWrites=true&w=majority",
         err => {
             if(err) throw err;
             console.log('connected to MongoDB')
         });
    // try{
    //     const conn = await mongoose.connect("mongodb+srv://regishani:regishani@cluster0.o2veifw.mongodb.net/?retryWrites=true&w=majority", 
        
    //     )
    //     console.log(`MongoDB connected ${conn.connection.host}` )
    // }
    // catch (err){
    //     console.error(err)
    //     process.exit(1)
    // }
}
module.exports = connectDB
