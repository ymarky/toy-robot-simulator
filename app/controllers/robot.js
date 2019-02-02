import Controller from '@ember/controller';
import RobotCommandParser from 'toy-robot-simulator/custom-libraries/robot-command-parser';
// import Robot from 'toy-robot-simulator/custom-objects/robot';

/*
Some test input

move
left
RIGHT
rEpOrT
place 2,3,north
place 1,1,EAST
place 0,0,WeSt
place 4,4,sOuTh
invalid
place
place 2
place 2,3
place 2,3,INVALID
place -1,3,north
place 5,3,north
place 2,-1,north
place 2,5,north
place 2,3,north,invalid
place 2,3,north invalid
*/

export default Controller.extend({
  textInput: '',
  textOutput: '',

  actions: {
    clearInput() {
      this.set('textInput', '');
    },
    parseInput() {
      console.log(`parseInput!`);
      console.log(this.textInput);

      // Parse textInput into an array of commands
      const commands = RobotCommandParser.parseTextInputIntoCommands(this.textInput);

      if (!commands.length || commands.length == 0) return;

      console.log(`Got some commands!`);
      console.log(commands);

      // Create a new robot object
      // Execute our commands on the robot object
    },
  },
});
