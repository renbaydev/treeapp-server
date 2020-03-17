import { Router, Response } from "express";
import { verifyToken } from '../middlewares/auth';
import { verifyAdmin } from '../middlewares/role';
import { Location } from '../models/location.model';


const locationRoutes =  Router();

locationRoutes.post('/', [verifyToken, verifyAdmin], (req:any, res:Response)=>{

    const body = req.body;
    body.user = req.user._id;

    Location.create( body )
        .then(async locationDB =>{

            

            res.json({
                ok:true, 
                tree:locationDB
            })
        })
        .catch(err => {
            res.json({
                ok:false, 
                err
            })
        });

});


export default locationRoutes;