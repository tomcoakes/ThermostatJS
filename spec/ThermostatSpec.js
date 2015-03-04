describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("upon initialization", function() {

    it("is set to 20 degrees", function() {
      expect(thermostat.temp).toBe(20);
    });

  });

  describe("can have the temperature", function() {

    it("increased", function() {
      thermostat.changeTemperature(5);
      expect(thermostat.temp).toBe(25);
    });

    it("decreased", function() {
      thermostat.changeTemperature(-5);
      expect(thermostat.temp).toBe(15);
    });

    it("reset to 20 degrees", function() {
      thermostat.changeTemperature(20);
      thermostat.tempReset();
      expect(thermostat.temp).toBe(20);
    });

  });

  describe("has temperature caps so that it", function() {

    it("cannot go lower than 10 degrees", function() {
      thermostat.changeTemperature(-15);
      expect(thermostat.temp).toBe(10);
    });

    it("cannot go higher than 32 degrees", function() {
      thermostat.powerSavingMode(false);
      thermostat.changeTemperature(20);
      expect(thermostat.temp).toBe(32);
    });

  });

  describe("power saving mode", function() {

    it("restricts the max temperature to 25", function() {
      thermostat.changeTemperature(20);
      expect(thermostat.temp).toBe(25);
    });

    it("lowers the temperature to 25 degrees if the temperature is already above that", function() {
      thermostat.powerSavingMode(false);
      thermostat.changeTemperature(20);
      thermostat.powerSavingMode(true);
      expect(thermostat.temp).toBe(25);
    });

  });

  describe("energy usage", function() {

    it("uses a high amount of energy when the temperature is 25 or above", function() {
      thermostat.changeTemperature(20);
      expect(thermostat.energyUsage()).toEqual("high");
    });

    it("uses a medium amount of energy when the temperature is between 18 and 24", function() {
      expect(thermostat.energyUsage()).toEqual("medium");
    });

    it("uses a low amount of energy when the temperature is below 18", function() {
      thermostat.changeTemperature(-5);
      expect(thermostat.energyUsage()).toEqual("low");
    });

  });

});