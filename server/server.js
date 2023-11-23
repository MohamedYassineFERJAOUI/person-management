import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";
const app = express();

//middlewares
app.use(express.json()); // Middleware to parse JSON in the request body
app.use(cors()); // Enable CORS for all routes
app.use(morgan('tiny')); //Vs console log requestes 

app.get("/", (req, res) => {
    res.status(201).json("Home Get Request");
});
// api routes
app.use('/api', router)

// Connect to data base and start the server 
connect().then(() => {
    try {
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Listening on port ${port}...`);
        });

    } catch (error) {
        console.log('Connot connect to the server');
    }
}).catch(error => {
    console.log('Invalid data base connection');
})