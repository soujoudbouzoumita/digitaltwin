Smart Plant Digital Twin - Setup Guide
Ce guide vous aidera à installer et configurer le système de jumeau numérique de plantes (Smart Plant Digital Twin).

Prérequis
Avant de commencer, assurez-vous d'avoir installé les logiciels suivants :

Docker et Docker Compose (version 1.27.0 ou supérieure)
Git pour cloner le dépôt
Un éditeur de texte comme Visual Studio Code
Installation
1. Cloner le dépôt
bash
git clone https://github.com/soujoudbouzoumita/smart-plant-twin.git
cd smart-plant-twin
2. Configuration de l'environnement
Copiez le fichier d'environnement d'exemple :

bash
cp .env.example .env
Ouvrez le fichier .env et configurez les variables d'environnement selon vos besoins :

# MongoDB Credentials
MONGO_USER=root
MONGO_PASSWORD=votre_mot_de_passe_sécurisé

# Orion Context Broker
ORION_PORT=1026

# Node-RED
NODE_RED_PORT=1880

# Project Configuration
PROJECT_NAME=smart-plant-twin
TIMEZONE=Europe/Paris

# Optional: Notification Services
# TELEGRAM_BOT_TOKEN=your_telegram_bot_token
# SMTP_SERVER=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your_email@gmail.com
# SMTP_PASSWORD=your_email_password
3. Lancer les services
Utilisez Docker Compose pour démarrer tous les services :

bash
docker-compose up -d
Cette commande va télécharger les images nécessaires et démarrer les conteneurs pour MongoDB, Orion Context Broker et Node-RED.

4. Vérifier l'installation
Vérifiez que tous les services sont en cours d'exécution :

bash
docker-compose ps
Vous devriez voir tous les services avec le statut "Up".

Accès aux interfaces
Une fois les services démarrés, vous pouvez accéder aux différentes interfaces :

Node-RED Dashboard : http://localhost:1880/ui
Node-RED Editor : http://localhost:1880
Orion Context Broker : http://localhost:1026/version
Configuration initiale
Configuration des modèles de données
Le système utilise des modèles de données prédéfinis pour les plantes et les capteurs. Ces modèles sont déjà configurés, mais vous pouvez les personnaliser selon vos besoins en modifiant les fichiers JSON dans le dossier models/.

Configuration des seuils d'alerte
Les seuils d'alerte pour les différents paramètres (température, humidité, luminosité, etc.) sont définis dans le fichier models/thresholds.json. Modifiez ce fichier pour ajuster les seuils selon les espèces de plantes que vous surveillez.

Ajout de plantes et de capteurs
Création d'une nouvelle entité de plante
Vous pouvez créer une nouvelle entité de plante en envoyant une requête POST à l'API Orion Context Broker :

bash
curl -X POST \
  http://localhost:1026/v2/entities \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "Plant:002",
  "type": "Plant",
  "name": {
    "type": "Text",
    "value": "Ficus Lyrata"
  },
  "species": {
    "type": "Text",
    "value": "Ficus lyrata"
  },
  "temperature": {
    "type": "Number",
    "value": 22.5,
    "metadata": {
      "unitCode": {
        "type": "Text",
        "value": "CEL"
      }
    }
  },
  "humidity": {
    "type": "Number",
    "value": 65.0,
    "metadata": {
      "unitCode": {
        "type": "Text",
        "value": "P1"
      }
    }
  },
  "lightIntensity": {
    "type": "Number",
    "value": 1200,
    "metadata": {
      "unitCode": {
        "type": "Text",
        "value": "LUX"
      }
    }
  },
  "soilMoisture": {
    "type": "Number",
    "value": 72.0,
    "metadata": {
      "unitCode": {
        "type": "Text",
        "value": "P1"
      }
    }
  }
}'
Configuration des capteurs
Vous pouvez configurer des capteurs physiques pour envoyer des données à votre système de jumeau numérique en utilisant les flows Node-RED. Consultez la documentation des flows dans le dossier services/node-red/flows/ pour plus d'informations.

Utilisation du tableau de bord
Le tableau de bord Node-RED vous permet de surveiller et de gérer vos plantes. Voici les principales fonctionnalités :

Vue d'ensemble : Affiche l'état actuel de toutes vos plantes
Vue jumeau numérique : Visualisation 3D de la plante et de son environnement
Données historiques : Graphiques des données historiques des capteurs
Paramètres : Configuration des seuils d'alerte et des notifications
Dépannage
Les services ne démarrent pas
Vérifiez les journaux Docker pour identifier les erreurs :

bash
docker-compose logs
Pour un service spécifique :

bash
docker-compose logs mongodb
docker-compose logs orion
docker-compose logs node-red
Réinitialisation de la base de données
Si vous devez réinitialiser complètement la base de données :

bash
docker-compose down -v
docker-compose up -d
Support
Si vous rencontrez des problèmes, veuillez ouvrir un ticket sur le dépôt GitHub ou contacter l'équipe de support à support@votre-organisation.com.

