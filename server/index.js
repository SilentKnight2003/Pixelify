import express from "express"
import dotenv from "dotenv";
import {connectToDatabase} from "./Db.js"
import router from "./routes/authRoutes.js";
import {readdirSync} from "fs"


dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000

connectToDatabase();
app.use(express.json());
app.get("/",(req,res)=> {
res.send("Hello")
})

// app.use("/api",router)

for(const route of readdirSync("./routes")){
    const module = await import(`./routes/${route}`)
    app.use("/api",module.default)
}

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});