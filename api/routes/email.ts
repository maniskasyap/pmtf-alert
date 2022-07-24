import express from 'express';

import { sendEmail } from '../controllers';

const router = express.Router();

router.post('/email', sendEmail);

export default router;
