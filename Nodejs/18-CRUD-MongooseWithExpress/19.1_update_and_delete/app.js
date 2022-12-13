import express from "express";
import './db/mongoose.js';
import { indexRouter } from "./routes/index.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});