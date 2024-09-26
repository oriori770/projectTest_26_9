import {Response, Request} from "express"
import {Beeper} from "../models/biper.model"
import {addBeeperToDb} from "../dal/createBeeper.dal"
import { readBeeperByIdFromDb, readAllBeeperFromDb, readBeepersByStatusFromDb } from "../dal/readBeeper.dal"
import {deleteBeeperfromDb} from "../dal/deleteBeeper.dal"
import {updateBeeperStatusByIdAtDb} from "../dal/updateBeeper.dal";
export async function postNewBeeper(req: Request, res: Response):Promise<number|void>
{
    try {
    const name = req.params.name
    const  beeperId:number|any = await addBeeperToDb(name)
    if(beeperId) {
    res.status(201).json(beeperId)
    } else {
    res.status(500).json({error: "Failed to create new beeper"})
     }}
     catch(error) {
        res.status(500).json({error: "Failed to create new beeper"})
        return
    }
}
export async function getBeeperById(req: Request, res: Response):Promise<Beeper | void>
{
    try {
    const beeperId: string = req.params.id
    const beeper: Beeper = await readBeeperByIdFromDb(beeperId)
    if(beeper) {
    res.status(200).json(beeper)
    } else {
    res.status(404).json({error: "Beeper not found"})
    }}
    catch(error) {
        res.status(500).json({error: "Failed to get beeper by id"})
        return
    }

}
export async function getAllBeeper(req: Request, res: Response):Promise<Beeper[] | void>
{
    try {
    const beepers: Beeper[] = await readAllBeeperFromDb()
    if(beepers) {
    res.status(200).json(beepers)
    } else {
    res.status(404).json({error: "Beeper not found"})
    }}
    catch(error) {
        res.status(500).json({error: "Failed to get all beepers"})
        return
    }

}
export async function deleteBeeperById(req: Request, res: Response):Promise<void>
{
    const beeperId: string = req.params.id
    try{

        await deleteBeeperfromDb(beeperId)
        res.status(200).json({success:"success"})
    }
    catch(error) {
        res.status(500).json({error: "Failed to delete beeper"})
        return
    }
}
export async function getBeepersByStatus(req: Request, res: Response):Promise<Beeper[] | void>
{
    const beeperStatus : string= req.params.status;
    const beepers: Beeper[] = await readBeepersByStatusFromDb(beeperStatus)
    if(beepers) {
    res.status(200).json(beepers)
    } else {
    res.status(404).json({error: "Beeper not found"})
    }

}

export async function updateBeeperStatusById(req: Request, res: Response):Promise<void>
{
    const beeperId: string = req.params.id
    try{
        const updateStatus = await updateBeeperStatusByIdAtDb(beeperId)
        if(!updateStatus) {
            res.status(404).json({error: updateStatus})
            return
        }
        res.status(200).json({updateStatus})
    }
    catch(error) {
        res.status(500).json({error: "Failed to update beeper status"})
        return
    }
}

