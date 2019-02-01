import Controller from '@ember/controller';

export default Controller.extend({
  textInput: '',
  textOutput: '',

  actions: {
    clearInput() {
      this.set('textInput', '');
    },
    parseInput() {
      this.set('textOutput', this.textInput);
    },
  },
});
