"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const user_1 = __importDefault(require("./routes/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = new server_1.default;
//Rutas de mi aplicacion
server.app.use('/user', user_1.default);
//Conectar DB
mongoose_1.default.connect('mongodb://localhost:27017/treapp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err)
        throw err;
    console.log('DB online');
});
//Levantar expresss
server.start(() => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});
