# Aims
This project aims to gather data from some sensors which do microalgae monitoring and real-time plot it over internet at plot.ly without ethernet shield or wifi shield!
It uses node.js, firmata protocol, and johnny-five library over arduino board.

# Things to Prepare
We need:
Arduino UNO board
USB cable (type A to type B)
Some analog sensors: density sensor, light intesity sensor, CO2 sensor, soil moisture sensor, temperature sensor

# Things to Install
Install first:
Arduino software (http://arduino.cc/en/main/software)
Node.js (http://nodejs.org/download)
plotly library (included in node.js installer, install using nmp command at cmdn at project folder)
johnny-five library (include in node.js installer, install using npm command at cmd at project folder)

# Code to write
Write to Arduino board:
Standard firmata sketch at example at Arduino software file menu
Write to project folder:
raw.js with some minor change at username, API key,and token key

# Welldone!
Write 'node raw.js' at cmd at project folder
Open URL given by plotly at cmd using internet browser
Magic happens!





