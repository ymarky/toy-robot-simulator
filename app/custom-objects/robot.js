import EmberObject from '@ember/object';

const Robot = EmberObject.extend({
  say(thing) {
    return thing;
  }
});

export default Robot;
