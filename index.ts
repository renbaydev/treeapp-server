import Server from './classes/server';
import userRoutes from './routes/user';
import moongoose from 'mongoose';

const server = new Server;


//Rutas de mi aplicacion
server.app.use('/user', userRoutes );

//Conectar DB
moongoose.connect('mongodb://localhost:27017/treapp',
    {
        useNewUrlParser:true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    ( err )=>{
        if ( err ) throw err;
        console.log('DB online');
    }   
);

//Levantar expresss
server.start( () => {
    console.log( `Servidor corriendo en puerto ${server.port}` );
});