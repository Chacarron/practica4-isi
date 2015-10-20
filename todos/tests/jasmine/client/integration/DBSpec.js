describe("Database Test", function () {

    it("Should be 2 items in List", function () {

	var Lista = Lists.find();
	setTimeout(function(done){
	    expect(Todos.find().count()).toBe(2);
	    done();
        },500);
    });


});

describe("Database Test2", function () {
    
  it("Añade un elemento a la lista", function () {
    var nombre = "GOD";
    var userId = Meteor.userId();

    $("#adios").val(nombre);
    $("#adios").submit();

    setTimeout(function (done) {
      expect(Lists.findOne({name: nombre, 
                            createdBy: userId})).toBe(true);
      done();
    },100);

    setTimeout(function (done) {
      expect($(":contains('GOD')")).toBeInDOM();
      done();
    },100);

  });

  it("Se registra un usuario", function () {
    var nombre = "godmode@gmail.com";
    var contrasena = "godmode";
    var userId = Meteor.userId();

    $("#emailRegister").val(nombre);
    $("#passwordRegister").val(contrasena);
    $("#reg").submit();

    setTimeout(function () {
      expect(Todos.findOne({name: nombre, 
                            createdBy: userId})).toBe(true);
      done();
    },100);
  });

});
