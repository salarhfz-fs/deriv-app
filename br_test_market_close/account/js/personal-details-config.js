(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/shared"), require("@deriv/translations"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/shared", "@deriv/translations"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/shared"), require("@deriv/translations"));
	else
		root["@deriv/account"] = factory(root["@deriv/shared"], root["@deriv/translations"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Configs/personal-details-config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Configs/personal-details-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar personal_details_config = function personal_details_config(_ref) {\n  var _account_settings$acc, _account_settings$sal, _account_settings$fir, _account_settings$las, _account_settings$pho, _residence_list$find, _account_settings$tax;\n\n  var residence_list = _ref.residence_list,\n      account_settings = _ref.account_settings,\n      is_dashboard = _ref.is_dashboard;\n\n  if (!residence_list || !account_settings) {\n    return {};\n  }\n\n  var disabled_items = _toConsumableArray(Object.keys(account_settings).filter(function (field_name) {\n    return field_name !== 'account_opening_reason' && !!field_name;\n  }));\n\n  var config = {\n    account_opening_reason: {\n      supported_in: ['iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$acc = account_settings.account_opening_reason) !== null && _account_settings$acc !== void 0 ? _account_settings$acc : '',\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Account opening reason is required')]]\n    },\n    salutation: {\n      supported_in: ['iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$sal = account_settings.salutation) !== null && _account_settings$sal !== void 0 ? _account_settings$sal : '',\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Salutation is required')]]\n    },\n    first_name: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$fir = account_settings.first_name) !== null && _account_settings$fir !== void 0 ? _account_settings$fir : '',\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('First name is required')], ['letter_symbol', Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__[\"getErrorMessages\"])().letter_symbol()], ['length', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('First name should be between 2 and 30 characters.'), {\n        min: 2,\n        max: 30\n      }]]\n    },\n    last_name: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$las = account_settings.last_name) !== null && _account_settings$las !== void 0 ? _account_settings$las : '',\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Last name is required')], ['letter_symbol', Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__[\"getErrorMessages\"])().letter_symbol()], ['length', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Last name should be between 2 and 30 characters.'), {\n        min: 2,\n        max: 30\n      }]]\n    },\n    date_of_birth: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: account_settings.date_of_birth ? Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__[\"toMoment\"])(account_settings.date_of_birth).format('YYYY-MM-DD') : '',\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Date of birth is required')], [function (v) {\n        return Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__[\"toMoment\"])(v).isValid() && Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__[\"toMoment\"])(v).isBefore(Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__[\"toMoment\"])().subtract(18, 'years'));\n      }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('You must be 18 years old and above.')]]\n    },\n    place_of_birth: {\n      supported_in: ['maltainvest', 'iom', 'malta'],\n      default_value: account_settings.place_of_birth ? residence_list.find(function (item) {\n        return item.value === account_settings.place_of_birth;\n      }).text : '',\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Place of birth is required')]]\n    },\n    citizen: {\n      supported_in: ['iom', 'malta', 'maltainvest'],\n      default_value: account_settings.citizen ? residence_list.find(function (item) {\n        return item.value === account_settings.citizen;\n      }).text : '',\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Citizenship is required')]]\n    },\n    phone: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$pho = account_settings.phone) !== null && _account_settings$pho !== void 0 ? _account_settings$pho : '',\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Phone is required')], ['phone', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Phone is not in a proper format.')], ['length', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Phone should be between 8 and 35 numbers.'), {\n        min: 9,\n        max: 36\n      }] // minimum characters required is 9 including (+) sign.\n      ]\n    },\n    tax_residence: {\n      default_value: account_settings.tax_residence ? (_residence_list$find = residence_list.find(function (item) {\n        return item.value === account_settings.tax_residence;\n      })) === null || _residence_list$find === void 0 ? void 0 : _residence_list$find.text : '',\n      supported_in: ['maltainvest'],\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Tax residence is required')]]\n    },\n    tax_identification_number: {\n      default_value: (_account_settings$tax = account_settings.tax_identification_number) !== null && _account_settings$tax !== void 0 ? _account_settings$tax : '',\n      supported_in: ['maltainvest'],\n      rules: [['req', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Tax Identification Number is required')], [function (value, options, _ref2) {\n        var tax_residence = _ref2.tax_residence;\n        return !!tax_residence;\n      }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Please fill in Tax residence')], [function (value, options, _ref3) {\n        var _from_list$, _from_list$$tin_forma;\n\n        var tax_residence = _ref3.tax_residence;\n        var from_list = residence_list.filter(function (res) {\n          return res.text === tax_residence && res.tin_format;\n        });\n        var tax_regex = (_from_list$ = from_list[0]) === null || _from_list$ === void 0 ? void 0 : (_from_list$$tin_forma = _from_list$.tin_format) === null || _from_list$$tin_forma === void 0 ? void 0 : _from_list$$tin_forma[0];\n        return tax_regex ? new RegExp(tax_regex).test(value) : true;\n      }, ['warn', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('This Tax Identification Number (TIN) is invalid. You may continue with account creation, but to facilitate future payment processes, valid tax information will be required.')]]]\n    },\n    tax_identification_confirm: {\n      default_value: false,\n      supported_in: ['maltainvest'],\n      rules: [['confirm', Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Please confirm your tax information')]]\n    }\n  };\n\n  var getConfig = function getConfig() {\n    if (is_dashboard) {\n      var allowed_fields = ['first_name', 'last_name', 'date_of_birth', 'phone'];\n      return Object.keys(config).reduce(function (new_config, key) {\n        if (allowed_fields.includes(key)) {\n          new_config[key] = config[key];\n        }\n\n        return new_config;\n      }, {});\n    }\n\n    return config;\n  };\n\n  return [getConfig(), disabled_items];\n};\n\nvar personalDetailsConfig = function personalDetailsConfig(_ref4, PersonalDetails) {\n  var upgrade_info = _ref4.upgrade_info,\n      real_account_signup_target = _ref4.real_account_signup_target,\n      residence_list = _ref4.residence_list,\n      account_settings = _ref4.account_settings;\n  var is_dashboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  var _personal_details_con = personal_details_config({\n    residence_list: residence_list,\n    account_settings: account_settings,\n    is_dashboard: is_dashboard\n  }),\n      _personal_details_con2 = _slicedToArray(_personal_details_con, 2),\n      config = _personal_details_con2[0],\n      disabled_items = _personal_details_con2[1];\n\n  return {\n    header: {\n      active_title: is_dashboard ? Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('A few personal details') : Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Complete your personal details'),\n      title: is_dashboard ? Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('PERSONAL') : Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Personal details')\n    },\n    body: PersonalDetails,\n    form_value: Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__[\"getDefaultFields\"])(real_account_signup_target, config),\n    props: {\n      validate: Object(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__[\"generateValidationFunction\"])(real_account_signup_target, transformConfig(config, {\n        real_account_signup_target: real_account_signup_target\n      })),\n      is_svg: (upgrade_info === null || upgrade_info === void 0 ? void 0 : upgrade_info.can_upgrade_to) === 'svg',\n      account_opening_reason_list: [{\n        text: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Hedging'),\n        value: 'Hedging'\n      }, {\n        text: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Income Earning'),\n        value: 'Income Earning'\n      }, {\n        text: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Speculative'),\n        value: 'Speculative'\n      }],\n      salutation_list: [{\n        label: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Mr'),\n        value: 'Mr'\n      }, {\n        label: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Mrs'),\n        value: 'Mrs'\n      }, {\n        label: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Ms'),\n        value: 'Ms'\n      }, {\n        label: Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__[\"localize\"])('Miss'),\n        value: 'Miss'\n      }],\n      disabled_items: disabled_items\n    },\n    passthrough: ['residence_list', 'is_fully_authenticated'],\n    icon: 'IcDashboardPersonalDetails'\n  };\n};\n\nvar transformConfig = function transformConfig(config, _ref5) {\n  var real_account_signup_target = _ref5.real_account_signup_target;\n\n  // Remove required rule for malta and iom\n  if (['malta', 'iom'].includes(real_account_signup_target) && config.tax_residence) {\n    config.tax_residence.rules.shift();\n  }\n\n  return config;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (personalDetailsConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL3BlcnNvbmFsLWRldGFpbHMtY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db25maWdzL3BlcnNvbmFsLWRldGFpbHMtY29uZmlnLmpzPzQwMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9Nb21lbnQsIGdldEVycm9yTWVzc2FnZXMsIGdlbmVyYXRlVmFsaWRhdGlvbkZ1bmN0aW9uLCBnZXREZWZhdWx0RmllbGRzIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuXG5jb25zdCBwZXJzb25hbF9kZXRhaWxzX2NvbmZpZyA9ICh7IHJlc2lkZW5jZV9saXN0LCBhY2NvdW50X3NldHRpbmdzLCBpc19kYXNoYm9hcmQgfSkgPT4ge1xuICAgIGlmICghcmVzaWRlbmNlX2xpc3QgfHwgIWFjY291bnRfc2V0dGluZ3MpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2FibGVkX2l0ZW1zID0gW1xuICAgICAgICAuLi5PYmplY3Qua2V5cyhhY2NvdW50X3NldHRpbmdzKS5maWx0ZXIoZmllbGRfbmFtZSA9PiBmaWVsZF9uYW1lICE9PSAnYWNjb3VudF9vcGVuaW5nX3JlYXNvbicgJiYgISFmaWVsZF9uYW1lKSxcbiAgICBdO1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBhY2NvdW50X29wZW5pbmdfcmVhc29uOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmFjY291bnRfb3BlbmluZ19yZWFzb24gPz8gJycsXG4gICAgICAgICAgICBydWxlczogW1sncmVxJywgbG9jYWxpemUoJ0FjY291bnQgb3BlbmluZyByZWFzb24gaXMgcmVxdWlyZWQnKV1dLFxuICAgICAgICB9LFxuICAgICAgICBzYWx1dGF0aW9uOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLnNhbHV0YXRpb24gPz8gJycsXG4gICAgICAgICAgICBydWxlczogW1sncmVxJywgbG9jYWxpemUoJ1NhbHV0YXRpb24gaXMgcmVxdWlyZWQnKV1dLFxuICAgICAgICB9LFxuICAgICAgICBmaXJzdF9uYW1lOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnc3ZnJywgJ2lvbScsICdtYWx0YScsICdtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5maXJzdF9uYW1lID8/ICcnLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICBbJ3JlcScsIGxvY2FsaXplKCdGaXJzdCBuYW1lIGlzIHJlcXVpcmVkJyldLFxuICAgICAgICAgICAgICAgIFsnbGV0dGVyX3N5bWJvbCcsIGdldEVycm9yTWVzc2FnZXMoKS5sZXR0ZXJfc3ltYm9sKCldLFxuICAgICAgICAgICAgICAgIFsnbGVuZ3RoJywgbG9jYWxpemUoJ0ZpcnN0IG5hbWUgc2hvdWxkIGJlIGJldHdlZW4gMiBhbmQgMzAgY2hhcmFjdGVycy4nKSwgeyBtaW46IDIsIG1heDogMzAgfV0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBsYXN0X25hbWU6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmxhc3RfbmFtZSA/PyAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgWydyZXEnLCBsb2NhbGl6ZSgnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJyldLFxuICAgICAgICAgICAgICAgIFsnbGV0dGVyX3N5bWJvbCcsIGdldEVycm9yTWVzc2FnZXMoKS5sZXR0ZXJfc3ltYm9sKCldLFxuICAgICAgICAgICAgICAgIFsnbGVuZ3RoJywgbG9jYWxpemUoJ0xhc3QgbmFtZSBzaG91bGQgYmUgYmV0d2VlbiAyIGFuZCAzMCBjaGFyYWN0ZXJzLicpLCB7IG1pbjogMiwgbWF4OiAzMCB9XSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVfb2ZfYmlydGg6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmRhdGVfb2ZfYmlydGhcbiAgICAgICAgICAgICAgICA/IHRvTW9tZW50KGFjY291bnRfc2V0dGluZ3MuZGF0ZV9vZl9iaXJ0aCkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICBbJ3JlcScsIGxvY2FsaXplKCdEYXRlIG9mIGJpcnRoIGlzIHJlcXVpcmVkJyldLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdiA9PiB0b01vbWVudCh2KS5pc1ZhbGlkKCkgJiYgdG9Nb21lbnQodikuaXNCZWZvcmUodG9Nb21lbnQoKS5zdWJ0cmFjdCgxOCwgJ3llYXJzJykpLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl6ZSgnWW91IG11c3QgYmUgMTggeWVhcnMgb2xkIGFuZCBhYm92ZS4nKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2Vfb2ZfYmlydGg6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydtYWx0YWludmVzdCcsICdpb20nLCAnbWFsdGEnXSxcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGFjY291bnRfc2V0dGluZ3MucGxhY2Vfb2ZfYmlydGhcbiAgICAgICAgICAgICAgICA/IHJlc2lkZW5jZV9saXN0LmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBhY2NvdW50X3NldHRpbmdzLnBsYWNlX29mX2JpcnRoKS50ZXh0XG4gICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbWydyZXEnLCBsb2NhbGl6ZSgnUGxhY2Ugb2YgYmlydGggaXMgcmVxdWlyZWQnKV1dLFxuICAgICAgICB9LFxuICAgICAgICBjaXRpemVuOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmNpdGl6ZW5cbiAgICAgICAgICAgICAgICA/IHJlc2lkZW5jZV9saXN0LmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBhY2NvdW50X3NldHRpbmdzLmNpdGl6ZW4pLnRleHRcbiAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgcnVsZXM6IFtbJ3JlcScsIGxvY2FsaXplKCdDaXRpemVuc2hpcCBpcyByZXF1aXJlZCcpXV0sXG4gICAgICAgIH0sXG4gICAgICAgIHBob25lOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnc3ZnJywgJ2lvbScsICdtYWx0YScsICdtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5waG9uZSA/PyAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgWydyZXEnLCBsb2NhbGl6ZSgnUGhvbmUgaXMgcmVxdWlyZWQnKV0sXG4gICAgICAgICAgICAgICAgWydwaG9uZScsIGxvY2FsaXplKCdQaG9uZSBpcyBub3QgaW4gYSBwcm9wZXIgZm9ybWF0LicpXSxcbiAgICAgICAgICAgICAgICBbJ2xlbmd0aCcsIGxvY2FsaXplKCdQaG9uZSBzaG91bGQgYmUgYmV0d2VlbiA4IGFuZCAzNSBudW1iZXJzLicpLCB7IG1pbjogOSwgbWF4OiAzNiB9XSwgLy8gbWluaW11bSBjaGFyYWN0ZXJzIHJlcXVpcmVkIGlzIDkgaW5jbHVkaW5nICgrKSBzaWduLlxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgdGF4X3Jlc2lkZW5jZToge1xuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy50YXhfcmVzaWRlbmNlXG4gICAgICAgICAgICAgICAgPyByZXNpZGVuY2VfbGlzdC5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gYWNjb3VudF9zZXR0aW5ncy50YXhfcmVzaWRlbmNlKT8udGV4dFxuICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnbWFsdGFpbnZlc3QnXSxcbiAgICAgICAgICAgIHJ1bGVzOiBbWydyZXEnLCBsb2NhbGl6ZSgnVGF4IHJlc2lkZW5jZSBpcyByZXF1aXJlZCcpXV0sXG4gICAgICAgIH0sXG4gICAgICAgIHRheF9pZGVudGlmaWNhdGlvbl9udW1iZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGFjY291bnRfc2V0dGluZ3MudGF4X2lkZW50aWZpY2F0aW9uX251bWJlciA/PyAnJyxcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICBbJ3JlcScsIGxvY2FsaXplKCdUYXggSWRlbnRpZmljYXRpb24gTnVtYmVyIGlzIHJlcXVpcmVkJyldLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlLCBvcHRpb25zLCB7IHRheF9yZXNpZGVuY2UgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdGF4X3Jlc2lkZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxpemUoJ1BsZWFzZSBmaWxsIGluIFRheCByZXNpZGVuY2UnKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlLCBvcHRpb25zLCB7IHRheF9yZXNpZGVuY2UgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbV9saXN0ID0gcmVzaWRlbmNlX2xpc3QuZmlsdGVyKHJlcyA9PiByZXMudGV4dCA9PT0gdGF4X3Jlc2lkZW5jZSAmJiByZXMudGluX2Zvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXhfcmVnZXggPSBmcm9tX2xpc3RbMF0/LnRpbl9mb3JtYXQ/LlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXhfcmVnZXggPyBuZXcgUmVnRXhwKHRheF9yZWdleCkudGVzdCh2YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2FybicsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVGhpcyBUYXggSWRlbnRpZmljYXRpb24gTnVtYmVyIChUSU4pIGlzIGludmFsaWQuIFlvdSBtYXkgY29udGludWUgd2l0aCBhY2NvdW50IGNyZWF0aW9uLCBidXQgdG8gZmFjaWxpdGF0ZSBmdXR1cmUgcGF5bWVudCBwcm9jZXNzZXMsIHZhbGlkIHRheCBpbmZvcm1hdGlvbiB3aWxsIGJlIHJlcXVpcmVkLidcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHRheF9pZGVudGlmaWNhdGlvbl9jb25maXJtOiB7XG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgcnVsZXM6IFtbJ2NvbmZpcm0nLCBsb2NhbGl6ZSgnUGxlYXNlIGNvbmZpcm0geW91ciB0YXggaW5mb3JtYXRpb24nKV1dLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBnZXRDb25maWcgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc19kYXNoYm9hcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWRfZmllbGRzID0gWydmaXJzdF9uYW1lJywgJ2xhc3RfbmFtZScsICdkYXRlX29mX2JpcnRoJywgJ3Bob25lJ107XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoY29uZmlnKS5yZWR1Y2UoKG5ld19jb25maWcsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd2VkX2ZpZWxkcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld19jb25maWdba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3X2NvbmZpZztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICByZXR1cm4gW2dldENvbmZpZygpLCBkaXNhYmxlZF9pdGVtc107XG59O1xuXG5jb25zdCBwZXJzb25hbERldGFpbHNDb25maWcgPSAoXG4gICAgeyB1cGdyYWRlX2luZm8sIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LCByZXNpZGVuY2VfbGlzdCwgYWNjb3VudF9zZXR0aW5ncyB9LFxuICAgIFBlcnNvbmFsRGV0YWlscyxcbiAgICBpc19kYXNoYm9hcmQgPSBmYWxzZVxuKSA9PiB7XG4gICAgY29uc3QgW2NvbmZpZywgZGlzYWJsZWRfaXRlbXNdID0gcGVyc29uYWxfZGV0YWlsc19jb25maWcoeyByZXNpZGVuY2VfbGlzdCwgYWNjb3VudF9zZXR0aW5ncywgaXNfZGFzaGJvYXJkIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYWN0aXZlX3RpdGxlOiBpc19kYXNoYm9hcmRcbiAgICAgICAgICAgICAgICA/IGxvY2FsaXplKCdBIGZldyBwZXJzb25hbCBkZXRhaWxzJylcbiAgICAgICAgICAgICAgICA6IGxvY2FsaXplKCdDb21wbGV0ZSB5b3VyIHBlcnNvbmFsIGRldGFpbHMnKSxcbiAgICAgICAgICAgIHRpdGxlOiBpc19kYXNoYm9hcmQgPyBsb2NhbGl6ZSgnUEVSU09OQUwnKSA6IGxvY2FsaXplKCdQZXJzb25hbCBkZXRhaWxzJyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IFBlcnNvbmFsRGV0YWlscyxcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbGlkYXRlOiBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbihcbiAgICAgICAgICAgICAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Db25maWcoY29uZmlnLCB7IHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0IH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaXNfc3ZnOiB1cGdyYWRlX2luZm8/LmNhbl91cGdyYWRlX3RvID09PSAnc3ZnJyxcbiAgICAgICAgICAgIGFjY291bnRfb3BlbmluZ19yZWFzb25fbGlzdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJ0hlZGdpbmcnKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdIZWRnaW5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJ0luY29tZSBFYXJuaW5nJyksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnSW5jb21lIEVhcm5pbmcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZSgnU3BlY3VsYXRpdmUnKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdTcGVjdWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzYWx1dGF0aW9uX2xpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsb2NhbGl6ZSgnTXInKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdNcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsb2NhbGl6ZSgnTXJzJyksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTXJzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxvY2FsaXplKCdNcycpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ01zJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxvY2FsaXplKCdNaXNzJyksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTWlzcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkaXNhYmxlZF9pdGVtcyxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3Rocm91Z2g6IFsncmVzaWRlbmNlX2xpc3QnLCAnaXNfZnVsbHlfYXV0aGVudGljYXRlZCddLFxuICAgICAgICBpY29uOiAnSWNEYXNoYm9hcmRQZXJzb25hbERldGFpbHMnLFxuICAgIH07XG59O1xuXG5jb25zdCB0cmFuc2Zvcm1Db25maWcgPSAoY29uZmlnLCB7IHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0IH0pID0+IHtcbiAgICAvLyBSZW1vdmUgcmVxdWlyZWQgcnVsZSBmb3IgbWFsdGEgYW5kIGlvbVxuICAgIGlmIChbJ21hbHRhJywgJ2lvbSddLmluY2x1ZGVzKHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0KSAmJiBjb25maWcudGF4X3Jlc2lkZW5jZSkge1xuICAgICAgICBjb25maWcudGF4X3Jlc2lkZW5jZS5ydWxlcy5zaGlmdCgpO1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGVyc29uYWxEZXRhaWxzQ29uZmlnO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBbEdBO0FBQ0E7QUF3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUF0Q0E7QUF3Q0E7QUFDQTtBQWxEQTtBQW9EQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/personal-details-config.js\n");

/***/ }),

/***/ "@deriv/shared":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L3NoYXJlZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L3NoYXJlZFwiPzEzOTQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl9zaGFyZWRfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/shared\n");

/***/ }),

/***/ "@deriv/translations":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L3RyYW5zbGF0aW9ucy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L3RyYW5zbGF0aW9uc1wiPzI0MjYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl90cmFuc2xhdGlvbnNfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/translations\n");

/***/ })

/******/ })["default"];
});