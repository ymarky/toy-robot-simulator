import CommonRobotFunctions from 'toy-robot-simulator/custom-libraries/common-robot-functions';

export default class RobotCommandParser {
  static formatCommandString(text) {
    return text.trim().toLocaleUpperCase();
  }

  static placeCommandParamsAreValid(paramsString) {
    const params = paramsString.split(',');
    return params.length === 3
      && CommonRobotFunctions.isValidCoordinate(params[0])
      && CommonRobotFunctions.isValidCoordinate(params[1])
      && CommonRobotFunctions.isValidFacing(params[2]);
  }

  static placeCommandIsValid(stringToParse) {
    const splits = stringToParse.split(' ');

    return splits.length != 2 || splits[0] != 'PLACE'
      ? false
      : RobotCommandParser.placeCommandParamsAreValid(splits[1]);
  }

  static commandStringIsValid(command) {
    return command == 'MOVE'
      || command == 'LEFT'
      || command == 'RIGHT'
      || command == 'REPORT'
      || RobotCommandParser.placeCommandIsValid(command);
  }

  static buildNonPlaceCommand(commandString) {
    return {
      command: commandString,
    };
  }

  static buildPlaceCommand(commandString) {
    const splits = commandString.split(' ');
    const params = splits[1].split(',');
    return {
      command: splits[0],
      xCoordinate: Number.parseInt(params[0]),
      yCoordinate: Number.parseInt(params[1]),
      facing: params[2],
    };
  }

  static commandStringToCommandObject(commandString) {
    // This function a commandString validated by the commandStringIsValid function
    return commandString[0] == 'P'
      ? RobotCommandParser.buildPlaceCommand(commandString)
      : RobotCommandParser.buildNonPlaceCommand(commandString);
  }

  static parseTextInputIntoCommands(textInput) {
    return textInput.split('\n')
      .map(RobotCommandParser.formatCommandString)
      .filter(RobotCommandParser.commandStringIsValid)
      .map(RobotCommandParser.commandStringToCommandObject);
  }
}
