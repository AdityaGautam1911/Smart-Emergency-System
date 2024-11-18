# Arduino Alert System with Real-Time Notification and Monitoring Dashboard

An Arduino-based system for real-time alerts and environmental monitoring, providing instant notifications and a web dashboard for comprehensive insights.

## Features

1. **Button-Triggered Email Alert**  
   - Sends a "Help Alert" email on button press with a debounce mechanism to prevent duplicate alerts

2. **Photoresistor-Based Light Detection**  
   - Detects changes in light levels to flag potential suspicious activity when transitioning from bright to dark areas

3. **Gas Sensor for Air Quality Monitoring**  
   - Tracks air quality (displays readings as proof of concept), with potential for future alert integration for hazardous conditions

4. **Interactive Online Dashboard**  
   - Displays daily, weekly, and monthly reports of footstep counts, dangerous zones visited, and gas concentration
   - Real-time alert popups for button presses and sensor triggers

## Project Setup

### Hardware
- Arduino board with button, photoresistor,temperature sensor  and gas sensor

### Software
- Arduino IDE for code upload
- Node.js with SerialPort for email notification
- Dashboard for data visualization and alert popups

## Running the Project

1. **Install Dependencies**
   npm i 
   Start the Email Notification Script 
   run sendHelpEmail.js

Open the Dashboard

Access the dashboard by opening http://localhost:3000 in your web browser  
Ensure Wi-Fi connectivity for seamless operation 



Additional Ideas

Expand alerts to SMS or app notifications 
Add motion detection and GPS tracking for enhanced monitoring 

Screenshots

Arduino Setup 
![image](https://github.com/user-attachments/assets/a0b1f370-789a-450d-8219-5185c749b6f6)

![image](https://github.com/user-attachments/assets/e71eb46a-e952-4379-bebc-b706273c103d)

LCD Screen Setup
![image](https://github.com/user-attachments/assets/51c24379-2986-4196-b64b-f2f32ac858a6)


Website Dashboard 
![pic2](https://github.com/user-attachments/assets/b891cfb0-053e-41fb-9f75-31b07a7fce4c)


Email Alert Screenshot 
![image](https://github.com/user-attachments/assets/b8d16077-5e78-46c7-a535-d8b49e767eba)


Alert Popup with Console Logs 
![pic1](https://github.com/user-attachments/assets/462fc095-15a4-4269-94f3-835db78ef5c7)
