import {Response, Request} from "express"
import {Beeper} from "../models/biper.model"
import {addBeeperToDb} from "../dal/createBeeper.dal"
import {readBeeperByIdFromDb} from "../dal/readBeeper.dal"
export async function postNewBeeper(req: Request, res: Response):Promise<number|void>
{
    const  beeperId:number|any = await addBeeperToDb()
    if(beeperId) {
    res.status(201).json(beeperId)
    } else {
    res.status(500).json({error: "Failed to create new beeper"})
     }
}
export async function getBeeperById(req: Request, res: Response):Promise<Beeper | void>
{
    const beeperId: number = parseInt(req.params.id)
    const beeper: Beeper = await readBeeperByIdFromDb(beeperId)
    if(beeper) {
    res.status(200).json(beeper)
    } else {
    res.status(404).json({error: "Beeper not found"})
    }

}