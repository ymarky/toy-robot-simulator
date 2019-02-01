import Controller from '@ember/controller';
// import Robot from 'toy-robot-simulator/custom-objects/robot';

function formatCommandString(text) {
  return text.trim().toLocaleUpperCase();
}

function isValidCoordinate(coordinate) {
  return coordinate >= 0 && coordinate <= 4;
}

function isValidFacing(facingString) {
  return facingString == 'NORTH'
    || facingString == 'EAST'
    || facingString == 'WEST'
    || facingString == 'SOUTH';
}

function placeCommandParamsAreValid(paramsString) {
  const params = paramsString.split(',');
  return params.length === 3
    && isValidCoordinate(params[0])
    && isValidCoordinate(params[1])
    && isValidFacing(params[2]);
}

function placeCommandIsValid(stringToParse) {
  const splits = stringToParse.split(' ');

  return splits.length != 2 || splits[0] != 'PLACE'
    ? false
    : placeCommandParamsAreValid(splits[1]);
}

function commandStringIsValid(command) {
  return command == 'MOVE'
    || command == 'LEFT'
    || command == 'RIGHT'
    || command == 'REPORT'
    || placeCommandIsValid(command);
}

function parseTextInputIntoCommands(textInput) {
  return textInput.split('\n')
    .map(formatCommandString)
    .filter(commandStringIsValid);
}

/*
Some test input

move
left
what
sdfjkhgjsdkjmfh
place 2,3,NORTH
place
reight
RIGHT
place 2
place 2,3
sdfsd
report
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
      const commands = parseTextInputIntoCommands(this.textInput);

      if (!commands.length || commands.length == 0) return;

      console.log(`Got some commands!`);
      console.log(commands);

      // Create a new robot object
      // Execute our commands on the robot object
    },
  },
});
