//PLOT DATA 4 SENSOR KE INTERNET MENGGUNAKAN PLOTLY + NODE.JS
//DIKEMBANGKAN OLEH: MC.IOT 
//UNTUK: SISTEM MONITORING MICROALGAE PADA ACARA HACKATHON 2015 INDONESIA
//TANGGAL BUAT: 8 MARET 2015
//LISENSI: CREATIVE COMMONS CC-BY-SA
//MORE INFO: makesthingbigger@gmail.com

var plotly = require('plotly')("mc.iot", "3qu6drlw7o");
var five = require("johnny-five");
var board = new five.Board();
var data = [{x:[], y:[], stream:{token:'vi9u545yxv', maxpoints:200}},
            {x:[], y:[], stream:{token:'8dmbmawna1', maxpoints:200}},
			{x:[], y:[], stream:{token:'1avrcoytps', maxpoints:200}},
			{x:[], y:[], stream:{token:'9ct5qccgd6', maxpoints:200}}];
var layout = {fileopt : "overwrite", filename : "Perfomance of My CO2 Eater!"};

board.on("ready", function() {

  //DEFINISIKAN SENSOR DI SINI
  var sensor_1 = new five.Sensor({
    pin: "A0",
    freq: 1000
  });
  var sensor_2 = new five.Sensor({
    pin: "A1",
    freq: 1000
  });
  var sensor_3 = new five.Sensor({
    pin: "A2",
    freq: 1000
  });
  var sensor_4 = new five.Sensor({
    pin: "A3",
    freq: 1000
  });
  
  //INISIASI PLOTTING DI SINI
  plotly.plot(data,layout,function (err, res) {
    if (err) console.log(err);
    console.log(res);
	 
	//DEFINISIKAN STREAMING DI SINI
	var stream_1 = plotly.stream('vi9u545yxv', function (err, res) {
      if (err) console.log(err);
      console.log(res);
	});
	var stream_2 = plotly.stream('8dmbmawna1', function (err, res) {
      if (err) console.log(err);
      console.log(res);
    });
	var stream_3 = plotly.stream('1avrcoytps', function (err, res) {
      if (err) console.log(err);
      console.log(res);
    });
	var stream_4 = plotly.stream('9ct5qccgd6', function (err, res) {
      if (err) console.log(err);
      console.log(res);
    });
	
	//KONFIGURASI DATA SENSOR DI SINI
	sensor_1.on("data", function() {
      var raw_value_1 = this.value;
	  var raw_range_1 = 1024;
	  var log_range_1 = 5.0;
	  var log_value_1 = raw_value_1 * log_range_1 / raw_range_1;	//KALIBRASI SENSOR 1 DI SINI
      var data_1 = {
        x : getDateString(),
        y : log_value_1
      };
      console.log(data_1);
	  stream_1.write(JSON.stringify(data_1)+'\n');
	});
	
	sensor_2.on("data", function() {
      var raw_value_2 = this.value;
	  var raw_range_2 = 1024;
	  var log_range_2 = 5.0;
	  var log_value_2 = raw_value_2 * log_range_2 / raw_range_2;	//KALIBRASI SENSOR 2 DI SINI
      var data_2 = {
        x : getDateString(),
        y : log_value_2
      };
      console.log(data_2);
	  stream_2.write(JSON.stringify(data_2)+'\n');
	});
	
	sensor_3.on("data", function() {
      var raw_value_3 = this.value;
	  var raw_range_3 = 1024;
	  var log_range_3 = 5.0;
	  var log_value_3 = raw_value_3 * log_range_3 / raw_range_3;	//KALIBRASI SENSOR 3 DI SINI
      var data_3 = {
        x : getDateString(),
        y : log_value_3
      };
      console.log(data_3);
	  stream_3.write(JSON.stringify(data_3)+'\n');
	});
	
	sensor_4.on("data", function() {
      var raw_value_4 = this.value;
	  var raw_range_4 = 1024;
	  var log_range_4 = 5.0;
	  var log_value_4 = raw_value_4 * log_range_4 / raw_range_4;	//KALIBRASI SENSOR 4 DI SINI
      var data_4 = {
        x : getDateString(),
        y : log_value_4
      };
      console.log(data_4);
	  stream_4.write(JSON.stringify(data_4)+'\n');
	});
  });
});

//KONFIGURASI DATA WAKTU DI SINI
function getDateString () {
  var time = new Date();
  var datestr = new Date(time).toString().replace("GMT+0700", "").replace("(SE Asia Standard Time)", "");
  return datestr;
}
