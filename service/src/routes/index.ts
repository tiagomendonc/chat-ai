import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Wow! My first project in TypeScript!!!' });
});

export default router;
