export default class CommonRobotFunctions {
  static isValidCoordinate(coordinate) {
    return coordinate >= 0 && coordinate <= 4;
  }

  static isValidFacing(facingString) {
    return facingString == 'NORTH'
      || facingString == 'EAST'
      || facingString == 'WEST'
      || facingString == 'SOUTH';
  }
}
