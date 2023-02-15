import dotenv from 'dotenv'
import connectDatabase from './database.js';
import express from 'express';

dotenv.config();
connectDatabase();

const app = express();

app.use(express.json());