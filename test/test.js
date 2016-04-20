const assert = require('assert');
const app = require('../server');
const request = require('request');
const fixtures = require('./fixtures');

describe('Server', () => {

  before(done => {
    this.port = 9876;

    this.server = app.listen(this.port, (error, results) => {
      if (error) { return done(error); }
      done();
    });

    this.request = request.defaults({
      baseUrl: 'http://localhost:9876'
    });
  });

  after( () => {
    this.server.close();
  });

  it('should exist', () => {
    assert(app);
  });
});
