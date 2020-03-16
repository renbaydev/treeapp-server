import  { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'] 
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Mail is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

userSchema.method('checkPassword', function( password: string = ''):boolean {


    console.log(password);
    console.log(this.password);
    if (bcrypt.compareSync( password, this.password )){
        return true;
    } else{
        return false;
    }

});

interface IUser extends Document {
    name: string;
    avatar: string;
    email:string;
    password: string;

    checkPassword( password: string): boolean;
}

export const User = model<IUser>('User', userSchema);

