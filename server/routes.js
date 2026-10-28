'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {
  // Insert routes below
  app.use('/api/images', require('./api/image'));
  app.use('/api/routes', require('./api/routes'));

  // All undefined asset or api routes should return a 404
  app.route(['/api/*path', '/auth/*path', '/components/*path', '/app/*path', '/bower_components/*path', '/assets/*path'])
    .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/{*path}').get(function(req, res) {
    res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  });
};
