export default {
  $id        : 'https://cdn.cbd.int/@action-agenda/schema/dist/props/endTime.mjs',
  $source    : 'https://schema.org/endTime',
  name       : 'endTime',
  title      : 'endTime',
  description: 'The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to <em>December</em>. For media, including audio and video, it\'s the time offset of the end of a clip within a larger file.<br/><br/>Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.',
  
  oneOf: [ { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/Time.mjs' }, { $ref: 'https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs' } ]
  
}
