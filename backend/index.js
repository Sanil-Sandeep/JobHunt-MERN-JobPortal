import express from "express";
import cookie from "cookie-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    orgin:'http//localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));


const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})