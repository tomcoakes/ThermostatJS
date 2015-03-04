describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("is set to 20 when intialized", function() {
    expect(thermostat.temp).toBe(20);
  });

  it("it can have the temperature increased", function() {
    thermostat.change(5)
    expect(thermostat.temp).toBe(25)
  });

   it("it can have the temperature lowered", function() {
    thermostat.change(-5)
    expect(thermostat.temp).toBe(15)
  });

});