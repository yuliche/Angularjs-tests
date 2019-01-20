import fakeComponent from './component';

describe('fake component', () => {
  let controller;
  let mockScope = {}

  beforeEach(angular.mock.module(fakeComponent))

  beforeEach(angular.mock.inject(($componentController, $rootScope) => {
    mockScope = $rootScope.$new();
    controller = $componentController('fakeComponent', { $scope: mockScope })
  }))

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should define default name as Sam', () => {
    expect(controller.name).toBe('Sam')
  })

  it('should change name to Andy', () => {
    controller.changeName();
    expect(controller.name).toBe('Andy')
  })
})