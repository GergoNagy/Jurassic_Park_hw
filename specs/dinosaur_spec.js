var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){

  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach( function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 4);
    dinosaur2 = new Dinosaur("Velociraptor", 6);
    dinosaur3 = new Dinosaur("Triceratops", 2);
  })

  it("hasType", function(){
    assert.strictEqual(dinosaur3.type, "Triceratops");
  })

  it("hasOffSpring", function(){
    assert.strictEqual(dinosaur1.offSpring, 4);
  })
})
