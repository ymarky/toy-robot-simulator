import Robot from 'toy-robot-simulator/custom-objects/robot';
import { module, test } from 'qunit';

module('Unit | Custom Objects | Robot', function() {
  test('constructor', function(assert) {
    // Arrange

    // Act
    const result = Robot.create();

    // Assert
    assert.ok(result);
  });

  test('report - unplaced', function(assert) {
    // Arrange
    const robot = Robot.create();

    // Act
    const result = robot.report();

    // Assert
    assert.equal(result.isOnTable, false);
    assert.equal(result.xCoordinate, undefined);
    assert.equal(result.yCoordinate, undefined);
    assert.equal(result.facing, 'UNDEFINED');
  });

  test('left - unplaced', function(assert) {
    // Arrange
    const robot = Robot.create();

    // Act
    robot.turnLeft();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, false);
    assert.equal(result.xCoordinate, undefined);
    assert.equal(result.yCoordinate, undefined);
    assert.equal(result.facing, 'UNDEFINED');
  });

  test('right - unplaced', function(assert) {
    // Arrange
    const robot = Robot.create();

    // Act
    robot.turnRight();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, false);
    assert.equal(result.xCoordinate, undefined);
    assert.equal(result.yCoordinate, undefined);
    assert.equal(result.facing, 'UNDEFINED');
  });

  test('place - bad x coord', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 'mark';
    const y = 1;
    const f = 'NORTH';

    // Act
    robot.place(x, y, f);

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, false);
    assert.equal(result.xCoordinate, undefined);
    assert.equal(result.yCoordinate, undefined);
    assert.equal(result.facing, 'UNDEFINED');
  });

  test('place - bad y coord', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 'mark';
    const f = 'NORTH';

    // Act
    robot.place(x, y, f);

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, false);
    assert.equal(result.xCoordinate, undefined);
    assert.equal(result.yCoordinate, undefined);
    assert.equal(result.facing, 'UNDEFINED');
  });

  test('place - bad facing', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'mark';

    // Act
    robot.place(x, y, f);

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, false);
    assert.equal(result.xCoordinate, undefined);
    assert.equal(result.yCoordinate, undefined);
    assert.equal(result.facing, 'UNDEFINED');
  });
});
