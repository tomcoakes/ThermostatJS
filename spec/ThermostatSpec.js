describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("is set to 20 when intialized", function() {
    expect(thermostat.temp).toBe(20);
  });

  it("it can have the temperature increased", function() {
    thermostat.change(5);
    expect(thermostat.temp).toBe(25);
  });

   it("it can have the temperature lowered", function() {
    thermostat.change(-5);
    expect(thermostat.temp).toBe(15);
  });

   it("cannot go lower than 10 degrees", function() {
    thermostat.change(-15);
    expect(thermostat.temp).toBe(10);
   });

   it("cannot go higher than 32 degrees", function() {
    thermostat.powerSavingMode(false);
    thermostat.change(20);
    expect(thermostat.temp).toBe(32);
   });

   it("cannot go higher than 25 if power saving is on", function() {
    thermostat.powerSavingMode(true);
    thermostat.change(20);
    expect(thermostat.temp).toBe(25);
   });

});