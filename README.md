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
- Arduino board with button, photoresistor, and gas sensor

### Software
- Arduino IDE for code upload
- Node.js with SerialPort for email notification
- Dashboard for data visualization and alert popups

## Running the Project

1. **Install Dependencies**
   ```bash
   npm i
   Start the Email Notification Script
bashCopynode sendHelpEmail.js

Open the Dashboard

Access the dashboard by opening http://localhost:3000 in your web browser 
Ensure Wi-Fi connectivity for seamless operation



Additional Ideas

Expand alerts to SMS or app notifications 
Add motion detection and GPS tracking for enhanced monitoring 

Screenshots

Arduino Setup 
Website Dashboard 
Email Alert Screenshot 
Alert Popup with Console Logs 
