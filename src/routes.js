import { Router } from 'express';
import User from './app/models/User.js';
import { v4 } from 'uuid';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = {
    id: v4(),
    name: 'Erian',
    email: 'erian@email.com',
    password_hash: '24941216',
    admin: false,
  };
  try {
    await User.create(user);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.parent);
  }

  res.status(201).json(user);
});

export default routes;
