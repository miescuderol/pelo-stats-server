import express from 'express';
import { Express } from 'express-serve-static-core';
// import axios from 'axios';
import cors from 'cors';

import { router as pelotonAPI } from '../routes/pelotonApi';

export async function createServer(): Promise<Express> {
    const server = express();
    // enable cross origin sources
    server.use(cors());
    // parse body parameters as json
    server.use(express.json());
    // use onepeloton api
    server.use(pelotonAPI);
    return server;
}