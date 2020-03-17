import { Request, Response, NextFunction} from 'express';
import { User } from '../models/user.model';
import { json } from 'body-parser';

export const  verifyAdmin = (req: any, res: Response, next: NextFunction)=>{
    
    

    const user = User.findById(req.user._id, ( err, userDB )=>{
        if (err) throw err;

        if ( !userDB ){
            return res.json({
                ok: false,
                message: 'User not exists'
            })
        }

        if( userDB.role !== 0)
        {
            return res.json({
                ok: false,
                message: 'You haven´t permission to get this resource'
            })
        }

        next();
            
    });

   
    //console.log('reques',res);

    


};