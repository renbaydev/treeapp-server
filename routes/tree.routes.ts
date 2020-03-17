import { Router, Response } from "express";
import { verifyToken } from '../middlewares/auth';
import { verifyAdmin } from '../middlewares/role';
import { Tree } from '../models/tree.model';
import { Location } from '../models/location.model';
import LocationClass from '../classes/location';


const treeRoutes =  Router();

treeRoutes.post('/', [verifyToken, verifyAdmin], (req:any, res:Response)=>{

    const body = req.body;
    body.user = req.user._id;
    

  

   Location.findById(body.location, (err, locationDB)=>{       

        if(!locationDB)
        {
            return res.json({
                ok: false,
                message: 'Location doesnt exists'
            });
        }       


        Tree.create( body )
        .then(async treeDB =>{

            await treeDB.populate( 'user','-password').execPopulate();
            await treeDB.populate('location').execPopulate();

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

   
});


export default treeRoutes;