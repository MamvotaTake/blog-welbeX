import { logger } from './utils/logger'
import { app } from "./app";
import {authenticate} from '../data/db/connection';


const PORT = process.env.PORT || 4000

const start = async () => {

    authenticate() 
    
    app.listen(PORT, () => {
        logger.info('Server Connected Successfully');
    });
};

start()
