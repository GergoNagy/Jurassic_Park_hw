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
    dinosaur3 = new Dinosaur("Triceratops", 1);
  })

  it("hasSize", function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it("addDinoToThePark", function(){
    park.addDino(dinosaur1);
    assert.strictEqual(park.enclosure[0].type, "Tyrannosaurus");
  })

  it("Remove by type", function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.removeByTipe("Tyrannosaurus");
    assert.strictEqual(park.enclosure[0].type, "Velociraptor");
  })

  it("if offspring more than 2", function() {
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.offspringMoreThanTwo(2);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it("how many dino after a year", function(){
    park.addDino(dinosaur2);
    park.populationByYear(1,1);
    console.log("",park);
    console.log("after",park.enclosure[0].offSpring);
    assert.strictEqual(park.populationByYear, 7);
  })

})
