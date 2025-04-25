
import express from 'express';
import cors from 'cors';
import { prisma } from './db';

const app = express();
app.use(cors());
app.use(express.json());

// Event query endpoints
app.get('/events/coindrip/stream-created', async (req, res) => {
      try {
        const events = await prisma.streamCreated.findMany();
        res.json(events);
      } catch (error) {
        console.error('Failed to fetch coindrip-StreamCreated:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
      }
    });

app.get('/events/coindrip/stream-claimed', async (req, res) => {
      try {
        const events = await prisma.streamClaimed.findMany();
        res.json(events);
      } catch (error) {
        console.error('Failed to fetch coindrip-StreamClaimed:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
      }
    });

app.get('/events/coindrip/stream-destroyed', async (req, res) => {
      try {
        const events = await prisma.streamDestroyed.findMany();
        res.json(events);
      } catch (error) {
        console.error('Failed to fetch coindrip-StreamDestroyed:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
      }
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
