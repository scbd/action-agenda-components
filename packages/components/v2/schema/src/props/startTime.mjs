export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/startTime.mjs',
  $source    : 'https://schema.org/startTime',
  name       : 'startTime',
  title      : 'startTime',
  description: 'The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from <em>January</em> to December. For media, including audio and video, it\'s the time offset of the start of a clip within a larger file.<br/><br/>Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Time.mjs' } ]
  
}
