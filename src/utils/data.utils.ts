import { Beeper } from "../models/biper.model";
import { v4 as uuidv4 } from 'uuid';

let id:number = 1000
function idManger():string
{
  const newId = uuidv4();
  return newId;  
}

export function createNewbeeper(name:string):Beeper
{
    const newBeeper: Beeper = {
        name,
        id: idManger(),
        status: "manufactured",
        createDate: new Date()
    }
    return newBeeper
}
export function findBeeperById(beeperArr:Beeper[] , id:string):Beeper
{
         const beeper :Beeper|undefined = beeperArr.find((b:Beeper) => b.id === id)
         if (beeper)
         {
            return beeper
         }
         else throw new Error("Beeper not found");
}
export function deleteBeeperFromArr(beeperArr:Beeper[] , id:string):Beeper[]
{
    const beepers :Beeper[] = beeperArr.filter((b)=>b.id != id)
    return beepers
}
export function filterBeeperByStatus(beeperArr:Beeper[] , status:string):Beeper[]
{
    const beepers :Beeper[] = beeperArr.filter((b)=>b.status === status)
    return beepers
}
