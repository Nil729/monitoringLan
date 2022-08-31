import { Router } from 'express';

const router = Router()

router.get(`/`, (req, res) => res.send(`THIS IS A BRONTOSAURIO WEB SERVER (BACKEND)`));

router.get('/logs', async (req,res)=>{

    await 

    res.send("Pagina dels logs")
});

export default router;