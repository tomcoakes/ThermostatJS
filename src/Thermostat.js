var Thermostat = function() {
  this.temp = 20;
  this.powerSaving = true;
};

  Thermostat.prototype.change = function(degrees) {
    this.temp += degrees;
    this._tempControl();
  };

  Thermostat.prototype.powerSavingMode = function(mode) {
    mode == false ? this.powerSaving = false : this.powerSaving = true;
  };

  Thermostat.prototype._tempControl = function() {
    if (this.temp < 10) { this.temp = 10 };
    
    if (this.powerSaving == true) {
      (this.temp > 25) ? this.temp = 25 : this.temp;
    } else {
      (this.temp > 32) ? this.temp = 32 : this.temp;
    };

  };
