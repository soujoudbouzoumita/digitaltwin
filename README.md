# Smart Plant House – Digital Twin Project 🌿

## Overview
This is a simple Digital Twin system for a plant house that simulates temperature and humidity monitoring. The data is managed using a Context Broker (Orion), and alerts are generated if values exceed specified limits.

## Features
- Simulated IoT sensors for temperature and humidity
- Orion Context Broker for storing and updating plant house state
- Subscriptions to trigger alerts on threshold breaches
- Docker Compose deployment
- Easy to extend with real sensors in the future

## Stack
- Python (simulators)
- Orion Context Broker
- MongoDB
- Docker, Docker Compose

## How It Works
1. Simulators send temperature/humidity updates to Orion.
2. Orion updates the twin's state.
3. Subscriptions watch for abnormal values.
4. Alerts are logged or sent to a simple endpoint.

