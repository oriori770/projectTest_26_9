import jsonfile from "jsonfile";
import {Beeper} from "../models/biper.model";
import { deleteBeeperFromArr } from "../utils/data.utils";
// import  from "./dataUsers.json"
const FILE_NAME = "./src/dal/beepers.json";
export async function deleteBeeperfromDb(id:number) : Promise<void> 
{
    try {
        const beepers:Beeper[] = await jsonfile.readFile(FILE_NAME);

      // הוסף את המשתמש החדש לרשימה הקיימת
      const newBeeperArr:Beeper[] = deleteBeeperFromArr(beepers, id);
      // כתוב את כל הנתונים חזרה לקובץ
      await jsonfile.writeFile(FILE_NAME, newBeeperArr, { spaces: 2 });
      
      console.log("beeper delete successfully!");

    } catch (err) {
      console.error("Error writing to file:", err);
    }
}
// deleteBeeperfromDb(1001)