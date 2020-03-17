import  { Schema, model, Document } from 'mongoose';


const locationSchema = new Schema({

    coords :{
        type: String, // -14.6546,12.24545
        required: [true, 'coords are required']
    }, 
    municipality:{
        type: String,
        required: [true, 'municipality are required']
    },
    created: {
        type: Date
    }
});

locationSchema.pre<ILocation>('save', function( next ){
    this.created = new Date();
    next();
});


interface ILocation extends Document {
    coords: string,
    created: Date,     
    municipality: string
}

export const Location = model<ILocation>('Location', locationSchema);