// upload.js

// Import required modules
const admin = require('firebase-admin');
const fs = require('fs');

// Replace with the path to your Firebase project's service account key file
const serviceAccount = require('./path/to/serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Get a Firestore instance
const db = admin.firestore();

// Load JSON data from a file
const jsonData = JSON.parse(fs.readFileSync('./path/to/data.json', 'utf8'));

// Function to upload data to Firestore
async function uploadData() {
  const collectionRef = db.collection('your-collection-name');

  for (const item of jsonData) {
    try {
      // Add each item to the collection
      await collectionRef.add(item);
      console.log('Document successfully written:', item);
    } catch (error) {
      console.error('Error writing document:', error);
    }
  }
}

// Execute the upload function
uploadData().then(() => {
  console.log('All documents uploaded successfully!');
  process.exit(0); // Exit the script
}).catch((error) => {
  console.error('Error uploading documents:', error);
  process.exit(1); // Exit the script with an error code
});
