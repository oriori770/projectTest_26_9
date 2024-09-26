import express from "express";
import {postNewBeeper} from "../controller/beeper.controller"
const beeperRouter = express.Router();
beeperRouter.post('/beppers',postNewBeeper);
beeperRouter.get('/beppers',() => console.log("Welcome to the beeper get"));
beeperRouter.get('/beppers/:id',() => console.log("Welcome to the beeper get by id"));
beeperRouter.put('/beppers/:id/status',() => console.log("Welcome to the beeper put status by id"));
beeperRouter.delete('/beppers/:id',() => console.log("Welcome to the beeper delete by id"));
beeperRouter.get('/beppers/status/:status',() => console.log("Welcome to the beeper get by status"));


export default beeperRouter;