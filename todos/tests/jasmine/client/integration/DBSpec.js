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
    var nombre = "Comer";
    var userId = Meteor.userId();

    $("#adios").val(nombre);
    $("#adios").submit();

    setTimeout(function () {
      expect(Lists.findOne({name: nombre, 
                            createdBy: userId})).toBe(true);
      done();
    },100);
  });

  it("Se registra un usuario", function () {
    var nombre = "god@gmail.com";
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
