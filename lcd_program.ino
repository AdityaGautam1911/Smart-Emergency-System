#include <LiquidCrystal.h>
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);
}

void loop() {
  lcd.setCursor(0, 0);
  if (Serial.available() > 0) {
    char direc = Serial.read(); // to fetched from device using ESP32, currently serial monitor
    if (direc == 'N') {
      lcd.print("Go North ^");
    } else if (direc == 'S') {
      lcd.print("Go South v");
    } else if (direc == 'W') {
      lcd.print("<- Go West");
    } else if (direc == 'R') {
      resetLCD();
    } else if (direc == 'E'){
      lcd.print("Go East ->");
    } else {
      //pass
    }
    delay(1000);
    resetLCD();  
  }
}

void resetLCD() {
  lcd.clear();
  lcd.begin(16, 2);
  lcd.setCursor(0, 0);
}

void gpsModule() {
  // #include <TinyGPS++.h>
  // #include <SoftwareSerial.h>

  // TinyGPSPlus gps;

  // const int RXPin = 4;
  // const int TXPin = 3;
  // const int GPSBaud = 9600;

  // SoftwareSerial gpsSerial(RXPin, TXPin);

  // void setup() {
  //   Serial.begin(115200);      
  //   gpsSerial.begin(GPSBaud);    
  //   Serial.println("Fetching GPS location...");
  // }

  // void loop() {
  //   while (gpsSerial.available() > 0) {
  //     gps.encode(gpsSerial.read());
  //   }

  //   if (gps.location.isUpdated()) {
  //     float latitude = gps.location.lat();
  //     float longitude = gps.location.lng();
  //     Serial.print("Latitude: ");
  //     Serial.println(latitude, 6);  
  //     Serial.print("Longitude: ");
  //     Serial.println(longitude, 6); 
  //   } else {
  //     Serial.println("Waiting for GPS signal...");
  //   }

  //   delay(1000); 
  // }
}
