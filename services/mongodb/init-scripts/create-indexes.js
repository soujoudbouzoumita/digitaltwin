db = db.getSiblingDB('orion');

// Create collections if they don't exist
db.createCollection('entities');
db.createCollection('registrations');
db.createCollection('csubs');

// Create indexes to improve query performance
db.entities.createIndex({ '_id.id': 1 });
db.entities.createIndex({ '_id.type': 1 });
db.entities.createIndex({ '_id.servicePath': 1 });
db.entities.createIndex({ 'attrNames': 1 });

// Create historical data collection for plant measurements
db = db.getSiblingDB('plantHistory');
db.createCollection('measurements');

// Create indexes for efficient data retrieval
db.measurements.createIndex({ 'entityId': 1 });
db.measurements.createIndex({ 'timestamp': 1 });
db.measurements.createIndex({ 'entityId': 1, 'timestamp': 1 });

// Create example plant data for testing
db.measurements.insertMany([
  {
    entityId: 'Plant:001',
    entityType: 'Plant',
    attrName: 'temperature',
    attrType: 'Float',
    attrValue: 22.5,
    timestamp: new Date(Date.now() - 86400000) // 1 day ago
  },
  {
    entityId: 'Plant:001',
    entityType: 'Plant',
    attrName: 'humidity',
    attrType: 'Float',
    attrValue: 68.2,
    timestamp: new Date(Date.now() - 86400000) // 1 day ago
  },
  {
    entityId: 'Plant:001',
    entityType: 'Plant',
    attrName: 'soilMoisture',
    attrType: 'Float',
    attrValue: 72.5,
    timestamp: new Date(Date.now() - 86400000) // 1 day ago
  },
  {
    entityId: 'Plant:001',
    entityType: 'Plant',
    attrName: 'lightIntensity',
    attrType: 'Integer',
    attrValue: 820,
    timestamp: new Date(Date.now() - 86400000) // 1 day ago
  }
]);

print('MongoDB initialization completed successfully');
