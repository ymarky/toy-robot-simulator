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

  test('say', function(assert) {
    // Arrange
    const robot = Robot.create();

    // Act
    const result = robot.say('test');

    // Assert
    assert.equal(result, 'test');
  });
});
