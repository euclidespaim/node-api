import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://paim:123@node-tests.rqnhc.mongodb.net/node-tests')

let db = mongoose.connection;

export default db;