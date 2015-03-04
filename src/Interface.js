    var thermostat = new Thermostat();

    $("#current_temp").text(function() {
      return thermostat.temp;
    });

    $("#increase").click(function() {
      checkPowerSave();
      thermostat.change(1);
      updateTemp();
    });

    $("#decrease").click(function() {
      thermostat.change(-1);
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
      if(thermostat.temp >= 28) {
        $("#current_temp").css("color", "red");
      }
      if(thermostat.temp >= 23 && thermostat.temp <= 27) {
        $("#current_temp").css("color", "orange");
      }
      if(thermostat.temp >= 17 && thermostat.temp <= 22) {
        $("#current_temp").css("color", "green");
      }
      if(thermostat.temp <= 16) {
        $("#current_temp").css("color", "blue");
      }
    };

    checkPowerSave = function() {
      if ($('#powersave').is(':checked')) {
        thermostat.powerSavingMode(true);
      } else {
        thermostat.powerSavingMode(false);
      }
    };