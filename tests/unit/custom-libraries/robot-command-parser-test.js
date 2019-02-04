import RobotCommandParser from 'toy-robot-simulator/custom-libraries/robot-command-parser';
import { module, test } from 'qunit';

module('Unit | Custom Libraries | RobotCommandParser', function() {
  test('parseTextInputIntoCommands - empty input', function(assert) {
    // Arrange
    const textInput = ``;

    // Act
    const result = RobotCommandParser.parseTextInputIntoCommands(textInput);

    // Assert
    assert.deepEqual(result, []);
  });

  // Ideally I'd want full unit tests here but I'm running low on time
  test('parseTextInputIntoCommands - integration test', function(assert) {
    // Arrange
    const textInput = `
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
      place 2,3,north invalid`;

    // Act
    const result = RobotCommandParser.parseTextInputIntoCommands(textInput);

    // Assert
    assert.deepEqual(result, [
      {
        'command': 'MOVE'
      },
      {
        'command': 'LEFT'
      },
      {
        'command': 'RIGHT'
      },
      {
        'command': 'REPORT'
      },
      {
        'command': 'PLACE',
        'facing': 'NORTH',
        'xCoordinate': 2,
        'yCoordinate': 3
      },
      {
        'command': 'PLACE',
        'facing': 'EAST',
        'xCoordinate': 1,
        'yCoordinate': 1
      },
      {
        'command': 'PLACE',
        'facing': 'WEST',
        'xCoordinate': 0,
        'yCoordinate': 0
      },
      {
        'command': 'PLACE',
        'facing': 'SOUTH',
        'xCoordinate': 4,
        'yCoordinate': 4
      }]);
  });
});
