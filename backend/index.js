import express from "express"
import cors from "cors"
import mongoose from "mongoose"

 //configuration 
 const app = express()
 app.use(express.urlencoded({extended: true}))
 app.use(express.json())
 app.use(cors())


//create new database
 mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }, () => {
    console.log("DB Connected")
 });

 //create user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//Create model
const User = new mongoose.model("User", userSchema)  //it will create User model of userSchema type
 
 //Routes
app.post("/login", (req, res) => {
   const {email, password} = req.body
   User.findOne({email: email}, (err, user) => {
    if(user){
        if(password === user.password){
            res.send({ message: "Login Successful", user: user})
        }else{
            res.send({ message: "Password didn't match"})
        }
    }else{
        res.send({message: "User not registered"})
    }
   })
})

app.post("/register", (req, res) => {
    const {name, email, password} = req.body 

    User.findOne({email: email}, (err, user) => {   // checking if user already exist or not
      if(user){
        res.send({ message: "User already registered"})
      }else{
        const user = new User({   //creating user 
            name,                 //name = schema name, written in shorthand
            email,
            password
        })
        user.save( err => {     
            if(err) {
                res.send(err)
            }else{
                res.send({ message: "Successfully Registered, Please login now" })
            }
        })
      }
    })
})

app.listen(9002, () =>{
    console.log("DB started at port 9002")
})