var Thermostat = function() {
  DEFAULT_TEMPERATURE = 20;
  MINIMUM_TEMPERATURE = 10;
  MAX_TEMPERATURE = 32;
  CAPPED_TEMPERATURE = 25;
  this.temp = DEFAULT_TEMPERATURE;
  this.powerSaving = true;
};

  Thermostat.prototype.changeTemperature = function(degrees) {
    this.temp += degrees;
    this._tempControl();
  };

  Thermostat.prototype.powerSavingMode = function(mode) {
    mode === false ? this.powerSaving = false : this.powerSaving = true;
    this._tempControl();
  };

  Thermostat.prototype.tempReset = function() {
    this.temp = DEFAULT_TEMPERATURE;
  };

  Thermostat.prototype.energyUsage = function() {
    if (this.temp >= 25) {
      return "high";
    } else if (this.temp >= 18 && this.temp <= 24) {
      return "medium";
    } else if (this.temp <= 17) {
      return "low";
    }
  };

  Thermostat.prototype._tempControl = function() {
    if (this.temp < MINIMUM_TEMPERATURE) {this.temp = MINIMUM_TEMPERATURE};
    if (this.powerSaving === true && this.temp > CAPPED_TEMPERATURE) {this.temp = CAPPED_TEMPERATURE};
    if (this.powerSaving === false && this.temp > MAX_TEMPERATURE) {this.temp = MAX_TEMPERATURE};
  };
