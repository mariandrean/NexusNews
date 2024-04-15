import express from 'express';
import { getAllNews, addNews, editNews, deleteNews, getOne } from '../Controllers/NewsController';
import { loginUser } from '../Controllers/UserController';
import { validateCreateNews, validateUpdateNews, validateDeleteNews } from '../validators/newsValidator';
import { getUsers } from '../Controllers/UserController';
import { registerUser } from '../Controllers/RegisterController';

const router = express.Router();

router.get('/news', getAllNews);

router.post('/news', addNews);

router.put('/news/:id', editNews);

router.delete('/news/:id', deleteNews);

router.get('/news/:id', getOne)

router.post('/users/login', loginUser);

router.post('/users/register', registerUser);

router.get('/users', getUsers);

export default router;
