var Thermostat = function() {
  this.temp = 20;
};

  Thermostat.prototype.change = function(degrees) {
    this.temp += degrees;
  };
