import { Router, Response } from "express";
import { verifyToken } from '../middlewares/auth';
import { verifyAdmin } from '../middlewares/role';
import { Tree } from '../models/tree.model';


const treeRoutes =  Router();

treeRoutes.post('/', [verifyToken, verifyAdmin], (req:any, res:Response)=>{

    const body = req.body;
    body.user = req.user._id;

    Tree.create( body )
        .then(async treeDB =>{

            await treeDB.populate('user','-password').execPopulate();

            res.json({
                ok:true, 
                tree:treeDB
            })
        })
        .catch(err => {
            res.json({
                ok:false, 
                err
            })
        });

});


export default treeRoutes;