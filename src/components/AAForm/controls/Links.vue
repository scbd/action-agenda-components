<template>
  <section>
    <Icons/>
    <legend>{{label}}</legend>
    <div class="card">
      <div class="card-body">

        <div class="links" v-if="(!multi && !values[0] || multi) ">
          <button v-on:click="show('link')" type="button" class="btn btn-secondary btn-sm">Add Link</button>
          <button v-on:click="show('file')" type="button" class="btn btn-secondary btn-sm">Add File</button>
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
              <label for="url">URL</label>
              
              <input
                :id="`${name}.input.url`"
                type="text"
                class="form-control"
                placeholder="https://www.cbd.int/yourfile"
                aria-label="URL"
                v-validate="{url: {require_protocol: true }, required:true, max:2083}"
                :state="validateState(`${name} url`,input.url)"
                v-model.trim="input.url"
                :name="`${name} url`"
                :class="{'is-invalid':validateState(`${name} url`,input.url)===false}">

              <field-error-message :error="errors.collect(`${name} url`)"/>
            </div>

            <div class="form-group">
              <label for="url">Name</label>
              
              <input
                :id="`${name}.input.name`"
                type="text"
                class="form-control"
                placeholder="your file name"
                aria-label="file name"
                v-validate="'max:60'"
                :state="validateState(`${name} file name`,input.title)"
                v-model.trim="input.title"
                :name="`${name} file name`"
                :class="{'is-invalid':validateState(`${name} file name`,input.title)===false}">

              <field-error-message :error="errors.collect(`${name} file name`)"/>
            </div>

            <div class="text-right" v-if="showFlags.link || showFlags.file ">
              <div class="btn-group">
                <button v-on:click="add()" type="button" class="btn btn-primary btn-sm">Add</button>
                <button
                  v-on:click="resetForm(input)"
                  type="button"
                  class="btn btn-outline-dark btn-sm">
                  Clear
                </button>
                <hr>
              </div>
            </div>

          </div>
        </div>


        <div class="card" v-if="showFlags.file">
          <div class="card-body point">
         
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
                  <strong>Choose a file</strong> by clicking here
                  <span v-if="!noDrop">or drag it here</span>
                </span>

                <span v-if="multi">
                  <strong>Choose files</strong> by clicking here
                  <span v-if="!noDrop">or draging them here</span>
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
      <h3>Drop Files</h3>
    </div>
  </section>
</template>

<style>
/* HACK UPLOAD COMP, NO CURSOR:POINER ON DROP AREA */
.file-uploads.file-uploads-html5 label{
  cursor:pointer;
}
</style>

<style scoped>
.link-line{
  min-height:40px;
}
.drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: 0.6;
  text-align: center;
  background: #000;
}
.drop-active h3 {
  margin: -0.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 1;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: rgba(255, 255, 255, 1);
  padding: 0;
  background-color: #000;
}
.links button {
  margin: 0 0.5em 1em 0;
}
.card {
  margin-bottom: 1.5em;
  background-color: #ddd;
}
.close-float {
  position: absolute;
  top: -3px;
  right: 1em;
}
.remove {
  margin-left: 1em;
}
.card .link {
  background-color: #fff;
}
.alert {
  position: relative;
}
</style>

<script>
import { clone } from '../../../modules/helpers'
import AAFormMixin from '../../../modules/AAFormMixin'
import FileUpload from 'vue-upload-component'
import axios from 'axios'
import Icons from '../../Icons'
export default {
  name: 'Links',
  mixins: [AAFormMixin],
  components: {FileUpload,Icons},
  props: {
    value: {
      type: [Array, Object]
    },
    label: {
      type: String,
   
    },
    type: {
      type: [Array, String],
      required: true
    },
    multi: {
      type: Boolean,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    noDrop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fdat: {},
      dropShow: true,
      files: [],
      values: [],
      input: {
        url: '',
        title: '',
        files: []
      },
      showFlags: {
        link: false,
        file: false
      }
    }
  },
  methods: {
    isUploading,
    add,
    show,
    update,
    remove,
    onInput,
    getPreSignedPost,
    startUploading,
    getSrc

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
    this.values.push({ title:name, url })
    this.update()
    this.show('file')
  } catch (error) {
    console.error(error)
  }
}

async function onInput(newFile, oldFile) {
  //force auto upload
  if (isNewFile(newFile, oldFile)) 
    this.startUploading()
}

function startUploading(){
  if(!this.isUploading())
    this.$refs.upload.active = true
}

function isUploading(){
  return this.$refs.upload.active
}

function isNewFile(newFile, oldFile){
  return (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error )
}

function remove(index) {
  this.values.splice(index, 1)
}

function getSrc(link) {
  link.url.indexOf(' ')
}

function update() {
  // update v-model via $mit on input
  if (this.multi) this.$emit('input', this.values)
  else this.$emit('input', this.values[0])
}

async function add() {
  if ((await this.isValid())===true) {
    let link = clone({ url: this.input.url, title: this.input.title })
    this.values.push(link)
    this.resetForm(this.input)
    this.resetValidation()
    this.show('link')
  }
}

function show(type) {
  this.showFlags[type] = !this.showFlags[type]
  if(type==='link' && this.showFlags.link) 
    this.showFlags.file =  false

  if(type==='file' && this.showFlags.file) 
    this.showFlags.link =  false
}
</script>