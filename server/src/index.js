import('dotenv/config');
import express from 'express';
import { z } from 'zod';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const healthResponseSchema = z.object({
  status: z.literal('ok'),
});

app.get('/health', (_req, res) => {
  const payload = { status: 'ok' };
  const parsed = healthResponseSchema.parse(payload);
  res.json(parsed);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
