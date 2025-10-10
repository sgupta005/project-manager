import mongoose from 'mongoose';

// Global cache for mongoose connection (persists across serverless invocations)
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: typeof import('mongoose') | null;
    promise: Promise<typeof import('mongoose')> | null;
  };
}

// Initialize global cache if it doesn't exist
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb() {
  // Return cached connection if it exists and is ready
  if (cached.conn && mongoose.connection.readyState === 1) {
    console.log('Using cached MongoDB connection');
    return cached.conn;
  }

  // Validate environment variables
  const MONGO_URI = process.env.MONGODB_URI;
  const DB_NAME = process.env.DB_NAME;

  if (!MONGO_URI) {
    throw new Error('MONGODB_URI environment variable is not defined');
  }

  if (!DB_NAME) {
    throw new Error('DB_NAME environment variable is not defined');
  }

  // Create new connection promise if it doesn't exist
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disable mongoose buffering for serverless
      maxPoolSize: 10, // Limit connection pool size for serverless
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    };

    cached.promise = mongoose
      .connect(`${MONGO_URI}/${DB_NAME}`, opts)
      .then((mongooseInstance) => {
        console.log(`MongoDB Connected: ${mongooseInstance.connection.host}`);
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null; // Reset promise on error
    if (err instanceof Error) {
      console.error('MongoDB connection failed:', err.message);
    } else {
      console.error('MongoDB connection failed:', err);
    }
    throw err; // Re-throw for proper error handling in API routes
  }

  return cached.conn;
}

export default connectDb;
