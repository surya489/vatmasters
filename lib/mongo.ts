import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var __vatmasterMongoose: MongooseCache | undefined;
}

const cache: MongooseCache = global.__vatmasterMongoose ?? {
  conn: null,
  promise: null,
};
global.__vatmasterMongoose = cache;

export async function connectMongo(): Promise<typeof mongoose> {
  if (!URI) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }
  if (cache.conn) {
    return cache.conn;
  }
  if (!cache.promise) {
    cache.promise = mongoose.connect(URI, {
      dbName: process.env.MONGODB_DB_NAME,
    });
  }
  cache.conn = await cache.promise;
  return cache.conn;
}
