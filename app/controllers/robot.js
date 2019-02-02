import Controller from '@ember/controller';
import RobotCommandParser from 'toy-robot-simulator/custom-libraries/robot-command-parser';
import Robot from 'toy-robot-simulator/custom-objects/robot';

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

place 2,3,west
report
move
report
*/

// This probably belongs to the robot
function executeCommandOnRobot(robot, command) {
  switch (command.command) {
    case 'MOVE':
      return robot.move();
    case 'LEFT':
      return robot.turnLeft();
    case 'RIGHT':
      return robot.turnRight();
    case 'REPORT':
      return robot.report();
    case 'PLACE':
      return robot.place(command.xCoordinate, command.yCoordinate, command.facing);
  }
}

export default Controller.extend({
  textInput: '',
  results: undefined,

  actions: {
    clearInput() {
      this.set('textInput', '');
    },
    parseInput() {
      const commands = RobotCommandParser.parseTextInputIntoCommands(this.textInput);

      if (!commands.length || commands.length == 0) return;

      const robot = Robot.create();
      const results = [];

      commands.forEach((c) => {
        console.log(c);
        const result = executeCommandOnRobot(robot, c);
        console.log(robot);

        if(c.command == 'REPORT') {
          console.log(result);
          results.push(result);
        }
      });

      this.set('results', results);
    },
  },
});
