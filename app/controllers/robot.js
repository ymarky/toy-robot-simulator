import Controller from '@ember/controller';
import RobotCommandParser from 'toy-robot-simulator/custom-libraries/robot-command-parser';
import Robot from 'toy-robot-simulator/custom-objects/robot';

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
      const commandsLength = commands.length;

      if (!commandsLength || commandsLength === 0) return;

      const robot = Robot.create();
      const results = [];

      commands.forEach((c) => {
        const result = executeCommandOnRobot(robot, c);

        if(c.command === 'REPORT' && result.isOnTable) {
          results.push(result);
        }
      });

      this.set('results', results);
    },
  },
});
