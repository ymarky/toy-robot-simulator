import EmberObject from '@ember/object';

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

function facingStringIsValid(facingString) {
  return facingString == 'NORTH'
    || facingString == 'EAST'
    || facingString == 'WEST'
    || facingString == 'SOUTH';
}

function coordinateIsValid(coordinate) {
  return coordinate >= 0 && coordinate <=4;
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
    if(!coordinateIsValid(xCoordinate)) return;
    if(!coordinateIsValid(yCoordinate)) return;
    if(!facingStringIsValid(facingString)) return;

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
