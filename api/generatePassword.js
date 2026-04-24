// generatePassword.js
import { hash, getSalt } from "./utils/hash.js";  // ← sin "src/"
import dotenv from "dotenv";
dotenv.config();

const SALT_SIZE = parseInt(process.env.SALT_SIZE);
const password = "securepassword";

const salt = getSalt(SALT_SIZE);
const hashed = hash(password, salt);
const stored = salt + hashed;

console.log("Stored password:", stored);