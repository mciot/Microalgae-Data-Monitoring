#include "U8glib.h"
#include <OneWire.h>
#include <DallasTemperature.h>
#include <Servo.h>

#define ONE_WIRE_BUS 2 /*-(Connect to Pin 2 )-*/
OneWire ourWire(ONE_WIRE_BUS);
DallasTemperature sensors(&ourWire);
Servo myservo;
int pos=0;
int hasil;

U8GLIB_NHD_C12864 u8g(13, 11, 10, 9, 8);	// SPI Com: SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8

void draw(void) {
  sensors.requestTemperatures();
  //float sensorVal = sensors.getTempCByIndex(0);
  char temp[5];
  u8g.setFont(u8g_font_unifont);
  dtostrf(sensors.getTempCByIndex(0),5,1,temp);
  u8g.drawStr(0,10,"Suhu :");
  u8g.drawStr(60,10,temp);
  u8g.drawStr(90,10,"\260C");
}

void setup(void) {
  u8g.setRot180();
  u8g.setContrast(1);
  if ( u8g.getMode() == U8G_MODE_R3G3B2 ) {
    u8g.setColorIndex(255);     // white
  }
  else if ( u8g.getMode() == U8G_MODE_GRAY2BIT ) {
    u8g.setColorIndex(255);         // max intensity
  }
  else if ( u8g.getMode() == U8G_MODE_BW ) {
    u8g.setColorIndex(255);         // pixel on
  }
  else if ( u8g.getMode() == U8G_MODE_HICOLOR ) {
    u8g.setHiColorByRGB(255,255,255);
  }
  Serial.begin(9600);
  delay(1000);
  sensors.begin();
  myservo.attach(6);
}

void loop(void) {
  u8g.firstPage();  
  do {
    draw();
  } while( u8g.nextPage() ); 
  myservo.write(90);
  delay(500);
  u8g.firstPage();  
  do {
    draw();
  } while( u8g.nextPage() ); 
  myservo.write(180);
  delay(500);
}
