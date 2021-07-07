<template>
  <section>
    <legend>{{label}}</legend>
    <div class="card">
      <div class="card-body">

        <div class="links" v-if="(!multi && !values[0] || multi) ">
          <button v-on:click="show('link')" type="button" class="btn btn-secondary btn-sm">{{$t('Add Link')}}</button>
          <button v-on:click="show('file')" type="button" class="btn btn-secondary btn-sm">{{$t('Add File')}}</button>
        </div>

        <div class="card" v-if="showFlags.link">
          <button
            v-on:click="show('link')"
            type="button"
            class="close close-float"
            aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
          <div class="card-body">

            <div class="form-group">
              <label for="url">{{$t('Url')}}</label>
              
              <input
                id="links.url"
                ref="links.url"
                type="text"
                class="form-control"
                aria-label="URL"
                v-validate="{url: {require_protocol: true }, required:true, max:2083}"
                v-model.trim="input.url"
                :name="'url.label'"
                :class ="[ getValidationClass(`url.label`) ]" 
                />

              <field-error-message :error="errors.collect(`url.label`)" :state="validateState(`url.label`)" />
            </div>

            <div class="form-group" :id="`links.group.name`" >
              <label  for="links.name"> {{ $t(`Name`) }} </label>
              <input class="form-control" 
                @input      ="update"
                id          ="links.name"
                ref          ="links.name"
                type        ="text"
                v-model.trim="input.name[$i18n.locale]"
                v-validate  ="'required|max:140'"
                :class      ="[ getValidationClass(`name.label`) ]"
                :name       ="`name.label`"
                />
              <field-error-message :error="errors.collect(`name.label`)"/>
            </div>

            <div class="text-right" v-if="showFlags.link || showFlags.file ">
              <div class="btn-group">
                <button v-on:click="add()" type="button" class="btn btn-primary btn-sm">{{$t(`Add`)}}</button>
                <button
                  v-on:click="resetForm(input)"
                  type="button"
                  class="btn btn-outline-dark btn-sm">
                  {{$t(`Clear`)}}
                </button>
                <hr>
              </div>
            </div>

          </div>
        </div>


        <div class="card" v-if="showFlags.file">
          <div class="card-body point text-center">
         
            <FileUpload
              class="alert alert-info mt-2 mb-0 file-uploads-drop"
              ref="upload"
              v-model="files"
              :drop="true"
              :custom-action="getPreSignedPost"
              :thread="25"
              @input-file="onInput"
              :multiple="true">

              <legend for="file" class="point">
                <svg class="icon x3">
                  <use xlink:href="#icon-cloud-upload"></use>
                </svg>

                <br/>

                <span v-if="!multi">
                  <strong>{{$t('Choose a file')}}</strong> {{$t('by clicking here')}}
                  <span v-if="!noDrop">{{$t('or drag it here')}}</span>
                </span>

                <span v-if="multi">
                  <strong>{{$t('Choose files')}}</strong> {{$t('by clicking here')}}
                  <span v-if="!noDrop">{{$t('or drag them here')}}</span>
                </span>
              </legend>

            </FileUpload>

          </div>
          <button
            v-on:click="show('link')"
            type="button"
            class="close close-float"
            aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="card link mt-3" v-for="(link,key,index) in values" v-bind:key="index">
          <div class="card-body py-0">
            <div class="row">
              <div class="link-line col-11 pt-2">
                <span>{{link.title || link.url}}</span>
              </div>
              <div class="col-1 my-1 text-right">
                <button
                  v-on:click="remove(index)"
                  type="button"
                  class="btn btn-sm btn-outline-dark remove"
                  aria-label="Close">

                  <svg class="icon">
                    <use xlink:href="#icon-trash-o"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
      <h3>{{$t('Drop Files')}}</h3>
    </div>
  </section>
</template>

<style>
  /* HACK UPLOAD COMP, NO CURSOR:POINER ON DROP AREA */
  .file-uploads.file-uploads-html5 label{ cursor:pointer; }
</style>

<style scoped>
  .link-line      { min-height:40px; }
  .drop-active    { top: 0; bottom: 0; right: 0; left: 0; position: fixed; z-index: 9999; opacity: 0.6; text-align: center; background: #000; }
  .drop-active h3 { margin: -0.5em 0 0; position: absolute; top: 50%; left: 0; right: 0; opacity: 1; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); font-size: 40px; color: rgba(255, 255, 255, 1); padding: 0; background-color: #000; }
  .links button   { margin: 0 0.5em 1em 0; }
  .card           { margin-bottom: 1.5em; background-color: #ddd; }
  .close-float    { position: absolute; top: -3px; right: 1em; }
  .remove         { margin-left: 1em; }
  .card .link     { background-color: #fff; }
  .alert          { position: relative; }
</style>

<script>
  import clone       from 'lodash.clone'
  import FileUpload  from 'vue-upload-component'
  import axios       from 'axios'
  import consola     from 'consola' 
  import i18n from '../../../locales/index.js'
  import FormMixin   from '../../form-mixin.js'
  import getLocale from '../../locale.js'

  export default {
    name      : 'Links',
    mixins    : [ FormMixin ],
    components: { FileUpload },
    props: {
      value : { type: [Array, Object] },
      label : { type: String, },
      multi : { type: Boolean, required: false },
      name  : { type: String, required: true },
      noDrop: { type: Boolean, default: false },
      type  : { type: [Array, String], required: true }
    },
    methods: { isUploading, add, show, update, remove, onInput, getPreSignedPost, startUploading, getSrc },
    data,i18n
  }

  function   data() {
    return {
      fdat     : {},
      dropShow : true,
      files    : [],
      values   : [],
      input    : { url: '', name: {}, files: [] },
      showFlags: { link: false, file: false }
    }
  }

  async function getPreSignedPost(file, comp) {
    try {

      let presignedPostUrl = 'https://88g0q0fw15.execute-api.us-east-1.amazonaws.com/dev/s3-pre-sign/upload'
      let postBody = { name: file.file.name, type: file.file.type }
      let { name, url, putUrl } = (await axios.post(presignedPostUrl, postBody)).data

      file.data['Content-Type'] = file.file.type // for the head so signature matches
      file.putAction = putUrl
      await comp.uploadPut(file)
      this.values.push({ name:{ [getLocale()]:name}, url })
      this.update()
      this.show('file')
    } catch (error) {
      consola.error(error)
    }
  }

  async function onInput(newFile, oldFile) {
    //force auto upload
    if (isNewFile(newFile, oldFile))  this.startUploading()
  }

  function startUploading(){
    if(!this.isUploading()) this.$refs.upload.active = true
  }

  function isUploading(){ return this.$refs.upload.active }

  function isNewFile(newFile, oldFile){
    return (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error )
  }

  function remove(index) { this.values.splice(index, 1) }

  function getSrc(link) { link.url.indexOf(' ') }

  function update() {

    // update v-model via $mit on input
    if (this.multi) 
      this.$emit('input', this.values)
    else 
      this.$emit('input', this.values[0])
  }

  async function add() {
    let isValidFlag = false
    
    await this.$validator.validate()
    isValidFlag = !this.$validator.errors.count()

    if (isValidFlag) {
      let link = clone({ url: this.input.url, name: this.input.name })
      this.values.push(link)
      this.show('link')
    }
  }

  function show(type) {
    this.showFlags[type] = !this.showFlags[type]
    if(type==='link' && this.showFlags.link) 
      this.showFlags.file =  false

    if(type==='file' && this.showFlags.file) 
      this.showFlags.link =  false

    if(this.showFlags.link){
        this.input.url =''
        this.input.name[getLocale()]=''
    }
      if(this.showFlags.file){
        this.input.files = []
        this.input.url =''
        this.input.name[getLocale()]=''
    }
  }
</script>