🌱 Smart Plant Digital Twin - Guide d'installation

Ce guide vous aidera à installer et configurer le jumeau numérique de plante (Smart Plant Digital Twin).

✅ Prérequis

Avant de commencer, assurez-vous d’avoir installé :

Docker & Docker Compose (≥ 1.27.0)

Git

Un éditeur de texte (ex: Visual Studio Code)
Installation

1. Cloner le dépôt
git clone https://github.com/soujoudbouzoumita/smart-plant-twin.git
cd smart-plant-twin
2. Configuration de l’environnement
cp .env.example .env
Copiez le fichier d'exemple .env :
MongoDB
MONGO_USER=root
MONGO_PASSWORD=mot_de_passe_sécurisé
Orion Context Broker
ORION_PORT=1026
Node-RED
NODE_RED_PORT=1880
Projet
PROJECT_NAME=smart-plant-twin
TIMEZONE=Afrique/Tunisie
Services de notification (optionnel)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_email_password
🚀 Lancer les services

Utilisez Docker Compose pour démarrer les conteneurs :
docker-compose up -d
🧪 Vérifier l’installation

Vérifiez que tout fonctionne :
docker-compose ps
Tous les services devraient avoir le statut Up.

🔗 Accès aux interfaces

🏪 Node-RED Dashboard : http://localhost:1880/ui

✏️ Node-RED Editor : http://localhost:1880

📦 Orion Context Broker : http://localhost:1026/version

⚙️ Configuration initiale

📁 Modèles de données

Des modèles prédéfinis se trouvent dans le dossier models/. Vous pouvez les adapter.

🔔 Seuils d’alerte

Définis dans models/thresholds.json. Adaptez-les selon l’espèce végétale surveillée.

➕ Ajout de plantes et capteurs

🌿 Ajouter une plante

Exemple d’appel curl :
curl -X POST http://localhost:1026/v2/entities \
-H 'Content-Type: application/json' \
-d '{
  "id": "Plant:002",
  "type": "Plant",
  "name": { "type": "Text", "value": "Ficus Lyrata" },
  "species": { "type": "Text", "value": "Ficus lyrata" },
  "temperature": { "type": "Number", "value": 22.5, "metadata": { "unitCode": { "type": "Text", "value": "CEL" } } },
  "humidity": { "type": "Number", "value": 65.0, "metadata": { "unitCode": { "type": "Text", "value": "P1" } } },
  "lightIntensity": { "type": "Number", "value": 1200, "metadata": { "unitCode": { "type": "Text", "value": "LUX" } } },
  "soilMoisture": { "type": "Number", "value": 72.0, "metadata": { "unitCode": { "type": "Text", "value": "P1" } } }
}'
🧰 Ajouter des capteurs

Utilisez Node-RED pour simuler ou connecter des capteurs physiques. Consultez les flows dans services/node-red/flows/.

📊 Utilisation du tableau de bord

Le dashboard Node-RED permet :

🔍 Vue d’ensemble des plantes

🌿 Visualisation jumeau numérique

📈 Historique des données

⚠️ Configuration des seuils et alertes

🛠️ Dépannage

Les services ne démarrent pas ?

Vérifiez les logs :
docker-compose logs
Pour un service spécifique :
docker-compose logs mongodb
docker-compose logs orion
docker-compose logs node-red
Réinitialiser la base de données
docker-compose down -v
docker-compose up -d
