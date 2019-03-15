db.getCollection('actions').createIndex(
    {
      'organizer.name.en': "text",
      'organizer.lastName.en': "text",
      'organizer.email': "text",
      'name.en': "text",
      'description.en': "text",
      'linkagesDescription.en': "text",
      'progressMeasured.en':"text"
    }
  )