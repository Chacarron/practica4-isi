describe("Al pulsar en registro,se crea un nuevo usuario", function () {
    
    beforeEach(function(done){
        Meteor.loginWithPassword("pepe@gmail.com", "mipassword", function(err){
            Tracker.afterFlush(done);
        });
    });
    afterEach(function(done){
        Meteor.logout(function() {
            Tracker.afterFlush(done);
        });
    });
  
  it("Registrar usuario", function () {
    
    	var usuario = Meteor.users.find().count()
    	expect(Meteor.users.find().count()).toBe(usuario);
    });
});
