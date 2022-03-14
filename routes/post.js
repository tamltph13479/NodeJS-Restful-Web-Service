import { Router } from 'express';
import { checkAuth } from '../middlewares/checkAuth'
import { create, list, read, remove, update } from '../controllers/post';
const router = Router();

// resful API a
router.get('/posts', checkAuth, list);
router.get('/posts/:id', checkAuth, read);
router.post('/posts', checkAuth, create);
router.delete('/posts/:id', checkAuth, remove);
router.put("/posts/:id", checkAuth, update)

export default router;