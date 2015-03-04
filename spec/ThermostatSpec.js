describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("is set to 20 when intialized", function() {
    expect(thermostat.temp).toBe(20);
  });

  it("it can have the temperature increased", function() {
    thermostat.changeTemperature(5);
    expect(thermostat.temp).toBe(25);
  });

  it("it can have the temperature lowered", function() {
    thermostat.changeTemperature(-5);
    expect(thermostat.temp).toBe(15);
  });

  it("cannot go lower than 10 degrees", function() {
    thermostat.changeTemperature(-15);
    expect(thermostat.temp).toBe(10);
  });

  it("cannot go higher than 32 degrees", function() {
    thermostat.powerSavingMode(false);
    thermostat.changeTemperature(20);
    expect(thermostat.temp).toBe(32);
  });

  it("cannot go higher than 25 if power saving is on", function() {
    thermostat.changeTemperature(20);
    expect(thermostat.temp).toBe(25);
  });

  it("should lower the temperature to 25 when power saving is turned on and temperature is above", function() {
    thermostat.powerSavingMode(false);
    thermostat.changeTemperature(20);
    thermostat.powerSavingMode(true);
    expect(thermostat.temp).toBe(25);
  });

  it("should be able to reset to 20", function() {
    thermostat.changeTemperature(20);
    thermostat.tempReset();
    expect(thermostat.temp).toBe(20);
  });

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