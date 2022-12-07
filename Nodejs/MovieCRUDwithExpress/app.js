import express from "express";
// import bodyParser from "body-parser";
// import methodOverride from "method-override";
import { indexRouter } from "./routes/index.router.js";

const PORT = 3000;
const app = express();

app.use(express.json());

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());
// app.use(methodOverride());
// app.use(function (err, req, res, next) {
//   if (err.type === "entity.parse.failed") {
//     console.error(err.stack);
//     res.status(400).send('Request Body Error');
//   }
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});