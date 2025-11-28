# Smart Waste Dustbin System Using Arduino

A comprehensive IoT solution for smart waste management in urban environments.

## Project Overview

This project presents an innovative Arduino-based smart waste management solution that combines IoT technology with environmental sustainability to create cleaner, more efficient cities. The system addresses the inefficiencies of traditional waste collection methods that lead to overflowing bins, unnecessary labor costs, and environmental harm.

## Key Features

- **Real-time Monitoring**: Ultrasonic and weight sensors continuously monitor fill levels
- **IoT Connectivity**: GSM module enables remote monitoring and alerts
- **Automated Alerts**: Notification system for waste collection when bins reach capacity
- **Cost-Effective**: Total system cost ~₹5,824 (approximately $65 USD)
- **Environmental Impact**: Reduces overflow incidents and optimizes collection routes

## Components

1. Arduino UNO - Main microcontroller
2. HC-SR04 Ultrasonic Sensor - Distance measurement for fill level detection
3. TowerPro SG90 Servo Motor - Controls lid movement
4. GSM Module - Enables IoT connectivity for remote monitoring
5. PIR Motion Sensor - Detects movement for security and monitoring
6. Power Supply Components - 9V power supply, wires, LEDs, and buzzer

## Presentation

The project includes a detailed presentation with diagrams and visuals explaining:
- Problem statement and solution approach
- System architecture and component integration
- Implementation results and cost analysis
- Environmental benefits and future enhancements

## Team Members

- Sanket Jadhav - Project Lead
- Omprakash Singh Parihar - Hardware & Sensors
- Vaishnavi Yadav - UI & Data Visualization
- Smit Bahadure - AI & Research Department

## Getting Started

### Prerequisites

- Arduino IDE
- Node.js (version 18+ recommended)
- Expo CLI for mobile app development

### Installation

1. Clone the repository
2. Install dependencies for both web and mobile apps:
   ```bash
   cd create-anything/_/apps/web
   npm install
   
   cd ../mobile
   npm install
   ```

### Running the Applications

#### Web Application
```bash
cd create-anything/_/apps/web
npm run dev
```

#### Mobile Application
```bash
cd create-anything/_/apps/mobile
npx expo start
```

## License

This project is developed for educational and environmental awareness purposes.

## Acknowledgments

This project is a capstone engineering project developed as part of Computer Science and Electronics Engineering curriculum.