describe("Testing Login & Logout(1)", function () {
    
    beforeEach(function(done){
        Meteor.loginWithPassword("godmode@gmail.com", "godmode", function(err){
            Tracker.afterFlush(done);
        });
    });
    
    it("Should be 1 logged user", function () {

    	expect(Meteor.users.find().count()).toBe(1);

    });
  
    it("Should be Visible 'Logout'", function () {

    	expect($(".logout").is(":visible")).toBe(true);

    });

});

describe("Testing Login & Logout(2)", function () {

    beforeEach(function(done){
        Meteor.logout(function() {
            Tracker.afterFlush(done);
        });
    });

    it("Should not be Visible 'Logout' ", function () {

    	expect($(".logout").is(":visible")).toBe(false);

    });	

     it("Should be 0 logged user", function () {

    	expect(Meteor.users.find().count()).toBe(0);

    });

});









