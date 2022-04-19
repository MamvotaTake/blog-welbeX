import { logger } from './utils/logger'
import { app } from "./app";





const PORT = process.env.PORT || 4000

const start = async () => {

    app.listen(PORT, () => {
        logger.info('Server Connected Successfully');
    });
};

start()
