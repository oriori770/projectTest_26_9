import jsonfile from "jsonfile";
import {Beeper} from "../models/biper.model";
import { createNewbeeper } from "../utils/data.utils";
// import  from "./dataUsers.json"
const FILE_NAME = "./src/dal/beepers.json";
export async function addBeeperToDb() : Promise<number |undefined> 
{
    try {
      let beepers:Beeper[]|any = [];
      try {
        beepers = await jsonfile.readFile(FILE_NAME);
      } catch (err:NodeJS.ErrnoException|any) {
        // אם הקובץ לא קיים עדיין, נתחיל עם מערך ריק
        if (err.code === "ENOENT") {
          console.log("File not found, creating a new one.");
        } else {
          throw err;
        }
      }
      // הוסף את המשתמש החדש לרשימה הקיימת
      const newbeeper = createNewbeeper();
      beepers.push(newbeeper);
      // כתוב את כל הנתונים חזרה לקובץ
      await jsonfile.writeFile(FILE_NAME, beepers, { spaces: 2 });
      
      console.log("New beeper added successfully!");
      if (newbeeper.id != undefined){
        return newbeeper.id;
      }
    } catch (err) {
      console.error("Error writing to file:", err);
    }
}
// addUserToDb({name:"ori"})