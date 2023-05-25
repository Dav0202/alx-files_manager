import express from 'express';
import controllerRouting from './routes/index';

/**
 * The objective was to build a simple platform to upload and view files:
 */

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

controllerRouting(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
