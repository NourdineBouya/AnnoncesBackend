import  express from "express";
import dotenv from 'dotenv'
import categories from './routes/categories.js'
import annonces from './routes/annonces.js'
import favorite from './routes/favorite.js'
import connectDb from './config/db.js'

dotenv.config()
connectDb()

const PORT = process.env.PORT
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api' , categories )
app.use('/api' , annonces)
app.use('/api' , favorite)
 
app.listen(PORT , ()=> console.log( `wich port number ${PORT}`))