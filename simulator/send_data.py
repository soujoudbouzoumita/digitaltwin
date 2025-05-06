import requests
import time
import random

ORION_URL = "http://localhost:1026/v2/entities/PlantHouse001/attrs"
HEADERS = {
    "Content-Type": "application/json",
    "Fiware-Service": "openiot",
    "Fiware-ServicePath": "/"
}

def send_data():
    while True:
        temperature = round(random.uniform(18.0, 35.0), 2)
        humidity = round(random.uniform(30.0, 90.0), 2)

        data = {
            "temperature": {
                "value": temperature,
                "type": "Float"
            },
            "humidity": {
                "value": humidity,
                "type": "Float"
            }
        }

        try:
            response = requests.patch(ORION_URL, json=data, headers=HEADERS)
            print(f"Sent: Temp={temperature}°C, Humidity={humidity}%, Status={response.status_code}")
        except Exception as e:
            print(f"Error sending data: {e}")
        time.sleep(5)

if __name__ == "__main__":
    send_data()
