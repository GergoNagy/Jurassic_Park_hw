var Dinosaur = require("./dinosaur.js");

var Park = function(){
  this.enclosure = [];
}

Park.prototype = {
  addDino: function(dino){
    this.enclosure.push(dino);
  },
  removeByTipe: function(type){
    var dino = [];
      for (var i = 0; i < this.enclosure.length; i++) {
      if (this.enclosure[i].type !== type){
        dino.push(this.enclosure[i]);
      }
    }
    this.enclosure = dino;
  },
  offspringMoreThanTwo: function(number){
    var dino = [];
    for (var i = 0; i < this.enclosure.length; i++) {
      if (this.enclosure[i].offSpring >= number){
        dino.push(this.enclosure[i]);
      }
    }
    this.enclosure = dino;
  }
  
}

module.exports = Park;
