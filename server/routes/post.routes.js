import * as dotenv from 'dotenv';
import express from 'express';

import {
  createPost,
  getAllPosts,
} from '../controllers/post.controllers.js';

dotenv.config();

const router = express.Router();

router.route('/').get(getAllPosts);
router.route('/').post(createPost);

export default router;
