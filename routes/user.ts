import { Router, Request, Response } from "express";
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';

const userRoutes  = Router();



userRoutes.post('/create', (req: Request, res: Response) => {

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.body.avatar
    }

    User.create( user ).then( userDB =>{
         
        res.json({
            ok: true,
            user: userDB
        });

    }).catch(err => {
        res.json({
            ok: false,
            err
        })
    });
   

});

export default userRoutes;