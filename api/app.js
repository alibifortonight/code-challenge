import path from 'path';

import cors from 'cors';
import express from 'express';

import apiRoutes from './routes/index.js';

// Set up Express app
const app = express();

// Pretty-print JSON responses
app.enable('json spaces');
// We want to be consistent with URL paths, so we enable strict routing
app.enable('strict routing');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(apiRoutes);

// Serve static files from the 'dist' directory at the root of the project
app.use(express.static(path.join(import.meta.dirname, "..", "dist")));

// Assume all other routes are frontend and serve pre-built frontend from ../dist/ folder
app.get(/.*/, async (req, res) => {
    try {
        res.sendFile(path.join(import.meta.dirname, "..", "dist", "index.html"));
    } catch (error) {
        console.error('Error serving index.html:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default app;