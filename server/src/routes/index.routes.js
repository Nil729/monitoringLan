import { Router } from 'express';

import *  as controlers_log from '../controlers/controlers.log';

const router = Router()

router.get(`/`, (req, res) => res.send(`THIS IS A BRONTOSAURIO WEB SERVER (BACKEND)`));

router.get('/logs', controlers_log.getlog);

router.post('/logs', controlers_log.postlog);

export default router;