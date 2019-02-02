import CommonRobotFunctions from 'toy-robot-simulator/custom-libraries/common-robot-functions';
import { module, test } from 'qunit';

module('Unit | Custom Libraries | CommonRobotFunctions', function() {
  test('isValidCoordinate - coordinate < 0', function(assert) {
    // Arrange
    const coordinate = -1;

    // Act
    const result = CommonRobotFunctions.isValidCoordinate(coordinate);

    // Assert
    assert.equal(result, false);
  });

  test('isValidCoordinate - coordinate = 0', function(assert) {
    // Arrange
    const coordinate = 0;

    // Act
    const result = CommonRobotFunctions.isValidCoordinate(coordinate);

    // Assert
    assert.equal(result, true);
  });

  test('isValidCoordinate - coordinate = 2', function(assert) {
    // Arrange
    const coordinate = 2;

    // Act
    const result = CommonRobotFunctions.isValidCoordinate(coordinate);

    // Assert
    assert.equal(result, true);
  });

  test('isValidCoordinate - coordinate = 4', function(assert) {
    // Arrange
    const coordinate = 4;

    // Act
    const result = CommonRobotFunctions.isValidCoordinate(coordinate);

    // Assert
    assert.equal(result, true);
  });

  test('isValidCoordinate - coordinate = 5', function(assert) {
    // Arrange
    const coordinate = 5;

    // Act
    const result = CommonRobotFunctions.isValidCoordinate(coordinate);

    // Assert
    assert.equal(result, false);
  });

  test('isValidFacing - NORTH', function(assert) {
    // Arrange
    const facing = 'NORTH';

    // Act
    const result = CommonRobotFunctions.isValidFacing(facing);

    // Assert
    assert.equal(result, true);
  });

  test('isValidFacing - EAST', function(assert) {
    // Arrange
    const facing = 'EAST';

    // Act
    const result = CommonRobotFunctions.isValidFacing(facing);

    // Assert
    assert.equal(result, true);
  });

  test('isValidFacing - WEST', function(assert) {
    // Arrange
    const facing = 'WEST';

    // Act
    const result = CommonRobotFunctions.isValidFacing(facing);

    // Assert
    assert.equal(result, true);
  });

  test('isValidFacing - SOUTH', function(assert) {
    // Arrange
    const facing = 'SOUTH';

    // Act
    const result = CommonRobotFunctions.isValidFacing(facing);

    // Assert
    assert.equal(result, true);
  });

  test('isValidFacing - invalid', function(assert) {
    // Arrange
    const facing = 'invalid';

    // Act
    const result = CommonRobotFunctions.isValidFacing(facing);

    // Assert
    assert.equal(result, false);
  });
});
