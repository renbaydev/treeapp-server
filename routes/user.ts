import { Router, Request, Response } from "express";

const userRoutes  = Router();



userRoutes.get('/test', (req: Request, res: Response)=>{

    res.json({
        ok: true,
        message: 'Todo funciona ok'
    });

});

export default userRoutes;