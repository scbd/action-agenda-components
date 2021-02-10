import Mongo from 'mongodb'

export const isMongoIdHexString    = (id) => typeof id === 'string'  && Mongo.ObjectID.isValid(id)

export const isMongoId             = (id) => id instanceof  Mongo.ObjectID

export const ObjectID              = Mongo.ObjectID

export const createFromHexString   = Mongo.ObjectID.createFromHexString

export const createPk              = ObjectID.createPk