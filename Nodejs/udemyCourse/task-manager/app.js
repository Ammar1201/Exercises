import express from "express";
import './db/mongoose.js';
import { indexRouter } from "./routers/index.routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', indexRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})