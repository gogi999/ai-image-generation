/* eslint-disable import/named */
import express from 'express';

import {
  createOpenAIImage,
  getOpenAIImage,
} from '../controllers/dalle.controllers.js';

const router = express.Router();

router.route('/').get(getOpenAIImage);
router.route('/').post(createOpenAIImage);

export default router;
