// Importa las funciones necesarias de Firebase para inicializar la app y obtener la base de datos Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase utilizando variables de entorno (.env)
// Esto permite ocultar las credenciales y no exponerlas en el código fuente
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,             // Clave de API de Firebase
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,     // Dominio de autenticación
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,       // ID del proyecto de Firebase
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // Bucket de almacenamiento
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // ID de mensajería
  appId: import.meta.env.VITE_FIREBASE_APP_ID,               // ID de la aplicación
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // ID de medición (Analytics)
};

// Inicializa la aplicación de Firebase con la configuración anterior
initializeApp(firebaseConfig);

// Exporta la instancia de Firestore para usarla en el resto de la aplicación
export const db = getFirestore();