import mongoose from "mongoose";

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { useNewUrlParser: true }, (error, connection) => {
    if (error) console.log(error);

    if (!process.env.NODE_ENV) {
        const { host, port, name } = connection;
        console.log({ host, port, name });
    }
});