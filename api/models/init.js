import mongoose from 'mongoose';
import logger from '../utils/log.js';

const log = logger('models');

const dbInit = async (options = {}) => {
  const mongoUrl = process.env.DATABASE_URL || 'mongodb://localhost/myDb';

  try {
    await mongoose.connect(mongoUrl, options);
    log.debug(`Connected to MongoDB at ${mongoUrl}`);
  } catch (err) {
    log.fatal(`Error connecting to database ${mongoUrl}:`, err);
    throw err;
  }
};

export default dbInit;
