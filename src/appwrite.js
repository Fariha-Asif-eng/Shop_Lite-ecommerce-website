// src/appwrite.js
import { Client, Account } from "appwrite";

// Client setup using .env variables
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // 👈 endpoint from .env
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // 👈 project ID from .env

// Export Account instance for authentication
export const account = new Account(client);
