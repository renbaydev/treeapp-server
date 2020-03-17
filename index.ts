import Server from './classes/server';
import userRoutes from './routes/user';
import testRoutes from './routes/test.routes';
import moongoose from 'mongoose';
import bodyParser from 'body-parser';

const server = new Server;

// Body PArser
server.app.use(bodyParser.urlencoded({ extended:true }));
server.app.use(bodyParser.json());

//Rutas de mi aplicacion
server.app.use('/user', userRoutes );
server.app.use('/test', testRoutes );

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