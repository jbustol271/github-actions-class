import { initServer } from './server';

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

initServer();

//Comentario para forzar el cambio y la ejecución del actions.
//Comentario add matrix-strategy
//Comentario add multiple-jobs
//Comentario add multiple-jobs-2
//Comentario actions/setup-node@v4
//COmentario npm run test