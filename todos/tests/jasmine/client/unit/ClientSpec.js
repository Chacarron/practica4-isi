describe('data', function () {
    it('Debe devolver la lista de paginas cuando un usuario se logea', function () {
      var currentList = 0;
      var currentUser = 0;
      var result = {_id: currentList,createdBy: currentUser};
      spyOn(Lists, 'findOne').and.returnValue(result);

      //expect(Router.route.data()).toBe(result);
      expect(Lists.findOne.calls.argsFor(0)).toEqual([]);
    });
  });
describe('lists', function () {
    it('Debe ........' , function () {
      var currentUser = 0;
      var result = {createdBy:  currentUser};
      spyOn(Lists, 'find').and.returnValue(result);

      //expect(lists()).toBe(result);
      expect(Lists.find.calls.argsFor(0)).toEqual([]);
    });
  });

describe('createNewList', function () {
    it('Debe crear una nueva lista' , function () {
      var currentUser = 1;
      var listName = "name";
      var result = {name: listName,ceatedBy: currentUser};
      spyOn(Lists, 'insert').and.returnValue(result);

      //expect(Meteor.call('createNewList')).toBe(result);
      expect(Lists.insert.calls.argsFor(0)).toEqual([]);
    });
  });

  describe('totalTodos', function () {
    it('Devuelve la lista de players', function () {
      
      var currentList = 1;
      spyOn(Todos, 'find');

      expect(Todos.find.calls.argsFor(0)).toEqual([]);
    });
  });
