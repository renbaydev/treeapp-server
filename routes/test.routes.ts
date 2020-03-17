import { Router, Request, Response } from "express";
import { verifyToken } from '../middlewares/auth';
import { isAdmin } from '../middlewares/role';

const testRoutes  = Router();

testRoutes.get('/onlyForAdmin',[verifyToken, isAdmin], (req: Request, res: Response)=>{
    
    return res.json({
        ok:true,
        message: 'testAdmin Route'
    });

});

export default testRoutes;