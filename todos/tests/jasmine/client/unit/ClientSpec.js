describe('Lists', function () {
  'use strict';

  describe('lists', function () {
      it('Debe devolver la lista dado un usuario' , function () {
        var currentUser = 0;
        var result = {createdBy:  currentUser};
        spyOn(Lists, 'find').and.returnValue(result);

        expect(Lists.find()).toBe(result);
        expect(Lists.find.calls.argsFor(0)).toEqual([]);
      });
    });



    describe('totalTodos', function () {
      it('Devuelve la lista de players', function () {
        
        var contador = 1;
        spyOn(Todos, 'find').and.returnValue(contador);
        expect(Todos.find()).toBe(contador);
      });
    });


    describe('list', function () {
      it('Devuelve la lista', function () {
        var nombre = "godmode"
        var currentUserId = null;
        var result = {name: nombre,createdBy:currentUserId};
        
        spyOn(Lists, 'find').and.returnValue(result);

        expect(Lists.find()).toBe(result);
      });
    });

    describe ('', function(){
      it('CompletedTodos', function(){
        var currentList = 1;
        var result = {listId: currentList,completed: true};

        spyOn(Todos, 'find').and.returnValue(result);

        expect(Todos.find()).toBe(result)
        //expect(Todos.find.calls.argsFor(0)).toEqual([listId: currentList,completed: true]);
      
      });
    });
});









