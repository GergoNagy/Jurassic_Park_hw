var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function(){

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach( function(){
    park = new Park;
    dinosaur1 = new Dinosaur("Tyrannosaurus", 4);
    dinosaur2 = new Dinosaur("Velociraptor", 6);
    dinosaur3 = new Dinosaur("Triceratops", 2);
  })

  it("hasSize", function(){
    assert.strictEqual(park.enclosure.length, 0);
  })
})
