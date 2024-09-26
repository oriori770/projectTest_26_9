import {Beeper} from "../models/biper.model"
import {updateBeeperStatusByIdAtDb} from "../dal/updateBeeper.dal"
export function updateStatus(status:string): string
{
    switch (status){
        case "manufactured":
            return "assembled";
        case "assembled":
            return "shipped";
        case "shipped":
            return "deployed";
        case "deployed":
            return "detonated";
        case "detonated":
            throw new Error("It is not possible to update a status for an exploded beeper")
        default:
            throw new Error("Invalid status");
    }

}

export async function deployedBeeper(id:number):Promise<void>
{
     setTimeout(()=> updateBeeperStatusByIdAtDb(id) , 10000)
}
      


