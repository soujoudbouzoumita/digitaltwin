Smart Plant Digital Twin
This project implements a digital twin system for monitoring and managing plants using IoT sensors, FIWARE Orion Context Broker, and Node-RED.
Architecture Overview
The Smart Plant Digital Twin system consists of the following components:

Node-RED: Flow-based programming tool for sensor data acquisition, processing, and dashboard visualization
Orion Context Broker: FIWARE component for managing context data (current state of plant entities)
MongoDB: Database for storing historical sensor data and context information

Prerequisites

Docker and Docker Compose
Git (for version control)
Basic knowledge of Node-RED, FIWARE, and IoT concepts

Quick Start

Clone this repository:
git clone https://github.com/soujoudbouzoumita/smart-plant-twin.git
cd smart-plant-twin

Configure environment variables:
cp .env.example .env
# Edit .env file with your settings

Start the services:
docker-compose up -d

Access the services:

Node-RED: http://localhost:1880
Node-RED Dashboard: http://localhost:1880/ui
Orion Context Broker: http://localhost:1026/version



Setting Up Sensors
This project supports various plant monitoring sensors:

Temperature sensors
Humidity sensors
Light intensity sensors
Soil moisture sensors

Sensor data is collected via Node-RED flows that connect to the physical sensors and publish the data to the Orion Context Broker.
Development Workflow

Set up sensor data acquisition in Node-RED
Create entity models for your plants in Orion
Configure dashboards in Node-RED to visualize sensor data
Set up notification thresholds for critical conditions

License
MIT License
