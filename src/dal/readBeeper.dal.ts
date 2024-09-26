import jsonfile from "jsonfile";
import {Beeper} from "../models/biper.model";
import {findBeeperById } from "../utils/data.utils";
const FILE_NAME = "./src/dal/beepers.json";


export async function readBeeperByIdFromDb(id: number): Promise<Beeper> 
{
  try {
    const users:Beeper|any = await jsonfile.readFile(FILE_NAME);
    const user = findBeeperById(users, id);
    if (user) {
      console.log(user);
      return user;
    } else {
      throw new Error(`User with id ${id} not found.`);
    }
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
}
// getUserByIdFromDb(1001)