import { initServer } from './server';

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

initServer();

//Comentario para forzar el cambio y la ejecución del actions.
