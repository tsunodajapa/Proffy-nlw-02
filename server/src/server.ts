import express from "express";
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

console.log("API PROFFY")

app.get("/", (request, response) => {
  response.json("API PROFFY");
});

app.listen(3333);

export default app;
