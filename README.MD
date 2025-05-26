
# 🌿 Smart GreenHouse

Bienvenue dans le projet **Smart Plant Digital Twin** : un système de surveillance intelligente des plantes à l’aide d’un jumeau numérique. Ce projet open source permet de visualiser, surveiller et configurer en temps réel l’environnement de vos plantes grâce à un tableau de bord interactif, une base de données MongoDB et un broker de contexte NGSI (Orion Context Broker).

---

## 🚀 Fonctionnalités clés

- 🛰️ Visualisation 3D de l’état des plantes (température, humidité, luminosité, etc.)
- 📊 Monitoring temps réel via Node-RED Dashboard
- 🔔 Alertes automatiques par email ou Telegram
- 🌱 Création et gestion de nouvelles plantes et capteurs
- 🧠 Jumeau numérique configurable via des modèles JSON
- 📁 Architecture conteneurisée avec Docker Compose

---

## 📦 Structure du projet

```
smart-plant-twin/
├── docker-compose.yml          # Deployment configuration for all services
├── .env                        # Environment variables (API keys, credentials)
├── README.md                   # Project documentation and setup instructions
│
├── services/                   # Core services configuration
│   ├── orion/                  # FIWARE Orion Context Broker
│   │   └── config.json         # Orion configuration and entity models
│   │
│   ├── mongodb/                # Persistence layer
│   │   └── init-scripts/       # MongoDB initialization scripts
│   │       └── create-indexes.js
│   │
│   └── node-red/              # Node-RED service (flow orchestration)
│       ├── flows/              # Main flows for the application
│       │   ├── sensor-flows.json     # Sensor data acquisition and processing
│       │   ├── context-flows.json    # Context management with Orion
│       │   └── notification-flows.json # Alert and notification handling
│       │
│       ├── settings.js         # Node-RED configuration
│       └── dashboard/          # Dashboard configuration
│           └── ui-config.json  # UI layout and widget settings
│
├── models/                     # Digital twin data models
│   ├── plant-model.json        # Plant entity model definition
│   ├── sensor-models/          # Sensor models and configurations
│   │   ├── temperature.json
│   │   ├── humidity.json
│   │   └── light.json
│   └── thresholds.json         # Threshold configurations for alerts
│
├── data/                       # Data storage
│   ├── historical/             # Historical data storage
│   └── backups/                # Backup configurations
│
└── docs/                       # Project documentation
    ├── setup-guide.md          # Detailed setup instructions
    ├── architecture.md         # Architecture documentation
    └── api-reference.md        # API documentation

---

## ⚙️ Prérequis

- Docker & Docker Compose (v1.27+)
- Git
- Éditeur de texte (VSCode recommandé)

---

## 🛠️ Installation

```bash
git clone https://github.com/soujoudbouzoumita/smart-plant-twin.git
cd smart-plant-twin
cp .env.example .env
```

Configurez le fichier `.env` :

```env
MONGO_USER=root
MONGO_PASSWORD=smarplant123é
ORION_PORT=1026
NODE_RED_PORT=1880
PROJECT_NAME=smart-plant-twin
TIMEZONE=Afrique/Tunisie
# Notifications (optionnel)
TELEGRAM_BOT_TOKEN=...
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=...
```

---

## ▶️ Lancer les services

```bash
docker-compose up -d
```

Accéder aux interfaces :

- Node-RED Dashboard : [http://localhost:1880/ui](http://localhost:1880/ui)
- Node-RED Editor : [http://localhost:1880)
- Orion Context Broker : [http://localhost:1026/version](http://localhost:1026/version)

---

## 🧬 Ajouter une plante

Voici un exemple de requête POST pour ajouter une nouvelle entité :

```bash
curl -X POST http://localhost:1026/v2/entities -H 'Content-Type: application/json' -d '{
  "id": "Plant:002",
  "type": "Plant",
  "name": { "type": "Text", "value": "Ficus Lyrata" },
  "species": { "type": "Text", "value": "Ficus lyrata" },
  "temperature": { "type": "Number", "value": 22.5 },
  "humidity": { "type": "Number", "value": 65.0 },
  "lightIntensity": { "type": "Number", "value": 1200 },
  "soilMoisture": { "type": "Number", "value": 72.0 }
}'
```

---

## 🧾 Documentation

Le guide d’installation détaillé est disponible dans [`setup-guide.md`](./setup-guide.md).  
Les modèles de plantes se trouvent dans [`models/`](./models/).  
Les flows Node-RED sont configurés dans [`services/node-red/flows/`](./services/node-red/flows/).

---

## 🧪 Dépannage

- Pour vérifier les services :
```bash
docker-compose ps
```

- Pour voir les logs :
```bash
docker-compose logs mongodb
docker-compose logs orion
docker-compose logs node-red
```

- Pour réinitialiser :
```bash
docker-compose down -v
docker-compose up -d
```

---

## 🤝 Contribuer

Tu veux contribuer ? Clone le repo, propose des modèles ou des flows et soumets une **pull request**. Toute aide est bienvenue !


## ©️ Licence

Ce projet est sous licence MIT.

---

## 💡 Auteure

Réalisé avec passion par **Soujoud Bouzoumita** – étudiante à Sup'Com, passionnée par les jumeaux numériques et l’IoT 🌐🌿

---

