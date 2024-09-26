import jsonfile from "jsonfile";
import {Beeper} from "../models/biper.model";
import {findBeeperById } from "../utils/data.utils";
const FILE_NAME = "./src/dal/beepers.json";


export async function readBeeperByIdFromDb(id: number): Promise<Beeper> 
{
  try {
    const beepers:Beeper|any = await jsonfile.readFile(FILE_NAME);
    const beeper = findBeeperById(beepers, id);
    if (beeper) {
      console.log(beeper);
      return beeper;
    } else {
      throw new Error(`beeper with id ${id} not found.`);
    }
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
}
export async function readAllBeeperFromDb(): Promise<Beeper[]> 
{
  try {
    const beepers:Beeper[]|any = await jsonfile.readFile(FILE_NAME);
    if (beepers) {
      console.log(beepers);
      return beepers;
    } else {
      throw new Error(`beepers not found.`);
    }
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
}
// getUserByIdFromDb(1001)