var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    fetchRegisteredUsersAndRender(req, res);
});

router.get('/landingPageData', function(req, res, next) {
    /*
    var RegisteredUsers1 = {
        "user-name": "Manu Mathew",
        "date-of-birth" : "14-06-1982",
        "gender" : "Male",
        "register-for-newsletter" : true,
        "interests" : ["Reading", "Writing"]
    };
    */
    //res.render('index', { title: 'Registered Users', RegisteredUsers: RegisteredUsers1 });
});

function fetchRegisteredUsersAndRender(req, res) {
    var records;
    var db = req.dbObject;
    var registeredUsersCollection = db.get('RegisteredUsers');
    registeredUsersCollection.find({}, function(err, registeredUsers) { 
        
        //Render
        res.render('index', { title: 'Registered Users', RegisteredUsers: registeredUsers });
    });   
}

module.exports = router;