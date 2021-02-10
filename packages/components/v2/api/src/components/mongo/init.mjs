import { getCollection } from './connection.mjs'

export const initMongo = async () => {
  await ensureIndexs()
}

async function ensureIndexs(){
  const db = await getCollection('action-agenda')

  await db.createIndexes([
    { key: {'identifier.value': 1 }, name: 'identifier.value_1', unique: true, background: true },
    { key: {'@type': 1 }, name: '@type_1', background: true },
    { key: { '@type': 1 , 'identifier.value': 1 }, name: '@type-identifier.value', background: true },
    { key: { _fts: "text", _ftsx: 1},
      name: "texter",
      background: true,
      weights: {
        'name.en': 100, 'name.es': 100, 'name.ar': 100, 'name.zh': 100, 'name.ru': 100, 'name.fr': 100,
        'alternateName.en': 75, 'alternateName.es': 75, 'alternateName.ar': 75, 'alternateName.zh': 75, 'alternateName.ru': 75, 'alternateName.fr': 75,
        'description.en': 50, 'description.es': 50, 'description.ar': 50, 'description.zh': 50, 'description.ru': 50, 'description.fr': 50,
      },
      default_language: "english",
      language_override: "language",
      textIndexVersion: 3
    }
  ])
}
