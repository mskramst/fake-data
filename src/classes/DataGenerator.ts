import { Player } from '../models/Player';
import { Team } from '../models/Team';
import { ScoringEvent } from '../models/ScoringEvent'
import { Lineup } from '../models/Lineup';
import { generatePlayerData, generateTeamData, 
   generateGameEvents, generateLineup } from './generators';

export class DataGenerator {

   private typeOfData: string = "player";
   private  total: number = 1;

   setType(type:string) {
      this.typeOfData = type;
   }

   setTotal(num:number) {
      this.total = num;
   }

   playerData(): Player[] {
     return generatePlayerData(this.total);
   }

   teamData():Team[] {
     return generateTeamData(this.total);
   }

   gameEvents(): ScoringEvent[] {
     return generateGameEvents();
   }

   lineup(team:Team): Lineup {
      return generateLineup(team);
   }

}



