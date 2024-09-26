import { Beeper } from "../models/biper.model";

let id:number = 1000
function idManger():number
{
    return ++id;
}
export function createNewbeeper(name:string):Beeper
{
    const newBeeper: Beeper = {
        id: idManger(),
        name,
        status: "manufactured",
        createDate: new Date()
    }
    return newBeeper
}
