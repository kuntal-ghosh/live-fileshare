import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser'
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/app', (req: Request, res: Response) => {
    console.log("hitted the server")
    return res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});