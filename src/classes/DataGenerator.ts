import fs  from 'fs';
import { Player } from '../models/Player';
import { Team } from '../models/Team';
import { ScoringEvent } from '../models/ScoringEvent'
import { Lineup } from '../models/Lineup';
import { generatePlayerData, generateTeamData, 
   generateGameEvents, generateLineup } from './generators';

export class DataGenerator {

   constructor() {
      console.log("created");
   }

   getPlayers(num:number): Player[] {
     return generatePlayerData(num);
   }

   getTeams(num:number):Team[] {
     return generateTeamData(num);
   }

   getScoringEvents(): ScoringEvent[] {
     return generateGameEvents();
   }

   getLineup(team:Team): Lineup {
      return generateLineup(team);
   }

   writeData<T>(filename:string, contentArr:T[]) {
      const resultString = JSON.stringify(contentArr);
     fs.writeFile(filename, resultString, (err) => {
         if (err) throw err;
               console.log(`${filename} created!`);
         });
   }

}



