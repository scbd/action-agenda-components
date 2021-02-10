

# - remove hard coded get json schema and return get from cdn
# schema/overide test

# status control - outline

# protected class
# auto dev env spin-up
# build

# security- middleware - basic - AAN-ROOT - AAN-ADMIN - AAN-EDITOR
# rollback fail
# list Emails
# helmet option
# google captcha keys
# delete
# dump

# validate - if passed array and not array
# validate - if ref passed remove not ref any of

# - post with no className in path
# - get with no className - error

# tests

###LATER
# validation - oneOf - error messages hard to read if not match oneOf.  Elevate the oneOf error and clarify
# include owl equive class and prop in @context
# context should be manditory
# ensure ref.identifier resolves
----------
## SCBD-colleagues - HELP NEEDED
# logging middleware- gets into logs io
# file upload middleware

-----
# WCMC - to finnish
# list - by partnerId -embedded/auto/config?  Exclude system classes
# html filter on text fields
# text fields - links and media objects extracted
# auto resolve partnerIdentifiers
# cache common list calls
# query logger


# DONE
# init mongo 
  - create indexes, identifier, text
# identifier resolver - if mongo or not
# dbquery-parser - cleaning
# http - responses
# partner id resolve
# validation
# get schema | :/class/schema | /:class/schema/:prop
# logger base
# mongo conection
# default options
# Auth middleware without sharing secrets
# parse class/schema middleware
# propertID schema not found error BUG

# meta
# post
  - add ObjectId
  - add international slug
  - 
# post - recursive
  - depth 1 post recurive
    - foreach prop that can be a class
      - is data a class/object
        - is class new
          - post
# map countries

# get - recursive
  - by class



# get - recursive
  - auto resolve x depth

  # meta
  - updatedByText 
  - hash of state

# streams working

# list - recursive - 6x to 12x slower with auto resolver

# single doc in context

# URL classes work
# Email classes work
# post - recurse error
# init countries
# post when prop is an array
# List all Children
# get collection name from options
# refs that cannot be resolved
# post - recursive
        - if exists 
          - put

# put - recursive
  - meta 
  - save version

# version

# bugs found & resolved

  - ref's on put _id saved as string not mongoid

  # hash on post


# on put retain identifiers   - on put - identifier over writes existing
# on put get and Object Assign

# map cachedAPi's
  - countries 
  - regions     


    - Thematic Areas
    - Legal and Institutional Structure - CBD-SUBJECT-LEGAL-STRUCT // exclude for now
      - Legislation
    - Strategy and Planning - CBD-SUBJECT-STRATEGY-PLAN // exclude for now
      - Project/ member
    - Implementation, Monitoring and Reporting - CBD-SUBJECT-IMPL-MON-REPORT  // exclude for now
      - Project/ member
    - Major Groups - CBD-SUBJECT-PART-INIT-COOP  // exclude for now
      - Project/ (NGO/Consortium/Partnership)
    - Programmes/Biomes - CBD-SUBJECT-BIOMES
      - Project/member
    - Cross Cutting Issues - CBD-SUBJECT-CROSS-CUTTING
      - Project/member
    - Outreach - CBD-SUBJECT-OUT+CEPA
      - Project/event
  - action cats
  - aichis     
    - jurisdictions -
  - orgTypes
  
  - sdgs 
    - SME's 