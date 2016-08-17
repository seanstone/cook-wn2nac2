"use strict";

var notConnectedElement = document.getElementById("not-connected-status");
var connectedElement = document.getElementById("connected-status");
var calibratedElement = document.getElementById("calibrated-status");

function home_weather_main()
{
    isHome = true;

    glbsens.windooObservation = new WindooObservation();
    glbsens.windooObservation.enable();

    glbsens.currentMeasurement = new WindooMeasurement();
}