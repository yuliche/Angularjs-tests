import angular from 'angular';
import template from './component.html';

class FakeController {

  /* @ngInject */
  constructor() {
    this.name = 'Sam';
  }

  changeName() {
    this.name = 'Andy';
  }
}

const component = {
  controller: FakeController,
  template
}

export default angular.module('app.fake', [])
  .component('fakeComponent', component)
  .name