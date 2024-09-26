import express from "express";
import {postNewBeeper,getBeeperById, getAllBeeper, deleteBeeperById,getBeepersByStatus} from "../controller/beeper.controller"
const beeperRouter = express.Router();
beeperRouter.post('/beppers',postNewBeeper);
beeperRouter.get('/beppers',getAllBeeper);
beeperRouter.get('/beppers/:id', getBeeperById);
beeperRouter.put('/beppers/:id/status',() => console.log("Welcome to the beeper put status by id"));
beeperRouter.delete('/beppers/:id',deleteBeeperById);
beeperRouter.get('/beppers/status/:status', getBeepersByStatus);


export default beeperRouter;