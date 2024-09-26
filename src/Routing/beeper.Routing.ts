import express from "express";
import {postNewBeeper,getBeeperById, getAllBeeper} from "../controller/beeper.controller"
const beeperRouter = express.Router();
beeperRouter.post('/beppers',postNewBeeper);
beeperRouter.get('/beppers',getAllBeeper);
beeperRouter.get('/beppers/:id', getBeeperById);
beeperRouter.put('/beppers/:id/status',() => console.log("Welcome to the beeper put status by id"));
beeperRouter.delete('/beppers/:id',() => console.log("Welcome to the beeper delete by id"));
beeperRouter.get('/beppers/status/:status',() => console.log("Welcome to the beeper get by status"));


export default beeperRouter;