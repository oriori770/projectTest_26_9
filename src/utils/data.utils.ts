import { Beeper } from "../models/biper.model";

let id:number = 1000
function idManger():number
{
    return ++id;
}
export function createNewbeeper():Beeper
{
    const newBeeper: Beeper = {
        id: idManger(),
        status: "manufactured",
        createDate: new Date()
    }
    return newBeeper
}
export function findBeeperById(beeperArr:Beeper[] , id:number):Beeper
{
         const beeper :Beeper|undefined = beeperArr.find((b:Beeper) => b.id === id)
         if (beeper)
         {
            return beeper
         }
         else throw new Error("Beeper not found");
}
export function deleteBeeperFromArr(beeperArr:Beeper[] , id:number):Beeper[]
{
    const beepers :Beeper[] = beeperArr.filter((b)=>b.id != id)
    return beepers
}
