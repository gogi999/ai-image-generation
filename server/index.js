import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';

import connectDB from './mongodb/connect.js';
import dalleRoutes from './routes/dalle.routes.js';
import postRoutes from './routes/post.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E!');
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server has started on port http:localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
