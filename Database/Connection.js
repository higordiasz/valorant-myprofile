import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connection Established");
});

mongoose.connection.on("reconnected", () => {
    console.log("MongoDB Connection Reestablished");
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Connection Disconnected");
});

mongoose.connection.on("close", () => {
    console.log("MongoDB Connection Closed");
});

mongoose.connection.on("error", (error) => {
    console.log("MongoDB ERROR: " + error);
    process.exit(1);
});

const connectMongo = async () => {
    const dbOptions = {
        autoIndex: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4,
    };
    let connectionUri = process.env.DBCONNECTION;
    await mongoose.connect(connectionUri, dbOptions).catch((err) => {
        Logger.log.fatal(`DATABASE - Error:${err}`);
    });
};

export default connectMongo;