
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://parasravya:123456@@ds117489.mlab.com:17489/sravya_db';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

/*
url :   mongodb://root:secure@ds161483.mlab.com:61483/asefall17
 */