import jsonfile from "jsonfile";
import {Beeper} from "../models/biper.model";
// import { createNewbeeper } from "../utils/data.utils";
import {updateStatus,deployedBeeper} from "../utils/beeperStatus.utils";
// import { log } from "console";
// import  from "./dataUsers.json"
const FILE_NAME = "./src/dal/beepers.json";
export async function updateBeeperStatusByIdAtDb(id:string) : Promise<string> 
{
    let newStatus :string = "";
      try {
        let beepers:Beeper[] = await jsonfile.readFile(FILE_NAME);
 
      // הוסף את המשתמש החדש לרשימה הקיימת
      beepers.map((beep)=> {
          if (beep.id===id){
            newStatus = updateStatus(beep.status);
            beep.status = newStatus;
            console.log(newStatus);
            if (newStatus === "deployed")
            deployedBeeper(id) 
        } 
        })
        
      // כתוב את כל הנתונים חזרה לקובץ
      await jsonfile.writeFile(FILE_NAME, beepers, { spaces: 2 });
      
      if (newStatus)
        {
          console.log("beeper status update successfully!");
        return `beeper status update to ${newStatus} successfully!`;
        }
        else { return `not update`}
      }
     catch (err) {
      console.error("Error writing to file:", err);
      return "Error writing to file:"
    }
}
// updateBeeperStatusByIdAtDb(1003)
// addUserToDb({name:"ori"})
// let y = [{"name": "hkjh"}, {"name": "ori"}]
// y.map((i)=> {if (i.name==="ori") i.name ="shneor"})
//     console.log(y);
    