export default [{
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Date.mjs",
  "$source": "http://schema.org/Date",
  "title": "Date",
  "description": "A date value in ISO 8601 date format.",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs"
  }],
  "type": "string",
  "format": "date"
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs",
  "title": "LangString",
  "description": "Language string in an LString object with very large size to accommodate pages of text",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }],
  "minLength": 1,
  "maxLength": 5000
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs",
  "$source": "http://schema.org/URL",
  "title": "URL",
  "description": "Data type: URL.",
  "format": "uri",
  "maxLength": 2083,
  "minLength": 4,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LString160.mjs",
  "title": "LString160",
  "description": "SCBD lang mapped string object max length 160",
  "type": "object",
  "properties": {
    "ar": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString160.mjs"
    },
    "en": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString160.mjs"
    },
    "es": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString160.mjs"
    },
    "fr": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString160.mjs"
    },
    "ru": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString160.mjs"
    },
    "zh": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString160.mjs"
    }
  },
  "additionalProperties": false
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString60.mjs",
  "title": "LangString60",
  "description": "Language string in an LString object with the recommended name/title size from google based on indexation and mobile view.",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }],
  "minLength": 1,
  "maxLength": 60
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString160.mjs",
  "title": "LangString160",
  "description": "Language string in an LString object with the recommended description size from google based on indexation and mobile view.",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }],
  "minLength": 1,
  "maxLength": 160
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs",
  "$source": "http://schema.org/Text",
  "title": "Text",
  "description": "Data type: Text. min 1 char, max 2083",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs"
  }],
  "type": "string",
  "minLength": 1,
  "maxLength": 2083
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LString60.mjs",
  "title": "LString60",
  "description": "SCBD lang mapped string object max length 60 chars",
  "type": "object",
  "properties": {
    "ar": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString60.mjs"
    },
    "en": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString60.mjs"
    },
    "es": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString60.mjs"
    },
    "fr": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString60.mjs"
    },
    "ru": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString60.mjs"
    },
    "zh": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString60.mjs"
    }
  },
  "additionalProperties": false
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Boolean.mjs",
  "$source": "http://schema.org/Boolean",
  "title": "Boolean",
  "description": "Boolean: True or False.",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs"
  }],
  "type": "boolean"
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs",
  "$source": "http://schema.org/DateTime",
  "title": "DateTime",
  "description": "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs"
  }],
  "type": "string",
  "format": "date-time"
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Email.mjs",
  "title": "Email address",
  "description": "email address, min length 3 char and max 254",
  "format": "email",
  "minLength": 3,
  "maxLength": 254,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Number.mjs",
  "$source": "http://schema.org/Number",
  "title": "Boolean",
  "description": "Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs"
  }],
  "type": "number"
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Time.mjs",
  "$source": "http://schema.org/Time",
  "title": "Date",
  "description": "A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm]",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs"
  }],
  "type": "string",
  "format": "time"
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LString.mjs",
  "title": "LString",
  "description": "SCBD lang mapped string object",
  "type": "object",
  "properties": {
    "ar": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs"
    },
    "en": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs"
    },
    "es": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs"
    },
    "fr": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs"
    },
    "ru": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs"
    },
    "zh": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LangString.mjs"
    }
  },
  "additionalProperties": false
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/types/HexId.mjs",
  "title": "Hex Id",
  "description": "Hex id is a 24 character hex number",
  "pattern": "^[0-9a-fA-F]{24}$",
  "minLength": 24,
  "maxLength": 24,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/jobTitle.mjs",
  "$source": "https://schema.org/jobTitle",
  "name": "jobTitle",
  "title": "jobTitle",
  "description": "The job title of the person (for example, Financial Manager).",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/DefinedTerm.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/version.mjs",
  "$source": "https://schema.org/version",
  "name": "version",
  "title": "version",
  "description": "The version of the CreativeWork embodied by a specified resource.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Number.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/logo.mjs",
  "$source": "https://schema.org/logo",
  "name": "logo",
  "title": "logo",
  "description": "An associated logo.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ImageObject.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/contentSize.mjs",
  "$source": "https://schema.org/contentSize",
  "name": "contentSize",
  "title": "contentSize",
  "description": "File size in (mega/kilo) bytes.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/context.mjs",
  "title": "Context",
  "description": "Context of data",
  "type": "string",
  "const": "https://schema.org",
  "default": "https://schema.org"
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/additionalType.mjs",
  "$source": "http://schema.org/additionalType",
  "title": "additionalType",
  "description": "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.",
  "type": "array",
  "minItems": 1,
  "maxItems": 100,
  "additionalItems": false,
  "items": {
    "anyOf": [{
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
    }]
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/startTime.mjs",
  "$source": "https://schema.org/startTime",
  "name": "startTime",
  "title": "startTime",
  "description": "The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from <em>January</em> to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.<br/><br/>Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Time.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/contactPoint.mjs",
  "$source": "https://schema.org/contactPoint",
  "name": "contactPoint",
  "title": "contactPoint",
  "description": "A contact point for a person or organization.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ContactPoint.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/url.mjs",
  "$source": "http://schema.org/url",
  "title": "url",
  "description": "URL of the item.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/height.mjs",
  "$source": "https://schema.org/height",
  "name": "height",
  "title": "height",
  "description": "The height of the item.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/QuantitativeValue.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Distance.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/thumbnail.mjs",
  "$source": "https://schema.org/thumbnail",
  "name": "thumbnail",
  "title": "thumbnail",
  "description": "Thumbnail image for an image or video.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ImageObject.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/alternateName.mjs",
  "$source": "http://schema.org/alternateName",
  "title": "Alternate Name",
  "description": "An alternative longer name of the item.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LString160.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/location.mjs",
  "$source": "https://schema.org/location",
  "name": "location",
  "title": "location",
  "description": "The location of for example where the event is happening, an organization is located, or where an action takes place.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Place.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/PostalAddress.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/VirtualLocation.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/description.mjs",
  "$source": "http://schema.org/description",
  "title": "Description",
  "description": "A description of the item.",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LString160.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/relatedLink.mjs",
  "$source": "https://schema.org/relatedLink",
  "name": "relatedLink",
  "title": "relatedLink",
  "description": "A link related to this web page, for example to other related web pages.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/dateModified.mjs",
  "$source": "https://schema.org/dateModified",
  "name": "dateModified",
  "title": "dateModified",
  "description": "The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Date.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/contentUrl.mjs",
  "$source": "https://schema.org/contentUrl",
  "name": "contentUrl",
  "title": "contentUrl",
  "description": "Actual bytes of the media object, for example the image file or video file.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/propertyID.mjs",
  "$source": "https://schema.org/propertyID",
  "name": "propertyID",
  "title": "propertyID",
  "description": "A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).Standards bodies should promote a standard prefix for the identifiers of properties from their standards.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/about.mjs",
  "$source": "https://schema.org/about",
  "name": "about",
  "title": "about",
  "description": "The subject matter of the content.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/name.mjs",
  "$source": "http://schema.org/name",
  "title": "name",
  "description": "The name of the item.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LString60.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/primaryImageOfPage.mjs",
  "$source": "https://schema.org/primaryImageOfPage",
  "name": "primaryImageOfPage",
  "title": "primaryImageOfPage",
  "description": "Indicates the main image on the page.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ImageObject.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/telephone.mjs",
  "$source": "https://schema.org/telephone",
  "name": "telephone",
  "title": "telephone",
  "description": "The telephone number.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/memberOf.mjs",
  "$source": "https://schema.org/memberOf",
  "name": "memberOf",
  "title": "memberOf",
  "description": "An Organization (or ProgramMembership) to which this Person or Organization belongs.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ProgramMembership.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/actionStatus.mjs",
  "$source": "https://schema.org/actionStatus",
  "name": "actionStatus",
  "title": "actionStatus",
  "description": "Indicates the current disposition of the Action.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/enumClasses/ActionStatusType.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/inLanguage.mjs",
  "$source": "https://schema.org/inLanguage",
  "name": "inLanguage",
  "title": "inLanguage",
  "description": "The language of the content or performance or used in an action. Please use one of the language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard</a>. See also <a class=\"localLink\" href=\"https://schema.org/availableLanguage\">availableLanguage</a>.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Language.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/image.mjs",
  "$source": "http://schema.org/image",
  "title": "image",
  "description": "An image of the item. This can be a <a class=\"localLink\" href=\"https://schema.org/URL\">URL</a> or a fully described <a class=\"localLink\" href=\"https://schema.org/ImageObject\">ImageObject</a>.",
  "type": "array",
  "minItems": 1,
  "maxItems": 100,
  "additionalItems": false,
  "items": {
    "anyOf": [{
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
    }, {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ImageObject.mjs"
    }]
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/text.mjs",
  "$source": "https://schema.org/text",
  "name": "text",
  "title": "text",
  "description": "The textual content of this CreativeWork.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/givenName.mjs",
  "$source": "https://schema.org/givenName",
  "name": "givenName",
  "title": "givenName",
  "description": "Given name. In the U.S., the first name of a Person.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/caption.mjs",
  "$source": "https://schema.org/caption",
  "name": "caption",
  "title": "caption",
  "description": "The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the <a class=\"localLink\" href=\"https://schema.org/encodingFormat\">encodingFormat</a>.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/MediaObject.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/author.mjs",
  "$source": "https://schema.org/author",
  "name": "author",
  "title": "author",
  "description": "The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/mainEntityOfPage.mjs",
  "$source": "http://schema.org/mainEntityOfPage",
  "title": "mainEntityOfPage",
  "description": "Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See <a href=\"/docs/datamodel.html#mainEntityBackground\">background notes</a> for details.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/CreativeWork.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/lastReviewed.mjs",
  "$source": "https://schema.org/lastReviewed",
  "name": "lastReviewed",
  "title": "lastReviewed",
  "description": "Date on which the content on this web page was last reviewed for accuracy and/or completeness.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Date.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/identifier.mjs",
  "$source": "http://schema.org/identifier",
  "title": "identifier",
  "description": "The identifier property represents any kind of identifier for any kind of <a class=\"localLink\" href=\"http://schema.org/Thing\">Thing</a>, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See <a href=\"/docs/datamodel.html#identifierBg\">background notes</a> for more details.",
  "type": "array",
  "minItems": 1,
  "maxItems": 50,
  "additionalItems": false,
  "items": {
    "anyOf": [{
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/PropertyValue.mjs"
    }, {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
    }, {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
    }]
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/nationality.mjs",
  "$source": "https://schema.org/nationality",
  "name": "nationality",
  "title": "nationality",
  "description": "Nationality of the person.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Country.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/disambiguatingDescription.mjs",
  "$source": "http://schema.org/disambiguatingDescription",
  "title": "Description",
  "description": "A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.",
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/LString160.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/sponsor.mjs",
  "$source": "https://schema.org/sponsor",
  "name": "sponsor",
  "title": "sponsor",
  "description": "A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/availableLanguage.mjs",
  "$source": "https://schema.org/availableLanguage",
  "name": "availableLanguage",
  "title": "availableLanguage",
  "description": "A language someone may use with or at the item, service or place. Please use one of the language codes from the <a href=\"http://tools.ietf.org/html/bcp47\">IETF BCP 47 standard</a>. See also <a class=\"localLink\" href=\"https://schema.org/inLanguage\">inLanguage</a>",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Language.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/email.mjs",
  "$source": "https://schema.org/email",
  "name": "email",
  "title": "email",
  "description": "Email address.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/isFamilyFriendly.mjs",
  "$source": "https://schema.org/isFamilyFriendly",
  "name": "isFamilyFriendly",
  "title": "isFamilyFriendly",
  "description": "Indicates whether this content is family friendly.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Boolean.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/endTime.mjs",
  "$source": "https://schema.org/endTime",
  "name": "endTime",
  "title": "endTime",
  "description": "The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to <em>December</em>. For media, including audio and video, it's the time offset of the end of a clip within a larger file.<br/><br/>Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Time.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/dateCreated.mjs",
  "$source": "https://schema.org/dateCreated",
  "name": "dateCreated",
  "title": "dateCreated",
  "description": "The date on which the CreativeWork was created or the item was added to a DataFeed.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Date.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/DateTime.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/mainEntity.mjs",
  "$source": "https://schema.org/mainEntity",
  "name": "mainEntity",
  "title": "mainEntity",
  "description": "Indicates the primary entity described in some page or other CreativeWork.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/width.mjs",
  "$source": "https://schema.org/width",
  "name": "width",
  "title": "width",
  "description": "The width of the item.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Distance.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/QuantitativeValue.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/agent.mjs",
  "$source": "https://schema.org/agent",
  "name": "agent",
  "title": "agent",
  "description": "The direct performer or driver of the action (animate or inanimate). e.g. <em>John</em> wrote a book.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/programName.mjs",
  "$source": "https://schema.org/programName",
  "name": "programName",
  "title": "programName",
  "description": "The program providing the membership.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/spatialCoverage.mjs",
  "$source": "https://schema.org/spatialCoverage",
  "name": "spatialCoverage",
  "title": "spatialCoverage",
  "description": "The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Place.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/_id.mjs",
  "title": "Mongo ID",
  "description": "Mongo ID as 24 character hex",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/HexId.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/contactType.mjs",
  "$source": "https://schema.org/contactType",
  "name": "contactType",
  "title": "contactType",
  "description": "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/uploadDate.mjs",
  "$source": "https://schema.org/uploadDate",
  "name": "uploadDate",
  "title": "uploadDate",
  "description": "Date when this media object was uploaded to this site.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Date.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/value.mjs",
  "$source": "https://schema.org/value",
  "name": "value",
  "title": "value",
  "description": "The value of the quantitative value or property value node.<br/><br/><ul><li>For <a class=\"localLink\" href=\"https://schema.org/QuantitativeValue\">QuantitativeValue</a> and <a class=\"localLink\" href=\"https://schema.org/MonetaryAmount\">MonetaryAmount</a>, the recommended type for values is 'Number'.</li><li>For <a class=\"localLink\" href=\"https://schema.org/PropertyValue\">PropertyValue</a>, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.</li><li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li><li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li></ul>",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Boolean.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Number.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/hostingOrganization.mjs",
  "$source": "https://schema.org/hostingOrganization",
  "name": "hostingOrganization",
  "title": "hostingOrganization",
  "description": "The organization (airline, travelers' club, etc.) the membership is made with.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/sameAs.mjs",
  "$source": "http://schema.org/sameAs",
  "title": "sameAs",
  "description": "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.",
  "type": "array",
  "minItems": 1,
  "maxItems": 100,
  "additionalItems": false,
  "items": {
    "anyOf": [{
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/URL.mjs"
    }]
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/additionalName.mjs",
  "$source": "https://schema.org/additionalName",
  "name": "additionalName",
  "title": "additionalName",
  "description": "An additional name for a Person, can be used for a middle name.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/editor.mjs",
  "$source": "https://schema.org/editor",
  "name": "editor",
  "title": "editor",
  "description": "Specifies the Person who edited the CreativeWork.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/familyName.mjs",
  "$source": "https://schema.org/familyName",
  "name": "familyName",
  "title": "familyName",
  "description": "Family name. In the U.S., the last name of a Person.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/types/Text.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/member.mjs",
  "$source": "https://schema.org/member",
  "name": "member",
  "title": "member",
  "description": "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs"
  }, {
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/props/result.mjs",
  "$source": "https://schema.org/result",
  "name": "result",
  "title": "result",
  "description": "The result produced in the action. e.g. John wrote <em>a book</em>.",
  "oneOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs"
  }]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs",
  "$source": "https://schema.org/StructuredValue",
  "title": "StructuredValue",
  "description": "Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs"
  }],
  "properties": {
    "@type": {
      "const": "StructuredValue",
      "default": "StructuredValue"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/VirtualLocation.mjs",
  "$source": "https://schema.org/VirtualLocation",
  "title": "VirtualLocation",
  "description": "An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs"
  }],
  "properties": {
    "@type": {
      "const": "VirtualLocation",
      "default": "VirtualLocation"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Project.mjs",
  "$source": "https://schema.org/Project",
  "title": "Project",
  "description": "An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.Use properties from <a class=\"localLink\" href=\"https://schema.org/Organization\">Organization</a>, <a class=\"localLink\" href=\"https://schema.org/subOrganization\">subOrganization</a>/<a class=\"localLink\" href=\"https://schema.org/parentOrganization\">parentOrganization</a> to indicate project sub-structures.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Project",
      "default": "Project"
    },
    "member": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/member.mjs"
    },
    "sponsor": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/sponsor.mjs"
    },
    "location": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/location.mjs"
    },
    "memberOf": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/memberOf.mjs"
    },
    "logo": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/logo.mjs"
    },
    "contactPoint": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/contactPoint.mjs"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/StatusEnumeration.mjs",
  "$source": "https://schema.org/StatusEnumeration",
  "title": "StatusEnumeration",
  "description": "Lists or enumerations dealing with status types.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Enumeration.mjs"
  }],
  "properties": {
    "@type": {
      "const": "StatusEnumeration",
      "default": "StatusEnumeration"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ContactPoint.mjs",
  "$source": "https://schema.org/ContactPoint",
  "title": "ContactPoint",
  "description": "A contact point&#x2014;for example, a Customer Complaints department.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs"
  }],
  "properties": {
    "@type": {
      "const": "ContactPoint",
      "default": "ContactPoint"
    },
    "availableLanguage": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/availableLanguage.mjs"
    },
    "telephone": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/telephone.mjs"
    },
    "email": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/email.mjs"
    },
    "contactType": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/contactType.mjs"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Language.mjs",
  "$source": "https://schema.org/Language",
  "title": "Language",
  "description": "Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in <a href=\"https://en.wikipedia.org/wiki/IETF_language_tag\">BCP 47</a> can be used via the <a class=\"localLink\" href=\"https://schema.org/alternateName\">alternateName</a> property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using <a class=\"localLink\" href=\"https://schema.org/ComputerLanguage\">ComputerLanguage</a>.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Language",
      "default": "Language"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/PropertyValue.mjs",
  "$source": "https://schema.org/PropertyValue",
  "title": "PropertyValue",
  "description": "A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.<br/><br/>Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs"
  }],
  "properties": {
    "@type": {
      "const": "PropertyValue",
      "default": "PropertyValue"
    },
    "propertyID": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/propertyID.mjs"
    },
    "value": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/value.mjs"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/MediaObject.mjs",
  "$source": "https://schema.org/MediaObject",
  "title": "MediaObject",
  "description": "A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/CreativeWork.mjs"
  }],
  "properties": {
    "@type": {
      "const": "MediaObject",
      "default": "MediaObject"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/DataType.mjs",
  "$source": "http://schema.org/DataType",
  "title": "DataType",
  "description": "The basic data types such as Integers, Strings, etc.",
  "type": "object",
  "additionalProperties": false
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Organization.mjs",
  "$source": "https://schema.org/Organization",
  "title": "Organization",
  "description": "An organization such as a school, NGO, corporation, club, etc.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Organization",
      "default": "Organization"
    },
    "member": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/member.mjs"
    },
    "logo": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/logo.mjs"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Place.mjs",
  "$source": "https://schema.org/Place",
  "title": "Place",
  "description": "Entities that have a somewhat fixed, physical extension.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Place",
      "default": "Place"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/WebPage.mjs",
  "$source": "https://schema.org/WebPage",
  "title": "WebPage",
  "description": "A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/CreativeWork.mjs"
  }],
  "properties": {
    "@type": {
      "const": "WebPage",
      "default": "WebPage"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Quantity.mjs",
  "$source": "https://schema.org/Quantity",
  "title": "Quantity",
  "description": "Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Quantity",
      "default": "Quantity"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/QuantitativeValue.mjs",
  "$source": "https://schema.org/QuantitativeValue",
  "title": "QuantitativeValue",
  "description": "A point value or interval for product characteristics and other purposes.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/StructuredValue.mjs"
  }],
  "properties": {
    "@type": {
      "const": "QuantitativeValue",
      "default": "QuantitativeValue"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Enumeration.mjs",
  "$source": "https://schema.org/Enumeration",
  "title": "Enumeration",
  "description": "Lists or enumerations—for example, a list of cuisines or music genres, etc.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Enumeration",
      "default": "Enumeration"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Action.mjs",
  "$source": "https://schema.org/Action",
  "title": "Action",
  "description": "An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.<br/><br/>See also <a href=\"http://blog.schema.org/2014/04/announcing-schemaorg-actions.html\">blog post</a> and <a href=\"https://schema.org/docs/actions.html\">Actions overview document</a>.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Action",
      "default": "Action"
    },
    "endTime": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/endTime.mjs"
    },
    "result": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/result.mjs"
    },
    "startTime": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/startTime.mjs"
    },
    "actionStatus": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/actionStatus.mjs"
    },
    "agent": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/agent.mjs"
    },
    "location": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/location.mjs"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/DefinedTerm.mjs",
  "$source": "https://schema.org/DefinedTerm",
  "title": "DefinedTerm",
  "description": "A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs"
  }],
  "properties": {
    "@type": {
      "const": "DefinedTerm",
      "default": "DefinedTerm"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ProgramMembership.mjs",
  "$source": "https://schema.org/ProgramMembership",
  "title": "ProgramMembership",
  "description": "Used to describe membership in a loyalty programs (e.g. \"StarAliance\"), traveler clubs (e.g. \"AAA\"), purchase clubs (\"Safeway Club\"), etc.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs"
  }],
  "properties": {
    "@type": {
      "const": "ProgramMembership",
      "default": "ProgramMembership"
    },
    "member": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/member.mjs"
    },
    "hostingOrganization": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/hostingOrganization.mjs"
    },
    "programName": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/programName.mjs"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/CreativeWork.mjs",
  "$source": "https://schema.org/CreativeWork",
  "title": "CreativeWork",
  "description": "The most generic kind of creative work, including books, movies, photographs, software programs, etc.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs"
  }],
  "properties": {
    "@type": {
      "const": "CreativeWork",
      "default": "CreativeWork"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/AdministrativeArea.mjs",
  "$source": "https://schema.org/AdministrativeArea",
  "title": "AdministrativeArea",
  "description": "A geographical region, typically under the jurisdiction of a particular government.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Place.mjs"
  }],
  "properties": {
    "@type": {
      "const": "AdministrativeArea",
      "default": "AdministrativeArea"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs",
  "$source": "http://schema.org/Thing",
  "title": "Thing",
  "description": "The most generic type of item.",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "_id": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/_id.mjs"
    },
    "@context": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/context.mjs"
    },
    "@type": {
      "const": "Thing",
      "default": "Thing"
    },
    "identifier": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/identifier.mjs"
    },
    "name": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/name.mjs"
    },
    "alternateName": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/alternateName.mjs"
    },
    "description": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/description.mjs"
    },
    "url": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/url.mjs"
    },
    "sameAs": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/sameAs.mjs"
    },
    "image": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/image.mjs"
    },
    "mainEntityOfPage": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/mainEntityOfPage.mjs"
    },
    "additionalType": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/additionalType.mjs"
    }
  },
  "required": ["identifier", "name"]
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ImageObject.mjs",
  "$source": "https://schema.org/ImageObject",
  "title": "ImageObject",
  "description": "An image file.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/MediaObject.mjs"
  }],
  "properties": {
    "@type": {
      "const": "ImageObject",
      "default": "ImageObject"
    },
    "thumbnail": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/thumbnail.mjs"
    },
    "caption": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/caption.mjs"
    },
    "contentSize": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/contentSize.mjs"
    },
    "width": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/width.mjs"
    },
    "uploadDate": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/uploadDate.mjs"
    },
    "height": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/height.mjs"
    },
    "contentUrl": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/contentUrl.mjs"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Country.mjs",
  "$source": "https://schema.org/Country",
  "title": "Country",
  "description": "A country.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/AdministrativeArea.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Country",
      "default": "Country"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Intangible.mjs",
  "$source": "https://schema.org/Intangible",
  "title": "Intangible",
  "description": "A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Intangible",
      "default": "Intangible"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/PostalAddress.mjs",
  "$source": "https://schema.org/PostalAddress",
  "title": "PostalAddress",
  "description": "The mailing address.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/ContactPoint.mjs"
  }],
  "properties": {
    "@type": {
      "const": "PostalAddress",
      "default": "PostalAddress"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Distance.mjs",
  "$source": "https://schema.org/Distance",
  "title": "Distance",
  "description": "Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Quantity.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Distance",
      "default": "Distance"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/AboutPage.mjs",
  "$source": "https://schema.org/AboutPage",
  "title": "AboutPage",
  "description": "Web page type: About page.",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/WebPage.mjs"
  }],
  "properties": {
    "@type": {
      "const": "AboutPage",
      "default": "AboutPage"
    },
    "relatedLink": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/relatedLink.mjs"
    },
    "primaryImageOfPage": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/primaryImageOfPage.mjs"
    },
    "lastReviewed": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/lastReviewed.mjs"
    },
    "spatialCoverage": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/spatialCoverage.mjs"
    },
    "editor": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/editor.mjs"
    },
    "about": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/about.mjs"
    },
    "text": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/text.mjs"
    },
    "dateCreated": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/dateCreated.mjs"
    },
    "isFamilyFriendly": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/isFamilyFriendly.mjs"
    },
    "mainEntity": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/mainEntity.mjs"
    },
    "version": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/version.mjs"
    },
    "dateModified": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/dateModified.mjs"
    },
    "author": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/author.mjs"
    },
    "inLanguage": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/inLanguage.mjs"
    }
  }
}, {
  "$id": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Person.mjs",
  "$source": "https://schema.org/Person",
  "title": "Person",
  "description": "A person (alive, dead, undead, or fictional).",
  "type": "object",
  "additionalProperties": false,
  "allOf": [{
    "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/classes/Thing.mjs"
  }],
  "properties": {
    "@type": {
      "const": "Person",
      "default": "Person"
    },
    "familyName": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/familyName.mjs"
    },
    "jobTitle": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/jobTitle.mjs"
    },
    "nationality": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/nationality.mjs"
    },
    "additionalName": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/additionalName.mjs"
    },
    "telephone": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/telephone.mjs"
    },
    "email": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/email.mjs"
    },
    "givenName": {
      "$ref": "https://cdn.cbd.int/@action-agenda/schema/dist/props/givenName.mjs"
    }
  }
}]