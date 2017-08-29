var Dinosaur = require("./dinosaur.js");

var Park = function(){
  this.enclosure = [];
}

Park.prototype = {
  addDino: function(dino){
    this.enclosure.push(dino);
  },
  removeByTipe: function(type){
    for( var i = this.enclosure.length - 1; i > -1; i--){
      if (this.enclosure[i].type == type) {
        this.enclosure.splice(i, 1);
      }
    }
  },
  offspringMoreThanTwo: function(number){
    for( var i = this.enclosure.length - 1; i > -1; i--){
      if (this.enclosure[i].offSpring <= number){
        this.enclosure.splice(i, 1);
      }
    }
  },
  populationByYear: function(numberOfDino, year){
    this.enclosure[0].offSpring;
  }
}

module.exports = Park;
