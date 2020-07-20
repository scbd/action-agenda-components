((typeof self !== 'undefined' ? self : this)["webpackJsonpSearchTestWidget"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpSearchTestWidget"] || []).push([[1],{

/***/ "02a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _createSuper; });

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("3996");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("b111");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__("77c7");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("e300");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (Object(esm_typeof["a" /* default */])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/createSuper.js




function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(isNativeReflectConstruct["a" /* default */])();
  return function _createSuperInternal() {
    var Super = Object(getPrototypeOf["a" /* default */])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),

/***/ "3996":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var getBuiltIn = __webpack_require__("5428");
var aFunction = __webpack_require__("8697");
var anObject = __webpack_require__("157c");
var isObject = __webpack_require__("7526");
var create = __webpack_require__("82e8");
var bind = __webpack_require__("ce1d");
var fails = __webpack_require__("72df");

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "548c":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");

// `Reflect.has` method
// https://tc39.github.io/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "5dc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2d4c");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "77c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7004");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ef1f");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3996");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0d9f");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);




function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "a528":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e5c7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ky__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "b111":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e68e");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2d4c");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "b2cb":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");

// `Number.isNaN` method
// https://tc39.github.io/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "ce1d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("8697");
var isObject = __webpack_require__("7526");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "defa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("6b1d");
var getOwnPropertyDescriptor = __webpack_require__("185a").f;
var toLength = __webpack_require__("b495");
var notARegExp = __webpack_require__("9eea");
var requireObjectCoercible = __webpack_require__("730c");
var correctIsRegExpLogic = __webpack_require__("3e32");
var IS_PURE = __webpack_require__("0e93");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "e5c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d6de");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8d0f");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d86f");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8d0d");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a650");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("b257");
/* harmony import */ var core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fbf3");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7004");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("e7ce");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("868d");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("f7d3");
/* harmony import */ var core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_global_this__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("e94e");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("b2cb");
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("52f9");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("6559");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ef1f");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_has__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("548c");
/* harmony import */ var core_js_modules_es_reflect_has__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_has__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("2aa5");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("9a51");
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("c78b");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("f3b8");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("2c93");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("defa");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("5a6a");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("4258");
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("5d84");
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("ffd0");
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("1dc1");
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("523f");
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("829e");
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("194e");
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("69a7");
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("655c");
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("4a04");
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("f28a");
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("d0d3");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("d9d9");
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("7de7");
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("53fc");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("8b79");
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("e890");
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("56c2");
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("3c4c");
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("9e77");
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("7846");
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("cecc");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("d9ce");
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("918c");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("b151");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("0a6e");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("df26");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__("42c2");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__("30c6");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__("f5f2");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__("f0ad");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__("02a5");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__("fa53");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__("ce37");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__("0b38");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__("7c6c");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__("cf28");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__("da1e");
/* harmony import */ var _Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__("e300");
































































/*! MIT License © Sindre Sorhus */
var globals = {};

var getGlobal = function getGlobal(property) {
  /* istanbul ignore next */
  if (typeof self !== 'undefined' && self && property in self) {
    return self;
  }
  /* istanbul ignore next */


  if (typeof window !== 'undefined' && window && property in window) {
    return window;
  }

  if (typeof global !== 'undefined' && global && property in global) {
    return global;
  }
  /* istanbul ignore next */


  if (typeof globalThis !== 'undefined' && globalThis) {
    return globalThis;
  }
};

var globalProperties = ['Headers', 'Request', 'Response', 'ReadableStream', 'fetch', 'AbortController', 'FormData'];

var _loop = function _loop() {
  var property = _globalProperties[_i];
  Object.defineProperty(globals, property, {
    get: function get() {
      var globalObject = getGlobal(property);
      var value = globalObject && globalObject[property];
      return typeof value === 'function' ? value.bind(globalObject) : value;
    }
  });
};

for (var _i = 0, _globalProperties = globalProperties; _i < _globalProperties.length; _i++) {
  _loop();
}

var isObject = function isObject(value) {
  return value !== null && Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_62__[/* default */ "a"])(value) === 'object';
};

var supportsAbortController = typeof globals.AbortController === 'function';
var supportsStreams = typeof globals.ReadableStream === 'function';
var supportsFormData = typeof globals.FormData === 'function';

var mergeHeaders = function mergeHeaders(source1, source2) {
  var result = new globals.Headers(source1);
  var isHeadersInstance = source2 instanceof globals.Headers;
  var source = new globals.Headers(source2);

  var _iterator = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_61__[/* default */ "a"])(source),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_60__[/* default */ "a"])(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (isHeadersInstance && value === 'undefined' || value === undefined) {
        result["delete"](key);
      } else {
        result.set(key, value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
};

var deepMerge = function deepMerge() {
  var returnValue = {};
  var headers = {};

  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  for (var _i2 = 0, _sources = sources; _i2 < _sources.length; _i2++) {
    var source = _sources[_i2];

    if (Array.isArray(source)) {
      if (!Array.isArray(returnValue)) {
        returnValue = [];
      }

      returnValue = [].concat(Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_59__[/* default */ "a"])(returnValue), Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_59__[/* default */ "a"])(source));
    } else if (isObject(source)) {
      for (var _i3 = 0, _Object$entries = Object.entries(source); _i3 < _Object$entries.length; _i3++) {
        var _Object$entries$_i = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_60__[/* default */ "a"])(_Object$entries[_i3], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (isObject(value) && Reflect.has(returnValue, key)) {
          value = deepMerge(returnValue[key], value);
        }

        returnValue = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])({}, returnValue), {}, Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_57__[/* default */ "a"])({}, key, value));
      }

      if (isObject(source.headers)) {
        headers = mergeHeaders(headers, source.headers);
      }
    }

    returnValue.headers = headers;
  }

  return returnValue;
};

var requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
var responseTypes = {
  json: 'application/json',
  text: 'text/*',
  formData: 'multipart/form-data',
  arrayBuffer: '*/*',
  blob: '*/*'
};
var retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
var retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
var retryAfterStatusCodes = [413, 429, 503];
var stop = Symbol('stop');

var HTTPError = /*#__PURE__*/function (_Error) {
  Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])(HTTPError, _Error);

  var _super = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_55__[/* default */ "a"])(HTTPError);

  function HTTPError(response) {
    var _this;

    Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_53__[/* default */ "a"])(this, HTTPError);

    // Set the message to the status text, such as Unauthorized,
    // with some fallbacks. This message should never be undefined.
    _this = _super.call(this, response.statusText || String(response.status === 0 || response.status ? response.status : 'Unknown response error'));
    _this.name = 'HTTPError';
    _this.response = response;
    return _this;
  }

  return HTTPError;
}( /*#__PURE__*/Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_56__[/* default */ "a"])(Error));

var TimeoutError = /*#__PURE__*/function (_Error2) {
  Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_54__[/* default */ "a"])(TimeoutError, _Error2);

  var _super2 = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_55__[/* default */ "a"])(TimeoutError);

  function TimeoutError() {
    var _this2;

    Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_53__[/* default */ "a"])(this, TimeoutError);

    _this2 = _super2.call(this, 'Request timed out');
    _this2.name = 'TimeoutError';
    return _this2;
  }

  return TimeoutError;
}( /*#__PURE__*/Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_56__[/* default */ "a"])(Error));

var delay = function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}; // `Promise.race()` workaround (#91)


var timeout = function timeout(promise, ms, abortController) {
  return new Promise(function (resolve, reject) {
    var timeoutID = setTimeout(function () {
      if (abortController) {
        abortController.abort();
      }

      reject(new TimeoutError());
    }, ms);
    /* eslint-disable promise/prefer-await-to-then */

    promise.then(resolve)["catch"](reject).then(function () {
      clearTimeout(timeoutID);
    });
    /* eslint-enable promise/prefer-await-to-then */
  });
};

var normalizeRequestMethod = function normalizeRequestMethod(input) {
  return requestMethods.includes(input) ? input.toUpperCase() : input;
};

var defaultRetryOptions = {
  limit: 2,
  methods: retryMethods,
  statusCodes: retryStatusCodes,
  afterStatusCodes: retryAfterStatusCodes
};

var normalizeRetryOptions = function normalizeRetryOptions() {
  var retry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof retry === 'number') {
    return Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])({}, defaultRetryOptions), {}, {
      limit: retry
    });
  }

  if (retry.methods && !Array.isArray(retry.methods)) {
    throw new Error('retry.methods must be an array');
  }

  if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
    throw new Error('retry.statusCodes must be an array');
  }

  return Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])({}, defaultRetryOptions), retry), {}, {
    afterStatusCodes: retryAfterStatusCodes
  });
}; // The maximum value of a 32bit int (see issue #117)


var maxSafeTimeout = 2147483647;

var Ky = /*#__PURE__*/function () {
  function Ky(input) {
    var _this3 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_53__[/* default */ "a"])(this, Ky);

    this._retryCount = 0;
    this._input = input;
    this._options = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])(Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_58__[/* default */ "a"])({
      // TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
      credentials: this._input.credentials || 'same-origin'
    }, options), {}, {
      headers: mergeHeaders(this._input.headers, options.headers),
      hooks: deepMerge({
        beforeRequest: [],
        beforeRetry: [],
        afterResponse: []
      }, options.hooks),
      method: normalizeRequestMethod(options.method || this._input.method),
      prefixUrl: String(options.prefixUrl || ''),
      retry: normalizeRetryOptions(options.retry),
      throwHttpErrors: options.throwHttpErrors !== false,
      timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout
    });

    if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globals.Request)) {
      throw new TypeError('`input` must be a string, URL, or Request');
    }

    if (this._options.prefixUrl && typeof this._input === 'string') {
      if (this._input.startsWith('/')) {
        throw new Error('`input` must not begin with a slash when using `prefixUrl`');
      }

      if (!this._options.prefixUrl.endsWith('/')) {
        this._options.prefixUrl += '/';
      }

      this._input = this._options.prefixUrl + this._input;
    }

    if (supportsAbortController) {
      this.abortController = new globals.AbortController();

      if (this._options.signal) {
        this._options.signal.addEventListener('abort', function () {
          _this3.abortController.abort();
        });
      }

      this._options.signal = this.abortController.signal;
    }

    this.request = new globals.Request(this._input, this._options);

    if (this._options.searchParams) {
      var url = new URL(this.request.url);
      url.search = new URLSearchParams(this._options.searchParams); // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one

      if ((supportsFormData && this._options.body instanceof globals.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
        this.request.headers["delete"]('content-type');
      }

      this.request = new globals.Request(new globals.Request(url, this.request), this._options);
    }

    if (this._options.json !== undefined) {
      this._options.body = JSON.stringify(this._options.json);
      this.request.headers.set('content-type', 'application/json');
      this.request = new globals.Request(this.request, {
        body: this._options.body
      });
    }

    var fn = /*#__PURE__*/function () {
      var _ref = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_51__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, _iterator2, _step2, hook, modifiedResponse;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this3._options.timeout > maxSafeTimeout)) {
                  _context.next = 2;
                  break;
                }

                throw new RangeError("The `timeout` option cannot be greater than ".concat(maxSafeTimeout));

              case 2:
                _context.next = 4;
                return delay(1);

              case 4:
                _context.next = 6;
                return _this3._fetch();

              case 6:
                response = _context.sent;
                _iterator2 = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_61__[/* default */ "a"])(_this3._options.hooks.afterResponse);
                _context.prev = 8;

                _iterator2.s();

              case 10:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 18;
                  break;
                }

                hook = _step2.value;
                _context.next = 14;
                return hook(_this3.request, _this3._options, response.clone());

              case 14:
                modifiedResponse = _context.sent;

                if (modifiedResponse instanceof globals.Response) {
                  response = modifiedResponse;
                }

              case 16:
                _context.next = 10;
                break;

              case 18:
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](8);

                _iterator2.e(_context.t0);

              case 23:
                _context.prev = 23;

                _iterator2.f();

                return _context.finish(23);

              case 26:
                if (!(!response.ok && _this3._options.throwHttpErrors)) {
                  _context.next = 28;
                  break;
                }

                throw new HTTPError(response);

              case 28:
                if (!_this3._options.onDownloadProgress) {
                  _context.next = 34;
                  break;
                }

                if (!(typeof _this3._options.onDownloadProgress !== 'function')) {
                  _context.next = 31;
                  break;
                }

                throw new TypeError('The `onDownloadProgress` option must be a function');

              case 31:
                if (supportsStreams) {
                  _context.next = 33;
                  break;
                }

                throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');

              case 33:
                return _context.abrupt("return", _this3._stream(response.clone(), _this3._options.onDownloadProgress));

              case 34:
                return _context.abrupt("return", response);

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 20, 23, 26]]);
      }));

      return function fn() {
        return _ref.apply(this, arguments);
      };
    }();

    var isRetriableMethod = this._options.retry.methods.includes(this.request.method.toLowerCase());

    var result = isRetriableMethod ? this._retry(fn) : fn();

    var _loop2 = function _loop2() {
      var _Object$entries2$_i = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_60__[/* default */ "a"])(_Object$entries2[_i4], 2),
          type = _Object$entries2$_i[0],
          mimeType = _Object$entries2$_i[1];

      result[type] = /*#__PURE__*/Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_51__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.request.headers.set('accept', _this3.request.headers.get('accept') || mimeType);

                _context2.next = 3;
                return result;

              case 3:
                response = _context2.sent.clone();
                return _context2.abrupt("return", type === 'json' && response.status === 204 ? '' : response[type]());

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    };

    for (var _i4 = 0, _Object$entries2 = Object.entries(responseTypes); _i4 < _Object$entries2.length; _i4++) {
      _loop2();
    }

    return result;
  }

  Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_52__[/* default */ "a"])(Ky, [{
    key: "_calculateRetryDelay",
    value: function _calculateRetryDelay(error) {
      this._retryCount++;

      if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
        if (error instanceof HTTPError) {
          if (!this._options.retry.statusCodes.includes(error.response.status)) {
            return 0;
          }

          var retryAfter = error.response.headers.get('Retry-After');

          if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
            var after = Number(retryAfter);

            if (Number.isNaN(after)) {
              after = Date.parse(retryAfter) - Date.now();
            } else {
              after *= 1000;
            }

            if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) {
              return 0;
            }

            return after;
          }

          if (error.response.status === 413) {
            return 0;
          }
        }

        var BACKOFF_FACTOR = 0.3;
        return BACKOFF_FACTOR * Math.pow(2, this._retryCount - 1) * 1000;
      }

      return 0;
    }
  }, {
    key: "_retry",
    value: function () {
      var _retry2 = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_51__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(fn) {
        var ms, _iterator3, _step3, hook, hookResult;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return fn();

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                ms = Math.min(this._calculateRetryDelay(_context3.t0), maxSafeTimeout);

                if (!(ms !== 0 && this._retryCount > 0)) {
                  _context3.next = 33;
                  break;
                }

                _context3.next = 12;
                return delay(ms);

              case 12:
                _iterator3 = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_61__[/* default */ "a"])(this._options.hooks.beforeRetry);
                _context3.prev = 13;

                _iterator3.s();

              case 15:
                if ((_step3 = _iterator3.n()).done) {
                  _context3.next = 24;
                  break;
                }

                hook = _step3.value;
                _context3.next = 19;
                return hook({
                  request: this.request,
                  options: this._options,
                  error: _context3.t0,
                  response: _context3.t0.response.clone(),
                  retryCount: this._retryCount
                });

              case 19:
                hookResult = _context3.sent;

                if (!(hookResult === stop)) {
                  _context3.next = 22;
                  break;
                }

                return _context3.abrupt("return");

              case 22:
                _context3.next = 15;
                break;

              case 24:
                _context3.next = 29;
                break;

              case 26:
                _context3.prev = 26;
                _context3.t1 = _context3["catch"](13);

                _iterator3.e(_context3.t1);

              case 29:
                _context3.prev = 29;

                _iterator3.f();

                return _context3.finish(29);

              case 32:
                return _context3.abrupt("return", this._retry(fn));

              case 33:
                if (!this._options.throwHttpErrors) {
                  _context3.next = 35;
                  break;
                }

                throw _context3.t0;

              case 35:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6], [13, 26, 29, 32]]);
      }));

      function _retry(_x) {
        return _retry2.apply(this, arguments);
      }

      return _retry;
    }()
  }, {
    key: "_fetch",
    value: function () {
      var _fetch2 = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_51__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _iterator4, _step4, hook, _result;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _iterator4 = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_61__[/* default */ "a"])(this._options.hooks.beforeRequest);
                _context4.prev = 1;

                _iterator4.s();

              case 3:
                if ((_step4 = _iterator4.n()).done) {
                  _context4.next = 15;
                  break;
                }

                hook = _step4.value;
                _context4.next = 7;
                return hook(this.request, this._options);

              case 7:
                _result = _context4.sent;

                if (!(_result instanceof Request)) {
                  _context4.next = 11;
                  break;
                }

                this.request = _result;
                return _context4.abrupt("break", 15);

              case 11:
                if (!(_result instanceof Response)) {
                  _context4.next = 13;
                  break;
                }

                return _context4.abrupt("return", _result);

              case 13:
                _context4.next = 3;
                break;

              case 15:
                _context4.next = 20;
                break;

              case 17:
                _context4.prev = 17;
                _context4.t0 = _context4["catch"](1);

                _iterator4.e(_context4.t0);

              case 20:
                _context4.prev = 20;

                _iterator4.f();

                return _context4.finish(20);

              case 23:
                if (!(this._options.timeout === false)) {
                  _context4.next = 25;
                  break;
                }

                return _context4.abrupt("return", globals.fetch(this.request.clone()));

              case 25:
                return _context4.abrupt("return", timeout(globals.fetch(this.request.clone()), this._options.timeout, this.abortController));

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 17, 20, 23]]);
      }));

      function _fetch() {
        return _fetch2.apply(this, arguments);
      }

      return _fetch;
    }()
    /* istanbul ignore next */

  }, {
    key: "_stream",
    value: function _stream(response, onDownloadProgress) {
      var totalBytes = Number(response.headers.get('content-length')) || 0;
      var transferredBytes = 0;
      return new globals.Response(new globals.ReadableStream({
        start: function start(controller) {
          var reader = response.body.getReader();

          if (onDownloadProgress) {
            onDownloadProgress({
              percent: 0,
              transferredBytes: 0,
              totalBytes: totalBytes
            }, new Uint8Array());
          }

          function read() {
            return _read.apply(this, arguments);
          }

          function _read() {
            _read = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_51__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _yield$reader$read, done, value, percent;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return reader.read();

                    case 2:
                      _yield$reader$read = _context5.sent;
                      done = _yield$reader$read.done;
                      value = _yield$reader$read.value;

                      if (!done) {
                        _context5.next = 8;
                        break;
                      }

                      controller.close();
                      return _context5.abrupt("return");

                    case 8:
                      if (onDownloadProgress) {
                        transferredBytes += value.byteLength;
                        percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                        onDownloadProgress({
                          percent: percent,
                          transferredBytes: transferredBytes,
                          totalBytes: totalBytes
                        }, value);
                      }

                      controller.enqueue(value);
                      read();

                    case 11:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
            return _read.apply(this, arguments);
          }

          read();
        }
      }));
    }
  }]);

  return Ky;
}();

var validateAndMerge = function validateAndMerge() {
  for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    sources[_key2] = arguments[_key2];
  }

  for (var _i5 = 0, _sources2 = sources; _i5 < _sources2.length; _i5++) {
    var source = _sources2[_i5];

    if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
      throw new TypeError('The `options` argument must be an object');
    }
  }

  return deepMerge.apply(void 0, [{}].concat(sources));
};

var createInstance = function createInstance(defaults) {
  var ky = function ky(input, options) {
    return new Ky(input, validateAndMerge(defaults, options));
  };

  var _iterator5 = Object(_Users_randyhoulahan_projects_scbd_action_agenda_components_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_61__[/* default */ "a"])(requestMethods),
      _step5;

  try {
    var _loop3 = function _loop3() {
      var method = _step5.value;

      ky[method] = function (input, options) {
        return new Ky(input, validateAndMerge(defaults, options, {
          method: method
        }));
      };
    };

    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  ky.HTTPError = HTTPError;
  ky.TimeoutError = TimeoutError;

  ky.create = function (newDefaults) {
    return createInstance(validateAndMerge(newDefaults));
  };

  ky.extend = function (newDefaults) {
    return createInstance(validateAndMerge(defaults, newDefaults));
  };

  ky.stop = stop;
  return ky;
};

/* harmony default export */ __webpack_exports__["a"] = (createInstance());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7d15")))

/***/ }),

/***/ "e7ce":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");
var bind = __webpack_require__("ce1d");

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "f0ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8f84");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5dc0");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "fa53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ wrapNativeSuper_wrapNativeSuper; });

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__("9bd2");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.object.create.js
var es_object_create = __webpack_require__("8f84");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("ef1f");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("f3b8");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("918c");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("b111");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__("5dc0");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("beb4");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("7004");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("0d9f");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js




function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("e7ce");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("3996");

// EXTERNAL MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__("77c7");

// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/construct.js




function construct_construct(Parent, args, Class) {
  if (Object(isNativeReflectConstruct["a" /* default */])()) {
    construct_construct = Reflect.construct;
  } else {
    construct_construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(setPrototypeOf["a" /* default */])(instance, Class.prototype);
      return instance;
    };
  }

  return construct_construct.apply(null, arguments);
}
// CONCATENATED MODULE: /Users/randyhoulahan/projects/@scbd/action-agenda-components/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js









function wrapNativeSuper_wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  wrapNativeSuper_wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct_construct(Class, arguments, Object(getPrototypeOf["a" /* default */])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(setPrototypeOf["a" /* default */])(Wrapper, Class);
  };

  return wrapNativeSuper_wrapNativeSuper(Class);
}

/***/ }),

/***/ "fbf3":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("6b1d");

// `Date.now` method
// https://tc39.github.io/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ })

}]);
//# sourceMappingURL=index.umd.vendors~ky-universal.js.map