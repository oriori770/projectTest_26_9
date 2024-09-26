import express from "express";
import {postNewBeeper,getBeeperById, getAllBeeper, deleteBeeperById,getBeepersByStatus,updateBeeperStatusById} from "../controller/beeper.controller"
const beeperRouter = express.Router();
beeperRouter.post('/beppers',postNewBeeper);
beeperRouter.get('/beppers',getAllBeeper);
beeperRouter.get('/beppers/:id', getBeeperById);
beeperRouter.put('/beppers/:id/status',updateBeeperStatusById);
beeperRouter.delete('/beppers/:id',deleteBeeperById);
beeperRouter.get('/beppers/status/:status', getBeepersByStatus);


export default beeperRouter;