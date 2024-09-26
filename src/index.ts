import express, { Request, Response } from "express";
import beeperRoter from "./Routing/beeper.Routing"

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api", beeperRoter)

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});