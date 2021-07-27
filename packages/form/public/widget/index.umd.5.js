((typeof self !== 'undefined' ? self : this)["webpackJsonpFormTestWidget"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpFormTestWidget"] || []).push([[5],{

/***/ "38db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0ae9890a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeedbackList/Validate.vue?vue&type=template&id=d9f82ec0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert alert-warning alert-dismissible"},[_c('h5',[_vm._v(" "+_vm._s(_vm.$t('Form is not valid'))+" ")]),_c('div',[_c('pre',[_vm._v(_vm._s(this.error.response.data.errors))])]),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"alert","aria-label":"Close"},on:{"click":function($event){return _vm.del()}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v(" × ")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FeedbackList/Validate.vue?vue&type=template&id=d9f82ec0&

// EXTERNAL MODULE: ./src/components/FeedbackList/FeedbackMixin.js
var FeedbackMixin = __webpack_require__("3d13");

// EXTERNAL MODULE: ./src/locales/index.js
var locales = __webpack_require__("bf0f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeedbackList/Validate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Validatevue_type_script_lang_js_ = ({
  name    : 'Validate',
  mixins  : [ FeedbackMixin["a" /* default */] ], i18n: locales["a" /* default */]
});

// CONCATENATED MODULE: ./src/components/FeedbackList/Validate.vue?vue&type=script&lang=js&
 /* harmony default export */ var FeedbackList_Validatevue_type_script_lang_js_ = (Validatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/FeedbackList/Validate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  FeedbackList_Validatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Validate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3d13":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props   : [ 'error', 'index' ],
  methods : { del, requestDescriptionText },
  computed: { name, description }
});

function name        (){ return this.$t(this.error.message) }

function del         (){ this.$emit('deleteFeedback', { index: this.index, type: 'error' }) }

function description (){

  if(this.error.config) return this.requestDescriptionText(this.error)

  return this.error.desciprtion? this.$t(this.error.desciprtion) : ''
}

function requestDescriptionText(error){
  const { url, method } = error.config

  return `
  ${this.$t('URL')}   : ${url}
  ${this.$t('Method')}: ${method}
  `
}

/***/ })

}]);
//# sourceMappingURL=index.umd.5.js.map