import EmberObject from '@ember/object';
import CommonRobotFunctions from 'toy-robot-simulator/custom-libraries/common-robot-functions';

function translateFacingIntToString(facingInt) {
  switch (facingInt) {
    case 3:
      return 'WEST';
    case 2:
      return 'SOUTH';
    case 1:
      return 'EAST';
    case 0:
      return 'NORTH';
    default:
      return 'UNDEFINED';
  }
}

function translateFacingStringToInt(facingString) {
  switch (facingString) {
    case 'WEST':
      return 3;
    case 'SOUTH':
      return 2;
    case 'EAST':
      return 1;
    default: // covers the 'NORTH' case
      return 0;
  }
}

function turnLeft(currentFacing) {
  return currentFacing <= 0
    ? 3
    : currentFacing - 1;
}

function turnRight(currentFacing) {
  return currentFacing >= 3
    ? 0
    : currentFacing + 1;
}

function getCoordinateBeingUsedForMove(facingInt) {
  // This could be facingInt % 2 but I found that needlessly complicated to read
  return facingInt == 1 || facingInt == 3
    ? 'xCoordinate'
    : 'yCoordinate';
}

function getAmountOfMoveAlongAxis(facingInt) {
  // If we're moving north or east, we want to move by 1 in that axis
  return facingInt == 0 || facingInt == 1
    ? 1
    : -1;
}

const Robot = EmberObject.extend({
  init() {
    this.unplace();
  },

  unplace() {
    this.set('isOnTable', false);
    this.set('xCoordinate', undefined);
    this.set('yCoordinate', undefined);
    this.set('facing', undefined);
  },

  place(xCoordinate, yCoordinate, facingString) {
    if(!CommonRobotFunctions.isValidCoordinate(xCoordinate)) return;
    if(!CommonRobotFunctions.isValidCoordinate(yCoordinate)) return;
    if(!CommonRobotFunctions.isValidFacing(facingString)) return;

    this.set('isOnTable', true);
    this.set('xCoordinate', xCoordinate);
    this.set('yCoordinate', yCoordinate);
    this.set('facing', translateFacingStringToInt(facingString));
  },

  turnLeft() {
    if (!this.isOnTable) return;

    this.set('facing', turnLeft(this.facing));
  },

  turnRight() {
    if (!this.isOnTable) return;

    this.set('facing', turnRight(this.facing));
  },

  move() {
    if (!this.isOnTable) return;

    const coordinateBeingUsed = getCoordinateBeingUsedForMove(this.facing);
    const currentCoordinate = this[coordinateBeingUsed];
    const amountOfMoveAlongAxis = getAmountOfMoveAlongAxis(this.facing);
    const newCoordinate = currentCoordinate + amountOfMoveAlongAxis;

    if(CommonRobotFunctions.isValidCoordinate(newCoordinate)) {
      this.set(coordinateBeingUsed, newCoordinate);
    }
  },

  report() {
    return {
      isOnTable: this.isOnTable,
      xCoordinate: this.xCoordinate,
      yCoordinate: this.yCoordinate,
      facing: translateFacingIntToString(this.facing),
    };
  },
});

export default Robot;
