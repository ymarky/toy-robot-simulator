import Controller from '@ember/controller';

export default Controller.extend({
  textInput: 'Some Input',
  textOutput: 'Some Output',

  actions: {
    clearInput() {
      this.set('textInput', '');
    },
    parseInput() {
      this.set('textOutput', this.textOutput + ' SOME OUTPUT');
    },
  },
});
