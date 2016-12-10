import { Meteor } from 'meteor/meteor';

Meteor.publish("chats", function(){
    return Chats.find({});
});

Meteor.publish(null, function(){
    return Meteor.users.find({});
});

// start up script that creates some users for testing
// users have the username 'user1@test.com' .. 'user8@test.com'
// and the password test123 

Meteor.startup(() => {
	if (!Meteor.users.findOne()){
      for (let i=1; i<9; i++){
        let email = "user"+i+"@test.com";
        let username = "user"+i;
        let avatar = "ava"+i+".png"
        console.log("creating a user with password 'test123' and username/ email: "+email);
        Meteor.users.insert({
        	profile: {username:username, avatar:avatar}, 
        	emails: [{address:email}],
        	services: {
        		password: {"bcrypt": "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO"}
        	}
        });
      }
    } 
});
