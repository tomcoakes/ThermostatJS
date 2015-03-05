$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#current_temp").text(function() {
    return thermostat.temp;
  });

  $("#increase").click(function() {
    checkPowerSave();
    thermostat.changeTemperature(1);
    updateTemp();
  });

  $("#decrease").click(function() {
    thermostat.changeTemperature(-1);
    updateTemp();
  });

  $("#reset").click(function() {
    thermostat.tempReset();
    updateTemp();
  });

  $("#powersave").click(function() {
    checkPowerSave();
    updateTemp();
  });

  updateTemp = function() {
    $("#current_temp").text(function() {
      return thermostat.temp;
    });
    tempColor();
  };

  tempColor = function() {
    if(thermostat.energyUsage() == "high") {
      $("#current_temp").css("color", "#EF4836");
    }
    if(thermostat.energyUsage() == "medium") {
      $("#current_temp").css("color", "orange");
    }
    if(thermostat.energyUsage() == "low") {
      $("#current_temp").css("color", "#00B16A");
    }
  };

  checkPowerSave = function() {
    if ($('#powersave').is(':checked')) {
      thermostat.powerSavingMode(true);
    } else {
      thermostat.powerSavingMode(false);
    }
  };

});