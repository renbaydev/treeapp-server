import  { Schema, model, Document } from 'mongoose';

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

interface IUser extends Document {
    name: string;
    avatar: string;
    email:string;
    password: string;
}

export const User = model<IUser>('User', userSchema);

