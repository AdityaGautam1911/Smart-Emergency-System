int state = 0;
bool wasPressed = false;
int lightThreshold = 200; // Adjust this threshold
int photoresistorPin = A0;

void setup()
{
  pinMode(2, INPUT);
  Serial.begin(9600); // serial communication at 9600 baud
}

void loop()
{
  // Read button state
  state = digitalRead(2);
  // Read light level from the photoresistor
  int lightLevel = analogRead(photoresistorPin);

  // Check if the button is pressed or the light level is low
  if ((state == HIGH && !wasPressed) || lightLevel < lightThreshold)
  {
    Serial.println("Help"); // Send "Help" message over Serial
    wasPressed = true;
  }
  else if (state == LOW && lightLevel >= lightThreshold)
  {
    wasPressed = false;
  }

  delay(15); 
}
