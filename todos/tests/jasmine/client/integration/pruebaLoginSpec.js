describe("Testing Login & Logout(1)", function () {
    
    it("Should be 1 logged user", function () {
	var email = "godmode@gmail.com"
	var pass = "godmode"
	$("#emailRegister").val(email);
	$("#passwordRegister").val(pass);
	$("#reg").submit();

	setTimeout(function (done) {
      		expect(Meteor.users.find().count()).toBe(1);
      	done();
    	},500);

    });
   
    it("Should be Visible 'Logout'", function () {

	setTimeout(function (done) {
      		expect($("#HacerLogout").is(":visible")).toBe(true);
      		done();
    	},500);

    });

});

describe("Testing Login & Logout(2)", function () {

    it("Should not be Visible 'Logout' ", function () {

    	expect($("#HacerLogout").is(":visible")).toBe(false);

    });	

     it("Should be 0 logged user", function () {

    	expect(Meteor.users.find().count()).toBe(0);

    });

});









