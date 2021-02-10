import   Mongo        from 'mongodb'
import   getOptions   from '../../default-options.mjs'
import { consola    } from '../logger.mjs'

const { mongoUrl   , collectionName, versionCollectionName } = getOptions()
const { MongoClient                                        } = Mongo

const globals  = { mongoDb           : null }
const options  = { useUnifiedTopology: true }

export const getConnection = async () => {
  try{
    if(globals.mongoDb) return globals.mongoDb

    await MongoClient.connect(mongoUrl, options).then(setEvents)

    return globals.mongoDb
  }catch(error){
    globals.mongoDb = null;

    consola.error('Connection error to mongo: ', error);

    throw error;
  }
}

export const getCollection = async ({ collection=collectionName }={}) => {
  const db = await getConnection();

  return db.collection(collection);
}

export const getVersionsCollection = async ({ collection=versionCollectionName }={}) => {
  const db = await getConnection();

  return db.collection(collection);
}

async function setEvents(conn){
  
  globals.mongoDb = await conn.db()
  
  consola.info(`Successfully connected to MongoDB.`);
  conn.on('close', onClose)
  conn.on('error', onError)

  return conn
}

function onClose(){
  globals.mongoDb = null
  consola.warn('MongoDB connection closed.');
}

function onError(error){
  globals.mongoDb = null
  consola.warn('MongoDB connection closed unexpectedly.');
  consola.debug(error);
}

