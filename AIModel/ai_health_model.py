import json
from pymongo import MongoClient

# Provide the connection details
hostname = 'localhost'
port = 27017  # Default MongoDB port
username = ''  # If authentication is required
password = ''  # If authentication is required

# Create a MongoClient instance
client = MongoClient(hostname, port, username=username, password=password)

db = client['sensortrackerDB']
collection = db['uservitalparamstrackers']

dataset = collection.find({})
dumped_dataset = json.dumps(list(dataset), default=str)

print(dumped_dataset)

client.close()