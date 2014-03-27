'use strict';


var AdminModel = require('../models/admin'),
    auth = require('../lib/auth');


module.exports = function(app) {

    var model = new AdminModel();

    app.get('/admin', auth.isAuthenticated('admin'), auth.injectUser(), function(req, res) {
        //console.log("req.user", req.user);
        res.render('admin', model);
    });

};
