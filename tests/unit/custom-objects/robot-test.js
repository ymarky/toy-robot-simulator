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

  test('move - unplaced', function(assert) {
    // Arrange
    const robot = Robot.create();

    // Act
    robot.move();

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

  test('place - success', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'WEST';

    // Act
    robot.place(x, y, f);

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, f);
  });

  test('unplace', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'WEST';
    robot.place(x, y, f);

    // Act
    robot.unplace();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, false);
    assert.equal(result.xCoordinate, undefined);
    assert.equal(result.yCoordinate, undefined);
    assert.equal(result.facing, 'UNDEFINED');
  });

  test('turnLeft - 1 turn', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.turnLeft();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, 'WEST');
  });

  test('turnLeft - 2 turns', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.turnLeft();
    robot.turnLeft();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, 'SOUTH');
  });

  test('turnLeft - 3 turns', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.turnLeft();
    robot.turnLeft();
    robot.turnLeft();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, 'EAST');
  });

  test('turnLeft - 4 turns', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.turnLeft();
    robot.turnLeft();
    robot.turnLeft();
    robot.turnLeft();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, 'NORTH');
  });

  test('turnRight - 1 turn', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.turnRight();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, 'EAST');
  });

  test('turnRight - 2 turns', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.turnRight();
    robot.turnRight();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, 'SOUTH');
  });

  test('turnRight - 3 turns', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.turnRight();
    robot.turnRight();
    robot.turnRight();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, 'WEST');
  });

  test('turnRight - 4 turns', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.turnRight();
    robot.turnRight();
    robot.turnRight();
    robot.turnRight();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, 'NORTH');
  });

  test('move - north - move valid', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.move();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y + 1);
    assert.equal(result.facing, f);
  });

  test('move - north - move invalid', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 4;
    const f = 'NORTH';
    robot.place(x, y, f);

    // Act
    robot.move();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, f);
  });

  test('move - south - move valid', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'SOUTH';
    robot.place(x, y, f);

    // Act
    robot.move();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y - 1);
    assert.equal(result.facing, f);
  });

  test('move - south - move invalid', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 0;
    const f = 'SOUTH';
    robot.place(x, y, f);

    // Act
    robot.move();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, f);
  });

  test('move - east - move valid', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'EAST';
    robot.place(x, y, f);

    // Act
    robot.move();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x + 1);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, f);
  });

  test('move - east - move invalid', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 4;
    const y = 1;
    const f = 'EAST';
    robot.place(x, y, f);

    // Act
    robot.move();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, f);
  });

  test('move - west - move valid', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 1;
    const y = 1;
    const f = 'WEST';
    robot.place(x, y, f);

    // Act
    robot.move();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x - 1);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, f);
  });

  test('move - west - move invalid', function(assert) {
    // Arrange
    const robot = Robot.create();
    const x = 0;
    const y = 1;
    const f = 'WEST';
    robot.place(x, y, f);

    // Act
    robot.move();

    // Assert
    const result = robot.report();
    assert.equal(result.isOnTable, true);
    assert.equal(result.xCoordinate, x);
    assert.equal(result.yCoordinate, y);
    assert.equal(result.facing, f);
  });
});
