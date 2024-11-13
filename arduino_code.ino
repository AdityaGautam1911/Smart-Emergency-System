int state = 0;
bool wasPressed = false;

void setup()
{
    pinMode(2, INPUT);
    Serial.begin(9600); // Start serial communication at 9600 baud
}

void loop()
{
    state = digitalRead(2);

    if (state == HIGH && !wasPressed)
    {
        Serial.println("Help"); // Send "Help" message over Serial
        wasPressed = true;
    }
    else if (state == LOW)
    {
        wasPressed = false;
    }

      delay(15);
     
}