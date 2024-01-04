import { DataGenerator } from './classes/DataGenerator';
import { Player } from './models/Player';
import { Team } from './models/Team';
import { ScoringEvent } from './models/ScoringEvent'
import { Lineup } from './models/Lineup';

const generator = new DataGenerator();

const players:Player[] = generator.getPlayers(5);
console.log(players);

const teams:Team[] = generator.getTeams(3);
console.log(teams);

const events:ScoringEvent[] = generator.getScoringEvents();
console.log(events);

const lineup:Lineup = generator.getLineup(new Team());
console.log(lineup);
//const total = parseInt(args[3]);
//const args = process.argv;
//const dataType = args[2];

/*
if (args.length == 4) {

   if (dataType == "player") {
      const players:Player[] = generator.playerData();
      console.log(players);
   } 

   if (dataType == "team") {
      const teams:Team[] = generator.teamData();
      console.log(teams);
   } 

   if (dataType == "events") {
      const events:ScoringEvent[] = generator.gameEvents();
      console.log(events);
   }

   if (dataType == "lineup") {
      const team = new Team();
      const lineup:Lineup = generator.lineup(team);
      console.log(lineup);
   }

} else {
   console.log("Please provide type and total");
}
*/
