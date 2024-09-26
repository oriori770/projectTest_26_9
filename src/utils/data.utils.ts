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
