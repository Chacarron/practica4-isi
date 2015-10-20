describe("Database Test", function () {

    it("Should be 2 items in List", function () {

	var Lista = Lists.find();
	setTimeout(function(done){
	    expect(Todos.find().count()).toBe(2);
	    done();
        },500);
    });


});

describe("Database Test", function () {

    $("#adios").val("GOD")
    $("#adios").submit()
    
//comprobar que ha creado el il

});
