import Server from './classes/server';
import userRoutes from './routes/user';

const server = new Server;


//Rutas de mi aplicacion
server.app.use('/user', userRoutes )

//Levantar expresss
server.start( () => {
    console.log( `Servidor corriendo en puerto ${server.port}` );
});