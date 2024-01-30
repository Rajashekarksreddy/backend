import  express  from "express";
import dotenv from "dotenv"
import cors from 'cors'



dotenv.config()
const app = express()

//middlewares

app.use(cors())

app.use(express.json())


app.get('/', (req,res) => {
    res.send('just checking')
})


app.listen(process.env.PORT || 3000, () => {
    console.log('port is listening on' + (process.env.PORT))
})
