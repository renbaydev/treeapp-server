import  { Schema, model, Document } from 'mongoose';

const treeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'] 
    },  
    description: {
        type: String, 
    },
    coords :{
        type: String // -14.6546,12.24545
    }, 
    created: {
        type: Date
    },
    img:[{
        type: String
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ref is must']
    }
});

treeSchema.pre<ITree>('save', function( next ){
    this.created = new Date();
    next();
});


interface ITree extends Document {
    name: string,
    description: string,
    coords: string,
    created: Date,
    img: string[],
    user: string,
}

export const Tree = model<ITree>('Tree', treeSchema);