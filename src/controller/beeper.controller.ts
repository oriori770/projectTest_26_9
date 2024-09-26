import {Response, Request} from "express"
import {Beeper} from "../models/biper.model"
import {addBeeperToDb} from "../dal/createBeeper.dal"
export async function postNewBeeper(req: Request, res: Response):Promise<number|void>
{
    const  beeperId:number|any = await addBeeperToDb()
    if(beeperId) {
    res.status(201).json(beeperId)
    } else {
    res.status(500).json({error: "Failed to create new beeper"})
     }
}