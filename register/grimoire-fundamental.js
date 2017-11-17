(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Node.Component;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _header = __webpack_require__(56);

var _header2 = _interopRequireDefault(_header);

var _NameResolver = __webpack_require__(14);

var _NameResolver2 = _interopRequireDefault(_NameResolver);

var _TextFileResolver = __webpack_require__(49);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _GLRelatedRegistryBase = __webpack_require__(3);

var _GLRelatedRegistryBase2 = _interopRequireDefault(_GLRelatedRegistryBase);

var _Parser = __webpack_require__(57);

var _Parser2 = _interopRequireDefault(_Parser);

var _MacroRegistory = __webpack_require__(65);

var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);

var _Material = __webpack_require__(37);

var _Material2 = _interopRequireDefault(_Material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Manage materialGenerators for materials.
 * Materials can be instanciated with this instance.
 * Every gl reference can contain 1 of MaterialFactory at most.
 */
var MaterialFactory = function (_GLRelatedRegistryBas) {
    _inherits(MaterialFactory, _GLRelatedRegistryBas);

    function MaterialFactory(gl) {
        _classCallCheck(this, MaterialFactory);

        var _this = _possibleConstructorReturn(this, (MaterialFactory.__proto__ || Object.getPrototypeOf(MaterialFactory)).call(this));

        _this.gl = gl;
        _this.shaderHeader = MaterialFactory.defaultShaderHeader;
        _this.macro = new _MacroRegistory2.default();
        return _this;
    }
    /**
     * Obtain an instance of MaterialFactory from WebGLRenderingContext
     * @param  {WebGLRenderingContext} gl [description]
     * @return {MaterialFactory}          [description]
     */


    _createClass(MaterialFactory, [{
        key: "instanciate",
        value: function instanciate(typeName) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var generator;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return MaterialFactory.materialGeneratorResolver.get(typeName);

                            case 2:
                                generator = _context.sent;
                                return _context.abrupt("return", generator(this));

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }], [{
        key: "get",
        value: function get(gl) {
            return _GLRelatedRegistryBase2.default.__get(gl, MaterialFactory);
        }
    }, {
        key: "addMaterialType",
        value: function addMaterialType(typeName, materialGenerator) {
            this.materialGeneratorResolver.register(typeName, Promise.resolve(materialGenerator));
        }
        /**
         * Add source of .sort material as specified typename.
         * @param  {string}        typeName [description]
         * @param  {string}        source   [description]
         * @return {Promise<void>}          [description]
         */

    }, {
        key: "addSORTMaterial",
        value: function addSORTMaterial(typeName, source) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                return _context3.abrupt("return", this.materialGeneratorResolver.register(typeName, function () {
                                    return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                        var techniques;
                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                                switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                        _context2.next = 2;
                                                        return _Parser2.default.parse(source);

                                                    case 2:
                                                        techniques = _context2.sent;
                                                        return _context2.abrupt("return", function (factory) {
                                                            return new _Material2.default(factory.gl, techniques);
                                                        });

                                                    case 4:
                                                    case "end":
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _callee2, this);
                                    }));
                                }()));

                            case 1:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
        /**
         * Add source of .sort material from external url as specified typeName.
         * @param  {string}        typeName [description]
         * @param  {string}        url      [description]
         * @return {Promise<void>}          [description]
         */

    }, {
        key: "addSORTMaterialFromURL",
        value: function addSORTMaterialFromURL(typeName, url) {
            var _this3 = this;

            return this.materialGeneratorResolver.register(typeName, function () {
                return __awaiter(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                    var source, techniques;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    _context4.next = 2;
                                    return _TextFileResolver2.default.resolve(url);

                                case 2:
                                    source = _context4.sent;
                                    _context4.next = 5;
                                    return _Parser2.default.parse(source);

                                case 5:
                                    techniques = _context4.sent;
                                    return _context4.abrupt("return", function (factory) {
                                        return new _Material2.default(factory.gl, techniques);
                                    });

                                case 7:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));
            }());
        }
    }, {
        key: "getMaterialStatus",
        value: function getMaterialStatus(typeName) {
            return this.materialGeneratorResolver.getStatus(typeName);
        }
    }]);

    return MaterialFactory;
}(_GLRelatedRegistryBase2.default);

exports.default = MaterialFactory;

MaterialFactory.registryName = "MaterialFactory";
MaterialFactory.defaultShaderHeader = _header2.default;
MaterialFactory.materialGeneratorResolver = new _NameResolver2.default();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GLUtility = __webpack_require__(38);

var _GLUtility2 = _interopRequireDefault(_GLUtility);

var _Texture2 = __webpack_require__(83);

var _Texture3 = _interopRequireDefault(_Texture2);

var _Viewport = __webpack_require__(6);

var _Viewport2 = _interopRequireDefault(_Viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Texture2D = function (_Texture) {
    _inherits(Texture2D, _Texture);

    function Texture2D(gl) {
        _classCallCheck(this, Texture2D);

        var _this = _possibleConstructorReturn(this, (Texture2D.__proto__ || Object.getPrototypeOf(Texture2D)).call(this, gl, WebGLRenderingContext.TEXTURE_2D));

        if (!Texture2D.maxTextureSize) {
            Texture2D.maxTextureSize = gl.getParameter(WebGLRenderingContext.MAX_TEXTURE_SIZE);
        }
        return _this;
    }

    _createClass(Texture2D, [{
        key: "update",
        value: function update(levelOrImage, widthOrConfig, height, border, format, type, pixels, config) {
            this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.resourceReference);
            var uploadConfig = void 0;
            var image = void 0;
            var width = void 0;
            var level = void 0;
            if (height === void 0) {
                uploadConfig = Object.assign({ flipY: true, premultipliedAlpha: false }, widthOrConfig);
                image = levelOrImage;
            } else {
                level = levelOrImage;
                width = widthOrConfig;
                uploadConfig = Object.assign({ flipY: true, premultipliedAlpha: false }, config);
            }
            // tslint:disable:no-parameter-reassignment
            this.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, uploadConfig.flipY ? 1 : 0);
            this.gl.pixelStorei(WebGLRenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL, uploadConfig.premultipliedAlpha ? 1 : 0);
            if (height === void 0) {
                var resizedResource = this.__ensurePOT(image);
                this._width = resizedResource.width;
                this._height = resizedResource.height;
                this.gl.texImage2D(this.textureType, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, resizedResource.result);
                this.__type = WebGLRenderingContext.UNSIGNED_BYTE;
                this.__format = WebGLRenderingContext.RGBA;
            } else {
                if (pixels === void 0) {
                    pixels = null;
                }
                if (width === 0 || height === 0) {
                    width = 1;
                    height = 1;
                    format = WebGLRenderingContext.RGB;
                    type = WebGLRenderingContext.UNSIGNED_BYTE;
                    pixels = new Uint8Array([0, 0, 0]);
                }
                this._width = width;
                this._height = height;
                this.gl.texImage2D(this.textureType, level, format, width, height, border, format, type, pixels);
                this.__format = format;
                this.__type = type;
            }
            this.__ensureMipmap();
            this.valid = true;
        }
    }, {
        key: "updateDrawerCanvas",
        value: function updateDrawerCanvas() {
            var imageData = this.drawerContext.createImageData(this.width, this.height);
            var buffer = this.getRawPixels();
            var bufferSize = this.width * this.height * _GLUtility2.default.formatToElementCount(this.format);
            for (var i = 0; i < bufferSize; i++) {
                imageData.data[i] = buffer[i];
            }
            this.drawerContext.putImageData(imageData, 0, 0);
            this.drawerContext.setTransform(1, 0, 0, -1, 0, this.height);
            this.drawerContext.drawImage(this.drawerContext.canvas, 0, 0);
        }
    }, {
        key: "getRawPixels",
        value: function getRawPixels() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.width;
            var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.height;

            return this.__getRawPixels(this.type, this.format, x, y, width, height, WebGLRenderingContext.TEXTURE_2D);
        }
    }, {
        key: "applyDraw",
        value: function applyDraw() {
            if (this._drawerContext) {
                this.update(this._drawerContext.canvas);
            }
        }
    }, {
        key: "__ensureMipmap",
        value: function __ensureMipmap() {
            if (this.__needMipmap(this.minFilter)) {
                this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.resourceReference);
                this.gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);
            }
        }
    }, {
        key: "width",

        /**
         * Width of this texture
         * @return {number} [description]
         */
        get: function get() {
            return this._width;
        }
        /**
         * Height of this texture
         * @return {number} [description]
         */

    }, {
        key: "height",
        get: function get() {
            return this._height;
        }
    }, {
        key: "viewport",
        get: function get() {
            return new _Viewport2.default(0, 0, this.width, this.height);
        }
    }, {
        key: "drawerContext",
        get: function get() {
            if (!this._drawerContext) {
                var c = document.createElement("canvas");
                c.width = this._width;
                c.height = this.height;
                this._drawerContext = c.getContext("2d");
                this.updateDrawerCanvas();
            }
            return this._drawerContext;
        }
    }], [{
        key: "generateDefaultTexture",
        value: function generateDefaultTexture(gl) {
            Texture2D.defaultTextures.set(gl, null); // for preventing called this method recursively by instanciating default texture
            var texture = new Texture2D(gl);
            texture.update(0, 1, 1, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
            Texture2D.defaultTextures.set(gl, texture);
        }
    }]);

    return Texture2D;
}(_Texture3.default);

exports.default = Texture2D;

Texture2D.defaultTextures = new Map();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Registry of gl related stuff. These instance are singleton for each gl context.
 */
var GLRelatedRegistryBase = function () {
    function GLRelatedRegistryBase() {
        _classCallCheck(this, GLRelatedRegistryBase);
    }

    _createClass(GLRelatedRegistryBase, null, [{
        key: "__get",

        /**
         * Get specified resource by glContext and constructor of registry
         * @param gl
         * @param ctor
         */
        value: function __get(gl, ctor) {
            var glWithId = gl;
            if (glWithId.__id__ === void 0) {
                throw new Error("Supplied gl context seems not initialized by Grimoire.js");
            }
            if (GLRelatedRegistryBase._glRelatedRegistry[glWithId.__id__] === void 0) {
                GLRelatedRegistryBase._glRelatedRegistry[glWithId.__id__] = {};
            }
            if (GLRelatedRegistryBase._glRelatedRegistry[glWithId.__id__][ctor.registryName] !== void 0) {
                return GLRelatedRegistryBase._glRelatedRegistry[glWithId.__id__][ctor.registryName];
            }
            var newInstance = new ctor(glWithId);
            GLRelatedRegistryBase._glRelatedRegistry[glWithId.__id__][ctor.registryName] = newInstance;
            return newInstance;
        }
    }, {
        key: "__getAll",
        value: function __getAll(ctor) {
            var result = [];
            for (var key in GLRelatedRegistryBase._glRelatedRegistry) {
                var contextContainer = GLRelatedRegistryBase._glRelatedRegistry[key];
                if (contextContainer[ctor.registryName] !== void 0) {
                    result.push(contextContainer[ctor.registryName]);
                }
            }
            return result;
        }
    }]);

    return GLRelatedRegistryBase;
}();

exports.default = GLRelatedRegistryBase;

GLRelatedRegistryBase._glRelatedRegistry = {};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grimoirejs = __webpack_require__(5);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Abstraction of gl resource related class.
 * Provides unique index for each resources, promise for wating resource available and destroyed flag.
 */
var GLResource = function () {
    function GLResource(gl, resourceReference) {
        _classCallCheck(this, GLResource);

        this.gl = gl;
        this.resourceReference = resourceReference;
        this.destroyed = false;
        this._metadata = {};
        if (!gl) {
            throw new Error("missing WebGLRenderingContext");
        }
        this.index = GLResource._maxIndex++;
        if (_grimoirejs2.default.debug) {
            resourceReference["__SPECTOR_Metadata"] = this._metadata;
            this.setMetadata("GL Resource Index", this.index);
        }
        this.valid = false;
    }

    _createClass(GLResource, [{
        key: "setMetadata",

        /**
         * Provide metadata for key
         * @param key key of the metadata
         * @param value value of the metadata
         */
        value: function setMetadata(key, value) {
            this._metadata[key] = value;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.destroyed = true;
        }
    }, {
        key: "valid",
        get: function get() {
            return this._valid;
        },
        set: function set(val) {
            var _this = this;

            if (this._valid === val) {
                return;
            }
            this._valid = val;
            if (this._valid) {
                this._validResolve(this);
            } else {
                this.validPromise = new Promise(function (resolve) {
                    _this._validResolve = resolve;
                });
            }
        }
        /**
         * Metadata containing some useful data for glresource in Debugging.
         */

    }, {
        key: "metadata",
        get: function get() {
            return this._metadata;
        }
    }]);

    return GLResource;
}();

GLResource._maxIndex = 0;
exports.default = GLResource;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rectangle2 = __webpack_require__(84);

var _Rectangle3 = _interopRequireDefault(_Rectangle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Viewport = function (_Rectangle) {
    _inherits(Viewport, _Rectangle);

    function Viewport() {
        _classCallCheck(this, Viewport);

        return _possibleConstructorReturn(this, (Viewport.__proto__ || Object.getPrototypeOf(Viewport)).apply(this, arguments));
    }

    _createClass(Viewport, [{
        key: "configure",
        value: function configure(gl) {
            var withoutOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (withoutOffset) {
                gl.viewport(0, 0, this.Width, this.Height);
            } else {
                gl.viewport(this.Left, this.Bottom, this.Width, this.Height);
            }
        }
    }]);

    return Viewport;
}(_Rectangle3.default);

exports.default = Viewport;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Vector3:undefined;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GLM = __webpack_require__(36);

var _GLM2 = _interopRequireDefault(_GLM);

var _Matrix = __webpack_require__(17);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Vector3 = __webpack_require__(18);

var _Vector4 = _interopRequireDefault(_Vector3);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = _GLM2.default.mat4,
    vec3 = _GLM2.default.vec3,
    vec4 = _GLM2.default.vec4;
/**
 * シーン中に存在する物体の変形を司るコンポーネント
 * このコンポーネントによって物体の座標や回転量、拡大料などが定義されます。
 * シーン中の全ての物体は必ずこのコンポーネントを含まなければなりません。
 */

var TransformComponent = function (_Component) {
    _inherits(TransformComponent, _Component);

    function TransformComponent() {
        _classCallCheck(this, TransformComponent);

        /**
         * Local transform matrix representing scaling,rotation and translation of attached object.
         * @return {[type]} [description]
         */
        var _this = _possibleConstructorReturn(this, (TransformComponent.__proto__ || Object.getPrototypeOf(TransformComponent)).apply(this, arguments));

        _this.localTransform = new _Matrix2.default();
        /**
         * The children transform should be notified when this transform was updated.
         * @type {TransformComponent[]}
         */
        _this._children = [];
        /**
         * Calculation cache to
         * @return {[type]} [description]
         */
        _this._cachePVM = new _Matrix2.default();
        _this._cacheVM = new _Matrix2.default();
        /**
         * Cache of forward direction of this object
         */
        _this._forward = new _Vector2.default([0, 0, -1, 0]);
        /**
         * Cache of up direction of this object.
         */
        _this._up = new _Vector2.default([0, 1, 0, 0]);
        /**
         * Cache of right direction of this object.
         */
        _this._right = new _Vector2.default([1, 0, 0, 0]);
        _this._globalPosition = new _Vector2.default([0, 0, 0]);
        _this._globalScale = new _Vector2.default([1, 1, 1]);
        _this._matrixTransformMode = false;
        _this._updatedTransform = true;
        _this._globalTransform = new _Matrix2.default();
        return _this;
    }
    /**
     * Global transform that consider parent transform and local transform
     * @return {[type]} [description]
     */


    _createClass(TransformComponent, [{
        key: "calcPVM",
        value: function calcPVM(camera) {
            mat4.mul(this._cachePVM.rawElements, camera.ProjectionViewMatrix.rawElements, this.globalTransform.rawElements);
            return this._cachePVM;
        }
    }, {
        key: "calcVM",
        value: function calcVM(camera) {
            mat4.mul(this._cacheVM.rawElements, camera.ViewMatrix.rawElements, this.globalTransform.rawElements);
            return this._cacheVM;
        }
    }, {
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            // register observers
            this.getAttributeRaw("position").watch(function (v) {
                _this2.notifyUpdateTransform();
            });
            this.getAttributeRaw("rotation").watch(function (v) {
                _this2.notifyUpdateTransform();
            });
            this.getAttributeRaw("scale").watch(function (v) {
                _this2.notifyUpdateTransform();
            });
            // assign attribute values to field
            this.__bindAttributes();
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this._parentTransform = this.node.parent.getComponent(TransformComponent);
            if (this._parentTransform) {
                this._parentTransform._children.push(this);
            }
            this._updateTransform();
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            if (this._parentTransform) {
                this._parentTransform._children.splice(this._parentTransform._children.indexOf(this), 1);
                this._parentTransform = null;
            }
        }
    }, {
        key: "notifyUpdateTransform",
        value: function notifyUpdateTransform() {
            if (!this._updatedTransform) {
                this._updatedTransform = true;
                this._children.forEach(function (c) {
                    return c.notifyUpdateTransform();
                });
            }
        }
    }, {
        key: "applyMatrix",
        value: function applyMatrix(mat) {
            this.setAttribute("scale", mat.getScaling());
            this.setAttribute("rotation", mat.getRotation());
            this.setAttribute("position", mat.getTranslation());
        }
    }, {
        key: "_updateTransform",
        value: function _updateTransform(noDirectionalUpdate) {
            if (!this._updatedTransform) {
                return;
            }
            this._updatedTransform = false;
            mat4.fromRotationTranslationScale(this.localTransform.rawElements, this.rotation.rawElements, this.position.rawElements, this.scale.rawElements);
            this._updateGlobalTransform(noDirectionalUpdate);
        }
        /**
         * Update global transoform.
         */

    }, {
        key: "_updateGlobalTransform",
        value: function _updateGlobalTransform(noDirectionalUpdate) {
            if (!this._parentTransform) {
                mat4.copy(this._globalTransform.rawElements, this.localTransform.rawElements);
            } else {
                mat4.mul(this._globalTransform.rawElements, this._parentTransform.globalTransform.rawElements, this.localTransform.rawElements);
            }
            if (this._globalTransformInverse) {
                mat4.invert(this._globalTransformInverse.rawElements, this._globalTransform.rawElements);
            }
            if (!noDirectionalUpdate) {
                this._updateDirections();
            }
            this._updateGlobalProperty();
            this.node.emit("transformUpdated", this);
        }
    }, {
        key: "_updateDirections",
        value: function _updateDirections() {
            vec4.transformMat4(this._forward.rawElements, TransformComponent._forwardBase.rawElements, this.globalTransform.rawElements);
            vec4.transformMat4(this._up.rawElements, TransformComponent._upBase.rawElements, this.globalTransform.rawElements);
            vec4.transformMat4(this._right.rawElements, TransformComponent._rightBase.rawElements, this.globalTransform.rawElements);
        }
    }, {
        key: "_updateGlobalProperty",
        value: function _updateGlobalProperty() {
            if (!this._parentTransform) {
                vec3.copy(this._globalPosition.rawElements, this.position.rawElements);
                vec3.copy(this._globalScale.rawElements, this.scale.rawElements);
            } else {
                vec3.transformMat4(this._globalPosition.rawElements, this.position.rawElements, this._parentTransform.globalTransform.rawElements);
                vec3.transformMat4(this._globalScale.rawElements, this.scale.rawElements, this._parentTransform.globalTransform.rawElements); // TODO buggy
            }
        }
    }, {
        key: "globalTransform",
        get: function get() {
            this._updateTransform();
            return this._globalTransform;
        }
    }, {
        key: "globalTransformInverse",
        get: function get() {
            if (!this._globalTransformInverse) {
                this._globalTransformInverse = _Matrix2.default.inverse(this.globalTransform);
            } else {
                this._updateTransform();
            }
            return this._globalTransformInverse;
        }
    }, {
        key: "globalPosition",
        get: function get() {
            this._updateTransform();
            return this._globalPosition;
        }
    }, {
        key: "globalScale",
        get: function get() {
            this._updateTransform();
            return this._globalScale;
        }
    }, {
        key: "forward",
        get: function get() {
            this._updateTransform();
            return this._forward;
        }
    }, {
        key: "up",
        get: function get() {
            this._updateTransform();
            return this._up;
        }
    }, {
        key: "right",
        get: function get() {
            this._updateTransform();
            return this._right;
        }
    }]);

    return TransformComponent;
}(_Component3.default);

exports.default = TransformComponent;

TransformComponent.attributes = {
    /**
     * この物体の座標
     */
    position: {
        converter: "Vector3",
        default: [0, 0, 0]
    },
    /**
     * この物体の回転量
     */
    rotation: {
        converter: "Rotation3",
        default: [0, 0, 0, 1]
    },
    /**
     * この物体の拡大率
     */
    scale: {
        converter: "Vector3",
        default: [1, 1, 1]
    }
};
/**
 * Source vector to be multiplied with global transform to calculate forward direction of attached object.
 */
TransformComponent._forwardBase = new _Vector4.default(0, 0, -1, 0);
/**
 * Source vector to be multiplied with global transform to calculate up direction of attached object.
 */
TransformComponent._upBase = new _Vector4.default(0, 1, 0, 0);
/**
 * Source vector to be multiplied with global transform to calculate right direction of attached object.
 */
TransformComponent._rightBase = new _Vector4.default(1, 0, 0, 0);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HashCalculator = function () {
    function HashCalculator() {
        _classCallCheck(this, HashCalculator);
    }

    _createClass(HashCalculator, null, [{
        key: "calcHash",
        value: function calcHash(source) {
            var hash = 0;
            if (source.length === 0) {
                return hash;
            }
            for (var i = 0; i < source.length; i++) {
                var char = source.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        }
    }]);

    return HashCalculator;
}();

exports.default = HashCalculator;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AABB = __webpack_require__(69);

var _AABB2 = _interopRequireDefault(_AABB);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Buffer = __webpack_require__(70);

var _Buffer2 = _interopRequireDefault(_Buffer);

var _GLExtRequestor = __webpack_require__(20);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

var _HashCalculator = __webpack_require__(9);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The geometry class for managing buffer resource
 */
var Geometry = function () {
    function Geometry(gl) {
        _classCallCheck(this, Geometry);

        this.gl = gl;
        /**
         * Vertex buffer
         * @type {Buffer[]}
         */
        this.buffers = [];
        this.indices = {};
        this.accessors = {};
        this.aabb = new _AABB2.default([_Vector2.default.Zero]);
        this._accessorHashCache = 0;
        _GLExtRequestor2.default.request("ANGLE_instanced_arrays", true);
        this.instanciator = _GLExtRequestor2.default.get(gl).extensions["ANGLE_instanced_arrays"];
    }
    /**
     * Hash calculator of accessors map.
     * If this value was same with the other geometry, the 2 geometries have same accessors.
     * 'Same' DOES NOT mean that these geometries have a buffers containing same elements.
     * But, if there was a accessor named 'A' in one of them, the other one should exist.
     */


    _createClass(Geometry, [{
        key: "addAttributes",
        value: function addAttributes(buffer, accessors) {
            var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLRenderingContext.STATIC_DRAW;

            var index = this.buffers.length;
            var keepBuffer = false;
            for (var semantic in accessors) {
                var accessor = accessors[semantic];
                accessor.bufferIndex = index;
                if (accessor.size === void 0) {
                    throw new Error("Accessor specified with the semantics \"" + semantic + "\" is not containing size as paranmeter.");
                }
                if (accessor.type === void 0) {
                    accessor.type = WebGLRenderingContext.FLOAT;
                }
                if (accessor.stride === void 0) {
                    accessor.stride = accessor.size * this._attribTypeToByteSize(accessor.type);
                }
                if (accessor.offset === void 0) {
                    accessor.offset = 0;
                }
                if (accessor.normalized === void 0) {
                    accessor.normalized = false;
                }
                if (accessor.keepOnBuffer === void 0) {
                    // If target semantic was named 'POSITION', default option for keeping buffer is true.
                    accessor.keepOnBuffer = semantic === "POSITION";
                }
                keepBuffer = keepBuffer || !!accessor.keepOnBuffer;
                this.accessors[semantic] = accessor;
            }
            buffer = this._ensureToBeVertexBuffer(buffer, usage, keepBuffer);
            this.buffers.push(buffer);
            this._recalculateAccsessorHash();
        }
    }, {
        key: "addIndex",
        value: function addIndex(indexName, bufferOrInstanceCount, bufferOrTopology, offsetOrTopology) {
            var countOrOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var typeOrCount = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            var type = arguments[6];

            var buffer = void 0;
            var topology = void 0;
            var offset = void 0;
            var count = void 0;
            var instanceCount = void 0;
            if (typeof bufferOrInstanceCount === "number") {
                instanceCount = bufferOrInstanceCount;
                buffer = bufferOrTopology;
                topology = offsetOrTopology;
                offset = countOrOffset;
                count = typeOrCount;
                if (!type) {
                    type = 0;
                }
                if (typeof offset !== "number") {
                    offset = 0;
                }
                if (typeof topology !== "number") {
                    topology = WebGLRenderingContext.TRIANGLES;
                }
            } else {
                buffer = bufferOrInstanceCount;
                topology = bufferOrTopology;
                offset = offsetOrTopology;
                count = countOrOffset;
                type = typeOrCount;
                if (typeof topology !== "number") {
                    topology = WebGLRenderingContext.TRIANGLES;
                }
                if (typeof offset !== "number") {
                    offset = 0;
                }
            }
            if (!count) {
                if (buffer instanceof _Buffer2.default || buffer instanceof ArrayBuffer || buffer instanceof DataView) {
                    throw new Error("The argument 'count' is necessary if you specified buffer with an instance of Buffer or ArrayBuffer");
                } else {
                    count = buffer["length"];
                }
            }
            if (type === 0) {
                type = this._indexTypeFromCount(count);
            }
            buffer = this._ensureToBeIndexBuffer(buffer, type);
            this.indices[indexName] = {
                byteOffset: offset,
                byteSize: this._indexTypeToByteSize(type),
                type: type,
                topology: topology,
                count: count,
                index: buffer,
                instanceCount: instanceCount
            };
        }
    }, {
        key: "drawByDefault",
        value: function drawByDefault(indexName, attribNames, program) {
            var _this = this;

            var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.MAX_VALUE;
            var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

            attribNames.forEach(function (name) {
                Geometry.bindBufferToAttribute(_this, program, name, name);
            });
            Geometry.drawWithCurrentVertexBuffer(this, indexName, count, offset);
        }
    }, {
        key: "clone",
        value: function clone() {
            var geometry = new Geometry(this.gl);
            geometry.buffers = [].concat(this.buffers);
            geometry.accessors = Object.assign({}, this.accessors);
            geometry.indices = Object.assign({}, this.indices);
            geometry.aabb = new _AABB2.default([this.aabb.pointLBF, this.aabb.pointRTN]);
            return geometry;
        }
        /**
         * Make sure buffer sources converted into Buffer
         * @param  {Buffer|BufferSource|number[]} buffer [description]
         * @return {Buffer}                              [description]
         */

    }, {
        key: "_ensureToBeVertexBuffer",
        value: function _ensureToBeVertexBuffer(buffer, usage, keepBuffer) {
            if (!(buffer instanceof _Buffer2.default)) {
                var bufferSource = buffer;
                if (Array.isArray(bufferSource)) {
                    bufferSource = new Float32Array(bufferSource);
                }
                buffer = new _Buffer2.default(this.gl, WebGLRenderingContext.ARRAY_BUFFER, usage);
                buffer.keepSource = keepBuffer;
                buffer.update(bufferSource);
            }
            return buffer;
        }
        /**
         * Make sure buffer sources converted into Buffer
         * @param  {Buffer|BufferSource|number[]} buffer [description]
         * @return {Buffer}                              [description]
         */

    }, {
        key: "_ensureToBeIndexBuffer",
        value: function _ensureToBeIndexBuffer(buffer, type) {
            if (!(buffer instanceof _Buffer2.default)) {
                var bufferSource = buffer;
                if (Array.isArray(bufferSource)) {
                    bufferSource = new (this._indexTypeToArrayConstructor(type))(bufferSource);
                }
                buffer = new _Buffer2.default(this.gl, WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, WebGLRenderingContext.STATIC_DRAW);
                buffer.update(bufferSource);
            } else {
                if (buffer.target !== WebGLRenderingContext.ELEMENT_ARRAY_BUFFER) {
                    throw new Error("The usage of buffer specified as index buffer is not ELEMENT_ARRAY_BUFFER");
                }
            }
            return buffer;
        }
    }, {
        key: "_indexTypeFromCount",
        value: function _indexTypeFromCount(count) {
            if (count < 256) {
                return WebGLRenderingContext.UNSIGNED_BYTE;
            } else if (count < 65536) {
                return WebGLRenderingContext.UNSIGNED_SHORT;
            } else if (count < 4294967296) {
                return WebGLRenderingContext.UNSIGNED_INT;
            } else {
                throw new Error("Index count exceeds 4,294,967,296. WebGL can not handle such a big index buffer");
            }
        }
    }, {
        key: "_indexTypeToArrayConstructor",
        value: function _indexTypeToArrayConstructor(type) {
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return Uint8Array;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return Uint16Array;
                case WebGLRenderingContext.UNSIGNED_INT:
                    return Uint32Array;
                default:
                    throw new Error("Unsupported index type");
            }
        }
    }, {
        key: "_indexTypeToByteSize",
        value: function _indexTypeToByteSize(type) {
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return 1;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return 2;
                case WebGLRenderingContext.UNSIGNED_INT:
                    return 4;
                default:
                    throw new Error("Unsupported index type");
            }
        }
    }, {
        key: "_attribTypeToByteSize",
        value: function _attribTypeToByteSize(type) {
            switch (type) {
                case WebGLRenderingContext.FLOAT:
                case WebGLRenderingContext.UNSIGNED_INT:
                    return 4;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return 2;
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return 1;
                default:
                    throw new Error("Unsupported attribute variable type \"" + type + "\"");
            }
        }
    }, {
        key: "_recalculateAccsessorHash",
        value: function _recalculateAccsessorHash() {
            var hashSource = "";
            for (var key in this.accessors) {
                hashSource += key + "|";
            }
            this._accessorHashCache = _HashCalculator2.default.calcHash(hashSource);
        }
    }, {
        key: "accessorHash",
        get: function get() {
            return this._accessorHashCache;
        }
        /**
         * bind a vertex buffer to specified attribute variable.
         * @param  {Geometry} geometry      [description]
         * @param  {Program}  program       [description]
         * @param  {string}   attributeName [description]
         * @param  {string}   semantics    [description]
         * @return {boolean}                [description]
         */

    }], [{
        key: "bindBufferToAttribute",
        value: function bindBufferToAttribute(geometry, program, attributeName, semantics) {
            var index = program.findAttributeLocation(attributeName);
            if (index < 0) {
                return false;
            }
            var accessors = geometry.accessors[semantics];
            if (!accessors) {
                throw new Error("Specified buffer \"" + semantics + " was not found on this geometry while attempt to bind \"" + attributeName + "\" of attribute variables.\n\n      All of the vertex buffer available on this geometry is " + Object.keys(geometry.accessors) + "\"");
            }
            var buffer = geometry.buffers[accessors.bufferIndex];
            buffer.bind();
            program.gl.vertexAttribPointer(index, accessors.size, accessors.type, accessors.normalized, accessors.stride, accessors.offset);
            if (accessors.instancingDivisor > 0) {
                geometry.instanciator.vertexAttribDivisorANGLE(index, accessors.instancingDivisor);
            }
            return true;
        }
    }, {
        key: "drawWithCurrentVertexBuffer",
        value: function drawWithCurrentVertexBuffer(geometry, indexName) {
            var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_VALUE;
            var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            var targetIndex = geometry.indices[indexName];
            if (targetIndex === void 0) {
                throw new Error("Specified index buffer \"" + indexName + "\" was not found on this geometry.All of the index buffer available on this geometry is \"" + Object.keys(geometry.indices) + "\"");
            }
            targetIndex.index.bind();
            if (targetIndex.instanceCount > 0) {
                geometry.instanciator.drawElementsInstancedANGLE(targetIndex.topology, Math.min(targetIndex.count, count), targetIndex.type, Math.min(offset * targetIndex.byteSize + targetIndex.byteOffset, targetIndex.byteOffset + (targetIndex.count - 1) * targetIndex.byteSize), targetIndex.instanceCount);
            } else {
                targetIndex.index.gl.drawElements(targetIndex.topology, Math.min(targetIndex.count, count), targetIndex.type, Math.min(offset * targetIndex.byteSize + targetIndex.byteOffset, targetIndex.byteOffset + (targetIndex.count - 1) * targetIndex.byteSize));
            }
        }
    }]);

    return Geometry;
}();

exports.default = Geometry;

Geometry._lastGeometry = new Map();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UniformResolverRegistry = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UniformResolverContainer = __webpack_require__(82);

var _UniformResolverContainer2 = _interopRequireDefault(_UniformResolverContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UniformResolverRegistry = exports.UniformResolverRegistry = function () {
    function UniformResolverRegistry() {
        _classCallCheck(this, UniformResolverRegistry);

        this._generators = {};
    }

    _createClass(UniformResolverRegistry, [{
        key: "add",
        value: function add(semantic, generator) {
            if (typeof generator !== "function") {
                throw new Error("secound argument of add must be function");
            }
            this._generators[semantic.toUpperCase()] = generator;
        }
    }, {
        key: "generateRegisterers",
        value: function generateRegisterers(pass, passInfo) {
            var registerers = [],
                disposers = [],
                updators = {};
            for (var key in passInfo.uniforms) {
                var valueInfo = passInfo.uniforms[key];
                var semantic = valueInfo.semantic;
                var registeredGenerator = this._generators[semantic];
                if (!registeredGenerator) {
                    throw new Error("There was no suitable registerer for specified semantic " + semantic);
                }
                var registerer = registeredGenerator(valueInfo, pass, pass.technique, pass.material);
                if (typeof registerer === "function") {
                    registerers.push(registerer);
                } else {
                    registerers.push(registerer.register);
                    if (registerer.dispose) {
                        disposers.push(registerer.dispose);
                    }
                    if (registerer.update) {
                        updators[key] = registerer.update;
                    }
                }
            }
            return new _UniformResolverContainer2.default(registerers, disposers, updators);
        }
    }]);

    return UniformResolverRegistry;
}();

exports.default = new UniformResolverRegistry();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Texture2D = __webpack_require__(2);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextureSizeCalculator = function () {
    function TextureSizeCalculator() {
        _classCallCheck(this, TextureSizeCalculator);
    }

    _createClass(TextureSizeCalculator, null, [{
        key: "getPow2Size",
        value: function getPow2Size(width, height) {
            var nw = Math.pow(2, Math.ceil(Math.log2(width))); // largest 2^n integer that does not exceed s
            var nh = Math.pow(2, Math.ceil(Math.log2(height))); // largest 2^n integer that does not exceed s
            return {
                width: Math.max(1, Math.min(nw, _Texture2D2.default.maxTextureSize)),
                height: Math.max(1, Math.min(nh, _Texture2D2.default.maxTextureSize))
            };
        }
    }]);

    return TextureSizeCalculator;
}();

exports.default = TextureSizeCalculator;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _Texture2D = __webpack_require__(2);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextureContainer = function (_Component) {
    _inherits(TextureContainer, _Component);

    function TextureContainer() {
        _classCallCheck(this, TextureContainer);

        return _possibleConstructorReturn(this, (TextureContainer.__proto__ || Object.getPrototypeOf(TextureContainer)).apply(this, arguments));
    }

    _createClass(TextureContainer, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            this.texture = new _Texture2D2.default(this.companion.get("gl"));
            this.texture.magFilter = this.getAttribute("magFilter");
            this.texture.minFilter = this.getAttribute("minFilter");
            this.texture.wrapT = this.getAttribute("wrapT");
            this.texture.wrapS = this.getAttribute("wrapS");
            this.getAttributeRaw("magFilter").watch(function (v) {
                return _this2.texture.magFilter = v;
            });
            this.getAttributeRaw("minFilter").watch(function (v) {
                return _this2.texture.minFilter = v;
            });
            this.getAttributeRaw("wrapS").watch(function (v) {
                return _this2.texture.wrapS = v;
            });
            this.getAttributeRaw("wrapT").watch(function (v) {
                return _this2.texture.wrapT = v;
            });
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            this.texture.destroy();
            this.texture = null;
        }
    }]);

    return TextureContainer;
}(_Component3.default);

exports.default = TextureContainer;

TextureContainer.attributes = {
    minFilter: {
        converter: "Enum",
        default: "LINEAR",
        table: {
            LINEAR: WebGLRenderingContext.LINEAR,
            NEAREST: WebGLRenderingContext.NEAREST,
            NEAREST_MIPMAP_NEAREST: WebGLRenderingContext.NEAREST_MIPMAP_NEAREST,
            NEAREST_MIPMAP_LINEAR: WebGLRenderingContext.NEAREST_MIPMAP_LINEAR,
            LINEAR_MIPMAP_NEAREST: WebGLRenderingContext.LINEAR_MIPMAP_NEAREST,
            LINEAR_MIPMAP_LINEAR: WebGLRenderingContext.LINEAR_MIPMAP_LINEAR
        }
    },
    magFilter: {
        converter: "Enum",
        default: "LINEAR",
        table: {
            LINEAR: WebGLRenderingContext.LINEAR,
            NEAREST: WebGLRenderingContext.NEAREST
        }
    },
    wrapS: {
        converter: "Enum",
        default: "REPEAT",
        table: {
            REPEAT: WebGLRenderingContext.REPEAT,
            MIRRORED_REPEAT: WebGLRenderingContext.MIRRORED_REPEAT,
            CLAMP_TO_EDGE: WebGLRenderingContext.CLAMP_TO_EDGE
        }
    },
    wrapT: {
        converter: "Enum",
        default: "REPEAT",
        table: {
            REPEAT: WebGLRenderingContext.REPEAT,
            MIRRORED_REPEAT: WebGLRenderingContext.MIRRORED_REPEAT,
            CLAMP_TO_EDGE: WebGLRenderingContext.CLAMP_TO_EDGE
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Provide abstraction of resolving named resource such as Geometry, Materials.
 */

var NameResolver = function () {
    function NameResolver() {
        _classCallCheck(this, NameResolver);

        /**
         * Resolved items
         */
        this._resolved = {};
        /**
         * Name to Resource-resolvers
         */
        this._resolvers = {};
        /**
         * Name to waiting resolvers
         */
        this._handlers = {};
    }
    /**
     * Obtain the named resource.
     * @return {Promise<T>} the resource
     */


    _createClass(NameResolver, [{
        key: "get",
        value: function get(name) {
            if (this._resolved[name] !== void 0) {
                return Promise.resolve(this._resolved[name]);
            } else {
                return this._waitForResolved(name);
            }
        }
        /**
         * Get status of specified resource.
         * This method would return NameResolver.UNLOADED,NameResolver.RESOLVED or NameResolver.RESOLVING
         * @param  {string} name resource name to check status
         * @return {number}      status code
         */

    }, {
        key: "getStatus",
        value: function getStatus(name) {
            if (this._resolvers[name] !== void 0) {
                return NameResolver.RESOLVING;
            } else if (this._resolved[name] !== void 0) {
                return NameResolver.RESOLVED;
            } else {
                return NameResolver.UNLOADED;
            }
        }
        /**
         * Register named resource
         * @param  {string}     name      name of the resource
         * @param  {Promise<T>} generator Promise to resolve the resource
         * @return {Promise<T>} The promise of resource
         */

    }, {
        key: "register",
        value: function register(name, generator) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var resolved;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this._isPromise(generator)) {
                                    _context.next = 19;
                                    break;
                                }

                                _context.prev = 1;

                                if (!(this._resolvers[name] !== void 0)) {
                                    _context.next = 4;
                                    break;
                                }

                                throw new Error("Dupelicated named resource '" + name + "' was registered.");

                            case 4:
                                this._resolvers[name] = generator;
                                _context.next = 7;
                                return generator;

                            case 7:
                                resolved = _context.sent;

                                this._resolvers[name] = void 0;
                                this._callHandlers(name, resolved);
                                this._resolved[name] = resolved;
                                return _context.abrupt("return", resolved);

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context["catch"](1);
                                throw new Error("Unexpected error has occured during resolution of named resource '" + name + "'\n" + _context.t0);

                            case 17:
                                _context.next = 20;
                                break;

                            case 19:
                                return _context.abrupt("return", this.register(name, Promise.resolve(generator)));

                            case 20:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 14]]);
            }));
        }
        /**
         * Get promise to wait the named resource registered.
         * @param  {string}     name name of the resource
         * @return {Promise<T>}     Promise to wait for registering
         */

    }, {
        key: "_waitForResolved",
        value: function _waitForResolved(name) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (_this._handlers[name] === void 0) {
                    _this._handlers[name] = [];
                }
                _this._handlers[name].push(function (resolved) {
                    resolve(resolved);
                });
            });
        }
        /**
         * Call handler to notify the named resource was loaded.
         * @param {string} name      name of the resource
         * @param {T}      resolved Promise to wait for registering
         */

    }, {
        key: "_callHandlers",
        value: function _callHandlers(name, resolved) {
            if (this._handlers[name] === void 0) {
                return;
            }
            this._handlers[name].forEach(function (f) {
                return f(resolved);
            });
            delete this._handlers[name];
        }
    }, {
        key: "_isPromise",
        value: function _isPromise(generator) {
            return typeof generator["then"] === "function";
        }
    }]);

    return NameResolver;
}();

exports.default = NameResolver;

NameResolver.UNLOADED = 0;
NameResolver.RESOLVING = 1;
NameResolver.RESOLVED = 2;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Namespace = __webpack_require__(35);

var _Namespace2 = _interopRequireDefault(_Namespace);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _AssetLoadingManagerComponent = __webpack_require__(34);

var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);

var _LoopManagerComponent = __webpack_require__(16);

var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoroutineRegistry = function () {
    function CoroutineRegistry() {
        _classCallCheck(this, CoroutineRegistry);

        this.coroutines = [];
    }

    _createClass(CoroutineRegistry, [{
        key: "callCoroutine",
        value: function callCoroutine(criteria, timer) {
            var _this = this;

            var removeTarget = void 0;
            this.coroutines.forEach(function (val) {
                if (val.next <= criteria) {
                    if (val.container.disposed) {
                        if (!removeTarget) {
                            removeTarget = [];
                        }
                        removeTarget.push(val);
                        return; // Skip current coroutine
                    }
                    if (!val.container.isActive) {
                        return;
                    }
                    var next = val.coroutine.next(timer);
                    if (next.done || next.value < 0) {
                        if (!removeTarget) {
                            removeTarget = [];
                        }
                        removeTarget.push(val);
                    } else {
                        if (val.next + next.value < criteria) {
                            val.next = criteria;
                        } else {
                            val.next = val.next + next.value;
                        }
                    }
                }
            });
            if (removeTarget) {
                // remove completed tasks
                removeTarget.forEach(function (f) {
                    var i = _this.coroutines.indexOf(f);
                    _this.coroutines.splice(i, 1);
                });
            }
        }
    }, {
        key: "register",
        value: function register(container, coroutine, tag) {
            var generator = coroutine.call(container);
            this.coroutines.push({
                coroutine: generator,
                next: 0,
                container: container,
                tag: tag
            });
        }
    }, {
        key: "unregister",
        value: function unregister(container, tag) {
            var _this2 = this;

            var removeTarget = [];
            if (tag) {
                this.coroutines.forEach(function (f) {
                    if (f.container === container && f.tag === tag) {
                        removeTarget.push(f);
                    }
                });
            } else {
                this.coroutines.forEach(function (f) {
                    if (f.container === container) {
                        removeTarget.push(f);
                    }
                });
            }
            removeTarget.forEach(function (v) {
                var index = _this2.coroutines.indexOf(v);
                _this2.coroutines.splice(index);
            });
        }
    }]);

    return CoroutineRegistry;
}();

var BasicComponent = function (_Component) {
    _inherits(BasicComponent, _Component);

    function BasicComponent() {
        _classCallCheck(this, BasicComponent);

        return _possibleConstructorReturn(this, (BasicComponent.__proto__ || Object.getPrototypeOf(BasicComponent)).apply(this, arguments));
    }

    _createClass(BasicComponent, [{
        key: "__registerTimerCoroutine",

        /**
         * Register coroutine invoked by timer in millisecound.
         * Yield values from coroutine will be used as next frame to recall the generator.
         * Ensure this is not called exactly specified timing. This will be called in the frame after specified timing.
         */
        value: function __registerTimerCoroutine(coroutine, tag) {
            // check companion containing coroutine cache
            var coroutines = this.companion.get("timer-coroutine");
            if (!coroutines) {
                coroutines = new CoroutineRegistry();
                this.loopManager.register(function (t) {
                    return coroutines.callCoroutine(t.time, t);
                }, 100);
                this.companion.set(_Namespace2.default.define(this.node.name.ns.qualifiedName).for("timer-coroutine"), coroutines);
            }
            coroutines.register(this, coroutine, tag);
        }
        /**
         * Register coroutine invoked by timer in frame count.
         * Yield values from coroutine will be used as next frame to recall the generator.
         */

    }, {
        key: "__registerFrameCoroutine",
        value: function __registerFrameCoroutine(coroutine, tag) {
            // check companion containing coroutine cache
            var coroutines = this.companion.get("frame-coroutine");
            if (!coroutines) {
                coroutines = new CoroutineRegistry();
                this.loopManager.register(function (t) {
                    return coroutines.callCoroutine(t.frameCount, t);
                }, 100);
                this.companion.set(_Namespace2.default.define(this.node.name.ns.qualifiedName).for("frame-coroutine"), coroutines);
            }
            coroutines.register(this, coroutine, tag);
        }
        /**
         * Call method after specified time elapsed.
         * If the component was disabled, specified method will be called after component being enabled.
         * @param  {Timer}  method [description]
         * @return {[type]}        [description]
         */

    }, {
        key: "__invoke",
        value: function __invoke(method, timeInMillis) {
            var _that = this;
            this.__registerTimerCoroutine( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var timer;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return timeInMillis;

                            case 2:
                                timer = _context.sent;

                                method.call(_that, timer);

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "__unregisterTimerCoroutine",
        value: function __unregisterTimerCoroutine(tag) {
            var coroutines = this.companion.get("timer-coroutine");
            if (coroutines) {
                coroutines.unregister(this, tag);
            }
        }
    }, {
        key: "__unregisterFrameCoroutine",
        value: function __unregisterFrameCoroutine(tag) {
            var coroutines = this.companion.get("frame-coroutine");
            if (coroutines) {
                coroutines.unregister(this, tag);
            }
        }
    }, {
        key: "__registerAssetLoading",
        value: function __registerAssetLoading(loadingPromise) {
            return this.assetLoadingManager.loader.register(loadingPromise, this);
        }
    }, {
        key: "loopManager",

        /**
         * Getter for loop manager used for loop mamnagement
         * @return {LoopManager} [description]
         */
        get: function get() {
            if (!this._loopManagerBackingStore) {
                this._loopManagerBackingStore = this.node.getComponentInAncestor(_LoopManagerComponent2.default);
            }
            return this._loopManagerBackingStore;
        }
        /**
         * Getter for assetLoading manager
         * @return {LoopManager} [description]
         */

    }, {
        key: "assetLoadingManager",
        get: function get() {
            if (!this._assetLoadingManagerBackingStore) {
                this._assetLoadingManagerBackingStore = this.node.getComponentInAncestor(_AssetLoadingManagerComponent2.default);
            }
            return this._assetLoadingManagerBackingStore;
        }
    }]);

    return BasicComponent;
}(_Component3.default);

exports.default = BasicComponent;

BasicComponent.attributes = {};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _Timer = __webpack_require__(51);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 全体のループを管理しているコンポーネント。あまり直接ユーザーがいじることはありません。
 */
var LoopManagerComponent = function (_Component) {
    _inherits(LoopManagerComponent, _Component);

    function LoopManagerComponent() {
        _classCallCheck(this, LoopManagerComponent);

        var _this = _possibleConstructorReturn(this, (LoopManagerComponent.__proto__ || Object.getPrototypeOf(LoopManagerComponent)).apply(this, arguments));

        _this._loopActions = [];
        return _this;
    }

    _createClass(LoopManagerComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this._registerNextLoop = window.requestAnimationFrame // if window.requestAnimationFrame is defined or undefined
            ? function () {
                window.requestAnimationFrame(_this2._loop.bind(_this2));
            } : function () {
                window.setTimeout(_this2._loop.bind(_this2), 1000 / 60);
            };
        }
    }, {
        key: "$mount",
        value: function $mount() {
            var _this3 = this;

            this.getAttributeRaw("loopEnabled").watch(function (attr) {
                if (attr) {
                    _this3._begin();
                }
            });
            this._timer = new _Timer2.default();
            this.getAttributeRaw("fpsRestriction").watch(function (attr) {
                _this3._timer.fpsRestriction = attr;
            }, true);
            this._timer.internalUpdate();
        }
    }, {
        key: "register",
        value: function register(action, priorty) {
            this._loopActions.push({
                action: action,
                priorty: priorty
            });
            this._loopActions.sort(function (a, b) {
                return a.priorty - b.priorty;
            });
        }
    }, {
        key: "_begin",
        value: function _begin() {
            this._registerNextLoop();
        }
    }, {
        key: "_loop",
        value: function _loop() {
            var _this4 = this;

            if (this._timer.internalUpdate()) {
                this.node.emit("loop", {
                    timer: this._timer
                });
                this._loopActions.forEach(function (a) {
                    return a.action(_this4._timer);
                });
            }
            this._registerNextLoop();
        }
    }]);

    return LoopManagerComponent;
}(_Component3.default);

exports.default = LoopManagerComponent;

LoopManagerComponent.attributes = {
    loopEnabled: {
        default: false,
        converter: "Boolean"
    },
    fpsRestriction: {
        default: 60,
        converter: "Number"
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Matrix:undefined;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Vector4:undefined;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _RenderQueueRegistry = __webpack_require__(54);

var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 特定のシーン内に関連する処理を行うためのコンポーネント
 * このコンポーネントには属性が存在しません。
 */
var SceneComponent = function (_Component) {
    _inherits(SceneComponent, _Component);

    function SceneComponent() {
        _classCallCheck(this, SceneComponent);

        var _this = _possibleConstructorReturn(this, (SceneComponent.__proto__ || Object.getPrototypeOf(SceneComponent)).apply(this, arguments));

        _this.queueRegistory = new _RenderQueueRegistry2.default();
        return _this;
    }

    _createClass(SceneComponent, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            this.sceneDescription = {};
            SceneComponent._sceneDescriptionCreationHandlers.forEach(function (v) {
                return v(_this2.sceneDescription, _this2);
            });
        }
        /**
         * Notify update scene only when send update message is needed.
         * @param {Timer} timer [description]
         */

    }, {
        key: "updateScene",
        value: function updateScene(timer) {
            if (this._lastUpdateIndex !== timer.frameCount) {
                var sceneUpdateInfo = {
                    sceneDescription: this.sceneDescription,
                    timer: timer
                };
                this.node.broadcastMessage("update", sceneUpdateInfo);
                this._lastUpdateIndex = timer.frameCount;
            }
        }
    }], [{
        key: "onSceneDescriptionCreation",
        value: function onSceneDescriptionCreation(handler) {
            SceneComponent._sceneDescriptionCreationHandlers.push(handler);
        }
    }]);

    return SceneComponent;
}(_Component3.default);

exports.default = SceneComponent;

SceneComponent.attributes = {};
SceneComponent._sceneDescriptionCreationHandlers = [];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MaterialFactory = __webpack_require__(1);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _GLRelatedRegistryBase = __webpack_require__(3);

var _GLRelatedRegistryBase2 = _interopRequireDefault(_GLRelatedRegistryBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLExtRequestor = function (_GLRelatedRegistryBas) {
    _inherits(GLExtRequestor, _GLRelatedRegistryBas);

    function GLExtRequestor(gl) {
        _classCallCheck(this, GLExtRequestor);

        var _this = _possibleConstructorReturn(this, (GLExtRequestor.__proto__ || Object.getPrototypeOf(GLExtRequestor)).call(this));

        _this.gl = gl;
        _this.extensions = {};
        _this._readyExtensions = {};
        _this._resolveRequested();
        GLExtRequestor._requestObserver.push(_this._resolveExtensionSafely.bind(_this));
        return _this;
    }

    _createClass(GLExtRequestor, [{
        key: "_resolveRequested",

        /**
         * Resolve all extension requested already.
         */
        value: function _resolveRequested() {
            var _this2 = this;

            GLExtRequestor._requestedExtensions.forEach(function (e) {
                _this2._resolveExtensionSafely(e.extensionName);
            });
        }
    }, {
        key: "_resolveExtensionSafely",
        value: function _resolveExtensionSafely(extName) {
            var e = GLExtRequestor._requestedExtensions[GLExtRequestor._requestIndexOf(extName)];
            if (!this._resolveExtension(e.extensionName) && e.isNecessary) {
                throw new Error("A WebGL extension '" + e.extensionName + "' was requested. But that is not supported on this device.");
            }
        }
    }, {
        key: "_resolveExtension",
        value: function _resolveExtension(name) {
            if (this._readyExtensions[name]) {
                return true;
            }
            var ext = void 0;
            if (typeof GLExtRequestor._customExtensionResolvers[name] === "undefined") {
                ext = this.extensions[name] = this.gl.getExtension(name);
            } else {
                ext = this.extensions[name] = GLExtRequestor._customExtensionResolvers[name](this.gl);
            }
            this._readyExtensions[name] = this.extensions[name] !== void 0;
            if (ext) {
                _MaterialFactory2.default.get(this.gl).macro.setValue(name.toUpperCase(), "");
            }
            return !!this._readyExtensions[name];
        }
    }], [{
        key: "get",
        value: function get(gl) {
            return this.__get(gl, GLExtRequestor);
        }
        /**
         * Check specified extension was supported on this device.
         * Note: This method would throw an exception if there was no WebGL context initialized yet.
         * @param  {string}  extName [description]
         * @return {boolean}         [description]
         */

    }, {
        key: "supported",
        value: function supported(extName) {
            var fg = GLExtRequestor._getFirst();
            if (!fg) {
                throw new Error("There was no WebGLRenderingContext initialized yet");
            } else {
                return fg.extensions[extName] !== undefined && fg.extensions[extName] !== null;
            }
        }
        /**
         * Request extension to use.
         * @param {string} str [description]
         */

    }, {
        key: "request",
        value: function request(extName) {
            var isNecessary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var index = GLExtRequestor._requestIndexOf(extName);
            if (index > -1 && isNecessary) {
                GLExtRequestor._requestedExtensions[index] = { extensionName: extName, isNecessary: isNecessary };
            } else if (index === -1) {
                GLExtRequestor._requestedExtensions.push({ extensionName: extName, isNecessary: isNecessary });
            }
            GLExtRequestor._requestObserver.forEach(function (o) {
                return o(extName);
            });
        }
    }, {
        key: "_getFirst",
        value: function _getFirst() {
            return GLExtRequestor.__getAll(GLExtRequestor)[0];
        }
    }, {
        key: "_requestIndexOf",
        value: function _requestIndexOf(extName) {
            for (var i = 0; i < GLExtRequestor._requestedExtensions.length; i++) {
                if (GLExtRequestor._requestedExtensions[i].extensionName === extName) {
                    return i;
                }
            }
            return -1;
        }
    }]);

    return GLExtRequestor;
}(_GLRelatedRegistryBase2.default);

exports.default = GLExtRequestor;

GLExtRequestor.registryName = "GLExtensionRequestor";
/**
 * Some of extensions needed to override resolving extensions by this.
 */
GLExtRequestor._customExtensionResolvers = {};
GLExtRequestor._requestObserver = [];
/**
 * Extension list requested to use.
 * @type {string[]}
 */
GLExtRequestor._requestedExtensions = [];
GLExtRequestor._customExtensionResolvers["WEBGL_color_buffer_float"] = function (gl) {
    var isSupported = void 0;
    if (gl.getExtension("WEBGL_color_buffer_float") === null) {
        var fbo = gl.createFramebuffer();
        var tex = gl.createTexture();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.FLOAT, null);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
            isSupported = false;
        } else {
            isSupported = true;
        }
        gl.deleteTexture(tex);
        gl.deleteFramebuffer(fbo);
    } else {
        isSupported = true;
    }
    return isSupported;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GLRelatedRegistryBase = __webpack_require__(3);

var _GLRelatedRegistryBase2 = _interopRequireDefault(_GLRelatedRegistryBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Provides the feature to instanciate primitive geometry.
 */
var GeometryFactory = function (_GLRelatedRegistryBas) {
    _inherits(GeometryFactory, _GLRelatedRegistryBas);

    function GeometryFactory(gl) {
        _classCallCheck(this, GeometryFactory);

        var _this = _possibleConstructorReturn(this, (GeometryFactory.__proto__ || Object.getPrototypeOf(GeometryFactory)).call(this));

        _this.gl = gl;
        return _this;
    }
    /**
     * Get geometry factory by WebGLRenderingContext
     * @param gl
     */


    _createClass(GeometryFactory, [{
        key: "instanciate",
        value: function instanciate(type, args) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var factoryDelegate, geometry, exts, i, p;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                factoryDelegate = GeometryFactory.factoryDelegates[type];

                                if (factoryDelegate) {
                                    _context.next = 3;
                                    break;
                                }

                                throw new Error("Can not instanciate unknown geometry type " + type);

                            case 3:
                                _context.next = 5;
                                return factoryDelegate(this.gl, args);

                            case 5:
                                geometry = _context.sent;

                                if (!(GeometryFactory.factoryExtentions[type] !== void 0)) {
                                    _context.next = 17;
                                    break;
                                }

                                exts = GeometryFactory.factoryExtentions[type];
                                i = 0;

                            case 9:
                                if (!(i < exts.length)) {
                                    _context.next = 17;
                                    break;
                                }

                                p = exts[i](geometry, args);

                                if (!p) {
                                    _context.next = 14;
                                    break;
                                }

                                _context.next = 14;
                                return p;

                            case 14:
                                i++;
                                _context.next = 9;
                                break;

                            case 17:
                                return _context.abrupt("return", geometry);

                            case 18:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "instanciateAsDefault",
        value: function instanciateAsDefault(type) {
            var decl = GeometryFactory.factoryArgumentDeclarations[type];
            var args = {};
            for (var attr in decl) {
                var attrDecl = decl[attr];
                args[attr] = attrDecl.default;
            }
            return this.instanciate(type, args);
        }
    }], [{
        key: "get",
        value: function get(gl) {
            return this.__get(gl, GeometryFactory);
        }
        /**
         * Add new type geometry
         * @param {string}                   typeName        [description]
         * @param {IAttributeDeclaration }}             argumentDeclarations [description]
         * @param {IGeometryFactoryDelegate} factoryDelegate [description]
         */

    }, {
        key: "addType",
        value: function addType(typeName, argumentDeclarations, factoryDelegate) {
            GeometryFactory.factoryDelegates[typeName] = factoryDelegate;
            GeometryFactory.factoryArgumentDeclarations[typeName] = argumentDeclarations;
        }
    }, {
        key: "extend",
        value: function extend(typeName, extender) {
            if (GeometryFactory.factoryExtentions[typeName] === void 0) {
                GeometryFactory.factoryExtentions[typeName] = [];
            }
            GeometryFactory.factoryExtentions[typeName].push(extender);
        }
    }]);

    return GeometryFactory;
}(_GLRelatedRegistryBase2.default);

exports.default = GeometryFactory;

GeometryFactory.registryName = "GeometryFactory";
/**
 * Delegates to be used as factory
 */
GeometryFactory.factoryDelegates = {};
/**
 * Argument inputs to be used for construction of geometry.
 */
GeometryFactory.factoryArgumentDeclarations = {};
GeometryFactory.factoryExtentions = {};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grimoirejs = __webpack_require__(5);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _DrawPriorty = __webpack_require__(88);

var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);

var _MaterialContainerBase = __webpack_require__(40);

var _MaterialContainerBase2 = _interopRequireDefault(_MaterialContainerBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * マテリアルとマテリアルへの属性を管理するためのコンポーネント
 * このコンポーネントは将来的に`MeshRenderer`と統合されます。
 * 指定されたマテリアルの初期化の管理や、マテリアルによって動的に追加される属性の管理を行います、
 */
var MaterialContainerComponent = function (_MaterialContainerBas) {
    _inherits(MaterialContainerComponent, _MaterialContainerBas);

    function MaterialContainerComponent() {
        _classCallCheck(this, MaterialContainerComponent);

        var _this = _possibleConstructorReturn(this, (MaterialContainerComponent.__proto__ || Object.getPrototypeOf(MaterialContainerComponent)).apply(this, arguments));

        _this.materialArgs = {};
        _this.materialReady = false;
        _this.useMaterial = false;
        return _this;
    }

    _createClass(MaterialContainerComponent, [{
        key: "getDrawPriorty",
        value: function getDrawPriorty(depth, technique) {
            if (!this.materialReady && !this.isActive) {
                return Number.MAX_VALUE;
            }
            var orderCriteria = void 0;
            if (this._drawOrder === "Auto") {
                if (this.material.techniques[technique].drawOrder === "Auto") {
                    orderCriteria = _DrawPriorty2.default[this._transparent ? "UseAlpha" : "NoAlpha"];
                } else {
                    orderCriteria = _DrawPriorty2.default[this.material.techniques[technique].drawOrder];
                }
            } else {
                orderCriteria = _DrawPriorty2.default[this._drawOrder];
            }
            if (orderCriteria === void 0) {
                throw new Error("Specified drawing order \"" + this.material.techniques[technique].drawOrder + "\" is not defined");
            }
            if (orderCriteria.descending) {
                return (1.0 - depth / 10000) * orderCriteria.priorty;
            } else {
                return depth / 10000 * orderCriteria.priorty;
            }
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this.getAttributeRaw("material").watch(this._onMaterialChanged.bind(this));
            this.__registerAssetLoading(this._onMaterialChanged());
            this.getAttributeRaw("drawOrder").boundTo("_drawOrder");
            this.getAttributeRaw("transparent").boundTo("_transparent");
        }
        /**
         * When the material attribute is changed.
         */

    }, {
        key: "_onMaterialChanged",
        value: function _onMaterialChanged() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var materialPromise;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                materialPromise = this.getAttribute("material");

                                if (!(materialPromise === null)) {
                                    _context.next = 4;
                                    break;
                                }

                                this.useMaterial = false;
                                return _context.abrupt("return");

                            case 4:
                                this.useMaterial = true;
                                if (this._registeredAttributes) {
                                    this.__removeExposedMaterialParameters();
                                }

                                if (this._materialComponent) {
                                    _context.next = 11;
                                    break;
                                }

                                _context.next = 9;
                                return this._prepareInternalMaterial(materialPromise);

                            case 9:
                                _context.next = 13;
                                break;

                            case 11:
                                _context.next = 13;
                                return this._prepareExternalMaterial(materialPromise);

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * Resolve materials only when the material required from external material component.
         * @return {Promise<void>} [description]
         */

    }, {
        key: "_prepareExternalMaterial",
        value: function _prepareExternalMaterial(materialPromise) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var material;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return materialPromise;

                            case 2:
                                material = _context2.sent;
                                // waiting for material load completion
                                this.material = material;
                                this.materialArgs = this._materialComponent.materialArgs;
                                this.materialReady = true;

                            case 6:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "_prepareInternalMaterial",
        value: function _prepareInternalMaterial(materialPromise) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var material;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (materialPromise) {
                                    _context3.next = 2;
                                    break;
                                }

                                return _context3.abrupt("return");

                            case 2:
                                _context3.next = 4;
                                return materialPromise;

                            case 4:
                                material = _context3.sent;
                                // waiting for material load completion
                                this.material = material;
                                this.__exposeMaterialParameters(this.material);
                                this._registeredAttributes = true;
                                this.materialReady = true;

                            case 9:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }], [{
        key: "rewriteDefaultMaterial",
        value: function rewriteDefaultMaterial(materialName) {
            if (materialName !== MaterialContainerComponent._defaultMaterial) {
                MaterialContainerComponent._defaultMaterial = materialName;
                _grimoirejs2.default.componentDeclarations.get("MaterialContainer").attributes["material"].default = "new(" + materialName + ")";
            }
        }
    }, {
        key: "defaultMaterial",
        get: function get() {
            return this._defaultMaterial;
        }
    }]);

    return MaterialContainerComponent;
}(_MaterialContainerBase2.default);

exports.default = MaterialContainerComponent;

MaterialContainerComponent.attributes = {
    /**
     * 対象のマテリアル
     */
    material: {
        converter: "Material",
        default: "new(unlit)",
        componentBoundTo: "_materialComponent"
    },
    /**
     * 描画順序
     *
     * デフォルトの状態では、マテリアルから読み込んだ描画順序設定を用います
     */
    drawOrder: {
        converter: "String",
        default: "Auto"
    },
    transparent: {
        converter: "Boolean",
        default: true
    }
};
MaterialContainerComponent._defaultMaterial = "unlit";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _CanvasRegionRenderingTarget = __webpack_require__(92);

var _CanvasRegionRenderingTarget2 = _interopRequireDefault(_CanvasRegionRenderingTarget);

var _RenderingTargetRegistry = __webpack_require__(24);

var _RenderingTargetRegistry2 = _interopRequireDefault(_RenderingTargetRegistry);

var _TextureSizeCalculator = __webpack_require__(12);

var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererComponent = function (_Component) {
    _inherits(RendererComponent, _Component);

    function RendererComponent() {
        _classCallCheck(this, RendererComponent);

        var _this = _possibleConstructorReturn(this, (RendererComponent.__proto__ || Object.getPrototypeOf(RendererComponent)).apply(this, arguments));

        _this._wasInside = false;
        return _this;
    }

    _createClass(RendererComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            // initializing attributes
            this.getAttributeRaw("camera").boundTo("camera");
            this.getAttributeRaw("viewport").watch(function (v) {
                _this2._viewportSizeGenerator = v;
                _this2.$resizeCanvas();
            });
            // viewport converter returns a delegate to generate viewport size
            this._viewportSizeGenerator = this.getAttribute("viewport");
            var regionName = this.getAttribute("regionName");
            if (!regionName) {
                regionName = "renderer-" + this.node.index;
            }
            this.renderingTarget = new _CanvasRegionRenderingTarget2.default(this.companion.get("gl"));
            this.renderingTarget.setViewport(this.viewport);
            _RenderingTargetRegistry2.default.get(this.companion.get("gl")).setRenderingTarget(regionName, this.renderingTarget);
            this._initializeMouseHandlers();
        }
    }, {
        key: "$mount",
        value: function $mount() {
            var _this3 = this;

            this._gl = this.companion.get("gl");
            this._canvas = this.companion.get("canvasElement");
            this.getAttributeRaw("handleMouse").watch(function (a) {
                if (a) {
                    _this3._enableMouseHandling();
                } else {
                    _this3._disableMouseHandling();
                }
            }, true);
            if (this.node.children.length === 0) {
                this.node.addChildByName("render-scene", {});
            }
            this.$resizeCanvas();
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            this._disableMouseHandling();
        }
    }, {
        key: "$treeInitialized",
        value: function $treeInitialized() {
            // This should be called after mounting all of tree nodes in children
            this.$resizeCanvas();
        }
    }, {
        key: "$resizeCanvas",
        value: function $resizeCanvas() {
            this._viewportCache = this._viewportSizeGenerator(this._canvas);
            this.renderingTarget.setViewport(this._viewportCache);
            var pow2Size = _TextureSizeCalculator2.default.getPow2Size(this._viewportCache.Width, this._viewportCache.Height);
            this.node.broadcastMessage("resizeViewport", {
                width: this._viewportCache.Width,
                height: this._viewportCache.Height,
                pow2Width: pow2Size.width,
                pow2Height: pow2Size.height
            });
        }
    }, {
        key: "$renderViewport",
        value: function $renderViewport(args) {
            this.node.broadcastMessage("render", {
                camera: this.camera,
                viewport: this._viewportCache,
                timer: args.timer
            });
        }
    }, {
        key: "_initializeMouseHandlers",
        value: function _initializeMouseHandlers() {
            var _this4 = this;

            // initializing mouse handlers
            this._mouseMoveHandler = function (e) {
                if (_this4._isViewportInside(e)) {
                    if (!_this4._wasInside) {
                        _this4._sendMouseEvent("mouseenter", e);
                    }
                    _this4._sendMouseEvent("mousemove", e);
                    _this4._wasInside = true; // Mark as last pointer was inside of viewport
                } else {
                    if (_this4._wasInside) {
                        _this4._sendMouseEvent("mouseleave", e);
                    }
                    _this4._wasInside = false; // Mark as last pointer was not inside of viewport
                }
            };
            this._mouseEnterHandler = function (e) {
                if (_this4._isViewportInside(e)) {
                    _this4._sendMouseEvent("mouseenter", e);
                    _this4._wasInside = true;
                }
            };
            this._mouseLeaveHandler = function (e) {
                if (_this4._wasInside) {
                    _this4._sendMouseEvent("mouseleave", e);
                }
                _this4._wasInside = false;
            };
            this._mouseDownHandler = function (e) {
                if (_this4._isViewportInside(e)) {
                    _this4._sendMouseEvent("mousedown", e);
                    _this4._wasInside = true;
                }
            };
            // Mouse up can be called even if mouse pointer was not inside of viewport
            this._mouseUpHandler = function (e) {
                _this4._sendMouseEvent("mouseup", e);
            };
        }
    }, {
        key: "_enableMouseHandling",
        value: function _enableMouseHandling() {
            this._canvas.addEventListener("mousemove", this._mouseMoveHandler);
            this._canvas.addEventListener("mouseleave", this._mouseLeaveHandler);
            this._canvas.addEventListener("mouseenter", this._mouseEnterHandler);
            this._canvas.addEventListener("mousedown", this._mouseDownHandler);
            this._canvas.addEventListener("mouseup", this._mouseUpHandler);
        }
    }, {
        key: "_disableMouseHandling",
        value: function _disableMouseHandling() {
            this._canvas.removeEventListener("mousemove", this._mouseMoveHandler);
            this._canvas.removeEventListener("mouseleave", this._mouseLeaveHandler);
            this._canvas.removeEventListener("mouseenter", this._mouseEnterHandler);
            this._canvas.removeEventListener("mousedown", this._mouseDownHandler);
            this._canvas.removeEventListener("mouseup", this._mouseUpHandler);
        }
    }, {
        key: "_sendMouseEvent",
        value: function _sendMouseEvent(eventName, e) {
            if (!this.isActive) {
                return;
            }
            this.node.emit(eventName);
            this.node.broadcastMessage(eventName, this._toViewportMouseArgs(e));
        }
        /**
         * Check mouse is inside of viewport
         * @param  {MouseEvent} e [description]
         * @return {boolean}      [description]
         */

    }, {
        key: "_isViewportInside",
        value: function _isViewportInside(e) {
            var rc = this._getRelativePosition(e);
            var n = this._viewportCache.toLocalNormalized(rc[0], rc[1]);
            return n[0] >= 0 && n[0] <= 1 && n[1] >= 0 && n[1] <= 1;
        }
        /**
         * Obtain mouse point of relative coordinate from element.
         * @param  {MouseEvent} e [description]
         * @return {number[]}     [description] x,y,width,height
         */

    }, {
        key: "_getRelativePosition",
        value: function _getRelativePosition(e) {
            var rect = this._canvas.getBoundingClientRect();
            var positionX = rect.left + window.pageXOffset;
            var positionY = rect.top + window.pageYOffset;
            return [e.pageX - positionX, rect.height - (e.pageY - positionY), rect.width, rect.height];
        }
        /**
         * Convert mouse args into viewport mouse event
         * @param  {MouseEvent}         e [description]
         * @return {ViewportMouseEvent}   [description]
         */

    }, {
        key: "_toViewportMouseArgs",
        value: function _toViewportMouseArgs(e) {
            var ro = this._getRelativePosition(e);
            var r = this._viewportCache.toLocal(ro[0], ro[1]);
            var n = this._viewportCache.toLocalNormalized(ro[0], ro[1]);
            return Object.assign({}, e, { viewportX: r[0], viewportY: r[1], viewportNormalizedX: n[0], viewportNormalizedY: n[1], canvasX: ro[0], canvasY: ro[1], canvasNormalizedX: ro[0] / ro[2], canvasNormalizedY: ro[1] / ro[3], inside: this._isViewportInside(e) });
        }
    }, {
        key: "viewport",
        get: function get() {
            if (this._viewportCache) {
                return this._viewportCache;
            } else {
                this._viewportCache = this._viewportSizeGenerator(this.companion.get("gl").canvas);
                return this._viewportCache;
            }
        }
    }]);

    return RendererComponent;
}(_Component3.default);

exports.default = RendererComponent;

RendererComponent.attributes = {
    regionName: {
        converter: "String",
        default: null
    },
    camera: {
        converter: "Component",
        default: "camera",
        target: "Camera"
    },
    viewport: {
        converter: "Viewport",
        default: "auto"
    },
    handleMouse: {
        converter: "Boolean",
        default: true
    }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GLRelatedRegistryBase = __webpack_require__(3);

var _GLRelatedRegistryBase2 = _interopRequireDefault(_GLRelatedRegistryBase);

var _CanvasRenderingTarget = __webpack_require__(41);

var _CanvasRenderingTarget2 = _interopRequireDefault(_CanvasRenderingTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * RenderingTargetRegistry is container class of rendering target.
 * Rendering target consists of 2 types.
 * Offscreen rendering target is used for rendering into non screen buffer(Texture)
 * Default rendering target is used for rendering into screen.
 */
var RenderingTargetRegistry = function (_GLRelatedRegistryBas) {
    _inherits(RenderingTargetRegistry, _GLRelatedRegistryBas);

    function RenderingTargetRegistry(gl) {
        _classCallCheck(this, RenderingTargetRegistry);

        var _this = _possibleConstructorReturn(this, (RenderingTargetRegistry.__proto__ || Object.getPrototypeOf(RenderingTargetRegistry)).call(this));

        _this.gl = gl;
        _this._renderingTargets = {};
        _this._renderingTargetResolver = {};
        // default rendering target
        _this.setRenderingTarget("canvas", new _CanvasRenderingTarget2.default(gl));
        return _this;
    }
    /**
     * Obtain reference of the class by WebGLRenderingContext.
     * @param gl
     */


    _createClass(RenderingTargetRegistry, [{
        key: "setRenderingTarget",

        /**
         * Register a rendering target to be resolved
         * @param name
         * @param renderingTarget
         */
        value: function setRenderingTarget(name, renderingTarget) {
            if (name === "default") {
                throw new Error("Rendering target can't be named as 'default'.");
            }
            this._renderingTargets[name] = renderingTarget;
            this._resolveRenderingTargets(name, renderingTarget);
        }
        /**
         * Obtain a rendering taregt from name.
         */

    }, {
        key: "getRenderingTarget",
        value: function getRenderingTarget(name) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var renderingTarget;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                renderingTarget = this._renderingTargets[name];

                                if (!renderingTarget) {
                                    _context.next = 5;
                                    break;
                                }

                                return _context.abrupt("return", renderingTarget);

                            case 5:
                                return _context.abrupt("return", this._waitForRenderingTarget(name));

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * List of names being resolved aleady
         */

    }, {
        key: "_waitForRenderingTarget",
        value: function _waitForRenderingTarget(name) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (this._renderingTargetResolver[name] === undefined) {
                                    this._renderingTargetResolver[name] = [];
                                }
                                return _context2.abrupt("return", new Promise(function (resolver, reject) {
                                    _this2._renderingTargetResolver[name].push(resolver);
                                }));

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "_resolveRenderingTargets",
        value: function _resolveRenderingTargets(name, target) {
            var resolvers = this._renderingTargetResolver[name];
            if (resolvers) {
                resolvers.forEach(function (r) {
                    return r(target);
                });
            }
        }
    }, {
        key: "targetNames",
        get: function get() {
            return Object.keys(this._renderingTargets);
        }
    }], [{
        key: "get",
        value: function get(gl) {
            return this.__get(gl, RenderingTargetRegistry);
        }
    }]);

    return RenderingTargetRegistry;
}(_GLRelatedRegistryBase2.default);

exports.default = RenderingTargetRegistry;

RenderingTargetRegistry.registryName = "RenderingTargetRegistry";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _GLResource2 = __webpack_require__(4);

var _GLResource3 = _interopRequireDefault(_GLResource2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderBuffer = function (_GLResource) {
    _inherits(RenderBuffer, _GLResource);

    function RenderBuffer(gl) {
        _classCallCheck(this, RenderBuffer);

        return _possibleConstructorReturn(this, (RenderBuffer.__proto__ || Object.getPrototypeOf(RenderBuffer)).call(this, gl, gl.createRenderbuffer()));
    }

    _createClass(RenderBuffer, [{
        key: "update",
        value: function update(format, width, height) {
            this.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, this.resourceReference);
            this.gl.renderbufferStorage(WebGLRenderingContext.RENDERBUFFER, format, width, height);
            this.valid = true;
        }
    }, {
        key: "bind",
        value: function bind() {
            this.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, this.resourceReference);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.gl.deleteRenderbuffer(this.resourceReference);
            _get(RenderBuffer.prototype.__proto__ || Object.getPrototypeOf(RenderBuffer.prototype), "destroy", this).call(this);
        }
    }]);

    return RenderBuffer;
}(_GLResource3.default);

exports.default = RenderBuffer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GLRelatedRegistryBase = __webpack_require__(3);

var _GLRelatedRegistryBase2 = _interopRequireDefault(_GLRelatedRegistryBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * =
 */
var RenderingBufferResourceRegistry = function (_GLRelatedRegistryBas) {
    _inherits(RenderingBufferResourceRegistry, _GLRelatedRegistryBas);

    function RenderingBufferResourceRegistry(gl) {
        _classCallCheck(this, RenderingBufferResourceRegistry);

        var _this = _possibleConstructorReturn(this, (RenderingBufferResourceRegistry.__proto__ || Object.getPrototypeOf(RenderingBufferResourceRegistry)).call(this));

        _this.gl = gl;
        _this.backbuffers = {};
        _this.depthBuffers = {};
        return _this;
    }
    /**
     * Obtain reference of the class by WebGLRenderingContext.
     * @param gl
     */


    _createClass(RenderingBufferResourceRegistry, [{
        key: "setBackbuffer",
        value: function setBackbuffer(name, backbuffer) {
            this.backbuffers[name] = backbuffer;
        }
    }, {
        key: "getBackbuffer",
        value: function getBackbuffer(name) {
            return this.backbuffers[name];
        }
    }, {
        key: "setDepthBuffer",
        value: function setDepthBuffer(name, depthBuffer) {
            this.depthBuffers[name] = depthBuffer;
        }
    }, {
        key: "getDepthBuffer",
        value: function getDepthBuffer(name) {
            return this.depthBuffers[name];
        }
    }], [{
        key: "get",
        value: function get(gl) {
            return this.__get(gl, RenderingBufferResourceRegistry);
        }
    }]);

    return RenderingBufferResourceRegistry;
}(_GLRelatedRegistryBase2.default);

exports.default = RenderingBufferResourceRegistry;

RenderingBufferResourceRegistry.registryName = "RenderingBufferResourceRegistry";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasicComponent2 = __webpack_require__(15);

var _BasicComponent3 = _interopRequireDefault(_BasicComponent2);

var _ConstantSizeResourceResizer = __webpack_require__(44);

var _ConstantSizeResourceResizer2 = _interopRequireDefault(_ConstantSizeResourceResizer);

var _ResourceResizerComponentBase = __webpack_require__(28);

var _ResourceResizerComponentBase2 = _interopRequireDefault(_ResourceResizerComponentBase);

var _ViewportSizeResourceResizer = __webpack_require__(45);

var _ViewportSizeResourceResizer2 = _interopRequireDefault(_ViewportSizeResourceResizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Abstract class of ResizableResource container.
 */
var ResizableResourceUpdator = function (_BasicComponent) {
    _inherits(ResizableResourceUpdator, _BasicComponent);

    function ResizableResourceUpdator() {
        _classCallCheck(this, ResizableResourceUpdator);

        return _possibleConstructorReturn(this, (ResizableResourceUpdator.__proto__ || Object.getPrototypeOf(ResizableResourceUpdator)).apply(this, arguments));
    }

    _createClass(ResizableResourceUpdator, [{
        key: "resize",

        /**
         * Resize texture buffer
         * @param width
         * @param height
         */
        value: function resize(width, height) {
            // Nothing to do here. Resize features are depends on what resouces are managed by for each classes.
            // These should be considered by the classes override this class.
        }
    }, {
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            var resizer = this.node.getComponent(_ResourceResizerComponentBase2.default);
            if (!resizer) {
                var resizerType = this.getAttribute("resizerType");
                var resizerCtor = ResizableResourceUpdator.resizers[resizerType];
                if (!resizerCtor) {
                    throw new Error("Specified resizer '" + resizerType + "' is not yet registered to resizable resource updator");
                }
                setImmediate(function () {
                    _this2.node.addComponent(resizerCtor); // darkside
                });
            }
        }
    }]);

    return ResizableResourceUpdator;
}(_BasicComponent3.default);

exports.default = ResizableResourceUpdator;

ResizableResourceUpdator.resizers = {
    ViewportSize: _ViewportSizeResourceResizer2.default,
    Constant: _ConstantSizeResourceResizer2.default
};
ResizableResourceUpdator.attributes = {
    resizerType: {
        converter: "String",
        default: "Constant"
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95).setImmediate))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _TextureSizeCalculator = __webpack_require__(12);

var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

var _ResizableResourceUpdator = __webpack_require__(27);

var _ResizableResourceUpdator2 = _interopRequireDefault(_ResizableResourceUpdator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class of texture resizer
 */
var TextureResizerComponentBase = function (_Component) {
    _inherits(TextureResizerComponentBase, _Component);

    function TextureResizerComponentBase() {
        _classCallCheck(this, TextureResizerComponentBase);

        var _this = _possibleConstructorReturn(this, (TextureResizerComponentBase.__proto__ || Object.getPrototypeOf(TextureResizerComponentBase)).apply(this, arguments));

        _this._lastWidth = 0;
        _this._lastHeight = 0;
        return _this;
    }
    /**
     * Resize all resources on this node.
     * @param width
     * @param height
     */


    _createClass(TextureResizerComponentBase, [{
        key: "__resizeResources",
        value: function __resizeResources(width, height) {
            if (this.getAttribute("keepPow2Size")) {
                var newSize = _TextureSizeCalculator2.default.getPow2Size(width, height);
                width = newSize.width;
                height = newSize.height;
            }
            if (width === this._lastWidth && height === this._lastHeight) {
                return;
            }
            this.node.getComponents(_ResizableResourceUpdator2.default).forEach(function (resizable) {
                return resizable.resize(width, height);
            });
            this._lastWidth = width;
            this._lastHeight = height;
        }
    }]);

    return TextureResizerComponentBase;
}(_Component3.default);

exports.default = TextureResizerComponentBase;

TextureResizerComponentBase.attributes = {
    keepPow2Size: {
        converter: "Boolean",
        default: true
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RenderStageBase2 = __webpack_require__(98);

var _RenderStageBase3 = _interopRequireDefault(_RenderStageBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleBufferRenderStageBase = function (_RenderStageBase) {
    _inherits(SingleBufferRenderStageBase, _RenderStageBase);

    function SingleBufferRenderStageBase() {
        _classCallCheck(this, SingleBufferRenderStageBase);

        return _possibleConstructorReturn(this, (SingleBufferRenderStageBase.__proto__ || Object.getPrototypeOf(SingleBufferRenderStageBase)).apply(this, arguments));
    }

    _createClass(SingleBufferRenderStageBase, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.getAttributeRaw("clearColor").boundTo("clearColor");
            this.getAttributeRaw("clearColorEnabled").boundTo("clearColorEnabled");
            this.getAttributeRaw("clearDepthEnabled").boundTo("clearDepthEnabled");
            this.getAttributeRaw("clearDepth").boundTo("clearDepth");
            this.getAttributeRaw("out").watch(function (promise) {
                _this2._out = promise;
                promise.then(function (r) {
                    return _this2.out = r;
                });
            }, true);
        }
        /**
         * Setup rendering target(Attaching FBO, clearning depth or color buffers)
         */

    }, {
        key: "__beforeRender",
        value: function __beforeRender() {
            if (!_get(SingleBufferRenderStageBase.prototype.__proto__ || Object.getPrototypeOf(SingleBufferRenderStageBase.prototype), "__beforeRender", this).call(this)) {
                return false;
            }
            if (!this.out) {
                return false;
            }
            var clearFlag = 0;
            if (this.clearColorEnabled) {
                clearFlag |= WebGLRenderingContext.COLOR_BUFFER_BIT;
            }
            if (this.clearDepthEnabled) {
                clearFlag |= WebGLRenderingContext.DEPTH_BUFFER_BIT;
            }
            this.out.beforeDraw(clearFlag, this.clearColor.rawElements, this.clearDepth);
            return true;
        }
    }]);

    return SingleBufferRenderStageBase;
}(_RenderStageBase3.default);

exports.default = SingleBufferRenderStageBase;

SingleBufferRenderStageBase.attributes = {
    out: {
        converter: "RenderingTarget",
        default: "default"
    },
    clearColor: {
        default: "#0000",
        converter: "Color4"
    },
    clearColorEnabled: {
        default: true,
        converter: "Boolean"
    },
    clearDepthEnabled: {
        default: true,
        converter: "Boolean"
    },
    clearDepth: {
        default: 1,
        converter: "Number"
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ResizableResourceUpdator = __webpack_require__(27);

var _ResizableResourceUpdator2 = _interopRequireDefault(_ResizableResourceUpdator);

var _TextureContainer = __webpack_require__(13);

var _TextureContainer2 = _interopRequireDefault(_TextureContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextureUpdatorComponentBase = function (_ResizableResourceUpd) {
    _inherits(TextureUpdatorComponentBase, _ResizableResourceUpd);

    function TextureUpdatorComponentBase() {
        _classCallCheck(this, TextureUpdatorComponentBase);

        return _possibleConstructorReturn(this, (TextureUpdatorComponentBase.__proto__ || Object.getPrototypeOf(TextureUpdatorComponentBase)).apply(this, arguments));
    }

    _createClass(TextureUpdatorComponentBase, [{
        key: "$awake",
        value: function $awake() {
            _get(TextureUpdatorComponentBase.prototype.__proto__ || Object.getPrototypeOf(TextureUpdatorComponentBase.prototype), "$awake", this).call(this);
            this.textureComponent = this.node.getComponent(_TextureContainer2.default);
        }
    }, {
        key: "__texture",
        get: function get() {
            return this.textureComponent.texture;
        }
    }]);

    return TextureUpdatorComponentBase;
}(_ResizableResourceUpdator2.default);

exports.default = TextureUpdatorComponentBase;

TextureUpdatorComponentBase.attributes = {
    flipY: {
        converter: "Boolean",
        default: true
    },
    premultipliedAlpha: {
        converter: "Boolean",
        default: false
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Resolve resources with caching.
 */

var CacheResolver = function () {
    function CacheResolver(toAbsolute) {
        _classCallCheck(this, CacheResolver);

        this.toAbsolute = toAbsolute;
        this.cache = {};
        this.resolvers = {};
    }

    _createClass(CacheResolver, [{
        key: "resolve",
        value: function resolve(src, resolver) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var abs, result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                abs = this.toAbsolute(src);

                                if (!this._cached(abs)) {
                                    _context.next = 5;
                                    break;
                                }

                                return _context.abrupt("return", this.cache[abs]);

                            case 5:
                                if (!this._resolving(abs)) {
                                    _context.next = 11;
                                    break;
                                }

                                _context.next = 8;
                                return this.resolvers[abs];

                            case 8:
                                return _context.abrupt("return", _context.sent);

                            case 11:
                                this.resolvers[abs] = resolver(abs);
                                _context.next = 14;
                                return this.resolvers[abs];

                            case 14:
                                result = _context.sent;

                                this._resolved(abs, result);
                                return _context.abrupt("return", result);

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_cached",
        value: function _cached(abs) {
            return typeof this.cache[abs] !== "undefined";
        }
    }, {
        key: "_resolving",
        value: function _resolving(abs) {
            return typeof this.resolvers[abs] !== "undefined";
        }
    }, {
        key: "_resolved",
        value: function _resolved(abs, result) {
            delete this.resolvers[abs];
            this.cache[abs] = result;
        }
    }]);

    return CacheResolver;
}();

exports.default = CacheResolver;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CacheResolver2 = __webpack_require__(31);

var _CacheResolver3 = _interopRequireDefault(_CacheResolver2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExternalResourceResolver = function (_CacheResolver) {
    _inherits(ExternalResourceResolver, _CacheResolver);

    function ExternalResourceResolver() {
        _classCallCheck(this, ExternalResourceResolver);

        return _possibleConstructorReturn(this, (ExternalResourceResolver.__proto__ || Object.getPrototypeOf(ExternalResourceResolver)).call(this, ExternalResourceResolver._toAbsolute));
    }
    /**
     * Check specified url is dataUrl or not
     * @param  {string}  dataUrl [description]
     * @return {boolean}         [description]
     */


    _createClass(ExternalResourceResolver, null, [{
        key: "isDataURL",
        value: function isDataURL(dataUrl) {
            return !!dataUrl.match(/^\s*data\:.*;base64/);
        }
        /**
         * Make sure that is data URL.
         * @param  {string} href [description]
         * @return {string}      [description]
         */

    }, {
        key: "_toAbsolute",
        value: function _toAbsolute(href) {
            if (href.match(/^blob\:/m) || ExternalResourceResolver.isDataURL(href)) {
                return href;
            }
            var link = document.createElement("a");
            link.href = href;
            return link.protocol + "//" + link.host + link.pathname + link.search + link.hash;
        }
    }]);

    return ExternalResourceResolver;
}(_CacheResolver3.default);

exports.default = ExternalResourceResolver;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageResolver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ExternalResourceResolver = __webpack_require__(32);

var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageResolver = exports.ImageResolver = function (_ExternalResourceReso) {
    _inherits(ImageResolver, _ExternalResourceReso);

    function ImageResolver() {
        _classCallCheck(this, ImageResolver);

        return _possibleConstructorReturn(this, (ImageResolver.__proto__ || Object.getPrototypeOf(ImageResolver)).apply(this, arguments));
    }

    _createClass(ImageResolver, [{
        key: "resolve",
        value: function resolve(path) {
            var _this2 = this;

            return _get(ImageResolver.prototype.__proto__ || Object.getPrototypeOf(ImageResolver.prototype), "resolve", this).call(this, path, function (abs) {
                return new Promise(function (resolve, reject) {
                    var imgTag = new Image();
                    imgTag.crossOrigin = _this2._getCORSConfig(abs);
                    imgTag.onload = function () {
                        resolve(imgTag);
                    };
                    imgTag.onerror = function (e) {
                        reject("Error has been occured during loading \"" + abs + "(" + path + ")\"\n" + e);
                    };
                    imgTag.src = abs;
                });
            });
        }
    }, {
        key: "_getCORSConfig",
        value: function _getCORSConfig(path) {
            var corsConfig = null;
            for (var i = 0; i < ImageResolver.corsResolvers.length; i++) {
                corsConfig = ImageResolver.corsResolvers[i](path);
                if (corsConfig !== null) {
                    break;
                }
            }
            if (corsConfig === null) {
                corsConfig = ImageResolver.defaultCORSConfig;
            }
            return corsConfig;
        }
    }]);

    return ImageResolver;
}(_ExternalResourceResolver2.default);

ImageResolver.defaultCORSConfig = "anonymous";
/**
 * Cors config resolvers.
 * If all of resolvers returns null, defaultCORSConfig will be used.
 */
ImageResolver.corsResolvers = [];
exports.default = new ImageResolver();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _defaultLoader = __webpack_require__(117);

var _defaultLoader2 = _interopRequireDefault(_defaultLoader);

var _AssetLoader = __webpack_require__(48);

var _AssetLoader2 = _interopRequireDefault(_AssetLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * アセットの読み込みを司るコンポーネント。ローダーの表示などを司る。
 */
var AssetLoadingManagerComponent = function (_Component) {
    _inherits(AssetLoadingManagerComponent, _Component);

    function AssetLoadingManagerComponent() {
        _classCallCheck(this, AssetLoadingManagerComponent);

        var _this = _possibleConstructorReturn(this, (AssetLoadingManagerComponent.__proto__ || Object.getPrototypeOf(AssetLoadingManagerComponent)).apply(this, arguments));

        _this.loader = new _AssetLoader2.default();
        return _this;
    }

    _createClass(AssetLoadingManagerComponent, [{
        key: "$treeInitialized",
        value: function $treeInitialized() {
            if (this.getAttribute("autoStart")) {
                this._autoStart();
            }
            this._documentResolver();
        }
    }, {
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.companion.set(this.name.ns.for("loader"), this.loader);
            this.loader.register(new Promise(function (resolve) {
                _this2._documentResolver = resolve;
            }), this);
            var canvasContainer = this.companion.get("canvasContainer");
            if (!this.getAttribute("enableLoader")) {
                return;
            }
            var loaderContainer = document.createElement("div");
            loaderContainer.innerHTML = _defaultLoader2.default;
            loaderContainer.style.width = loaderContainer.style.height = "100%";
            canvasContainer.appendChild(loaderContainer);
            this._loaderElement = loaderContainer;
        }
    }, {
        key: "_autoStart",
        value: function _autoStart() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var canvas;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.loader.promise;

                            case 2:
                                if (this._loaderElement) {
                                    this._loaderElement.remove();
                                }
                                this.node.emit("asset-load-completed");
                                this.tree("goml").setAttribute("loopEnabled", true);
                                canvas = this.companion.get("canvasElement");

                                canvas.classList.add("gr-resource-loaded-canvas");

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return AssetLoadingManagerComponent;
}(_Component3.default);

exports.default = AssetLoadingManagerComponent;

AssetLoadingManagerComponent.attributes = {
    /**
     * ローディング状況(読み取り専用)
     *
     * 現在の読み込み状況を0-1で表す。
     */
    loadingProgress: {
        default: 0,
        converter: "Number"
    },
    /**
     * リソースの読み込み完了後に、自動的にレンダリングループを開始するかどうか
     */
    autoStart: {
        default: true,
        converter: "Boolean"
    },
    /**
     * リソースのロード時にローディング画面を表示するかどうか
     */
    enableLoader: {
        default: true,
        converter: "Boolean"
    }
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Base.Namespace;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.GLM:undefined;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Technique = __webpack_require__(67);

var _Technique2 = _interopRequireDefault(_Technique);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Provides abstraction of configurations for multiple shaders.
 */
var Material = function () {
    function Material(gl, techniqueRecipes) {
        _classCallCheck(this, Material);

        this.gl = gl;
        this.techniqueRecipes = techniqueRecipes;
        this.techniques = {};
        for (var key in techniqueRecipes) {
            this.techniques[key] = new _Technique2.default(this, techniqueRecipes[key]);
        }
    }

    _createClass(Material, [{
        key: "draw",
        value: function draw(arg) {
            var technique = this.techniques[arg.technique];
            if (technique) {
                technique.draw(arg);
            }
        }
        /**
         * Clone this material to new instance.
         * @return {Material} new material instance
         */

    }, {
        key: "clone",
        value: function clone() {
            var cloned = new Material(this.gl, this.techniqueRecipes);
            for (var techniqueKey in this.techniques) {
                var technique = this.techniques[techniqueKey];
                var destTechnique = cloned.techniques[techniqueKey];
                for (var passIndex in technique.passes) {
                    var pass = technique.passes[passIndex];
                    var destPass = destTechnique.passes[passIndex];
                    for (var argument in pass.arguments) {
                        destPass[argument] = pass[argument];
                    }
                }
            }
            return cloned;
        }
    }]);

    return Material;
}();

exports.default = Material;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Provides misc features for WebGL.
 * Typically not limited to specific context.
 */
var GLUtility = function () {
    function GLUtility() {
        _classCallCheck(this, GLUtility);
    }

    _createClass(GLUtility, null, [{
        key: "typeToTypedArrayConstructor",

        /**
         * Obtain typed array constructor from GL type.
         * @param type
         */
        value: function typeToTypedArrayConstructor(type) {
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return Uint8Array;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return Uint16Array;
                case WebGLRenderingContext.UNSIGNED_INT:
                    return Uint32Array;
                case WebGLRenderingContext.BYTE:
                    return Int8Array;
                case WebGLRenderingContext.SHORT:
                    return Int16Array;
                case WebGLRenderingContext.INT:
                    return Int32Array;
                case WebGLRenderingContext.FLOAT:
                    return Float32Array;
                default:
                    throw new Error("Element type " + type + " is not valid for buffer elements");
            }
        }
        /**
         * Obtain GL type from typed array buffer view.
         * @param buffer
         */

    }, {
        key: "arrayBufferToElementType",
        value: function arrayBufferToElementType(buffer) {
            if (buffer instanceof Uint8Array) {
                return WebGLRenderingContext.UNSIGNED_BYTE;
            }
            if (buffer instanceof Uint16Array) {
                return WebGLRenderingContext.UNSIGNED_SHORT;
            }
            if (buffer instanceof Uint32Array) {
                return WebGLRenderingContext.UNSIGNED_INT;
            }
            if (buffer instanceof Int8Array) {
                return WebGLRenderingContext.BYTE;
            }
            if (buffer instanceof Int16Array) {
                return WebGLRenderingContext.SHORT;
            }
            if (buffer instanceof Int32Array) {
                return WebGLRenderingContext.INT;
            }
            if (buffer instanceof Float32Array) {
                return WebGLRenderingContext.FLOAT;
            }
            throw new Error("Unknown buffer element type");
        }
        /**
         *
         * @param format
         */

    }, {
        key: "formatToElementCount",
        value: function formatToElementCount(format) {
            switch (format) {
                case WebGLRenderingContext.RGBA:
                    return 4;
                case WebGLRenderingContext.RGB:
                    return 3;
                default:
                    throw new Error("Unknown buffer format");
            }
        }
    }]);

    return GLUtility;
}();

exports.default = GLUtility;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MaterialFactory = __webpack_require__(1);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _MaterialContainerBase = __webpack_require__(40);

var _MaterialContainerBase2 = _interopRequireDefault(_MaterialContainerBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var MaterialComponent = function (_MaterialContainerBas) {
    _inherits(MaterialComponent, _MaterialContainerBas);

    function MaterialComponent() {
        _classCallCheck(this, MaterialComponent);

        var _this = _possibleConstructorReturn(this, (MaterialComponent.__proto__ || Object.getPrototypeOf(MaterialComponent)).apply(this, arguments));

        _this.materialArgs = {};
        return _this;
    }

    _createClass(MaterialComponent, [{
        key: "$mount",
        value: function $mount() {
            var typeName = this.getAttribute("type");
            if (typeName && typeof typeName === "string") {
                var materialFactory = _MaterialFactory2.default.get(this.companion.get("gl"));
                this.materialPromise = materialFactory.instanciate(typeName);
                this._registerAttributes();
            } else {
                throw new Error("Material type name must be sppecified and string");
            }
        }
    }, {
        key: "_registerAttributes",
        value: function _registerAttributes() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.materialPromise;

                            case 2:
                                this.material = _context.sent;

                                this.__exposeMaterialParameters(this.material);
                                this.ready = true;

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return MaterialComponent;
}(_MaterialContainerBase2.default);

exports.default = MaterialComponent;

MaterialComponent.attributes = {
    type: {
        converter: "String",
        default: null
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Namespace = __webpack_require__(35);

var _Namespace2 = _interopRequireDefault(_Namespace);

var _BasicComponent2 = __webpack_require__(15);

var _BasicComponent3 = _interopRequireDefault(_BasicComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base class for container component for material and material arguments.
 * Basically used for MaterialComponent and MaterialContainerComponent
 */
var MaterialContainerBase = function (_BasicComponent) {
    _inherits(MaterialContainerBase, _BasicComponent);

    function MaterialContainerBase() {
        _classCallCheck(this, MaterialContainerBase);

        var _this = _possibleConstructorReturn(this, (MaterialContainerBase.__proto__ || Object.getPrototypeOf(MaterialContainerBase)).apply(this, arguments));

        _this._lastParameters = {};
        return _this;
    }
    /**
     * Expose sepcified parameters as attribute parameters on this component
     * @param {Material} material [description]
     */


    _createClass(MaterialContainerBase, [{
        key: "__exposeMaterialParameters",
        value: function __exposeMaterialParameters(material) {
            var _this2 = this;

            var keepVariable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var nextParameters = {};
            for (var techniqueName in material.techniques) {
                var technique = material.techniques[techniqueName];

                var _loop = function _loop(passIndex) {
                    var pass = technique.passes[passIndex];
                    var passNamespace = _Namespace2.default.define(techniqueName + ".pass" + passIndex);

                    var _loop2 = function _loop2(argumentKey) {
                        var argumentFQN = passNamespace.for(argumentKey).fqn;
                        // Register pass variable as a attribute of this tag.
                        // Pass variables are registered with nested namespaces as following syntax.
                        // ${techniqueName}.pass${passIndex}.${variableName}
                        // EX) hitarea.pass0.enabled
                        nextParameters[argumentFQN] = pass.argumentDeclarations[argumentKey];
                        _this2.__addAttribute(argumentFQN, pass.argumentDeclarations[argumentKey]);
                        try {
                            if (typeof pass.arguments[argumentKey] !== "undefined") {
                                _this2.setAttribute(argumentFQN, pass.arguments[argumentKey]);
                            } else if (keepVariable && _this2._lastParameters[argumentFQN] !== void 0 && _this2._lastParameters[argumentFQN].converter === pass.argumentDeclarations[argumentKey].converter) {
                                _this2.setAttribute(argumentFQN, _this2._lastParameters[argumentFQN].__lastValue);
                            }
                            // Register handlers to update pass variables when tag variable was changed
                            _this2.getAttributeRaw(argumentFQN).watch(function (n, o) {
                                pass.setArgument(argumentKey, n, o);
                            }, true);
                        } catch (e) {
                            throw new Error("Parsing variable failed");
                        }
                    };

                    for (var argumentKey in pass.argumentDeclarations) {
                        _loop2(argumentKey);
                    }
                };

                for (var passIndex in technique.passes) {
                    _loop(passIndex);
                }
            }
            this._lastParameters = nextParameters;
        }
    }, {
        key: "__removeExposedMaterialParameters",
        value: function __removeExposedMaterialParameters() {
            for (var key in this._lastParameters) {
                this._lastParameters[key].__lastValue = this.getAttribute(key);
                this.__removeAttributes(key);
            }
        }
    }]);

    return MaterialContainerBase;
}(_BasicComponent3.default);

exports.default = MaterialContainerBase;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Viewport = __webpack_require__(6);

var _Viewport2 = _interopRequireDefault(_Viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Rendering target to render into canvas
 */
var CanvasRenderingTarget = function () {
    function CanvasRenderingTarget(gl) {
        _classCallCheck(this, CanvasRenderingTarget);

        this.gl = gl;
    }

    _createClass(CanvasRenderingTarget, [{
        key: "beforeDraw",
        value: function beforeDraw(clearFlag, color, depth) {
            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
            if (clearFlag) {
                this.__configureClearScissor();
                var clearTarget = 0;
                if ((clearFlag & WebGLRenderingContext.COLOR_BUFFER_BIT) !== 0 && color) {
                    this.gl.clearColor.apply(this.gl, color);
                    clearTarget |= WebGLRenderingContext.COLOR_BUFFER_BIT;
                }
                if ((clearFlag & WebGLRenderingContext.DEPTH_BUFFER_BIT) !== 0 && depth !== null) {
                    this.gl.clearDepth(depth);
                    clearTarget |= WebGLRenderingContext.DEPTH_BUFFER_BIT;
                }
                if (clearTarget !== 0) {
                    this.gl.clear(clearTarget);
                }
            }
            this.getViewport().configure(this.gl);
        }
        /**
         * Actual buffer width of rendered buffer.
         * This value can't be changed by viewport.
         * Just depending on canvas size.
         */

    }, {
        key: "getBufferWidth",
        value: function getBufferWidth() {
            return this.gl.canvas.width;
        }
        /**
         * Actual buffer height of rendered buffer.
         * This value can't be changed by viewport.
         * Just depending on canvas size.
         */

    }, {
        key: "getBufferHeight",
        value: function getBufferHeight() {
            return this.gl.canvas.height;
        }
    }, {
        key: "getViewport",
        value: function getViewport() {
            return new _Viewport2.default(0, 0, this.getBufferWidth(), this.getBufferHeight());
        }
    }, {
        key: "__configureClearScissor",
        value: function __configureClearScissor() {
            this.gl.disable(WebGLRenderingContext.SCISSOR_TEST);
        }
    }]);

    return CanvasRenderingTarget;
}();

exports.default = CanvasRenderingTarget;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _GLResource2 = __webpack_require__(4);

var _GLResource3 = _interopRequireDefault(_GLResource2);

var _RenderBuffer = __webpack_require__(25);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _Texture2D = __webpack_require__(2);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrameBuffer = function (_GLResource) {
    _inherits(FrameBuffer, _GLResource);

    function FrameBuffer(gl) {
        _classCallCheck(this, FrameBuffer);

        return _possibleConstructorReturn(this, (FrameBuffer.__proto__ || Object.getPrototypeOf(FrameBuffer)).call(this, gl, gl.createFramebuffer()));
    }

    _createClass(FrameBuffer, [{
        key: "update",
        value: function update(boundTo, level, bindIndex) {
            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.resourceReference);
            if (boundTo instanceof _Texture2D2.default) {
                if (typeof bindIndex === "undefined") {
                    bindIndex = 0;
                }
                if (typeof level === "undefined") {
                    level = 0;
                }
                this.gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.COLOR_ATTACHMENT0 + bindIndex, WebGLRenderingContext.TEXTURE_2D, boundTo.resourceReference, level);
                if (this.gl.checkFramebufferStatus(WebGLRenderingContext.FRAMEBUFFER) !== WebGLRenderingContext.FRAMEBUFFER_COMPLETE) {
                    throw new Error("INCOMPLETE framebuffer");
                }
            } else if (boundTo instanceof _RenderBuffer2.default) {
                var registerTarget = typeof level === "undefined" ? WebGLRenderingContext.DEPTH_ATTACHMENT : level;
                this.gl.framebufferRenderbuffer(WebGLRenderingContext.FRAMEBUFFER, registerTarget, WebGLRenderingContext.RENDERBUFFER, boundTo.resourceReference);
            }
            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
        }
    }, {
        key: "bind",
        value: function bind() {
            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.resourceReference);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _get(FrameBuffer.prototype.__proto__ || Object.getPrototypeOf(FrameBuffer.prototype), "destroy", this).call(this);
            this.gl.deleteFramebuffer(this.resourceReference);
        }
    }]);

    return FrameBuffer;
}(_GLResource3.default);

exports.default = FrameBuffer;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RenderBuffer = __webpack_require__(25);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _RenderingBufferResourceRegistry = __webpack_require__(26);

var _RenderingBufferResourceRegistry2 = _interopRequireDefault(_RenderingBufferResourceRegistry);

var _ResizableResourceUpdator = __webpack_require__(27);

var _ResizableResourceUpdator2 = _interopRequireDefault(_ResizableResourceUpdator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderBufferComponent = function (_ResizableResourceUpd) {
    _inherits(RenderBufferComponent, _ResizableResourceUpd);

    function RenderBufferComponent() {
        _classCallCheck(this, RenderBufferComponent);

        return _possibleConstructorReturn(this, (RenderBufferComponent.__proto__ || Object.getPrototypeOf(RenderBufferComponent)).apply(this, arguments));
    }

    _createClass(RenderBufferComponent, [{
        key: "$awake",
        value: function $awake() {
            _get(RenderBufferComponent.prototype.__proto__ || Object.getPrototypeOf(RenderBufferComponent.prototype), "$awake", this).call(this);
            this.buffer = new _RenderBuffer2.default(this.companion.get("gl"));
            this.buffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, 1, 1);
            var name = this.getAttribute("name");
            if (name) {
                _RenderingBufferResourceRegistry2.default.get(this.companion.get("gl")).setDepthBuffer(name, this.buffer);
            }
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            this.buffer.destroy();
            this.buffer = null;
        }
    }, {
        key: "resize",
        value: function resize(width, height) {
            this.buffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, width, height);
        }
    }]);

    return RenderBufferComponent;
}(_ResizableResourceUpdator2.default);

exports.default = RenderBufferComponent;

RenderBufferComponent.attributes = {
    name: {
        converter: "String",
        default: null
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceResizerComponentBase = __webpack_require__(28);

var _ResourceResizerComponentBase2 = _interopRequireDefault(_ResourceResizerComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Resource resizer that resizes all of ResizableResourceUpdator bounded to this node.
 * This resource resizer will resize by given resolution attribute.
 */
var ConstantSizeResourceResizer = function (_ResourceResizerCompo) {
    _inherits(ConstantSizeResourceResizer, _ResourceResizerCompo);

    function ConstantSizeResourceResizer() {
        _classCallCheck(this, ConstantSizeResourceResizer);

        return _possibleConstructorReturn(this, (ConstantSizeResourceResizer.__proto__ || Object.getPrototypeOf(ConstantSizeResourceResizer)).apply(this, arguments));
    }

    _createClass(ConstantSizeResourceResizer, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            this.getAttributeRaw("resolution").watch(function (n) {
                var res = n;
                _this2.__resizeResources(res.X, res.Y);
            }, true);
        }
    }]);

    return ConstantSizeResourceResizer;
}(_ResourceResizerComponentBase2.default);

exports.default = ConstantSizeResourceResizer;

ConstantSizeResourceResizer.attributes = {
    resolution: {
        converter: "Vector2",
        default: "512,512"
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RendererComponent = __webpack_require__(23);

var _RendererComponent2 = _interopRequireDefault(_RendererComponent);

var _ResourceResizerComponentBase = __webpack_require__(28);

var _ResourceResizerComponentBase2 = _interopRequireDefault(_ResourceResizerComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Resource resizer that resizes all of ResizableResourceUpdator bounded to this node.
 * This resource resizer will resize these by considering viewport size.
 */
var ViewportSizeResourceResizer = function (_ResourceResizerCompo) {
    _inherits(ViewportSizeResourceResizer, _ResourceResizerCompo);

    function ViewportSizeResourceResizer() {
        _classCallCheck(this, ViewportSizeResourceResizer);

        return _possibleConstructorReturn(this, (ViewportSizeResourceResizer.__proto__ || Object.getPrototypeOf(ViewportSizeResourceResizer)).apply(this, arguments));
    }

    _createClass(ViewportSizeResourceResizer, [{
        key: "$mount",
        value: function $mount() {
            var renderer = this.node.getComponentInAncestor(_RendererComponent2.default);
            if (renderer) {
                this.__resizeResources(renderer.viewport.Width, renderer.viewport.Height);
            } else {
                throw new Error("Resizable resource with ViewportSizeResourceResizer must be child of RendererComponent");
            }
        }
    }, {
        key: "$resizeViewport",
        value: function $resizeViewport(arg) {
            var scale = this.getAttribute("resolutionScale");
            this.__resizeResources(arg.width * scale.X, arg.height * scale.Y);
        }
    }]);

    return ViewportSizeResourceResizer;
}(_ResourceResizerComponentBase2.default);

exports.default = ViewportSizeResourceResizer;

ViewportSizeResourceResizer.attributes = {
    resolutionScale: {
        converter: "Vector2",
        default: "1"
    },
    keepPow2Size: {
        converter: "Boolean",
        default: true
    }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(18);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rc = 511;
var gc = rc << 8;
var bc = gc << 8;
var ac = bc << 8;

var MeshIndexCalculator = function () {
    function MeshIndexCalculator() {
        _classCallCheck(this, MeshIndexCalculator);
    }

    _createClass(MeshIndexCalculator, null, [{
        key: "fromIndex",
        value: function fromIndex(index) {
            return new _Vector2.default((index & rc) / 255, ((index & gc) >> 8) / 255, ((index & bc) >> 16) / 255, ((index & ac) >> 24) / 255);
        }
    }, {
        key: "fromColor",
        value: function fromColor(color) {
            return color[0] + (color[1] << 8) + (color[2] << 16) + (color[3] << 24);
        }
    }]);

    return MeshIndexCalculator;
}();

exports.default = MeshIndexCalculator;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SingleBufferRenderStageBase = __webpack_require__(29);

var _SingleBufferRenderStageBase2 = _interopRequireDefault(_SingleBufferRenderStageBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderSceneComponent = function (_SingleBufferRenderSt) {
    _inherits(RenderSceneComponent, _SingleBufferRenderSt);

    function RenderSceneComponent() {
        _classCallCheck(this, RenderSceneComponent);

        return _possibleConstructorReturn(this, (RenderSceneComponent.__proto__ || Object.getPrototypeOf(RenderSceneComponent)).apply(this, arguments));
    }

    _createClass(RenderSceneComponent, [{
        key: "$awake",

        // messages
        value: function $awake() {
            var _this2 = this;

            _get(RenderSceneComponent.prototype.__proto__ || Object.getPrototypeOf(RenderSceneComponent.prototype), "$awake", this).call(this);
            this.metadata.type = "scene";
            this.getAttributeRaw("layer").boundTo("layer");
            this.getAttributeRaw("camera").boundTo("_camera");
            this.getAttributeRaw("technique").boundTo("technique");
            this.getAttributeRaw("camera").watch(function (cam) {
                _this2.metadata.camera = cam ? cam.node.id : null;
            }, true);
            this.getAttributeRaw("technique").watch(function (t) {
                _this2.metadata.technique = t;
            }, true);
            this.getAttributeRaw("layer").watch(function (t) {
                _this2.metadata.layer = t;
            }, true);
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this._gl = this.companion.get("gl");
        }
    }, {
        key: "$render",
        value: function $render(args) {
            var camera = this.camera ? this.camera : args.camera;
            if (!camera) {
                return;
            }
            if (!this.__beforeRender()) {
                return;
            }
            camera.updateContainedScene(args.timer);
            camera.renderScene({
                renderer: this,
                camera: camera,
                layer: this.layer,
                viewport: this.out.getViewport(),
                timer: args.timer,
                technique: this.technique,
                sceneDescription: {},
                rendererDescription: this.rendererDescription
            });
        }
    }]);

    return RenderSceneComponent;
}(_SingleBufferRenderStageBase2.default);

exports.default = RenderSceneComponent;

RenderSceneComponent.attributes = {
    layer: {
        converter: "String",
        default: "default"
    },
    camera: {
        default: null,
        converter: "Component",
        target: "Camera"
    },
    technique: {
        default: "default",
        converter: "String"
    }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EEObject2 = __webpack_require__(116);

var _EEObject3 = _interopRequireDefault(_EEObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Provides managing all promise on initializing resources.
 */
var AssetLoader = function (_EEObject) {
    _inherits(AssetLoader, _EEObject);

    function AssetLoader() {
        _classCallCheck(this, AssetLoader);

        /**
         * Promise count registered.
         * @type {number}
         */
        var _this = _possibleConstructorReturn(this, (AssetLoader.__proto__ || Object.getPrototypeOf(AssetLoader)).apply(this, arguments));

        _this.registerCount = 0;
        /**
         * Promise count finished successfully.
         * @type {number}
         */
        _this.loadCount = 0;
        /**
         * Promise count completed(success and errored)
         * @type {number}
         */
        _this.completeCount = 0;
        /**
         * Promise count errored
         * @type {number}
         */
        _this.errorCount = 0;
        /**
         * Main promise to provide tasks for waiting for all resource loading.
         * @type {Promise<void>}
         */
        _this.promise = new Promise(function (resolve) {
            _this._resolve = resolve;
        });
        return _this;
    }
    /**
     * Register an promise to be waited until finished.
     */


    _createClass(AssetLoader, [{
        key: "register",
        value: function register(promise, component) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.registerCount++;
                                result = null;
                                _context.prev = 2;
                                _context.next = 5;
                                return promise;

                            case 5:
                                result = _context.sent;

                                this.loadCount++;
                                _context.next = 13;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context["catch"](2);

                                console.error("Failed to resolve asset loading promise.\n\nLoading fired by: " + component.name.fqn + "\nAttached node:" + component.node.name.fqn + "\n" + _context.t0);
                                this.errorCount++;

                            case 13:
                                this.completeCount++;
                                this._checkLoadCompleted();
                                return _context.abrupt("return", result);

                            case 16:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 9]]);
            }));
        }
        /**
         * Verify all promises are completed.
         */

    }, {
        key: "_checkLoadCompleted",
        value: function _checkLoadCompleted() {
            this.emit("progress", this);
            if (this.registerCount === this.completeCount) {
                this._resolve();
            }
        }
    }]);

    return AssetLoader;
}(_EEObject3.default);

exports.default = AssetLoader;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextFileResolver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ExternalResourceResolver = __webpack_require__(32);

var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFileResolver = exports.TextFileResolver = function (_ExternalResourceReso) {
    _inherits(TextFileResolver, _ExternalResourceReso);

    function TextFileResolver() {
        _classCallCheck(this, TextFileResolver);

        return _possibleConstructorReturn(this, (TextFileResolver.__proto__ || Object.getPrototypeOf(TextFileResolver)).apply(this, arguments));
    }

    _createClass(TextFileResolver, [{
        key: "resolve",
        value: function resolve(path) {
            var _this2 = this;

            return _get(TextFileResolver.prototype.__proto__ || Object.getPrototypeOf(TextFileResolver.prototype), "resolve", this).call(this, path, function (abs) {
                if (TextFileResolver.isDataURL(abs)) {
                    return Promise.resolve(_this2._dataUriToText(abs));
                }
                return new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", abs);
                    xhr.onload = function (v) {
                        resolve(xhr.responseText);
                    };
                    xhr.onerror = function (e) {
                        reject(e);
                    };
                    xhr.send();
                });
            });
        }
    }, {
        key: "_dataUriToText",
        value: function _dataUriToText(dataUrl) {
            var splittedUri = dataUrl.split(",");
            var byteString = atob(splittedUri[1]);
            return byteString;
        }
    }]);

    return TextFileResolver;
}(_ExternalResourceResolver2.default);

exports.default = new TextFileResolver();

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * VideoResolver provides abstraction of loading feature for video element.
 * Despite the other resolvers, VideoResolver doesn't extends ExternalResourceResolver since
 * that element contains frame operation also and it affects frame control in each function of grimoire using.
 * @param  {string}                    path [description]
 * @return {Promise<HTMLVideoElement>}      [description]
 */
var VideoResolver = exports.VideoResolver = function () {
    function VideoResolver() {
        _classCallCheck(this, VideoResolver);
    }

    _createClass(VideoResolver, [{
        key: "resolve",
        value: function resolve(path) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var video = document.createElement("video");
                video.crossOrigin = _this._getCORSConfig(path);
                video.preload = "auto";
                video.addEventListener("canplay", function () {
                    resolve(video);
                });
                video.addEventListener("canplaythrough", function () {
                    resolve(video);
                });
                video.onerror = function (e) {
                    reject("Error has been occured during loading \"" + path + "\"\n" + e);
                };
                video.src = path;
                video.load();
                if (video.readyState > 3) {
                    resolve(video);
                }
            });
        }
    }, {
        key: "_getCORSConfig",
        value: function _getCORSConfig(path) {
            var corsConfig = null;
            for (var i = 0; i < VideoResolver.corsResolvers.length; i++) {
                corsConfig = VideoResolver.corsResolvers[i](path);
                if (corsConfig !== null) {
                    break;
                }
            }
            if (corsConfig === null) {
                corsConfig = VideoResolver.defaultCORSConfig;
            }
            return corsConfig;
        }
    }]);

    return VideoResolver;
}();

VideoResolver.defaultCORSConfig = "anonymous";
/**
 * Cors config resolvers.
 * If all of resolvers returns null, defaultCORSConfig will be used.
 */
VideoResolver.corsResolvers = [];
exports.default = new VideoResolver();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
    function Timer() {
        _classCallCheck(this, Timer);

        this.timeScale = 1;
        this.fpsRestriction = 60;
        this._accumlatedSkipFrame = 0;
        this._frameCount = 0;
    }

    _createClass(Timer, [{
        key: "internalUpdate",

        /**
         * Do not call this method manually.
         * This method is only use for internal procedure in framework.
         * @return {[type]} [description]
         */
        value: function internalUpdate() {
            this._frameCount++;
            var time = Date.now();
            if (this._shouldUpdate(time)) {
                this._updateTimer(time);
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "_shouldUpdate",
        value: function _shouldUpdate(time) {
            if (this._time === void 0) {
                this._unrestrictedLastRealTime = time;
                return true; // first frame
            } else {
                var realDelta = time - this._unrestrictedLastRealTime;
                var idealDelta = 1000 / this.fpsRestriction;
                this._unrestrictedLastRealTime = time;
                if (Math.abs(idealDelta - realDelta * 2.0 - this._accumlatedSkipFrame) < Math.abs(idealDelta - realDelta - this._accumlatedSkipFrame)) {
                    this._accumlatedSkipFrame += realDelta;
                    return false;
                } else {
                    this._accumlatedSkipFrame = 0;
                    return true;
                }
            }
        }
    }, {
        key: "_updateTimer",
        value: function _updateTimer(time) {
            if (this._lastRealTime === undefined) {
                this._time = 0;
                this._deltaTime = 0;
            } else {
                this._deltaTime = time - this._lastRealTime;
                this._time += this.timeScale * this._deltaTime;
            }
            this._lastRealTime = time;
            if (this._lastFPS === undefined) {
                if (this.deltaTime !== 0) {
                    this._lastFPS = 1000 / this.deltaTime;
                }
            } else {
                this._lastFPS = (this._lastFPS + 1000 / this.deltaTime) / 2;
            }
        }
    }, {
        key: "deltaTime",
        get: function get() {
            return this._deltaTime;
        }
    }, {
        key: "time",
        get: function get() {
            return this._time;
        }
    }, {
        key: "timeInSecound",
        get: function get() {
            return this._time / 1000;
        }
    }, {
        key: "frameCount",
        get: function get() {
            return this._frameCount;
        }
    }, {
        key: "FPS",
        get: function get() {
            return this._lastFPS ? this._lastFPS.toFixed(2) : Number.NaN;
        }
    }]);

    return Timer;
}();

exports.default = Timer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GLM = __webpack_require__(36);

var _GLM2 = _interopRequireDefault(_GLM);

var _Matrix = __webpack_require__(17);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Vector3 = __webpack_require__(18);

var _Vector4 = _interopRequireDefault(_Vector3);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _RenderQueue = __webpack_require__(53);

var _RenderQueue2 = _interopRequireDefault(_RenderQueue);

var _SceneComponent = __webpack_require__(19);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _TransformComponent = __webpack_require__(8);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = _GLM2.default.vec3,
    vec4 = _GLM2.default.vec4,
    mat4 = _GLM2.default.mat4;

/**
 * シーンを描画するカメラのコンポーネント
 * このコンポーネントによって、透視射影や正方射影などの歪みを調整します。
 * また、このコンポーネントの付属するノードに属する`Transoform`によって、カメラの位置や向きが確定されます。
 */
var CameraComponent = function (_Component) {
    _inherits(CameraComponent, _Component);

    function CameraComponent() {
        _classCallCheck(this, CameraComponent);

        var _this = _possibleConstructorReturn(this, (CameraComponent.__proto__ || Object.getPrototypeOf(CameraComponent)).apply(this, arguments));

        _this.__viewMatrix = new _Matrix2.default();
        _this.__projectionMatrix = new _Matrix2.default();
        _this.__invProjectionMatrix = new _Matrix2.default();
        _this.__projectionViewMatrix = new _Matrix2.default();
        _this._renderQueue = new _RenderQueue2.default();
        _this._eyeCache = _Vector2.default.Zero;
        _this._lookAtCache = _Vector2.default.Zero;
        _this._upCache = _Vector2.default.Zero;
        _this._orthographic = false;
        return _this;
    }

    _createClass(CameraComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.getAttributeRaw("far").watch(function (v) {
                _this2.Far = v;
            }, true);
            this.getAttributeRaw("near").watch(function (v) {
                _this2.Near = v;
            }, true);
            this.getAttributeRaw("fovy").watch(function (v) {
                _this2.Fovy = v;
            }, true);
            this.getAttributeRaw("aspect").watch(function (v) {
                _this2.Aspect = v;
            }, true);
            this.getAttributeRaw("orthoSize").watch(function (v) {
                _this2.OrthoSize = v;
            }, true);
            this.getAttributeRaw("orthogonal").watch(function (v) {
                _this2.OrthographicMode = v;
            }, true);
            this.getAttributeRaw("autoAspect").boundTo("_autoAspect");
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this.transform = this.node.getComponent(_TransformComponent2.default);
            this.containedScene = CameraComponent._findContainedScene(this.node);
            this.containedScene.queueRegistory.registerQueue(this._renderQueue);
            this.node.on("transformUpdated", this.updateTransform.bind(this));
            this.updateTransform();
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            this.containedScene.queueRegistory.unregisterQueue(this._renderQueue);
            this.containedScene = null;
        }
    }, {
        key: "getViewportRelativePosition",
        value: function getViewportRelativePosition(input) {
            var inputVector = void 0;
            if (input instanceof _TransformComponent2.default) {
                inputVector = input.globalPosition;
            } else {
                inputVector = input;
            }
            return _Matrix2.default.transformPoint(this.ProjectionViewMatrix, inputVector);
        }
    }, {
        key: "updateContainedScene",
        value: function updateContainedScene(timer) {
            if (this.containedScene) {
                this.containedScene.updateScene(timer);
            }
        }
    }, {
        key: "renderScene",
        value: function renderScene(args) {
            if (this.containedScene) {
                this._justifyAspect(args);
                args.sceneDescription = this.containedScene.sceneDescription;
                this._renderQueue.renderAll(args);
            }
        }
    }, {
        key: "updateTransform",
        value: function updateTransform() {
            var transform = this.transform;
            vec3.transformMat4(this._eyeCache.rawElements, _Vector2.default.Zero.rawElements, transform.globalTransform.rawElements);
            vec4.transformMat4(this._lookAtCache.rawElements, CameraComponent._frontOrigin.rawElements, transform.globalTransform.rawElements);
            vec3.add(this._lookAtCache.rawElements, this._lookAtCache.rawElements, this._eyeCache.rawElements);
            vec4.transformMat4(this._upCache.rawElements, CameraComponent._upOrigin.rawElements, transform.globalTransform.rawElements);
            mat4.lookAt(this.__viewMatrix.rawElements, this._eyeCache.rawElements, this._lookAtCache.rawElements, this._upCache.rawElements);
            mat4.mul(this.__projectionViewMatrix.rawElements, this.__projectionMatrix.rawElements, this.__viewMatrix.rawElements);
        }
    }, {
        key: "_justifyAspect",
        value: function _justifyAspect(args) {
            if (this._autoAspect) {
                var asp = args.viewport.Width / args.viewport.Height;
                if (this._aspectCache !== asp) {
                    this.setAttribute("aspect", asp);
                    this._aspectCache = asp;
                }
            }
        }
    }, {
        key: "_recalculateProjection",
        value: function _recalculateProjection() {
            if (!this._orthographic) {
                mat4.perspective(this.__projectionMatrix.rawElements, this._fovy, this._aspect, this._near, this._far);
            } else {
                mat4.ortho(this.__projectionMatrix.rawElements, -this._orthoSize * this._aspect, this._orthoSize * this._aspect, -this._orthoSize, this._orthoSize, this._near, this._far);
            }
            mat4.mul(this.__projectionViewMatrix.rawElements, this.__projectionMatrix.rawElements, this.__viewMatrix.rawElements);
            mat4.invert(this.__invProjectionMatrix.rawElements, this.__projectionMatrix.rawElements);
        }
    }, {
        key: "ViewMatrix",
        get: function get() {
            return this.__viewMatrix;
        }
    }, {
        key: "ProjectionMatrix",
        get: function get() {
            return this.__projectionMatrix;
        }
    }, {
        key: "InvProjectionMatrix",
        get: function get() {
            return this.__invProjectionMatrix;
        }
    }, {
        key: "ProjectionViewMatrix",
        get: function get() {
            return this.__projectionViewMatrix;
        }
    }, {
        key: "Far",
        get: function get() {
            return this._far;
        },
        set: function set(far) {
            this._far = far;
            this._recalculateProjection();
        }
    }, {
        key: "Near",
        get: function get() {
            return this._near;
        },
        set: function set(near) {
            this._near = near;
            this._recalculateProjection();
        }
    }, {
        key: "Aspect",
        get: function get() {
            return this._aspect;
        },
        set: function set(aspect) {
            this._aspect = aspect;
            this._recalculateProjection();
        }
    }, {
        key: "Fovy",
        get: function get() {
            return this._fovy;
        },
        set: function set(fov) {
            this._fovy = fov;
            this._recalculateProjection();
        }
    }, {
        key: "OrthoSize",
        get: function get() {
            return this._orthoSize;
        },
        set: function set(size) {
            this._orthoSize = size;
        }
    }, {
        key: "OrthographicMode",
        set: function set(isOrtho) {
            this._orthographic = isOrtho;
            this._recalculateProjection();
        },
        get: function get() {
            return this._orthographic;
        }
    }, {
        key: "AutoAspect",
        set: function set(autoMode) {
            if (this._autoAspect !== autoMode) {
                this._autoAspect = autoMode;
                this._recalculateProjection();
            }
        },
        get: function get() {
            return this._autoAspect;
        }
        /**
        * Find scene tag recursively.
        * @param  {GomlNode}       node [the node to searching currently]
        * @return {SceneComponent}      [the scene component found]
        */

    }], [{
        key: "_findContainedScene",
        value: function _findContainedScene(node) {
            if (node.parent) {
                var scene = node.parent.getComponent(_SceneComponent2.default);
                if (scene) {
                    return scene;
                } else {
                    return CameraComponent._findContainedScene(node.parent);
                }
            } else {
                return null;
            }
        }
    }]);

    return CameraComponent;
}(_Component3.default);

exports.default = CameraComponent;

CameraComponent.attributes = {
    /**
     * カメラの視野角。
     * orthogonal属性がtrueである場合この属性は無視されます。
     */
    fovy: {
        default: "45d",
        converter: "Angle2D"
    },
    /**
     * カメラに映るもっとも近い距離です。
     * 0よりも大きく、far属性よりも小さい必要があります。
     */
    near: {
        default: 0.01,
        converter: "Number"
    },
    /**
     * カメラに映る最も遠い距離です。
     * near属性よりも大きい必要があります。
     *
     * far - nearの値があまりにも大きいと、Z-fighting(手前の物体が奥に表示されたように見えたりする)現象が起きる可能性があります。
     * この差があまりに大きい時、カメラに映る物体の座標の小さいz座標の値の差は0に近似されます。
     * 逆にこの値が小さい時は、カメラに映る物体はある程度小さいz座標の差でも問題なく表示されます。
     * **大切なのは、写したい空間よりも無駄に大きくしないこと。常に適切な値を設定するべきです**
     */
    far: {
        default: 100,
        converter: "Number"
    },
    /**
     * カメラのアスペクト比
     * カメラの横の大きさと縦の大きさの比率を指定します。autoAspect属性がtrueである時、毎回のレンダリング時にこの値を自動調整します。
     */
    aspect: {
        default: 1.6,
        converter: "Number"
    },
    /**
     * アスペクト比の自動調整が有効か否か
     * レンダリング時にそのビューポートの大きさに応じて比率を自動調整するかどうかを示します。
     */
    autoAspect: {
        default: true,
        converter: "Boolean"
    },
    /**
     * 正射影時の横の基準サイズ
     * 正射影時はfovy属性を用いて自動的に写す領域を決定できません。
     * そのため、横の一片のサイズをこの属性で指定します。**アスペクト比は計算に用いられることに注意してください。**
     */
    orthoSize: {
        default: 100,
        converter: "Number"
    },
    /**
     * このカメラが正射影かどうか
     *
     * この属性がfalseである場合、カメラは透視射影としてシーンをレンダリングします。この場合、レンダリング結果にパース(奥行き感)が出ます。
     * 一方、この属性がtrueである場合、カメラは正射影としてシーンをレンダリングします。この場合、レンダリング結果には奥行き感は出ません。
     */
    orthogonal: {
        default: false,
        converter: "Boolean"
    }
};
CameraComponent._frontOrigin = new _Vector4.default(0, 0, -1, 0);
CameraComponent._upOrigin = new _Vector4.default(0, 1, 0, 0);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderQueue = function () {
    function RenderQueue() {
        _classCallCheck(this, RenderQueue);

        this._sortedRenderablesByTechniques = {};
        this._rendeables = [];
    }

    _createClass(RenderQueue, [{
        key: "add",
        value: function add(rendarable) {
            this._rendeables.push(rendarable);
            for (var technique in this._sortedRenderablesByTechniques) {
                this._sortedRenderablesByTechniques[technique].rendarables.push({ renderable: rendarable, priortyCache: 0 });
            }
        }
    }, {
        key: "remove",
        value: function remove(rendarable) {
            this._removeFromRenderables(rendarable, this._rendeables);
            for (var tech in this._sortedRenderablesByTechniques) {
                this._removeFromRenderables(rendarable, this._sortedRenderablesByTechniques[tech].rendarables);
            }
        }
    }, {
        key: "renderAll",
        value: function renderAll(args) {
            var targetTechnique = args.sortingTechnique || args.technique;
            this._ensureCacheForTechnique(targetTechnique);
            this._sortForTechnique(args, targetTechnique);
            this._sortedRenderablesByTechniques[targetTechnique].rendarables.forEach(function (r) {
                r.renderable.render(args);
            });
        }
    }, {
        key: "_sortForTechnique",
        value: function _sortForTechnique(args, technique) {
            var techniqueCache = this._sortedRenderablesByTechniques[technique];
            if (techniqueCache.lastFrame === args.timer.frameCount) {
                return;
            } else {
                for (var i = 0; i < techniqueCache.rendarables.length; i++) {
                    techniqueCache.rendarables[i].priortyCache = techniqueCache.rendarables[i].renderable.getRenderingPriorty(args.camera, technique);
                }
                techniqueCache.rendarables.sort(function (a, b) {
                    return a.priortyCache - b.priortyCache;
                });
                techniqueCache.lastFrame = args.timer.frameCount;
            }
        }
    }, {
        key: "_ensureCacheForTechnique",
        value: function _ensureCacheForTechnique(technique) {
            if (this._sortedRenderablesByTechniques[technique]) {
                return;
            }
            this._sortedRenderablesByTechniques[technique] = {
                lastFrame: -1,
                rendarables: this._rendeables.map(function (r) {
                    return {
                        renderable: r,
                        priortyCache: -1
                    };
                })
            };
        }
    }, {
        key: "_removeFromRenderables",
        value: function _removeFromRenderables(renderable, source) {
            var index = 0;
            for (; index < source.length; index++) {
                var r = source[index];
                var rIndex = r.index || r.renderable.index;
                if (rIndex === renderable.index) {
                    break;
                }
            }
            if (source.length !== index) {
                source.splice(index, 1);
            }
        }
    }]);

    return RenderQueue;
}();

exports.default = RenderQueue;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderQueueRegistry = function () {
    function RenderQueueRegistry() {
        _classCallCheck(this, RenderQueueRegistry);

        this._queues = [];
        this._renderables = [];
    }

    _createClass(RenderQueueRegistry, [{
        key: "registerQueue",
        value: function registerQueue(queue) {
            this._queues.push(queue);
            this._renderables.forEach(function (r) {
                return queue.add(r);
            });
        }
    }, {
        key: "unregisterQueue",
        value: function unregisterQueue(queue) {
            var index = this._queues.indexOf(queue);
            if (index > -1) {
                this._queues.splice(index, 1);
            }
        }
    }, {
        key: "addRenderable",
        value: function addRenderable(rendarable) {
            this._renderables.push(rendarable);
            this._queues.forEach(function (q) {
                return q.add(rendarable);
            });
            rendarable.setRenderableIndex(this._renderables.length);
        }
    }, {
        key: "removeRenderable",
        value: function removeRenderable(renderable) {
            var index = this._renderables.indexOf(renderable);
            if (index === -1) {
                return; // Could not find specified renderable
            }
            this._renderables.splice(index, 1);
            this._renderables.forEach(function (r, i) {
                r.setRenderableIndex(i + 1);
            });
            this._queues.forEach(function (q) {
                return q.remove(renderable);
            });
        }
    }, {
        key: "getByIndex",
        value: function getByIndex(index) {
            return this._renderables[index];
        }
    }]);

    return RenderQueueRegistry;
}();

exports.default = RenderQueueRegistry;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Namespace = __webpack_require__(35);

var _Namespace2 = _interopRequireDefault(_Namespace);

var _GrimoireInterface = __webpack_require__(118);

var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _GLExtRequestor = __webpack_require__(20);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

var _Texture2D = __webpack_require__(2);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ns = _Namespace2.default.define("grimoirejs-fundamental");
var ResizeMode;
(function (ResizeMode) {
    ResizeMode[ResizeMode["Aspect"] = 0] = "Aspect";
    ResizeMode[ResizeMode["Fit"] = 1] = "Fit";
    ResizeMode[ResizeMode["Manual"] = 2] = "Manual";
})(ResizeMode || (ResizeMode = {}));
/**
 * キャンバスの初期化及び設定を司るコンポーネント
 * このコンポーネントによって、適切な位置に`<canvas>`を初期化してWebGLコンテキストを初期化します。
 */

var CanvasInitializerComponent = function (_Component) {
    _inherits(CanvasInitializerComponent, _Component);

    function CanvasInitializerComponent() {
        _classCallCheck(this, CanvasInitializerComponent);

        return _possibleConstructorReturn(this, (CanvasInitializerComponent.__proto__ || Object.getPrototypeOf(CanvasInitializerComponent)).apply(this, arguments));
    }

    _createClass(CanvasInitializerComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this._scriptTag = this.companion.get("scriptElement");
            if (this._isContainedInBody(this._scriptTag)) {
                // canvas should be placed siblings of the script tag
                this._generateCanvas(this._scriptTag);
            } else {
                throw new Error("goml script should have body as ancesotor to instanciate canvas element in the location");
            }
            // apply sizes on changed
            this.getAttributeRaw("width").watch(function () {
                _this2._resize();
            });
            this.getAttributeRaw("height").watch(function () {
                _this2._resize();
            });
            this.getAttributeRaw("antialias").watch(function () {
                console.warn("Changing antialias attribute is not supported. This is only works when the canvas element created.");
            });
            this.getAttributeRaw("preserveDrawingBuffer").watch(function () {
                console.warn("Changing preserveDrawingBuffer attribute is not supported. This is only works when the canvas element created.");
            });
        }
    }, {
        key: "notifySizeChanged",
        value: function notifySizeChanged() {
            this._onWindowResize();
        }
        /**
         * Generate canvas element
         * @param  {Element}           parent [description]
         * @return {HTMLCanvasElement}        [description]
         */

    }, {
        key: "_generateCanvas",
        value: function _generateCanvas(scriptTag) {
            var _this3 = this;

            this._autoFixForBody(scriptTag);
            this.canvas = document.createElement("canvas");
            window.addEventListener("resize", function () {
                return _this3._onWindowResize();
            });
            this._configureCanvas(this.canvas, scriptTag);
            var gl = this._getContext(this.canvas);
            this.companion.set(ns.for("gl"), gl);
            this.companion.set(ns.for("canvasElement"), this.canvas);
            this.companion.set(ns.for("GLExtRequestor"), new _GLExtRequestor2.default(gl));
            _Texture2D2.default.generateDefaultTexture(gl);
            return this.canvas;
        }
    }, {
        key: "_resize",
        value: function _resize(supressBroadcast) {
            var widthRaw = this.getAttribute("width");
            var heightRaw = this.getAttribute("height");
            this._widthMode = this._asResizeMode(widthRaw);
            this._heightMode = this._asResizeMode(heightRaw);
            if (this._widthMode === this._heightMode && this._widthMode === ResizeMode.Aspect) {
                throw new Error("Width and height could not have aspect mode in same time!");
            }
            if (this._widthMode === ResizeMode.Aspect) {
                this._ratio = widthRaw.aspect;
            }
            if (this._heightMode === ResizeMode.Aspect) {
                this._ratio = heightRaw.aspect;
            }
            if (this._widthMode === ResizeMode.Manual) {
                this._applyManualWidth(widthRaw.size, supressBroadcast);
            }
            if (this._heightMode === ResizeMode.Manual) {
                this._applyManualHeight(heightRaw.size, supressBroadcast);
            }
            this._onWindowResize(supressBroadcast);
        }
    }, {
        key: "_onWindowResize",
        value: function _onWindowResize(supressBroadcast) {
            var size = this._getParentSize();
            if (this._widthMode === ResizeMode.Fit) {
                this._applyManualWidth(size[0], supressBroadcast);
            }
            if (this._heightMode === ResizeMode.Fit) {
                if (size[1] === 0 && _GrimoireInterface2.default.debug) {
                    console.warn("Canvas height parameter specified as fit and height of parent element is 0.\n This is possibly the reason you haven't set css to html or body element.");
                }
                this._applyManualHeight(size[1], supressBroadcast);
            }
        }
    }, {
        key: "_applyManualWidth",
        value: function _applyManualWidth(width, supressBroadcast) {
            if (width === this.canvas.width) {
                return;
            }
            this.canvas.width = width;
            this._canvasContainer.style.width = width + "px";
            if (!supressBroadcast) {
                this.node.broadcastMessage(1, "resizeCanvas");
            }
            if (this._heightMode === ResizeMode.Aspect) {
                this._applyManualHeight(width / this._ratio, supressBroadcast);
            }
        }
    }, {
        key: "_applyManualHeight",
        value: function _applyManualHeight(height, supressBroadcast) {
            if (height === this.canvas.height) {
                return;
            }
            this.canvas.height = height;
            this._canvasContainer.style.height = height + "px";
            if (!supressBroadcast) {
                this.node.broadcastMessage(1, "resizeCanvas");
            }
            if (this._widthMode === ResizeMode.Aspect) {
                this._applyManualWidth(height * this._ratio, supressBroadcast);
            }
        }
    }, {
        key: "_getParentSize",
        value: function _getParentSize() {
            var parent = this._canvasContainer.parentElement;
            var cs = getComputedStyle(parent);
            var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
            var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
            var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
            var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
            // Element width and height minus padding and border
            var elementWidth = parent.offsetWidth - paddingX - borderX;
            var elementHeight = parent.offsetHeight - paddingY - borderY;
            return [elementWidth, elementHeight];
        }
        /**
         * Get resize mode from raw attribute of height or width
         * @param  {string  | number}      mode [description]
         * @return {ResizeMode}   [description]
         */

    }, {
        key: "_asResizeMode",
        value: function _asResizeMode(cso) {
            if (cso.mode === "fit") {
                return ResizeMode.Fit;
            } else if (cso.mode === "aspect") {
                return ResizeMode.Aspect;
            } else {
                return ResizeMode.Manual;
            }
        }
    }, {
        key: "_configureCanvas",
        value: function _configureCanvas(canvas, scriptTag) {
            canvas.style.position = "absolute";
            canvas.style.top = "0px";
            canvas.style.left = "0px";
            this._canvasContainer = document.createElement("div");
            this._canvasContainer.style.position = "relative";
            this._canvasContainer.style.overflow = "hidden";
            this._canvasContainer.appendChild(canvas);
            if (this.getAttribute("containerId")) {
                this._canvasContainer.id = this.getAttribute("containerId");
            }
            if (this.getAttribute("containerClass")) {
                this._canvasContainer.className = this.getAttribute("containerClass");
            }
            this.companion.set(ns.for("canvasContainer"), this._canvasContainer);
            scriptTag.parentElement.insertBefore(this._canvasContainer, scriptTag.nextSibling);
            this._resize(true);
        }
    }, {
        key: "_getContext",
        value: function _getContext(canvas) {
            var contextConfig = {
                antialias: this.getAttribute("antialias"),
                preserveDrawingBuffer: this.getAttribute("preserveDrawingBuffer")
            };
            var context = canvas.getContext("webgl", contextConfig);
            if (!context) {
                context = canvas.getContext("experimental-webgl", contextConfig);
            }
            if (!context) {
                throw new Error("Failed to initializing WebGL context. Make sure your browser supporting WebGL.");
            }
            return this._applyContextId(context);
        }
        /**
         * Insert __id__property to be identify rendering contexts
         */

    }, {
        key: "_applyContextId",
        value: function _applyContextId(context) {
            var contextWithId = context;
            contextWithId.__id__ = Math.random().toString(36).slice(-6); // Generating random string
            return contextWithId;
        }
        /**
         * Check the tag is included in the body
         * @param  {Element} tag [description]
         * @return {boolean}     [description]
         */

    }, {
        key: "_isContainedInBody",
        value: function _isContainedInBody(tag) {
            if (!tag.parentElement) {
                return false;
            }
            if (tag.parentNode.nodeName === "BODY") {
                return true;
            }
            return this._isContainedInBody(tag.parentElement);
        }
    }, {
        key: "_autoFixForBody",
        value: function _autoFixForBody(scriptTag) {
            if (scriptTag.parentElement.nodeName === "BODY") {
                var boudningBox = document.body.getBoundingClientRect();
                if (boudningBox.height === 0) {
                    document.body.style.height = "100%";
                    document.body.parentElement.style.height = "100%";
                }
            }
        }
    }]);

    return CanvasInitializerComponent;
}(_Component3.default);

exports.default = CanvasInitializerComponent;

CanvasInitializerComponent.attributes = {
    /**
     * キャンバスタグの横幅を指定します。
     */
    width: {
        default: "fit",
        converter: "CanvasSize"
    },
    /**
     * キャンバスタグの縦幅を指定します。
     */
    height: {
        default: "fit",
        converter: "CanvasSize"
    },
    /**
     * キャンバス要素の直接の親要素のコンテナに割り当てるidを指定します。
     */
    containerId: {
        default: "",
        converter: "String"
    },
    /**
     * キャンバス要素の直接の親要素のコンテナに割り当てるクラス名を指定します。
     */
    containerClass: {
        default: "gr-container",
        converter: "String"
    },
    /**
     * GLコンテキストの初期化時に、preserveDrawingBufferフラグを有効にするか指定します。
     *
     * 描画結果をdataURLに変換する際などはこの属性がtrueでないと正常にレンダリング結果を取得できません。
     */
    preserveDrawingBuffer: {
        default: true,
        converter: "Boolean"
    },
    /**
     * GLコンテキストの初期化時に、MSAAによるアンチエイリアスを有効にするか指定します。
     *
     * この属性は、途中で動的に変更することができません。
     */
    antialias: {
        default: true,
        converter: "Boolean"
    }
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "/*Header start*/\n// helper macros\n#ifdef FS\n  #define FS_PREC(prec,type) precision prec type;\n  #define VS_PREC(prec,type)\n  #ifdef GL_FRAGMENT_PRECISION_HIGH\n    #if GL_FRAGMENT_PRECISION_HIGH > 0\n      #define PREFER_HIGHP highp\n    #else\n      #define PREFER_HIGHP mediump\n    #endif\n  #endif\n  #ifndef GL_FRAGMENT_PRECISION_HIGH\n    #define PREFER_HIGHP mediump\n  #endif\n#endif\n#ifdef VS\n#define VS_PREC(prec,type) precision prec type;\n#define FS_PREC(prec,type)\n#endif\n// constants\n#define PI 3.141592653589793\n#define E 2.718281828459045\n#define LN2 0.6931471805599453\n#define LN10 2.302585092994046\n#define LOG2E 1.4426950408889634\n#define LOG10E 0.4342944819032518\n#define SQRT2 1.4142135623730951\n#define SQRT1_2 0.7071067811865476\n\n/*Header end*/\n"

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HashCalculator = __webpack_require__(9);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

var _SortTransformUtility = __webpack_require__(58);

var _SortTransformUtility2 = _interopRequireDefault(_SortTransformUtility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortParser = function () {
    function SortParser() {
        _classCallCheck(this, SortParser);
    }

    _createClass(SortParser, null, [{
        key: "parse",
        value: function parse(source) {
            var sourceHash = _HashCalculator2.default.calcHash(source);
            if (SortParser._parsedCache[sourceHash] !== void 0) {
                return new Promise(function (resolve, reject) {
                    resolve(SortParser._parsedCache[sourceHash]);
                });
            } else {
                return SortParser._parse(source).then(function (v) {
                    SortParser._parsedCache[source] = v;
                    return v;
                });
            }
        }
    }, {
        key: "_parse",
        value: function _parse(source) {
            return new Promise(function (resolve, reject) {
                var result = {};
                _SortTransformUtility2.default.resolveImports(_SortTransformUtility2.default.removeComment(source)).then(function (uncommented) {
                    try {
                        var techniqueSources = _SortTransformUtility2.default.separateTechniqueSource(uncommented);
                        for (var key in techniqueSources) {
                            result[key] = SortParser._parseTechnique(techniqueSources[key]);
                        }
                        resolve(result);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
    }, {
        key: "_parseTechnique",
        value: function _parseTechnique(techniqueSource) {
            var drawOrder = _SortTransformUtility2.default.fetchDrawOrder(techniqueSource) || "Auto";
            var passSources = _SortTransformUtility2.default.separatePassSource(techniqueSource);
            var passes = new Array(passSources.length);
            for (var i = 0; i < passSources.length; i++) {
                passes[i] = SortParser._parsePassSource(passSources[i]);
            }
            return {
                drawOrder: drawOrder,
                passes: passes
            };
        }
    }, {
        key: "_parsePassSource",
        value: function _parsePassSource(passSource) {
            var shaderSource = _SortTransformUtility2.default.removePreferences(passSource);
            var attributes = _SortTransformUtility2.default.parseVariables(passSource, "attribute");
            var uniforms = _SortTransformUtility2.default.parseVariables(passSource, "uniform");
            var macros = _SortTransformUtility2.default.parseMacros(passSource);
            var states = _SortTransformUtility2.default.parsePreferences(passSource);
            return {
                fragment: shaderSource,
                vertex: shaderSource,
                attributes: attributes,
                uniforms: uniforms,
                macros: macros,
                states: states
            };
        }
    }]);

    return SortParser;
}();
/**
 * Cache to prevent double loading
 */


SortParser._parsedCache = {};
exports.default = SortParser;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CommentRemover = __webpack_require__(59);

var _CommentRemover2 = _interopRequireDefault(_CommentRemover);

var _ImportResolver = __webpack_require__(60);

var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

var _NameSemanticsPair = __webpack_require__(62);

var _NameSemanticsPair2 = _interopRequireDefault(_NameSemanticsPair);

var _Preferences = __webpack_require__(63);

var _Preferences2 = _interopRequireDefault(_Preferences);

var _TypeToConstant = __webpack_require__(64);

var _TypeToConstant2 = _interopRequireDefault(_TypeToConstant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var SortTransformUtility = function () {
    function SortTransformUtility() {
        _classCallCheck(this, SortTransformUtility);
    }

    _createClass(SortTransformUtility, null, [{
        key: "separateTechniqueSource",

        /**
         * Separate .sort shader text with @Technique statements.
         * @param  {string} uncommentedSource [description]
         * @return {[type]}                   [description]
         */
        value: function separateTechniqueSource(uncommentedSource) {
            if (uncommentedSource.indexOf("@Technique") === -1) {
                return { default: uncommentedSource };
            } else {
                var result = {};
                var regex = /@Technique\s+([a-zA-Z0-9_]+)/g;
                var regexResult = void 0;
                while (regexResult = regex.exec(uncommentedSource)) {
                    var techniqueName = regexResult[1];
                    if (result[techniqueName] !== void 0) {
                        throw new Error("Technique name " + techniqueName + " is dupelicated");
                    } else {
                        result[techniqueName] = SortTransformUtility.obtainNextSection(uncommentedSource, "{", "}", regexResult.index + regexResult.length);
                    }
                }
                return result;
            }
        }
        /**
         * Separate technique source with @Pass statement.
         * @param  {string}   uncommentedSource [description]
         * @return {string[]}                   [description]
         */

    }, {
        key: "separatePassSource",
        value: function separatePassSource(uncommentedSource) {
            if (uncommentedSource.indexOf("@Pass") === -1) {
                return [uncommentedSource];
            } else {
                var result = [];
                var regex = /@Pass/g;
                var regexResult = void 0;
                while (regexResult = regex.exec(uncommentedSource)) {
                    result.push(SortTransformUtility.obtainNextSection(uncommentedSource, "{", "}", regexResult.index + regexResult.length));
                }
                return result;
            }
        }
        /**
         * Fetch draw order preference from technique source.
         * @param  {string} uncommentedTechniqueSource [description]
         * @return {string}                            [description]
         */

    }, {
        key: "fetchDrawOrder",
        value: function fetchDrawOrder(uncommentedTechniqueSource) {
            var regexResult = /@DrawOrder\s*\((\w+)\)/g.exec(uncommentedTechniqueSource);
            if (regexResult) {
                var firstPassIndex = uncommentedTechniqueSource.indexOf("@Pass");
                if (firstPassIndex !== -1 && firstPassIndex < regexResult.index) {
                    throw new Error("DrawOrder preference should be just under @Technique section");
                }
                return regexResult[1];
            }
            return null;
        }
    }, {
        key: "removePreferences",
        value: function removePreferences(source) {
            var regex = /@.+$/gm;
            return source.replace(regex, "");
        }
    }, {
        key: "resolveImports",
        value: function resolveImports(uncommentedSource) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var regexResult, importContent;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (false) {
                                    _context.next = 17;
                                    break;
                                }

                                regexResult = /\s*@import\s+"([^"]+)"/.exec(uncommentedSource);

                                if (regexResult) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt("break", 17);

                            case 4:
                                importContent = void 0;
                                _context.t0 = SortTransformUtility;
                                _context.next = 8;
                                return _ImportResolver2.default.resolve(regexResult[1]);

                            case 8:
                                _context.t1 = _context.sent;
                                _context.next = 11;
                                return _context.t0.resolveImports.call(_context.t0, _context.t1);

                            case 11:
                                importContent = _context.sent;

                                if (!(typeof importContent !== "string")) {
                                    _context.next = 14;
                                    break;
                                }

                                throw new Error("Required shader chunk '" + regexResult[1] + "' was not found!!");

                            case 14:
                                uncommentedSource = uncommentedSource.replace(regexResult[0], "\n" + importContent + "\n");
                                _context.next = 0;
                                break;

                            case 17:
                                return _context.abrupt("return", uncommentedSource);

                            case 18:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "parseMacros",
        value: function parseMacros(source) {
            var result = {};
            var regex = /@ExposeMacro\s*\(\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*\)/g;
            var regexResult = void 0;
            while (regexResult = regex.exec(source)) {
                if (!regexResult[1] || !regexResult[2] || !regexResult[3] || !regexResult[4]) {
                    throw new Error("Invalid parameter was passed on @ExposeMacro preference on '" + regexResult[0] + "'");
                }
                if (regexResult[1] !== "bool" && regexResult[1] !== "int") {
                    throw new Error("Invalid macro type \"" + regexResult[1] + "\". regexResult type must be int or bool");
                }
                var value = void 0;
                if (regexResult[1] === "bool") {
                    if (regexResult[4] !== "true" && regexResult[4] !== "false") {
                        throw new Error("Default macro value \"" + regexResult[4] + "\" is invalid for bool type macro. Must be true or false");
                    }
                    value = regexResult[4] === "true";
                } else {
                    value = parseFloat(regexResult[4]);
                    if (isNaN(value)) {
                        throw new Error("Default macro value \"" + regexResult[4] + "\" is invalid for int type macro. Must be a number.");
                    }
                }
                result[regexResult[2]] = {
                    name: regexResult[2],
                    macroName: regexResult[3],
                    type: regexResult[1],
                    value: value,
                    target: "expose"
                };
            }
            regex = /@ReferMacro\s*\(\s*([a-zA-Z0-9_]+)\s*,\s*(.+)\s*\)/g;
            while (regexResult = regex.exec(source)) {
                if (!regexResult[1] || !regexResult[2]) {
                    throw new Error("Invalid parameter was passed on @ReferMacro preference on '" + regexResult[0] + "'");
                }
                result[regexResult[1]] = {
                    name: regexResult[1],
                    macroName: regexResult[1],
                    value: regexResult[2],
                    target: "refer"
                };
            }
            return result;
        }
    }, {
        key: "parsePreferences",
        value: function parsePreferences(source) {
            var result = {
                enable: [WebGLRenderingContext.CULL_FACE, WebGLRenderingContext.BLEND, WebGLRenderingContext.DEPTH_TEST],
                functions: {
                    blendColor: [0, 0, 0, 0],
                    cullFace: [WebGLRenderingContext.BACK],
                    blendFuncSeparate: [WebGLRenderingContext.ONE, WebGLRenderingContext.ZERO, WebGLRenderingContext.ONE, WebGLRenderingContext.ZERO],
                    blendEquationSeparate: [WebGLRenderingContext.FUNC_ADD, WebGLRenderingContext.FUNC_ADD],
                    lineWidth: [1],
                    frontFace: [WebGLRenderingContext.CCW],
                    depthRange: [0, 1],
                    depthFunc: [WebGLRenderingContext.LESS],
                    depthMask: [true],
                    colorMask: [true, true, true, true]
                },
                dynamicState: []
            };
            var regex = /@([A-Za-z]+)\(([\sa-zA-Z_0-9,\.\-]*)\)/g;
            var regexResult = void 0;
            while (regexResult = regex.exec(source)) {
                var prefParser = _Preferences2.default[regexResult[1]];
                if (!prefParser) {
                    throw new Error("Unknown pass preference " + regexResult[1] + " was specified.");
                }
                prefParser(result, regexResult[2].split(",").map(function (m) {
                    return m.trim();
                }));
            }
            return result;
        }
    }, {
        key: "asValidJSON",
        value: function asValidJSON(json) {
            var regex = /([\{,]\s*)([a-zA-Z0-9_]+)(\s*\:)/gm;
            var result = json.replace(regex, '$1"$2"$3');
            return result;
        }
    }, {
        key: "removeComment",
        value: function removeComment(source) {
            return _CommentRemover2.default.remove(source);
        }
    }, {
        key: "obtainNextSection",
        value: function obtainNextSection(source, begin, end, offset) {
            var beginningPosition = source.indexOf(begin, offset);
            if (beginningPosition === -1) {
                throw new Error("Begining section charactor '" + begin + "' was not found.");
            }
            if (begin.length > 1 || end.length > 1) {
                throw new Error("Invalid parameter");
            }
            var matchingCount = 1;
            var beginCode = begin.charCodeAt(0);
            var endCode = end.charCodeAt(0);
            for (var i = beginningPosition + 1; i < source.length; i++) {
                var current = source.charCodeAt(i);
                if (current === beginCode) {
                    matchingCount++;
                } else if (current === endCode) {
                    matchingCount--;
                }
                if (matchingCount === 0) {
                    return source.substring(beginningPosition + 1, i);
                }
            }
            throw new Error("Invalid bracket matching");
        }
    }, {
        key: "generateVariableFetchRegex",
        value: function generateVariableFetchRegex(variableType) {
            return new RegExp("(?:@([a-zA-Z0-9_]+)?(\\{.+\\})?)?\\s*" + variableType + "\\s+(?:(lowp|mediump|highp)\\s+)?([a-z0-9A-Z]+)\\s+([a-zA-Z0-9_]+)(?:\\s*\\[\\s*([a-zA-Z0-9_]+)\\s*\\]\\s*)?\\s*;", "g");
        }
    }, {
        key: "parseVariables",
        value: function parseVariables(source, variableType) {
            var result = {};
            var regex = SortTransformUtility.generateVariableFetchRegex(variableType);
            var regexResult = void 0;
            while (regexResult = regex.exec(source)) {
                var name = regexResult[5];
                var type = _TypeToConstant2.default[regexResult[4]];
                var precision = regexResult[3];
                var rawAnnotations = regexResult[2];
                var isArray = regexResult[6] !== void 0;
                var arrayCount = void 0;
                var semantic = regexResult[1];
                if (!semantic) {
                    semantic = _NameSemanticsPair2.default[variableType][name];
                    if (!semantic) {
                        semantic = variableType === "uniform" ? "USER_VALUE" : name.toUpperCase();
                    }
                }
                if (isArray) {
                    arrayCount = parseInt(regexResult[6], 10);
                    if (isNaN(arrayCount)) {
                        arrayCount = regexResult[6];
                    }
                }
                result[name] = {
                    semantic: semantic,
                    name: name,
                    type: type,
                    precision: precision,
                    attributes: rawAnnotations ? JSON.parse(SortTransformUtility.asValidJSON(rawAnnotations)) : {},
                    isArray: isArray,
                    count: arrayCount
                };
            }
            return result;
        }
    }]);

    return SortTransformUtility;
}();

exports.default = SortTransformUtility;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Status of parsing
 */
var CommentParsingStatus;
(function (CommentParsingStatus) {
    CommentParsingStatus[CommentParsingStatus["Default"] = 0] = "Default";
    CommentParsingStatus[CommentParsingStatus["SingleQuotationString"] = 1] = "SingleQuotationString";
    CommentParsingStatus[CommentParsingStatus["DoubleQuatationString"] = 2] = "DoubleQuatationString";
    CommentParsingStatus[CommentParsingStatus["MultilineComment"] = 3] = "MultilineComment";
    CommentParsingStatus[CommentParsingStatus["SinglelineComment"] = 4] = "SinglelineComment";
})(CommentParsingStatus || (CommentParsingStatus = {}));

var CommentRemover = function () {
    function CommentRemover(source) {
        _classCallCheck(this, CommentRemover);

        this.source = source;
        this._status = CommentParsingStatus.Default;
        this._afterSlush = false;
        this.removedSource = this._remove();
    }

    _createClass(CommentRemover, [{
        key: "_remove",
        value: function _remove() {
            var text = "";
            var last = void 0;
            for (var i = 0; i < this.source.length; i++) {
                var c = this.source.charAt(i);
                var cn = this.source.charAt(i + 1);
                if (c === "\\") {
                    this._afterSlush = true;
                    i++;
                    continue;
                }
                switch (this._status) {
                    case CommentParsingStatus.Default:
                        this._defaultParsing(c, cn);
                        break;
                }
                if (!this._isInComment || c === "\n") {
                    text += c;
                }
                switch (this._status) {
                    case CommentParsingStatus.MultilineComment:
                    case CommentParsingStatus.SinglelineComment:
                        this._checkCommentEnd(last, c);
                }
                last = c;
            }
            return text;
        }
    }, {
        key: "_defaultParsing",
        value: function _defaultParsing(current, next) {
            if (current === "'") {
                this._status = CommentParsingStatus.SingleQuotationString;
            }
            if (current === "\"") {
                this._status = CommentParsingStatus.DoubleQuatationString;
            }
            if (current === "/" && next === "/") {
                this._status = CommentParsingStatus.SinglelineComment;
            }
            if (current === "/" && next === "*") {
                this._status = CommentParsingStatus.MultilineComment;
            }
        }
    }, {
        key: "_checkCommentEnd",
        value: function _checkCommentEnd(last, current) {
            if (current === "\n" && this._status === CommentParsingStatus.SinglelineComment) {
                this._status = CommentParsingStatus.Default;
                return;
            }
            if (last === "*" && current === "/" && this._status === CommentParsingStatus.MultilineComment) {
                this._status = CommentParsingStatus.Default;
                return;
            }
        }
    }, {
        key: "_isInComment",
        get: function get() {
            return this._status === CommentParsingStatus.MultilineComment || this._status === CommentParsingStatus.SinglelineComment;
        }
    }], [{
        key: "remove",
        value: function remove(source) {
            var remover = new CommentRemover(source);
            return remover.removedSource;
        }
    }]);

    return CommentRemover;
}();

exports.default = CommentRemover;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImportResolver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _CacheResolver2 = __webpack_require__(31);

var _CacheResolver3 = _interopRequireDefault(_CacheResolver2);

var _DefaultStaticImport = __webpack_require__(61);

var _DefaultStaticImport2 = _interopRequireDefault(_DefaultStaticImport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var ImportResolver = exports.ImportResolver = function (_CacheResolver) {
    _inherits(ImportResolver, _CacheResolver);

    function ImportResolver() {
        _classCallCheck(this, ImportResolver);

        var _this = _possibleConstructorReturn(this, (ImportResolver.__proto__ || Object.getPrototypeOf(ImportResolver)).call(this, function (str) {
            var regex = /^https?:\/\/.*/gm;
            return regex.test(str) ? ImportResolver._toAbsolute(str) : str;
        }));

        _this.staticImports = Object.assign({}, _DefaultStaticImport2.default);
        return _this;
    }

    _createClass(ImportResolver, [{
        key: "resolve",
        value: function resolve(path) {
            var _this2 = this;

            return _get(ImportResolver.prototype.__proto__ || Object.getPrototypeOf(ImportResolver.prototype), "resolve", this).call(this, path, function (abs) {
                return _this2._resolve(path);
            });
        }
    }, {
        key: "_resolve",
        value: function _resolve(path) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(typeof this.staticImports[path] === "string")) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt("return", this.staticImports[path]);

                            case 4:
                                _context.next = 6;
                                return this._fromExternal(path);

                            case 6:
                                return _context.abrupt("return", _context.sent);

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_fromExternal",
        value: function _fromExternal(path) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", path);
                xhr.onload = function (v) {
                    resolve(xhr.responseText);
                };
                xhr.onerror = function (e) {
                    reject(e);
                };
                xhr.send();
            });
        }
    }], [{
        key: "_toAbsolute",
        value: function _toAbsolute(href) {
            var link = document.createElement("a");
            link.href = href;
            return link.protocol + "//" + link.host + link.pathname + link.search + link.hash;
        }
    }]);

    return ImportResolver;
}(_CacheResolver3.default);

exports.default = new ImportResolver();

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _basicVert = __webpack_require__(119);

var _basicVert2 = _interopRequireDefault(_basicVert);

var _screenVert = __webpack_require__(120);

var _screenVert2 = _interopRequireDefault(_screenVert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    "basic-vert": _basicVert2.default,
    "screen-vert": _screenVert2.default
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    attribute: {
        position: "POSITION",
        normal: "NORMAL",
        texCoord: "TEXCOORD"
    },
    uniform: {
        _time: "TIME",
        _viewportSize: "VIEWPORT_SIZE",
        _matL: "LOCAL",
        _matM: "MODEL",
        _matV: "VIEW",
        _matP: "PROJECTION",
        _matVM: "MODELVIEW",
        _matPVM: "MODELVIEWPROJECTION",
        _matIM: "MODELINVERSE",
        _matIV: "VIEWINVERSE",
        _matIP: "PROJECTIONINVERSE",
        _matIVM: "MODELVIEWINVERSE",
        _matIPVM: "MODELVIEWPROJECTIONINVERSE",
        _matITM: "MODELINVERSETRANSPOSE",
        _matITVM: "MODELVIEWINVERSETRANSPOSE"
    }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function asGLConstantArgs(args, length) {
    if (args.length !== length) {
        throw new Error("Unmatching argument count on preference parse");
    }
    return args.map(function (arg) {
        var argNum = WebGLRenderingContext[arg];
        if (typeof argNum !== "number") {
            throw new Error("Unknown WebGL constant " + arg + " was specified");
        }
        return argNum;
    });
}
function asNumberArgs(args, length) {
    if (args.length !== length) {
        throw new Error("Unmatching argument count on preference parse");
    }
    return args.map(function (arg) {
        var argNum = Number.parseFloat(arg);
        if (isNaN(argNum)) {
            throw new Error("Failed to parse number on preference parsing");
        }
        return argNum;
    });
}
function asBooleanArgs(args, length) {
    if (args.length !== length) {
        throw new Error("Unmatching argument count on preference parse");
    }
    return args.map(function (arg) {
        if (arg !== "true" && arg !== "false") {
            throw new Error(arg + " is not boolean");
        }
        return arg === "true";
    });
}
exports.default = {
    Enable: function Enable(state, args) {
        var enableTarget = WebGLRenderingContext[args[0]];
        if (typeof enableTarget !== "number") {
            throw new Error("Unknown WebGL constant \"" + args[0] + "\" was specified on @Enable");
        }
        state.enable.push(enableTarget);
    },
    Disable: function Disable(state, args) {
        var disableTarget = WebGLRenderingContext[args[0]];
        if (typeof disableTarget !== "number") {
            throw new Error("Unknown WebGL constant \"" + args[0] + "\" was specified on @Disable");
        }
        var index = state.enable.indexOf(disableTarget);
        if (index !== -1) {
            state.enable.splice(index, 1);
        }
    },
    BlendFunc: function BlendFunc(state, args) {
        var config = asGLConstantArgs(args, 2);
        state.functions.blendFuncSeparate = [config[0], config[1], config[0], config[1]];
    },
    BlendFuncSeparate: function BlendFuncSeparate(state, args) {
        state.functions.blendFuncSeparate = asGLConstantArgs(args, 4);
    },
    BlendEquation: function BlendEquation(state, args) {
        var config = asGLConstantArgs(args, 1);
        state.functions.blendEquationSeparate = [config[0], config[0]];
    },
    BlendEquationSeparate: function BlendEquationSeparate(state, args) {
        state.functions.blendEquationSeparate = asGLConstantArgs(args, 4);
    },
    BlendColor: function BlendColor(state, args) {
        state.functions.blendColor = asNumberArgs(args, 4);
    },
    ColorMask: function ColorMask(state, args) {
        state.functions.colorMask = asBooleanArgs(args, 4);
        state.enable.push(WebGLRenderingContext.COLOR_WRITEMASK);
    },
    CullFace: function CullFace(state, args) {
        state.functions.cullFace = asGLConstantArgs(args, 1);
    },
    DepthFunc: function DepthFunc(state, args) {
        state.functions.depthFunc = asGLConstantArgs(args, 1);
    },
    DepthRange: function DepthRange(state, args) {
        state.functions.depthRange = asNumberArgs(args, 2);
    },
    DepthMask: function DepthMask(state, args) {
        state.functions.depthMask = asBooleanArgs(args, 1);
    },
    FrontFace: function FrontFace(state, args) {
        state.functions.frontFace = asGLConstantArgs(args, 1);
    },
    LineWidth: function LineWidth(state, args) {
        state.functions.lineWidth = asNumberArgs(args, 1);
    },
    PolygonOffset: function PolygonOffset(state, args) {
        state.functions.polygonOffset = asNumberArgs(args, 2);
        state.enable.push(WebGLRenderingContext.POLYGON_OFFSET_FILL);
    },
    Scissor: function Scissor(state, args) {
        state.functions.scissor = asNumberArgs(args, 4);
        state.enable.push(WebGLRenderingContext.SCISSOR_TEST);
    },
    ExposeMacro: function ExposeMacro() {
        return;
    },
    ReferMacro: function ReferMacro() {
        return;
    },
    DynamicState: function DynamicState(state, args) {
        if (!args.length) {
            throw new Error("DynamicState require at least 1 argument for specifying state resolver");
        }
        var resolver = args[0];
        args.splice(0, 1);
        state.dynamicState.push({
            stateResolver: resolver,
            args: args
        });
        return;
    }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var gl = WebGLRenderingContext;
exports.default = {
    vec2: gl.FLOAT_VEC2,
    vec3: gl.FLOAT_VEC3,
    vec4: gl.FLOAT_VEC4,
    ivec2: gl.INT_VEC2,
    ivec3: gl.INT_VEC3,
    ivec4: gl.INT_VEC4,
    bvec2: gl.BOOL_VEC2,
    bvec3: gl.BOOL_VEC3,
    bvec4: gl.BOOL_VEC4,
    float: gl.FLOAT,
    int: gl.INT,
    bool: gl.BOOL,
    sampler2D: gl.SAMPLER_2D,
    samplerCube: gl.SAMPLER_CUBE,
    mat4: gl.FLOAT_MAT4,
    mat3: gl.FLOAT_MAT3,
    mat2: gl.FLOAT_MAT2
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultMacro = __webpack_require__(66);

var _DefaultMacro2 = _interopRequireDefault(_DefaultMacro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Manage macros which would be appended head of all shaders grimoire.js would load.
 */
var MacroRegistory = function () {
    function MacroRegistory() {
        _classCallCheck(this, MacroRegistory);

        /**
         * The map of macro.
         */
        this._macro = {};
        /**
         * Handlers functions for changing macro.
         */
        this._observers = {};
        for (var key in _DefaultMacro2.default) {
            this.setValue(key, _DefaultMacro2.default[key]);
        }
    }
    /**
     * Set the value of macros.
     * @param {string}    key [description]
     * @param {string =   null}        val [description]
     */


    _createClass(MacroRegistory, [{
        key: "setValue",
        value: function setValue(key) {
            var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (val === null) {
                val = "";
            }
            if (this._macro[key] !== val) {
                this._macro[key] = val;
                if (!this._observers[key]) {
                    this._observers[key] = [];
                }
                this._notifyMacroChanged(key, val);
            }
        }
        /**
         * Get the value of macro.
         * @param  {string} key [description]
         * @return {string}     [description]
         */

    }, {
        key: "getValue",
        value: function getValue(key) {
            var macro = this._macro[key];
            if (macro === null) {
                return "";
            } else {
                return macro;
            }
        }
    }, {
        key: "watch",
        value: function watch(macroName, handler) {
            var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var observers = this._observers[macroName];
            if (!observers) {
                observers = this._observers[macroName] = [];
            }
            observers.push(handler);
            if (immediate && this._macro[macroName] !== void 0) {
                handler(this._macro[macroName], true);
            }
        }
    }, {
        key: "unwatch",
        value: function unwatch(macroName, handler) {
            var observers = this._observers[macroName];
            if (!observers) {
                return false;
            }
            for (var i = 0; i < observers.length; i++) {
                if (observers[i] === handler) {
                    observers.splice(i, 1);
                    return true;
                }
            }
        }
    }, {
        key: "_notifyMacroChanged",
        value: function _notifyMacroChanged(key, value) {
            for (var i = 0; i < this._observers[key].length; i++) {
                this._observers[key][i](value, false);
            }
        }
    }]);

    return MacroRegistory;
}();

exports.default = MacroRegistory;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    GRIMOIRE: null,
    WEBGL_VERSION: "1"
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pass = __webpack_require__(68);

var _Pass2 = _interopRequireDefault(_Pass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Technique provides an abstraction of drawing with multiple shaders.
 * Technique represents a draw technique like (basic drawing, normal drawing,low quality drawing and so on)
 * By specifing which technique should be used in a drawing stage, users can easily to switch multiple drawing formulas.
 * @param  {Material}         publicmaterial [description]
 * @param  {ITechniqueRecipe} recipe         [description]
 * @return {[type]}                          [description]
 */
var Technique = function () {
    function Technique(material, recipe) {
        var _this = this;

        _classCallCheck(this, Technique);

        this.material = material;
        /**
         * Actual drawing stages of this technique
         */
        this.passes = [];
        this.drawOrder = recipe.drawOrder;
        this.passes = recipe.passes.map(function (p) {
            return new _Pass2.default(_this, p);
        });
    }
    /**
     * Draw with specified argument by this technique
     * @param {IMaterialArgument} args [description]
     */


    _createClass(Technique, [{
        key: "draw",
        value: function draw(args) {
            for (var i = 0; i < this.passes.length; i++) {
                this.passes[i].draw(args);
            }
        }
        /**
         * Destroy to release resources
         */

    }, {
        key: "dispose",
        value: function dispose() {
            this.passes.forEach(function (p) {
                return p.dispose();
            });
        }
    }]);

    return Technique;
}();

exports.default = Technique;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Geometry = __webpack_require__(10);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _GLStateConfigurator = __webpack_require__(71);

var _GLStateConfigurator2 = _interopRequireDefault(_GLStateConfigurator);

var _MaterialFactory = __webpack_require__(1);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _PassProgram = __webpack_require__(73);

var _PassProgram2 = _interopRequireDefault(_PassProgram);

var _UniformResolverRegistry = __webpack_require__(11);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Pass provides single draw call for a geometry.
 * Containing arguments of uniform variables and gl state configruations for each drawing call.
 * @return {Material} [description]
 */
var Pass = function () {
    function Pass(technique, passRecipe) {
        var _this = this;

        _classCallCheck(this, Pass);

        this.technique = technique;
        this.passRecipe = passRecipe;
        /**
         * Declaration of argument attributes.
         * @param  {Technique}   publictechnique  [description]
         * @param  {IPassRecipe} publicpassRecipe [description]
         * @return {[type]}                       [description]
         */
        this.argumentDeclarations = {};
        /**
         * Values of materila arguments.
         * These values would be passed to GPU for rendering.
         */
        this.arguments = {};
        this._macroHandlers = {};
        this._uniformResolvers = _UniformResolverRegistry2.default.generateRegisterers(this, passRecipe);
        this._gl = this.material.gl;
        var factory = _MaterialFactory2.default.get(this._gl);
        var macroRegister = factory.macro;
        this._dynamicStateResolver = _GLStateConfigurator2.default.getDynamicStateResolver(this);
        this.program = new _PassProgram2.default(this._gl, passRecipe.vertex, passRecipe.fragment);
        // register macro

        var _loop = function _loop(key) {
            var macro = passRecipe.macros[key];
            _this.program.setMacro(macro.macroName, macro.value + "");
            if (macro.target === "expose") {
                _this._macroHandlers[key] = function (value) {
                    var assignValue = void 0;
                    if (macro.type === "bool") {
                        assignValue = value ? "" : undefined;
                    } else {
                        assignValue = value;
                    }
                    _this.program.setMacro(macro.macroName, assignValue);
                };
                _this.addArgument(key, {
                    converter: macro.type === "bool" ? "Boolean" : "Number",
                    default: macro.value
                });
            } else if (macro.target === "refer") {
                _this.program.setMacro(macro.macroName, macro.value + "");
                macroRegister.watch(macro.macroName, function (val, immediate) {
                    _this.program.setMacro(macro.macroName, val);
                }, true);
            }
        };

        for (var key in passRecipe.macros) {
            _loop(key);
        }
    }
    /**
     * Get related material
     */


    _createClass(Pass, [{
        key: "draw",

        /**
         * Execute single drawcall with specified arguments.
         * @param {IMaterialArgument} args [description]
         */
        value: function draw(args) {
            // configure programs and gl states
            var p = this.program.getProgram(args.geometry);
            p.use();
            this._uniformResolvers.resolve(p.uniforms, args);
            _GLStateConfigurator2.default.configureForPass(this._gl, this.passRecipe); // configure for gl states
            this._dynamicStateResolver(this._gl, args);
            // draw actually
            for (var key in this.passRecipe.attributes) {
                var attribute = this.passRecipe.attributes[key];
                _Geometry2.default.bindBufferToAttribute(args.geometry, p, key, attribute.semantic);
            }
            _Geometry2.default.drawWithCurrentVertexBuffer(args.geometry, args.indexGroup, args.drawCount, args.drawOffset);
        }
        /**
         * Append an argument as pass variable.
         * This is mainly used for resolving uniform stages.
         */

    }, {
        key: "addArgument",
        value: function addArgument(name, val) {
            if (this._argumentInitialized) {
                throw new Error("setArgument cant be called for initialized pass");
            }
            this.argumentDeclarations[name] = val;
        }
        /**
         * Update argument of specified value.
         */

    }, {
        key: "setArgument",
        value: function setArgument(variableName, newValue, oldValue) {
            if (this._macroHandlers[variableName]) {
                this._macroHandlers[variableName](newValue);
            } else {
                this._uniformResolvers.update(this.program, variableName, newValue, oldValue);
            }
            this.arguments[variableName] = newValue;
        }
        /**
         * Destroy pass to release resources.
         */

    }, {
        key: "dispose",
        value: function dispose() {
            this._uniformResolvers.dispose();
            this.program.dispose();
        }
    }, {
        key: "material",
        get: function get() {
            return this.technique.material;
        }
    }]);

    return Pass;
}();

exports.default = Pass;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.AABB:undefined;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _GLResource2 = __webpack_require__(4);

var _GLResource3 = _interopRequireDefault(_GLResource2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buffer = function (_GLResource) {
    _inherits(Buffer, _GLResource);

    function Buffer(gl) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : WebGLRenderingContext.ARRAY_BUFFER;
        var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLRenderingContext.STATIC_DRAW;

        _classCallCheck(this, Buffer);

        var _this = _possibleConstructorReturn(this, (Buffer.__proto__ || Object.getPrototypeOf(Buffer)).call(this, gl, gl.createBuffer()));

        _this.target = target;
        _this.usage = usage;
        /**
         * If this flag was true, buffer instance will keep Float32Array on class field.
         */
        _this.keepSource = false;
        _this._bufferSource = null;
        return _this;
    }

    _createClass(Buffer, [{
        key: "update",
        value: function update(length, subBuffer) {
            this.bind();
            this._bufferSource = null;
            if (subBuffer) {
                if (!this.valid) {
                    this.gl.bufferData(this.target, length + subBuffer.byteLength, this.usage);
                }
                this.gl.bufferSubData(this.target, length, subBuffer);
            } else {
                if (typeof length === "number") {
                    this.gl.bufferData(this.target, length, this.usage);
                } else {
                    this.gl.bufferData(this.target, length, this.usage);
                    this._bufferSource = length;
                }
            }
            this.valid = true;
        }
    }, {
        key: "bind",
        value: function bind() {
            this.gl.bindBuffer(this.target, this.resourceReference);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _get(Buffer.prototype.__proto__ || Object.getPrototypeOf(Buffer.prototype), "destroy", this).call(this);
            this._bufferSource = null;
            this.gl.deleteBuffer(this.resourceReference);
        }
    }, {
        key: "bufferSource",
        get: function get() {
            if (this.keepSource) {
                return this._bufferSource;
            } else {
                throw new Error("Accessing bufferSource getter of Buffer class instance require keepSource flag being enabled before updating Buffer.");
            }
        }
    }]);

    return Buffer;
}(_GLResource3.default);

exports.default = Buffer;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultDynamicStateResolvers = __webpack_require__(72);

var _DefaultDynamicStateResolvers2 = _interopRequireDefault(_DefaultDynamicStateResolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GLStateConfigurator = function () {
    function GLStateConfigurator() {
        _classCallCheck(this, GLStateConfigurator);
    }

    _createClass(GLStateConfigurator, null, [{
        key: "registerDynamicStateResolver",
        value: function registerDynamicStateResolver(key, resolver) {
            GLStateConfigurator._dynamicStateResolvers[key] = resolver;
        }
    }, {
        key: "getDynamicStateResolver",
        value: function getDynamicStateResolver(pass) {
            if (pass.passRecipe.states.dynamicState) {
                var dynamicStates = pass.passRecipe.states.dynamicState;
                var functions = [];
                for (var i = 0; i < dynamicStates.length; i++) {
                    var ds = dynamicStates[i];
                    var resolverGenerator = GLStateConfigurator._dynamicStateResolvers[ds.stateResolver];
                    if (!resolverGenerator) {
                        throw new Error("Unknown dynamic state resolver '" + ds.stateResolver + "' was required");
                    }
                    functions.push(resolverGenerator(ds.args, pass));
                }
                return function (gl, mat) {
                    return functions.forEach(function (f) {
                        return f(gl, mat);
                    });
                };
            }
            return function () {
                return void 0;
            };
        }
        /**
         * Configure gl state based on pass recipe
         */

    }, {
        key: "configureForPass",
        value: function configureForPass(gl, passRecipe) {
            var states = passRecipe.states;
            var functions = states.functions;
            if (!states.disable) {
                GLStateConfigurator.complementDisableState(passRecipe.states);
            }
            for (var i = 0; i < states.enable.length; i++) {
                gl.enable(states.enable[i]);
            }
            for (var _i = 0; _i < states.disable.length; _i++) {
                gl.disable(states.disable[_i]);
            }
            if (functions.blendColor) {
                gl.blendColor(functions.blendColor[0], functions.blendColor[1], functions.blendColor[2], functions.blendColor[3]);
            }
            if (functions.blendEquationSeparate) {
                gl.blendEquationSeparate(functions.blendEquationSeparate[0], functions.blendEquationSeparate[1]);
            }
            if (functions.blendFuncSeparate) {
                gl.blendFuncSeparate(functions.blendFuncSeparate[0], functions.blendFuncSeparate[1], functions.blendFuncSeparate[2], functions.blendFuncSeparate[3]);
            }
            if (functions.colorMask) {
                gl.colorMask(functions.colorMask[0], functions.colorMask[1], functions.colorMask[2], functions.colorMask[3]);
            }
            if (functions.cullFace) {
                gl.cullFace(functions.cullFace[0]);
            }
            if (functions.depthFunc) {
                gl.depthFunc(functions.depthFunc[0]);
            }
            if (functions.depthMask) {
                gl.depthMask(functions.depthMask[0]);
            }
            if (functions.depthRange) {
                gl.depthRange(functions.depthRange[0], functions.depthRange[1]);
            }
            if (functions.frontFace) {
                gl.frontFace(functions.frontFace[0]);
            }
            if (functions.polygonOffset) {
                gl.polygonOffset(functions.polygonOffset[0], functions.polygonOffset[1]);
            }
            if (functions.scissor) {
                gl.scissor(functions.scissor[0], functions.scissor[1], functions.scissor[2], functions.scissor[3]);
            }
        }
        /**
         * Complement disabling state based on enabled states.
         */

    }, {
        key: "complementDisableState",
        value: function complementDisableState(state) {
            if (!state.disable) {
                state.disable = [];
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = GLStateConfigurator._glEnableTargets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    if (state.enable.indexOf(key) === -1) {
                        state.disable.push(key);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return GLStateConfigurator;
}();

exports.default = GLStateConfigurator;

GLStateConfigurator._glEnableTargets = [WebGLRenderingContext.CULL_FACE, WebGLRenderingContext.DEPTH_TEST, WebGLRenderingContext.STENCIL_TEST, WebGLRenderingContext.BLEND, WebGLRenderingContext.SCISSOR_TEST, WebGLRenderingContext.DITHER, WebGLRenderingContext.POLYGON_OFFSET_FILL, WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE, WebGLRenderingContext.SAMPLE_COVERAGE];
GLStateConfigurator._dynamicStateResolvers = Object.assign({}, _DefaultDynamicStateResolvers2.default);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "dynamic-cull": function dynamicCull(args, pass) {
        var attributeName = args[1] || "cull";
        pass.addArgument(attributeName, {
            converter: "String",
            default: args[0] || "back"
        });
        var currentState = null;
        function changeState(state) {
            if (currentState !== state) {
                pass.program.setMacro("CONTEXT_STATE_CULL", state);
            }
        }
        return function (gl) {
            if (pass.arguments[attributeName] !== "none") {
                gl.enable(WebGLRenderingContext.CULL_FACE);
                if (pass.arguments[attributeName] === "back") {
                    gl.cullFace(WebGLRenderingContext.BACK);
                    changeState("1");
                } else if (pass.arguments[attributeName] === "front") {
                    gl.cullFace(WebGLRenderingContext.FRONT);
                    changeState("2");
                } else {
                    throw new Error("Unknown culling mode");
                }
            } else {
                gl.disable(WebGLRenderingContext.CULL_FACE);
                changeState("0");
            }
        };
    }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ManagedProgram = __webpack_require__(74);

var _ManagedProgram2 = _interopRequireDefault(_ManagedProgram);

var _ManagedShader = __webpack_require__(78);

var _ManagedShader2 = _interopRequireDefault(_ManagedShader);

var _ShaderMixer = __webpack_require__(80);

var _ShaderMixer2 = _interopRequireDefault(_ShaderMixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Container of shader program used for Pass.
 * Pass needs to care which geometry will be drawn by a material.
 * (For determining what macro should be appended to shader by attribute variable exisiting)
 */
var PassProgram = function () {
    function PassProgram(_gl, _vsSource, _fsSource) {
        var _macros = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, PassProgram);

        this._gl = _gl;
        this._vsSource = _vsSource;
        this._fsSource = _fsSource;
        this._macros = _macros;
        this._programs = {};
        this._shaders = [];
    }
    /**
     * macros registered dynamically of this programs
     * @return {[type]} [description]
     */


    _createClass(PassProgram, [{
        key: "getProgram",

        /**
         * Fetch a program instance with specified geometry
         * @param  {Geometry}       geometry [description]
         * @return {ManagedProgram}          [description]
         */
        value: function getProgram(geometry) {
            if (this._programs[geometry.accessorHash]) {
                return this._programs[geometry.accessorHash];
            } else {
                return this._constructProgram(geometry);
            }
        }
        /**
         * Update programs with specified macro value.
         * @param {string}         macroName [description]
         * @param {string|boolean} value     [description]
         */

    }, {
        key: "setMacro",
        value: function setMacro(macroName, value) {
            if (this._macros[macroName] !== value) {
                if (typeof value === "boolean") {
                    this._macros[macroName] = value ? "" : undefined;
                } else {
                    this._macros[macroName] = value;
                }
                this.dispose();
            }
        }
        /**
         * Destroy instance to relase resources.
         */

    }, {
        key: "dispose",
        value: function dispose() {
            for (var key in this._programs) {
                this._programs[key].release();
            }
            this._programs = {};
            this._shaders.forEach(function (s) {
                return s.release();
            });
            this._shaders = [];
        }
    }, {
        key: "_constructProgram",
        value: function _constructProgram(geometry) {
            var fs = _ManagedShader2.default.getShader(this._gl, WebGLRenderingContext.FRAGMENT_SHADER, _ShaderMixer2.default.generate(WebGLRenderingContext.FRAGMENT_SHADER, this._macros, this._fsSource, geometry));
            var vs = _ManagedShader2.default.getShader(this._gl, WebGLRenderingContext.VERTEX_SHADER, _ShaderMixer2.default.generate(WebGLRenderingContext.VERTEX_SHADER, this._macros, this._vsSource, geometry));
            var program = _ManagedProgram2.default.getProgram(this._gl, [vs, fs]);
            this._shaders.push(fs);
            this._shaders.push(vs);
            this._programs[geometry.accessorHash] = program;
            return program;
        }
    }, {
        key: "macros",
        get: function get() {
            return this._macros;
        },
        set: function set(val) {
            this._macros = val;
            this.dispose();
        }
        /**
         * Original fragment shader code
         * @return {string} [description]
         */

    }, {
        key: "fragmentShader",
        get: function get() {
            return this._fsSource;
        },

        /**
         * Original vertex shader code
         * @param  {string} source [description]
         * @return {[type]}        [description]
         */
        set: function set(source) {
            this._fsSource = source;
            this.dispose();
        }
    }, {
        key: "vertexShader",
        get: function get() {
            return this._vsSource;
        },
        set: function set(source) {
            this._vsSource = source;
            this.dispose();
        }
    }]);

    return PassProgram;
}();

exports.default = PassProgram;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HashCalculator = __webpack_require__(9);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

var _Program2 = __webpack_require__(75);

var _Program3 = _interopRequireDefault(_Program2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedProgram = function (_Program) {
    _inherits(ManagedProgram, _Program);

    function ManagedProgram(gl, hash) {
        _classCallCheck(this, ManagedProgram);

        var _this = _possibleConstructorReturn(this, (ManagedProgram.__proto__ || Object.getPrototypeOf(ManagedProgram)).call(this, gl));

        _this.hash = hash;
        _this._referenceCount = 0;
        return _this;
    }

    _createClass(ManagedProgram, [{
        key: "release",
        value: function release() {
            this._referenceCount--;
            if (this._referenceCount === 0) {
                this.destroy();
                ManagedProgram._managedPrograms.get(this.gl)[this.hash] = void 0;
            }
        }
    }], [{
        key: "getProgram",
        value: function getProgram(gl, shaders) {
            if (!ManagedProgram._managedPrograms.has(gl)) {
                ManagedProgram._managedPrograms.set(gl, {});
            }
            var programs = ManagedProgram._managedPrograms.get(gl);
            var hashSource = "";
            shaders = shaders.sort();
            shaders.forEach(function (s) {
                hashSource += s.index + ",";
            });
            var hash = _HashCalculator2.default.calcHash(hashSource);
            if (programs[hash] === void 0) {
                programs[hash] = new ManagedProgram(gl, hash);
                programs[hash].update(shaders);
            }
            programs[hash]._referenceCount++;
            return programs[hash];
        }
    }]);

    return ManagedProgram;
}(_Program3.default);

exports.default = ManagedProgram;

ManagedProgram._managedPrograms = new Map();

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _GLResource2 = __webpack_require__(4);

var _GLResource3 = _interopRequireDefault(_GLResource2);

var _ResourceCache = __webpack_require__(76);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

var _UniformProxy = __webpack_require__(77);

var _UniformProxy2 = _interopRequireDefault(_UniformProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Manages WebGLProgram related stuff.
 */
var Program = function (_GLResource) {
    _inherits(Program, _GLResource);

    function Program(gl) {
        _classCallCheck(this, Program);

        var _this = _possibleConstructorReturn(this, (Program.__proto__ || Object.getPrototypeOf(Program)).call(this, gl, gl.createProgram()));

        _this._uniformLocations = {};
        _this._attributeLocations = {};
        _this.uniforms = new _UniformProxy2.default(_this);
        return _this;
    }
    /**
     * Check this program is the last used one or not.
     * @return {boolean} [description]
     */


    _createClass(Program, [{
        key: "update",

        /**
         * Update program with shader instance.
         * The array might be set of vertex shader and fragment shader couple.
         * @param {Shader[]} shaders [description]
         */
        value: function update(shaders) {
            var _this2 = this;

            if (this.valid) {
                // detach all attached shaders previously
                var preciousShaders = this.gl.getAttachedShaders(this.resourceReference);
                preciousShaders.forEach(function (s) {
                    return _this2.gl.detachShader(_this2.resourceReference, s);
                });
            }
            this._uniformLocations = {}; // reset location caches
            this._attributeLocations = {};
            // attach all shader passed
            shaders.forEach(function (shader) {
                _this2.gl.attachShader(_this2.resourceReference, shader.resourceReference);
            });
            this.gl.linkProgram(this.resourceReference); // link program and check errors
            if (!this.gl.getProgramParameter(this.resourceReference, WebGLRenderingContext.LINK_STATUS)) {
                var errorLog = this.gl.getProgramInfoLog(this.resourceReference);
                throw new Error("LINK FAILED\n" + errorLog);
            }
            this.valid = true;
        }
        /**
         * Use this program for drawing.
         */

    }, {
        key: "use",
        value: function use() {
            if (!this.isLastUsed) {
                this.gl.useProgram(this.resourceReference);
            }
            this.uniforms.onUse();
        }
        /**
         * Destroy this instance.
         */

    }, {
        key: "destroy",
        value: function destroy() {
            _get(Program.prototype.__proto__ || Object.getPrototypeOf(Program.prototype), "destroy", this).call(this);
            this.gl.deleteProgram(this.resourceReference);
            this._uniformLocations = {};
            this._attributeLocations = {};
        }
        /**
         * Fetch attribute location from this program.
         * @param  {string} variableName [description]
         * @return {number}              [description]
         */

    }, {
        key: "findAttributeLocation",
        value: function findAttributeLocation(variableName) {
            if (this._attributeLocations[variableName] === void 0) {
                this._attributeLocations[variableName] = this.gl.getAttribLocation(this.resourceReference, variableName);
                this._safeEnableVertexAttribArray(this._attributeLocations[variableName]);
                return this._attributeLocations[variableName];
            } else {
                return this._attributeLocations[variableName];
            }
        }
        /**
         * Fetch uniform location from this program
         * @param  {string}               variableName [description]
         * @return {WebGLUniformLocation}              [description]
         */

    }, {
        key: "findUniformLocation",
        value: function findUniformLocation(variableName) {
            var location = this._uniformLocations[variableName];
            if (location === void 0) {
                return this._uniformLocations[variableName] = this.gl.getUniformLocation(this.resourceReference, variableName);
            } else {
                return location;
            }
        }
    }, {
        key: "_safeEnableVertexAttribArray",
        value: function _safeEnableVertexAttribArray(location) {
            if (location < 0) {
                return;
            }
            this.gl.enableVertexAttribArray(location);
        }
    }, {
        key: "isLastUsed",
        get: function get() {
            return _ResourceCache2.default.useProgramCheck(this.gl, this.resourceReference);
        }
    }]);

    return Program;
}(_GLResource3.default);

exports.default = Program;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceCache = exports.ResourceCache = function () {
    function ResourceCache() {
        _classCallCheck(this, ResourceCache);

        this._lastUsedPrograms = new Map();
    }
    /**
       * Save the specified WebGLProgram as last used program.
       * And check the specified program was used last time.
       */


    _createClass(ResourceCache, [{
        key: "useProgramCheck",
        value: function useProgramCheck(gl, program) {
            if (this._lastUsedPrograms.get(gl) === program) {
                return true;
            }
            this._lastUsedPrograms.set(gl, program);
            return false;
        }
    }]);

    return ResourceCache;
}();

exports.default = new ResourceCache();

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat3Cache = new Float32Array(9);

var UniformProxy = function () {
    function UniformProxy(program) {
        _classCallCheck(this, UniformProxy);

        this.program = program;
        this._currentTextureRegister = 0;
        this._gl = program.gl;
    }

    _createClass(UniformProxy, [{
        key: "uniformBool",
        value: function uniformBool(variableName, val) {
            var _this = this;

            this._pass(variableName, function (l) {
                return _this._gl.uniform1i(l, val ? 1 : 0);
            });
        }
    }, {
        key: "uniformMatrix",
        value: function uniformMatrix(variableName, mat) {
            var _this2 = this;

            this._pass(variableName, function (l) {
                _this2._gl.uniformMatrix4fv(l, false, mat.rawElements);
            });
        }
    }, {
        key: "uniformMatrix3",
        value: function uniformMatrix3(variableName, mat) {
            var _this3 = this;

            this._pass(variableName, function (l) {
                var r = mat.rawElements;
                for (var i = 0; i < 3; i++) {
                    mat3Cache[3 * i + 0] = r[4 * i + 0];
                    mat3Cache[3 * i + 1] = r[4 * i + 1];
                    mat3Cache[3 * i + 2] = r[4 * i + 2];
                }
                _this3._gl.uniformMatrix3fv(l, false, mat3Cache);
            });
        }
    }, {
        key: "uniformMatrixArray",
        value: function uniformMatrixArray(variableName, matricies) {
            var _this4 = this;

            var length = matricies.length / 16;

            var _loop = function _loop(i) {
                _this4._passAsArray(variableName, i, function (l) {
                    return _this4._gl.uniformMatrix4fv(l, false, new Float32Array(matricies.buffer, matricies.byteOffset + i * 64));
                });
            };

            for (var i = 0; i < length; i++) {
                _loop(i);
            }
        }
    }, {
        key: "uniformFloat",
        value: function uniformFloat(variableName, val) {
            var _this5 = this;

            this._pass(variableName, function (l) {
                return _this5._gl.uniform1f(l, val);
            });
        }
    }, {
        key: "uniformFloatArray",
        value: function uniformFloatArray(variableName, val) {
            var _this6 = this;

            this._pass(variableName, function (l) {
                return _this6._gl.uniform1fv(l, val);
            });
        }
    }, {
        key: "uniformInt",
        value: function uniformInt(variableName, val) {
            var _this7 = this;

            this._pass(variableName, function (l) {
                return _this7._gl.uniform1i(l, val);
            });
        }
    }, {
        key: "uniformVector2",
        value: function uniformVector2(variableName, val) {
            var _this8 = this;

            this._pass(variableName, function (l) {
                return _this8._gl.uniform2f(l, val.X, val.Y);
            });
        }
    }, {
        key: "uniformIntVector2",
        value: function uniformIntVector2(variableName, val) {
            var _this9 = this;

            this._pass(variableName, function (l) {
                return _this9._gl.uniform2i(l, val.X, val.Y);
            });
        }
    }, {
        key: "uniformVector2Array",
        value: function uniformVector2Array(variableName, val) {
            var _this10 = this;

            this._pass(variableName, function (l) {
                return _this10._gl.uniform2fv(l, val);
            });
        }
    }, {
        key: "uniformVector3",
        value: function uniformVector3(variableName, val) {
            var _this11 = this;

            this._pass(variableName, function (l) {
                return _this11._gl.uniform3f(l, val.X, val.Y, val.Z);
            });
        }
    }, {
        key: "uniformIntVector3",
        value: function uniformIntVector3(variableName, val) {
            var _this12 = this;

            this._pass(variableName, function (l) {
                return _this12._gl.uniform3i(l, val.X, val.Y, val.Z);
            });
        }
    }, {
        key: "uniformVector3Array",
        value: function uniformVector3Array(variableName, val) {
            var _this13 = this;

            this._pass(variableName, function (l) {
                return _this13._gl.uniform3fv(l, val);
            });
        }
    }, {
        key: "uniformColor3",
        value: function uniformColor3(variableName, val) {
            var _this14 = this;

            this._pass(variableName, function (l) {
                return _this14._gl.uniform3f(l, val.R, val.G, val.B);
            });
        }
    }, {
        key: "uniformVector4",
        value: function uniformVector4(variableName, val) {
            var _this15 = this;

            this._pass(variableName, function (l) {
                return _this15._gl.uniform4f(l, val.X, val.Y, val.Z, val.W);
            });
        }
    }, {
        key: "uniformIntVector4",
        value: function uniformIntVector4(variableName, val) {
            var _this16 = this;

            this._pass(variableName, function (l) {
                return _this16._gl.uniform4f(l, val.X, val.Y, val.Z, val.W);
            });
        }
    }, {
        key: "uniformVector4Array",
        value: function uniformVector4Array(variableName, val) {
            var _this17 = this;

            this._pass(variableName, function (l) {
                return _this17._gl.uniform4fv(l, val);
            });
        }
    }, {
        key: "uniformColor4",
        value: function uniformColor4(variableName, val) {
            var _this18 = this;

            this._pass(variableName, function (l) {
                return _this18._gl.uniform4f(l, val.R, val.G, val.B, val.A);
            });
        }
    }, {
        key: "uniformTexture2D",
        value: function uniformTexture2D(variableName, val) {
            if (val.valid) {
                val.register(this._currentTextureRegister);
                this.uniformInt(variableName, this._currentTextureRegister);
                this._currentTextureRegister++;
            } else {
                console.warn("The texture assigned to '" + variableName + "' is not valid.");
            }
        }
    }, {
        key: "onUse",
        value: function onUse() {
            this._currentTextureRegister = 0;
        }
    }, {
        key: "_pass",
        value: function _pass(variableName, act) {
            var location = this.program.findUniformLocation(variableName);
            if (location) {
                act(location);
            }
        }
    }, {
        key: "_passAsArray",
        value: function _passAsArray(variableName, index, act) {
            // tslint:disable-next-line:prefer-template
            var location = this.program.findUniformLocation(variableName + "[" + index + "]");
            if (location) {
                act(location);
            }
        }
    }]);

    return UniformProxy;
}();

exports.default = UniformProxy;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HashCalculator = __webpack_require__(9);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

var _Shader2 = __webpack_require__(79);

var _Shader3 = _interopRequireDefault(_Shader2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provides abstraction of shader instance.
 * If specified shader source was instanced already, delegate actual instance.
 * And counts reference of shader and if that shader was released and the count is zero, this shader resource would be deleted automatically.
 *
 * DO NOT instanciate this class directly. Use getShader method instead.
 */
var ManagedShader = function (_Shader) {
    _inherits(ManagedShader, _Shader);

    function ManagedShader(gl, type, sourceCode, hash) {
        _classCallCheck(this, ManagedShader);

        var _this = _possibleConstructorReturn(this, (ManagedShader.__proto__ || Object.getPrototypeOf(ManagedShader)).call(this, gl, type, sourceCode));

        _this.type = type;
        _this.sourceCode = sourceCode;
        _this.hash = hash;
        _this._referenceCount = 0;
        return _this;
    }
    /**
     * Obtain a reference to shader.
     * @param  {WebGLRenderingContext} gl     [description]
     * @param  {number}                type   [description]
     * @param  {string}                shader [description]
     * @return {ManagedShader}                [description]
     */


    _createClass(ManagedShader, [{
        key: "release",

        /**
         * Release shader instance from reference.
         * Do not call this method dupelicately per a getShader call.
         *
         * That would make this shader disposed unintendedly.
         */
        value: function release() {
            this._referenceCount--;
            if (this._referenceCount === 0) {
                this.destroy();
                ManagedShader._managedShaders.get(this.gl)[this.hash] = void 0;
            }
        }
    }], [{
        key: "getShader",
        value: function getShader(gl, type, shader) {
            if (!ManagedShader._managedShaders.has(gl)) {
                ManagedShader._managedShaders.set(gl, {});
            }
            var shaders = ManagedShader._managedShaders.get(gl);
            var hash = _HashCalculator2.default.calcHash(shader + type);
            if (shaders[hash] === void 0) {
                shaders[hash] = new ManagedShader(gl, type, shader, hash);
            }
            shaders[hash]._referenceCount++;
            return shaders[hash];
        }
    }]);

    return ManagedShader;
}(_Shader3.default);

exports.default = ManagedShader;

ManagedShader._managedShaders = new Map();

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _GLResource2 = __webpack_require__(4);

var _GLResource3 = _interopRequireDefault(_GLResource2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shader = function (_GLResource) {
    _inherits(Shader, _GLResource);

    function Shader(gl, type, sourceCode) {
        _classCallCheck(this, Shader);

        var _this = _possibleConstructorReturn(this, (Shader.__proto__ || Object.getPrototypeOf(Shader)).call(this, gl, gl.createShader(type)));

        _this.type = type;
        _this.sourceCode = sourceCode;
        if (sourceCode) {
            _this.update(sourceCode);
        }
        return _this;
    }

    _createClass(Shader, [{
        key: "update",
        value: function update(source) {
            this.gl.shaderSource(this.resourceReference, source);
            this.gl.compileShader(this.resourceReference);
            if (!this.gl.getShaderParameter(this.resourceReference, WebGLRenderingContext.COMPILE_STATUS)) {
                throw new Error("Compiling shader failed.\nSourceCode:\n" + this._insertLineNumbers(source) + "\n\nErrorCode:" + this.gl.getShaderInfoLog(this.resourceReference));
            }
            this.sourceCode = source;
            this.valid = true;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _get(Shader.prototype.__proto__ || Object.getPrototypeOf(Shader.prototype), "destroy", this).call(this);
            this.gl.deleteShader(this.resourceReference);
        }
    }, {
        key: "_insertLineNumbers",
        value: function _insertLineNumbers(source) {
            source = "1:" + source;
            var lN = 2;
            for (var i = 0; i < source.length; i++) {
                var c = source.charAt(i);
                if (c === "\n") {
                    source = source.substring(0, i + 1) + (lN + ":") + source.substring(i + 1, source.length);
                    i++;
                    lN++;
                }
            }
            return source;
        }
    }]);

    return Shader;
}(_GLResource3.default);

exports.default = Shader;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _header = __webpack_require__(56);

var _header2 = _interopRequireDefault(_header);

var _GLSLPrecisionChecker = __webpack_require__(81);

var _GLSLPrecisionChecker2 = _interopRequireDefault(_GLSLPrecisionChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShaderMixer = function () {
    function ShaderMixer() {
        _classCallCheck(this, ShaderMixer);
    }

    _createClass(ShaderMixer, null, [{
        key: "generate",

        /**
         * Generate shader code from specified macro and codes.
         * @param  {number}  type   WebGLRenderingContext.VERTEX_SHADER or WebGLRenderingContext.FRAGMENT_SHADER
         * @param   macros macro hash to be included
         * @param  {string}  code   shader body(Raw glsl)
         * @return {string}         generated shader code
         */
        value: function generate(type, macros, code, geometry) {
            var shaderTypeMacro = void 0;
            if (type === WebGLRenderingContext.VERTEX_SHADER) {
                shaderTypeMacro = "#define VS\n";
            } else {
                shaderTypeMacro = "#define FS\n";
            }
            return "" + shaderTypeMacro + this._precisionCode(geometry.gl) + ShaderMixer._geometryToAttributeUsedFlags(geometry) + ShaderMixer._macroCode(macros) + _header2.default + "\n/*****BEGINNING OF USER CODE******/\n" + code;
        }
    }, {
        key: "_macroCode",
        value: function _macroCode(macros) {
            var macroCode = "";
            for (var macroName in macros) {
                if (macros[macroName] === void 0) {
                    continue;
                }
                macroCode += "#define " + macroName + " " + macros[macroName] + "\n";
            }
            return macroCode;
        }
    }, {
        key: "_geometryToAttributeUsedFlags",
        value: function _geometryToAttributeUsedFlags(geometry) {
            var macroCode = "";
            for (var attribName in geometry.accessors) {
                macroCode += "#define ATTRIBUTE_" + attribName + "_ENABLED\n";
            }
            return macroCode;
        }
    }, {
        key: "_precisionCode",
        value: function _precisionCode(gl) {
            var result = "";
            var prec = _GLSLPrecisionChecker2.default.get(gl);
            result += ShaderMixer._precisionChunk(prec.vertexInteger, "VERTEX_INTEGER", false);
            result += ShaderMixer._precisionChunk(prec.fragmentInteger, "FRAGMENT_INTEGER", false);
            result += ShaderMixer._precisionChunk(prec.vertexFloat, "VERTEX_FLOAT", true);
            result += ShaderMixer._precisionChunk(prec.fragmentFloat, "FRAGMENT_FLOAT", true);
            return result;
        }
    }, {
        key: "_precisionChunk",
        value: function _precisionChunk(prec, typeName, isFloat) {
            return ShaderMixer._precisionForVariable(prec.lowp, typeName + "_LOWP", isFloat) + ShaderMixer._precisionForVariable(prec.mediump, typeName + "_MEDIUMP", isFloat) + ShaderMixer._precisionForVariable(prec.highp, typeName + "_HIGHP", isFloat);
        }
    }, {
        key: "_precisionForVariable",
        value: function _precisionForVariable(prec, name, isFloat) {
            return "#define VARIABLE_MIN_" + name + " " + prec.rangeMin + "\n#define VARIABLE_MAX_" + name + " " + prec.rangeMax + "\n" + (isFloat ? "#define VARIABLE_PRECISION_" + name + " " + prec.precision + " \n" : "");
        }
    }]);

    return ShaderMixer;
}();

exports.default = ShaderMixer;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GLRelatedRegistryBase = __webpack_require__(3);

var _GLRelatedRegistryBase2 = _interopRequireDefault(_GLRelatedRegistryBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLSLPrecisionChecker = function (_GLRelatedRegistryBas) {
    _inherits(GLSLPrecisionChecker, _GLRelatedRegistryBas);

    function GLSLPrecisionChecker(gl) {
        _classCallCheck(this, GLSLPrecisionChecker);

        var _this = _possibleConstructorReturn(this, (GLSLPrecisionChecker.__proto__ || Object.getPrototypeOf(GLSLPrecisionChecker)).call(this));

        _this.gl = gl;
        _this.vertexInteger = {
            lowp: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT),
            mediump: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT),
            highp: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT)
        };
        _this.fragmentInteger = {
            lowp: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT),
            mediump: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT),
            highp: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT)
        };
        _this.vertexFloat = {
            lowp: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT),
            mediump: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT),
            highp: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT)
        };
        _this.fragmentFloat = {
            lowp: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT),
            mediump: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT),
            highp: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)
        };
        return _this;
    }

    _createClass(GLSLPrecisionChecker, null, [{
        key: "get",
        value: function get(gl) {
            return this.__get(gl, GLSLPrecisionChecker);
        }
    }]);

    return GLSLPrecisionChecker;
}(_GLRelatedRegistryBase2.default);

exports.default = GLSLPrecisionChecker;

GLSLPrecisionChecker.registryName = "GLSLPrecisionChecker";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Container of uniform registerers resolved by UniformResolverRegistry already.
 * @param  {IUniformRegisterOnRegister[]} publicregisterers [description]
 * @param  {IUniformRegisterOnDispose[]}  publicdisposers   [description]
 * @return {[type]}                                         [description]
 */
var UniformResolverContainer = function () {
    function UniformResolverContainer(registerers, disposers, updators) {
        _classCallCheck(this, UniformResolverContainer);

        this.registerers = registerers;
        this.disposers = disposers;
        this.updators = updators;
    }
    /**
     * Resolve uniform variables to pass gpu
     * @param {UniformProxy}      proxy [description]
     * @param {IMaterialArgument} args  [description]
     */


    _createClass(UniformResolverContainer, [{
        key: "resolve",
        value: function resolve(proxy, args) {
            this.registerers.forEach(function (r) {
                return r(proxy, args);
            });
        }
        /**
         * Dispose all resolvers
         */

    }, {
        key: "dispose",
        value: function dispose() {
            this.disposers.forEach(function (d) {
                return d();
            });
        }
        /**
         * Update specified variable
         * @param {string} variableName [description]
         */

    }, {
        key: "update",
        value: function update(passProgram, variableName, newValue, oldValue) {
            if (this.updators[variableName]) {
                this.updators[variableName](passProgram, newValue, oldValue);
            }
        }
    }]);

    return UniformResolverContainer;
}();

exports.default = UniformResolverContainer;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _TextureSizeCalculator = __webpack_require__(12);

var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

var _GLResource2 = __webpack_require__(4);

var _GLResource3 = _interopRequireDefault(_GLResource2);

var _GLUtility = __webpack_require__(38);

var _GLUtility2 = _interopRequireDefault(_GLUtility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Texture = function (_GLResource) {
    _inherits(Texture, _GLResource);

    function Texture(gl, textureType) {
        _classCallCheck(this, Texture);

        var _this = _possibleConstructorReturn(this, (Texture.__proto__ || Object.getPrototypeOf(Texture)).call(this, gl, gl.createTexture()));

        _this.textureType = textureType;
        _this.__format = WebGLRenderingContext.RGBA;
        _this.__type = WebGLRenderingContext.UNSIGNED_BYTE;
        _this._texParameterChanged = true;
        _this._magFilter = WebGLRenderingContext.LINEAR;
        _this._minFilter = WebGLRenderingContext.LINEAR;
        _this._wrapS = WebGLRenderingContext.REPEAT;
        _this._wrapT = WebGLRenderingContext.REPEAT;
        return _this;
    }

    _createClass(Texture, [{
        key: "destroy",
        value: function destroy() {
            _get(Texture.prototype.__proto__ || Object.getPrototypeOf(Texture.prototype), "destroy", this).call(this);
            this.gl.deleteTexture(this.resourceReference);
        }
    }, {
        key: "register",
        value: function register(registerNumber) {
            this.gl.activeTexture(WebGLRenderingContext.TEXTURE0 + registerNumber);
            this.gl.bindTexture(this.textureType, this.resourceReference);
            this.__applyTexParameter();
        }
    }, {
        key: "__getRawPixels",
        value: function __getRawPixels(type, format) {
            var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var width = arguments[4];
            var height = arguments[5];
            var from = arguments[6];

            var bufferCtor = _GLUtility2.default.typeToTypedArrayConstructor(type);
            var buffer = new bufferCtor(width * height * _GLUtility2.default.formatToElementCount(format));
            var frame = this.gl.createFramebuffer();
            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, frame);
            this.gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.COLOR_ATTACHMENT0, from, this.resourceReference, 0);
            if (this.gl.checkFramebufferStatus(WebGLRenderingContext.FRAMEBUFFER) === WebGLRenderingContext.FRAMEBUFFER_COMPLETE) {
                this.gl.readPixels(x, y, width, height, format, type, buffer);
            }
            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
            return buffer;
        }
        /**
         * Ensure specified resource is POT(Power of Two) resource.
         * If speciefied resource was NPOT, resize specified resource to POT.
         * @param image
         */

    }, {
        key: "__ensurePOT",
        value: function __ensurePOT(image) {
            if (image instanceof HTMLImageElement) {
                return this._ensureImagePOT(image);
            } else if (image instanceof HTMLCanvasElement) {
                return this._ensureCanvasPOT(image);
            } else if (image instanceof HTMLVideoElement) {
                return this._ensureVideoPOT(image);
            } else {
                throw new Error("Unsupported resource type");
            }
        }
        /**
         * Check specified min filter requires mip map or not.
         * @param minFilter min filter type
         */

    }, {
        key: "__needMipmap",
        value: function __needMipmap(minFilter) {
            return Texture._filtersNeedsMipmap.indexOf(minFilter) > -1;
        }
        /**
         * Apply texParameteri parameters before updating texture
         */

    }, {
        key: "__applyTexParameter",
        value: function __applyTexParameter() {
            if (!this._texParameterChanged) {
                return;
            }
            this.gl.texParameteri(this.textureType, WebGLRenderingContext.TEXTURE_MIN_FILTER, this._minFilter);
            this.gl.texParameteri(this.textureType, WebGLRenderingContext.TEXTURE_MAG_FILTER, this._magFilter);
            this.gl.texParameteri(this.textureType, WebGLRenderingContext.TEXTURE_WRAP_S, this._wrapS);
            this.gl.texParameteri(this.textureType, WebGLRenderingContext.TEXTURE_WRAP_T, this._wrapT);
            this._texParameterChanged = false;
        }
        // There should be more effective way to resize texture

    }, {
        key: "_ensureImagePOT",
        value: function _ensureImagePOT(img) {
            var w = img.naturalWidth,
                h = img.naturalHeight;
            var size = _TextureSizeCalculator2.default.getPow2Size(w, h);
            if (w !== size.width || h !== size.height) {
                return {
                    result: this._resizeImageOrVideo(img, size.width, size.height),
                    height: size.height,
                    width: size.width
                };
            }
            return {
                result: img,
                width: w,
                height: h
            };
        }
    }, {
        key: "_ensureCanvasPOT",
        value: function _ensureCanvasPOT(canvas) {
            var w = canvas.width;
            var h = canvas.height;
            var size = _TextureSizeCalculator2.default.getPow2Size(w, h);
            if (w !== size.width || h !== size.height) {
                canvas.width = size.width;
                canvas.height = size.height;
                return {
                    result: canvas,
                    width: canvas.width,
                    height: canvas.height
                };
            }
            return {
                result: canvas,
                width: canvas.width,
                height: canvas.height
            };
        }
    }, {
        key: "_ensureVideoPOT",
        value: function _ensureVideoPOT(video) {
            var w = video.videoWidth,
                h = video.videoHeight;
            var size = _TextureSizeCalculator2.default.getPow2Size(w, h); // largest 2^n integer that does not exceed s
            if (w !== size.width || h !== size.height) {
                return {
                    result: this._resizeImageOrVideo(video, size.width, size.height),
                    width: size.width,
                    height: size.height
                };
            }
            return {
                result: video,
                width: w,
                height: h
            };
        }
    }, {
        key: "_resizeImageOrVideo",
        value: function _resizeImageOrVideo(resource, width, height) {
            var canv = Texture._resizerCanvas;
            canv.height = height;
            canv.width = width;
            Texture._resizerContext.drawImage(resource, 0, 0, resource.width, resource.height, 0, 0, width, height);
            return Texture._resizerCanvas;
        }
    }, {
        key: "magFilter",
        get: function get() {
            return this._magFilter;
        },
        set: function set(filter) {
            if (this._magFilter !== filter) {
                this._texParameterChanged = true;
                this._magFilter = filter;
            }
        }
    }, {
        key: "minFilter",
        get: function get() {
            return this._minFilter;
        },
        set: function set(filter) {
            if (this._minFilter !== filter) {
                this._texParameterChanged = true;
                this._minFilter = filter;
                this.__ensureMipmap();
            }
        }
    }, {
        key: "wrapS",
        get: function get() {
            return this._wrapS;
        },
        set: function set(filter) {
            if (this._wrapS !== filter) {
                this._texParameterChanged = true;
                this._wrapS = filter;
            }
        }
    }, {
        key: "wrapT",
        get: function get() {
            return this._wrapT;
        },
        set: function set(filter) {
            if (this._wrapT !== filter) {
                this._texParameterChanged = true;
                this._wrapT = filter;
            }
        }
    }, {
        key: "format",
        get: function get() {
            return this.__format;
        }
    }, {
        key: "type",
        get: function get() {
            return this.__type;
        }
    }]);

    return Texture;
}(_GLResource3.default);

exports.default = Texture;

Texture._resizerCanvas = document.createElement("canvas");
Texture._resizerContext = Texture._resizerCanvas.getContext("2d");
/**
* ミップマップの更新が必要なフィルタ
* @type {number[]}
*/
Texture._filtersNeedsMipmap = [WebGLRenderingContext.LINEAR_MIPMAP_LINEAR, WebGLRenderingContext.LINEAR_MIPMAP_NEAREST, WebGLRenderingContext.NEAREST_MIPMAP_LINEAR, WebGLRenderingContext.NEAREST_MIPMAP_NEAREST];

/***/ }),
/* 84 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Rectangle:undefined;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * フルスクリーン状態を管理するコンポーネント
 * Grimoire.jsによって管理されているキャンバス(正確にはその親のコンテナ)のフルスクリーン状態等を管理します。
 * (他の要素をフルスクリーン化することも可能ですが、通常このGrimoire.jsによって生成されるキャンバスを含むDOM要素に対して用いられます。)
 * また、一部の古いブラウザでは動作しない機能であることに注意してください。
 * また、`fullscreen`属性は必ず マウスのイベントなどのユーザーのインタラクションを伴うイベントからの呼び出しで **動的に** trueにされる必要があります。
 * 最初からtrueに設定して初期状態でキャンバスをフルスクリーン状態にすることはWebAPIの制約上できません。
 */
var FullscreenComponent = function (_Component) {
    _inherits(FullscreenComponent, _Component);

    function FullscreenComponent() {
        _classCallCheck(this, FullscreenComponent);

        var _this = _possibleConstructorReturn(this, (FullscreenComponent.__proto__ || Object.getPrototypeOf(FullscreenComponent)).apply(this, arguments));

        _this._fullscreen = false;
        return _this;
    }

    _createClass(FullscreenComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.getAttributeRaw("fullscreen").watch(function (attr) {
                if (_this2._fullscreen === attr) {
                    return;
                }
                _this2._fullscreen = attr;
                _this2._switchFullscreen();
            });
        }
    }, {
        key: "_switchFullscreen",
        value: function _switchFullscreen() {
            if (this._fullscreen) {
                var target = this.getAttribute("fullscreenTarget");
                if (target) {
                    var queriedTarget = document.querySelectorAll(target);
                    if (queriedTarget[0]) {
                        this.requestFullscreen(queriedTarget[0]);
                    } else {
                        console.warn("Specified fullscreenTarget was not found on HTML dom tree");
                    }
                } else {
                    this.requestFullscreen(this.companion.get("canvasContainer"));
                }
            } else {
                this.exitFullscreen();
            }
        }
    }, {
        key: "requestFullscreen",
        value: function requestFullscreen(target) {
            if (target.webkitRequestFullscreen) {
                target.webkitRequestFullscreen(); // Chrome15+, Safari5.1+, Opera15+
            } else if (target["mozRequestFullScreen"]) {
                target["mozRequestFullScreen"](); // FF10+
            } else if (target["msRequestFullscreen"]) {
                target["msRequestFullscreen"](); // IE11+
            } else if (target.requestFullscreen) {
                target.requestFullscreen(); // HTML5 Fullscreen API仕様
            } else {
                console.error("ご利用のブラウザはフルスクリーン操作に対応していません");
                return;
            }
        }
        /*フルスクリーン終了用ファンクション*/

    }, {
        key: "exitFullscreen",
        value: function exitFullscreen() {
            if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen(); // Chrome15+, Safari5.1+, Opera15+
            } else if (document["mozCancelFullScreen"]) {
                document["mozCancelFullScreen"](); // FF10+
            } else if (document["msExitFullscreen"]) {
                document["msExitFullscreen"](); // IE11+
            } else if (document["cancelFullScreen"]) {
                document["cancelFullScreen"](); // Gecko:FullScreenAPI仕様
            } else if (document.exitFullscreen) {
                document.exitFullscreen(); // HTML5 Fullscreen API仕様
            }
        }
    }]);

    return FullscreenComponent;
}(_Component3.default);

exports.default = FullscreenComponent;

FullscreenComponent.attributes = {
    /**
     * フルスクリーン状態かどうか
     *
     * このフラグをtrueにする際は、**必ず**、マウスイベントなどのユーザーのインタラクションを伴うイベントからの呼び出しで変更されなければなりません。
     *
     * したがって、GOMLで初期状態からこのフラグをtrueにすることはできません。
     */
    fullscreen: {
        converter: "Boolean",
        default: false
    },
    /**
     * フルスクリーンにするDOM要素へのクエリ
     *
     * nullが指定された場合、キャンバスの親要素が用いられます。
     */
    fullscreenTarget: {
        converter: "String",
        default: null
    }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _GeometryFactory = __webpack_require__(21);

var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * ジオメトリを生成するためのコンポーネント
 * `type`属性に指定されたタイプのジオメトリを生成して、`name`属性に指定された名前で利用できる形にして登録します。
 * このコンポーネントは`type`属性に応じて、**動的** に属性が増えることに気をつけてください。
 */
var GeometryComponent = function (_Component) {
    _inherits(GeometryComponent, _Component);

    function GeometryComponent() {
        _classCallCheck(this, GeometryComponent);

        return _possibleConstructorReturn(this, (GeometryComponent.__proto__ || Object.getPrototypeOf(GeometryComponent)).apply(this, arguments));
    }

    _createClass(GeometryComponent, [{
        key: "$mount",
        value: function $mount() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var type, gf, attrs, geometryArgument, key, generator, gr, name;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                type = this.getAttribute("type");

                                if (!type) {
                                    _context.next = 15;
                                    break;
                                }

                                gf = _GeometryFactory2.default.get(this.companion.get("gl"));
                                attrs = _GeometryFactory2.default.factoryArgumentDeclarations[type];
                                geometryArgument = {};

                                for (key in attrs) {
                                    this.__addAttribute(key, attrs[key]);
                                    geometryArgument[key] = this.getAttribute(key);
                                }
                                generator = gf.instanciate(type, geometryArgument);
                                gr = this.companion.get("GeometryRegistory");
                                name = this.getAttribute("name");

                                if (name) {
                                    _context.next = 11;
                                    break;
                                }

                                throw new Error("Name was not specified");

                            case 11:
                                gr.addGeometry(name, generator);
                                _context.next = 14;
                                return generator;

                            case 14:
                                this.geometry = _context.sent;

                            case 15:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return GeometryComponent;
}(_Component3.default);

exports.default = GeometryComponent;

GeometryComponent.attributes = {
    /**
     * 生成するプリミティブのタイプ
     *
     * `GeometryFactory`に登録されたプリミティブのジェネレーターの名前を指します。
     * この指定する名前によって、動的に属性が増えることに気をつけてください。
     * また、増えたジオメトリの属性は動的に操作できないことに気をつけてください。
     */
    type: {
        converter: "String",
        default: null
    },
    /**
     * ジオメトリにつける名前
     *
     * `GeometryConverter`によって取得される際に利用されるジオメトリ名です。
     * もし、`quad`など事前に登録されたジオメトリを指定した場合、そのジオメトリを上書きすることができます。
     */
    name: {
        converter: "String",
        default: null
    }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _NameResolver = __webpack_require__(14);

var _NameResolver2 = _interopRequireDefault(_NameResolver);

var _GeometryFactory = __webpack_require__(21);

var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ジオメトリを管理するコンポーネント
 * あまりユーザーが直接操作することはありません。
 */
var GeometryRegistoryComponent = function (_Component) {
    _inherits(GeometryRegistoryComponent, _Component);

    function GeometryRegistoryComponent() {
        _classCallCheck(this, GeometryRegistoryComponent);

        var _this = _possibleConstructorReturn(this, (GeometryRegistoryComponent.__proto__ || Object.getPrototypeOf(GeometryRegistoryComponent)).apply(this, arguments));

        _this._geometryResolver = new _NameResolver2.default();
        return _this;
    }

    _createClass(GeometryRegistoryComponent, [{
        key: "$awake",
        value: function $awake() {
            this.companion.set(this.name, this);
            var factory = _GeometryFactory2.default.get(this.companion.get("gl"));
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.getAttribute("defaultGeometry")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var geometry = _step.value;

                    this.addGeometry(geometry, factory.instanciateAsDefault(geometry));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "addGeometry",
        value: function addGeometry(name, geometry) {
            this._geometryResolver.register(name, geometry);
        }
    }, {
        key: "getGeometry",
        value: function getGeometry(name) {
            return this._geometryResolver.get(name);
        }
    }]);

    return GeometryRegistoryComponent;
}(_Component3.default);

exports.default = GeometryRegistoryComponent;

GeometryRegistoryComponent.attributes = {
    /**
     * デフォルトで生成するジオメトリの種類
     */
    defaultGeometry: {
        converter: "StringArray",
        default: ["quad", "cube", "sphere"]
    }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    Background: { priorty: 1000 },
    NoAlpha: { priorty: 2000 },
    UseAlpha: { priorty: 3000, descending: true },
    NoDepth: { priorty: 4000, descending: true },
    Overlay: { priorty: 5000, descending: true }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _NameResolver = __webpack_require__(14);

var _NameResolver2 = _interopRequireDefault(_NameResolver);

var _MaterialFactory = __webpack_require__(1);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * マテリアル設定ファイルを読み込むためのコンポーネント
 */
var MaterialImporterComponent = function (_Component) {
    _inherits(MaterialImporterComponent, _Component);

    function MaterialImporterComponent() {
        _classCallCheck(this, MaterialImporterComponent);

        return _possibleConstructorReturn(this, (MaterialImporterComponent.__proto__ || Object.getPrototypeOf(MaterialImporterComponent)).apply(this, arguments));
    }

    _createClass(MaterialImporterComponent, [{
        key: "$awake",
        value: function $awake() {
            this.getAttributeRaw("typeName").watch(function () {
                console.warn("Changeing 'typeName' on MaterialImporter makes no sense. This change won't affect anything.");
            });
            this.getAttributeRaw("src").watch(function () {
                console.warn("Changeing 'src' on MaterialImporter makes no sense. This change won't affect anything.");
            });
            if (!this.getAttribute("typeName") || !this.getAttribute("src")) {
                throw new Error("type or src cannot be null in material importer");
            } else {
                var typeName = this.getAttribute("typeName");
                if (_MaterialFactory2.default.getMaterialStatus(typeName) !== _NameResolver2.default.UNLOADED) {
                    throw new Error("A material type '" + typeName + "' is already loaded.");
                }
                _MaterialFactory2.default.addSORTMaterialFromURL(this.getAttribute("typeName"), this.getAttribute("src"));
            }
        }
    }]);

    return MaterialImporterComponent;
}(_Component3.default);

exports.default = MaterialImporterComponent;

MaterialImporterComponent.attributes = {
    /**
     * マテリアル名として登録される名前
     */
    typeName: {
        default: null,
        converter: "String"
    },
    /**
     * 読み込み先のファイルパス
     */
    src: {
        default: null,
        converter: "String"
    }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grimoirejs = __webpack_require__(5);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _GLM = __webpack_require__(36);

var _GLM2 = _interopRequireDefault(_GLM);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _MaterialContainerComponent = __webpack_require__(22);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _SceneComponent = __webpack_require__(19);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _TransformComponent = __webpack_require__(8);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var vec3 = _GLM2.default.vec3;
/**
 * シーン中に存在するメッシュ一つあたりのレンダリングを司るコンポーネント
 * このメッシュが、対象となるノードの`Transform`や描画に用いる`Camera`、マテリアルなどを考慮して実際のレンダリングを行います。
 */

var MeshRenderer = function (_Component) {
    _inherits(MeshRenderer, _Component);

    function MeshRenderer() {
        _classCallCheck(this, MeshRenderer);

        var _this = _possibleConstructorReturn(this, (MeshRenderer.__proto__ || Object.getPrototypeOf(MeshRenderer)).apply(this, arguments));

        _this.renderArgs = {};
        _this._priortyCalcCache = new Float32Array(3);
        return _this;
    }
    /**
    * Find scene tag recursively.
    * @param  {GomlNode}       node [the node to searching currently]
    * @return {SceneComponent}      [the scene component found]
    */


    _createClass(MeshRenderer, [{
        key: "getRenderingPriorty",
        value: function getRenderingPriorty(camera, technique) {
            if (!this.geometryInstance || !this._materialContainer.material.techniques[technique]) {
                return Number.NEGATIVE_INFINITY;
            }
            vec3.add(this._priortyCalcCache, camera.transform.globalPosition.rawElements, this.geometryInstance.aabb.Center.rawElements);
            vec3.sub(this._priortyCalcCache, this._priortyCalcCache, this._transformComponent.globalPosition.rawElements);
            return this._materialContainer.getDrawPriorty(vec3.sqrLen(this._priortyCalcCache), technique); // Obtains distance between camera and center of aabb
        }
    }, {
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.__bindAttributes();
            this.getAttributeRaw("geometry").watch(function () {
                return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.geometry;

                                case 2:
                                    this.geometryInstance = _context.sent;

                                case 3:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
            }, true);
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this._transformComponent = this.node.getComponent(_TransformComponent2.default);
            this._materialContainer = this.node.getComponent(_MaterialContainerComponent2.default);
            this._containedScene = MeshRenderer._findContainedScene(this.node);
            this._containedScene.queueRegistory.addRenderable(this);
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            this._containedScene.queueRegistory.removeRenderable(this);
        }
    }, {
        key: "render",
        value: function render(args) {
            if (!this.node.isActive || !this.enabled || this.layer !== args.layer) {
                return;
            }
            if (!this.geometryInstance || !args.material && !this._materialContainer.material) {
                return; // material is not instanciated yet.
            }
            var renderArgs = {
                indexGroup: this.indexGroup,
                geometry: this.geometryInstance,
                camera: args.camera,
                transform: this._transformComponent,
                viewport: args.viewport,
                drawCount: this.drawCount,
                drawOffset: this.drawOffset,
                sceneDescription: args.sceneDescription,
                rendererDescription: args.rendererDescription,
                technique: args.technique,
                renderable: this
            };
            if (_grimoirejs2.default.debug && window["spector"]) {
                window["spector"].setMarker("Mesh renderer:" + this.node.id);
            }
            this._materialContainer.material.draw(renderArgs);
            this.node.emit("render", args);
        }
    }, {
        key: "setRenderableIndex",
        value: function setRenderableIndex(index) {
            this.index = index;
        }
    }], [{
        key: "_findContainedScene",
        value: function _findContainedScene(node) {
            if (node.parent) {
                var scene = node.parent.getComponent(_SceneComponent2.default);
                if (scene) {
                    return scene;
                } else {
                    return MeshRenderer._findContainedScene(node.parent);
                }
            } else {
                return null;
            }
        }
    }]);

    return MeshRenderer;
}(_Component3.default);

exports.default = MeshRenderer;

MeshRenderer.attributes = {
    /**
     * 描画に用いる形状データ
     */
    geometry: {
        converter: "Geometry",
        default: "quad"
    },
    /**
     * 描画に用いるインデックスバッファ名
     */
    indexGroup: {
        converter: "String",
        default: "default"
    },
    /**
     * このメッシュが属するレイヤー
     *
     * 詳しくは`render-scene`ノードを参考にしてください。
     */
    layer: {
        converter: "String",
        default: "default"
    },
    /**
     * 描画するインデックスの個数
     *
     * デフォルトの状態でジオメトリの全インデックスを描画する
     */
    drawCount: {
        converter: "Number",
        default: Number.MAX_VALUE
    },
    /**
     * 描画するジオメトリのインデックスのオフセット
     */
    drawOffset: {
        converter: "Number",
        default: 0
    }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Matrix = __webpack_require__(17);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _Quaternion = __webpack_require__(121);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _TransformComponent = __webpack_require__(8);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouseCameraControlComponent = function (_Component) {
    _inherits(MouseCameraControlComponent, _Component);

    function MouseCameraControlComponent() {
        _classCallCheck(this, MouseCameraControlComponent);

        var _this = _possibleConstructorReturn(this, (MouseCameraControlComponent.__proto__ || Object.getPrototypeOf(MouseCameraControlComponent)).apply(this, arguments));

        _this._updated = false;
        _this._lastCenter = null;
        _this._lastScreenPos = null;
        _this._lastPinchDistance = null;
        _this._xsum = 0;
        _this._ysum = 0;
        _this._d = _Vector2.default.Zero;
        return _this;
    }

    _createClass(MouseCameraControlComponent, [{
        key: "$awake",
        value: function $awake() {
            this.__bindAttributes();
            this._listeners = {
                mousemove: this._mouseMove.bind(this),
                touchmove: this._touchMove.bind(this),
                touchstart: this._touchStart.bind(this),
                touchend: this._touchEnd.bind(this),
                contextmenu: this._contextMenu.bind(this),
                wheel: this._mouseWheel.bind(this)
            };
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this._transform = this.node.getComponent(_TransformComponent2.default);
            var canvasElement = this.companion.get("canvasElement");
            canvasElement.addEventListener("mousemove", this._listeners.mousemove);
            canvasElement.addEventListener("touchmove", this._listeners.touchmove);
            canvasElement.addEventListener("touchstart", this._listeners.touchstart);
            canvasElement.addEventListener("touchend", this._listeners.touchend);
            canvasElement.addEventListener("contextmenu", this._listeners.contextmenu);
            canvasElement.addEventListener("wheel", this._listeners.wheel);
            this._lastScreenPos = null;
            this._xsum = 0;
            this._ysum = 0;
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            var canvasElement = this.companion.get("canvasElement");
            canvasElement.removeEventListener("mousemove", this._listeners.mousemove);
            canvasElement.removeEventListener("touchmove", this._listeners.touchmove);
            canvasElement.removeEventListener("touchstart", this._listeners.touchstart);
            canvasElement.removeEventListener("touchend", this._listeners.touchend);
            canvasElement.removeEventListener("contextmenu", this._listeners.contextmenu);
            canvasElement.removeEventListener("wheel", this._listeners.wheel);
        }
    }, {
        key: "$initialized",
        value: function $initialized() {
            var look = _Vector2.default.normalize(this.center.subtractWith(this._transform.position));
            var g = _Quaternion2.default.fromToRotation(this._transform.forward, look).normalize();
            this._transform.rotation = g;
            this._initialRotation = g;
            this._initialDirection = _Vector2.default.copy(this._transform.forward.negateThis()).normalized;
            if (this.distance !== null) {
                this._transform.position = this.center.addWith(this._initialDirection.multiplyWith(this.distance));
            } else {
                this.distance = this._transform.position.subtractWith(this.center).magnitude;
            }
        }
    }, {
        key: "$update",
        value: function $update() {
            if (this.isActive && this._updated || !this._lastCenter || !this.center.equalWith(this._lastCenter)) {
                this._updated = false;
                this._lastCenter = this.center;
                // rotate excution
                var rotationVartical = _Quaternion2.default.angleAxis(-this._xsum * this.rotateSpeed * 0.01, _Vector2.default.YUnit);
                var rotationHorizontal = _Quaternion2.default.angleAxis(-this._ysum * this.rotateSpeed * 0.01, _Vector2.default.XUnit);
                var rotation = _Quaternion2.default.multiply(rotationVartical, rotationHorizontal);
                var rotationMat = _Matrix2.default.rotationQuaternion(rotation);
                var direction = _Matrix2.default.transformNormal(rotationMat, this._initialDirection);
                this._transform.position = this.center.addWith(this._d).addWith(_Vector2.default.normalize(direction).multiplyWith(this.distance));
                this._transform.rotation = rotation;
                this._transform.rotation = _Quaternion2.default.multiply(rotation, this._initialRotation);
            }
        }
    }, {
        key: "_contextMenu",
        value: function _contextMenu(m) {
            if (!this.isActive) {
                return;
            }
            m.preventDefault();
        }
    }, {
        key: "_touchStart",
        value: function _touchStart(m) {
            if (!this.isActive) {
                return;
            }
            if (m.touches.length >= 2) {
                this._lastPinchDistance = Math.pow(Math.pow(m.touches[0].pageX - m.touches[1].pageX, 2) + Math.pow(m.touches[0].pageY - m.touches[1].pageY, 2), 0.5);
            }
            this._lastScreenPos = null;
            m.preventDefault();
        }
    }, {
        key: "_touchEnd",
        value: function _touchEnd(m) {
            if (!this.isActive) {
                return;
            }
        }
    }, {
        key: "_mouseMove",
        value: function _mouseMove(m) {
            if (!this.isActive) {
                return;
            }
            var x = m.screenX;
            var y = m.screenY;
            if (this._lastScreenPos === null) {
                this._lastScreenPos = { x: x, y: y };
                return;
            }
            if (this._checkButtonPress(m, false)) {
                m.preventDefault();
                this._move(x, y);
            } else if (this._checkButtonPress(m, true)) {
                m.preventDefault();
                this._rotate(x, y);
            }
            this._lastScreenPos = { x: x, y: y };
        }
    }, {
        key: "_touchMove",
        value: function _touchMove(m) {
            if (!this.isActive) {
                return;
            }
            switch (m.touches.length) {
                case 1:
                    var x = m.touches[0].pageX;
                    var y = m.touches[0].pageY;
                    if (this._lastScreenPos === null) {
                        this._lastScreenPos = { x: x, y: y };
                        return;
                    }
                    m.preventDefault();
                    this._rotate(x, y);
                    this._lastScreenPos = { x: x, y: y };
                    break;
                case 2:
                    if (this.getAttribute("preventScroll")) {
                        m.preventDefault();
                    }
                    var scale = Math.pow(Math.pow(m.touches[0].pageX - m.touches[1].pageX, 2) + Math.pow(m.touches[0].pageY - m.touches[1].pageY, 2), 0.5);
                    this._zoom((this._lastPinchDistance - scale) * 0.5);
                    this._lastPinchDistance = scale;
                    break;
                default:
            }
        }
    }, {
        key: "_mouseWheel",
        value: function _mouseWheel(m) {
            if (!this.isActive) {
                return;
            }
            if (this.getAttribute("preventScroll")) {
                m.preventDefault();
            }
            this._zoom(m.deltaY);
        }
    }, {
        key: "_checkButtonPress",
        value: function _checkButtonPress(m, isRight) {
            if ("buttons" in m) {
                if (isRight) {
                    return (m.buttons & 1) > 0;
                } else {
                    return (m.buttons & 2) > 0;
                }
            } else {
                if (isRight) {
                    return m.which === 1;
                } else {
                    return m.which === 3;
                }
            }
        }
    }, {
        key: "_move",
        value: function _move(x, y) {
            var diffX = x - this._lastScreenPos.x;
            var diffY = y - this._lastScreenPos.y;
            var moveX = -diffX * this.moveSpeed * 0.01;
            var moveY = diffY * this.moveSpeed * 0.01;
            this._d = this._d.addWith(this._transform.right.multiplyWith(moveX)).addWith(this._transform.up.multiplyWith(moveY));
            this._updated = true;
        }
    }, {
        key: "_rotate",
        value: function _rotate(x, y) {
            var diffX = x - this._lastScreenPos.x;
            var diffY = y - this._lastScreenPos.y;
            this._xsum += diffX;
            this._ysum += diffY;
            this._ysum = Math.min(Math.PI * 50, this._ysum);
            this._ysum = Math.max(-Math.PI * 50, this._ysum);
            this._updated = true;
        }
    }, {
        key: "_zoom",
        value: function _zoom(delta) {
            var dir = _Vector2.default.subtract(this._transform.position, this.center).normalized;
            var moveDist = delta * this.zoomSpeed * 0.05;
            this.distance = Math.max(1, this.distance + moveDist);
            this._transform.position = this.center.addWith(dir.multiplyWith(this.distance));
        }
    }]);

    return MouseCameraControlComponent;
}(_Component3.default);

exports.default = MouseCameraControlComponent;

MouseCameraControlComponent.attributes = {
    rotateSpeed: {
        default: 1,
        converter: "Number"
    },
    zoomSpeed: {
        default: 1,
        converter: "Number"
    },
    moveSpeed: {
        default: 1,
        converter: "Number"
    },
    center: {
        default: "0,0,0",
        converter: "Position",
        lazy: true
    },
    distance: {
        default: null,
        converter: "Number"
    },
    preventScroll: {
        default: true,
        converter: "Boolean"
    }
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasRenderingTarget = __webpack_require__(41);

var _CanvasRenderingTarget2 = _interopRequireDefault(_CanvasRenderingTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Rendering target of part of canvas.
 * This rendering target limit a region of canvas by viewport.
 */
var CanvasRegionRenderingTarget = function (_CanvasRenderingTarge) {
    _inherits(CanvasRegionRenderingTarget, _CanvasRenderingTarge);

    function CanvasRegionRenderingTarget(gl) {
        _classCallCheck(this, CanvasRegionRenderingTarget);

        return _possibleConstructorReturn(this, (CanvasRegionRenderingTarget.__proto__ || Object.getPrototypeOf(CanvasRegionRenderingTarget)).call(this, gl));
    }

    _createClass(CanvasRegionRenderingTarget, [{
        key: "setViewport",
        value: function setViewport(viewport) {
            this._viewport = viewport;
        }
    }, {
        key: "getViewport",
        value: function getViewport() {
            return this._viewport;
        }
    }, {
        key: "__configureClearScissor",
        value: function __configureClearScissor() {
            this.gl.enable(WebGLRenderingContext.SCISSOR_TEST);
            var vp = this.getViewport();
            this.gl.scissor(vp.Left, vp.Bottom, vp.Width, vp.Height);
        }
    }]);

    return CanvasRegionRenderingTarget;
}(_CanvasRenderingTarget2.default);

exports.default = CanvasRegionRenderingTarget;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(123);

var _Color2 = _interopRequireDefault(_Color);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _MaterialFactory = __webpack_require__(1);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _LoopManagerComponent = __webpack_require__(16);

var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 全レンダラーを管理するためのコンポーネント
 */
var RendererManagerComponent = function (_Component) {
    _inherits(RendererManagerComponent, _Component);

    function RendererManagerComponent() {
        _classCallCheck(this, RendererManagerComponent);

        return _possibleConstructorReturn(this, (RendererManagerComponent.__proto__ || Object.getPrototypeOf(RendererManagerComponent)).apply(this, arguments));
    }

    _createClass(RendererManagerComponent, [{
        key: "$awake",
        value: function $awake() {
            this.getAttributeRaw("bgColor").boundTo("_bgColor");
            this.getAttributeRaw("clearDepth").boundTo("_clearDepth");
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this.gl = this.companion.get("gl");
        }
    }, {
        key: "$treeInitialized",
        value: function $treeInitialized() {
            this.node.getComponent(_LoopManagerComponent2.default).register(this.onloop.bind(this), 1000);
            if (this.getAttribute("complementRenderer") && this.node.getChildrenByNodeName("renderer").length === 0) {
                this.node.addChildByName("renderer", {});
            }
            this._importSortFromHTML();
        }
    }, {
        key: "onloop",
        value: function onloop(timer) {
            if (this.enabled) {
                var c = this._bgColor;
                this.gl.clearColor(c.R, c.G, c.B, c.A);
                this.gl.clearDepth(this._clearDepth);
                this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
                this.node.broadcastMessage(1, "renderViewport", {
                    timer: timer
                });
            }
        }
    }, {
        key: "_importSortFromHTML",
        value: function _importSortFromHTML() {
            if (RendererManagerComponent._sortImportedFromHTML) {
                return;
            }
            var scripts = document.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++) {
                i = i;
                var script = scripts.item(i);
                if (script.getAttribute("type") === "text/sort") {
                    var typeName = script.getAttribute("typeName");
                    if (!typeName) {
                        throw new Error("Every script tag with 'text/sort' type should have typeName attribute to specify the name to be registered as a material.");
                    }
                    if (script.getAttribute("src")) {
                        _MaterialFactory2.default.addSORTMaterialFromURL(typeName, script.getAttribute("src"));
                    } else {
                        _MaterialFactory2.default.addSORTMaterial(typeName, script.innerText);
                    }
                }
            }
            RendererManagerComponent._sortImportedFromHTML = true;
        }
    }]);

    return RendererManagerComponent;
}(_Component3.default);

exports.default = RendererManagerComponent;

RendererManagerComponent.attributes = {
    /**
     * キャンバスの初期化色
     */
    bgColor: {
        default: new _Color2.default(0, 0, 0, 0),
        converter: "Color4"
    },
    /**
     * キャンバスの初期化深度値
     */
    clearDepth: {
        default: 1.0,
        converter: "Number"
    },
    /**
     * goml内にrendererが一つもなかった場合に自動的に補完するかどうか
     */
    complementRenderer: {
        default: true,
        converter: "Boolean"
    }
};
RendererManagerComponent._sortImportedFromHTML = false;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _OffscreenRenderingTarget = __webpack_require__(96);

var _OffscreenRenderingTarget2 = _interopRequireDefault(_OffscreenRenderingTarget);

var _RenderingTargetRegistry = __webpack_require__(24);

var _RenderingTargetRegistry2 = _interopRequireDefault(_RenderingTargetRegistry);

var _RenderBufferUpdator = __webpack_require__(43);

var _RenderBufferUpdator2 = _interopRequireDefault(_RenderBufferUpdator);

var _TextureContainer = __webpack_require__(13);

var _TextureContainer2 = _interopRequireDefault(_TextureContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Register specified buffer to rendering target.
 * If there were no child buffer node, this component will instanciate default buffers.
 */
var RenderingTargetComponent = function (_Component) {
    _inherits(RenderingTargetComponent, _Component);

    function RenderingTargetComponent() {
        _classCallCheck(this, RenderingTargetComponent);

        return _possibleConstructorReturn(this, (RenderingTargetComponent.__proto__ || Object.getPrototypeOf(RenderingTargetComponent)).apply(this, arguments));
    }

    _createClass(RenderingTargetComponent, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            var name = this.getAttribute("name");
            if (!name) {
                throw new Error("Rendering target must have name");
            }
            if (this.node.children.length === 0) {
                this._instanciateDefaultBuffers(name);
            }
            setImmediate(function () {
                var textures = _this2.node.getComponentsInChildren(_TextureContainer2.default);
                var texture = textures[0].texture;
                var renderBuffer = _this2.node.getComponentsInChildren(_RenderBufferUpdator2.default);
                _this2.renderingTarget = new _OffscreenRenderingTarget2.default(_this2.companion.get("gl"), [texture], renderBuffer[0].buffer);
                _RenderingTargetRegistry2.default.get(_this2.companion.get("gl")).setRenderingTarget(name, _this2.renderingTarget);
            });
        }
        /**
         * Generate default buffers as children node
         * @param name
         */

    }, {
        key: "_instanciateDefaultBuffers",
        value: function _instanciateDefaultBuffers(name) {
            this.node.addChildByName("color-buffer", {
                name: name,
                format: this.getAttribute("colorBufferFormat"),
                type: this.getAttribute("colorBufferType"),
                resizerType: this.getAttribute("resizerType")
            });
            if (this.getAttribute("depthBufferType") !== 0) {
                this.node.addChildByName("render-buffer", {
                    name: name,
                    type: this.getAttribute("depthBufferType"),
                    resizerType: this.getAttribute("resizerType")
                });
            }
        }
    }]);

    return RenderingTargetComponent;
}(_Component3.default);

exports.default = RenderingTargetComponent;

RenderingTargetComponent.attributes = {
    name: {
        converter: "String",
        default: null
    },
    colorBufferFormat: {
        converter: "Enum",
        default: WebGLRenderingContext.RGBA,
        table: {
            RGBA: WebGLRenderingContext.RGBA,
            RGB: WebGLRenderingContext.RGB,
            ALPHA: WebGLRenderingContext.ALPHA,
            LUMINANCE: WebGLRenderingContext.LUMINANCE,
            LUMINANCE_ALPHA: WebGLRenderingContext.LUMINANCE_ALPHA,
            SRGB_EXT: WebGLRenderingContext["SRGB_EXT"],
            SRGB_ALPHA_EXT: WebGLRenderingContext["SRGB_ALPHA_EXT"],
            DEPTH_COMPONENT: WebGLRenderingContext["DEPTH_COMPONENT"],
            DEPTH_STENCIL: WebGLRenderingContext["DEPTH_STENCIL"]
        }
    },
    colorBufferType: {
        converter: "Enum",
        default: WebGLRenderingContext.UNSIGNED_BYTE,
        table: {
            UNSIGNED_BYTE: WebGLRenderingContext.UNSIGNED_BYTE,
            UNSIGNED_SHORT_5_6_5: WebGLRenderingContext.UNSIGNED_SHORT_5_6_5,
            UNSIGNED_SHORT_4_4_4_4: WebGLRenderingContext.UNSIGNED_SHORT_4_4_4_4,
            UNSIGNED_SHORT_5_5_5_1: WebGLRenderingContext.UNSIGNED_SHORT_5_5_5_1,
            UNSIGNED_SHORT: WebGLRenderingContext.UNSIGNED_SHORT,
            UNSIGNED_INT: WebGLRenderingContext.UNSIGNED_INT,
            FLOAT: WebGLRenderingContext.FLOAT
        }
    },
    depthBufferType: {
        converter: "Enum",
        default: WebGLRenderingContext.DEPTH_COMPONENT16,
        table: {
            NONE: 0,
            DEPTH_COMPONENT16: WebGLRenderingContext.DEPTH_COMPONENT16
        }
    },
    resizerType: {
        converter: "String",
        default: "ViewportSize"
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95).setImmediate))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(124);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FrameBuffer = __webpack_require__(42);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _Viewport = __webpack_require__(6);

var _Viewport2 = _interopRequireDefault(_Viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Render target contains texture and render buffer
 */
var OffscreenRenderTarget = function () {
    function OffscreenRenderTarget(gl, textures, depthBuffer) {
        _classCallCheck(this, OffscreenRenderTarget);

        this.gl = gl;
        this.textures = textures;
        this.depthBuffer = depthBuffer;
        if (textures.length === 0) {
            throw new Error("Textures must contain 1 texture at least");
        }
        this.fbo = new _FrameBuffer2.default(gl);
        for (var i = 0; i < textures.length; i++) {
            this.fbo.update(this.textures[i], 0, i);
        }
        this.fbo.update(depthBuffer);
    }

    _createClass(OffscreenRenderTarget, [{
        key: "beforeDraw",
        value: function beforeDraw(clearFlag, color, depth) {
            this.bind();
            if (clearFlag !== 0) {
                var clearTarget = 0;
                if ((clearFlag & WebGLRenderingContext.COLOR_BUFFER_BIT) !== 0 && color) {
                    this.gl.clearColor.apply(this.gl, color);
                    clearTarget |= WebGLRenderingContext.COLOR_BUFFER_BIT;
                }
                if ((clearFlag & WebGLRenderingContext.DEPTH_BUFFER_BIT) !== 0 && depth !== null && this.depthBuffer) {
                    this.gl.clearDepth(depth);
                    clearTarget |= WebGLRenderingContext.DEPTH_BUFFER_BIT;
                }
                if (clearTarget !== 0) {
                    this.gl.clear(clearTarget);
                }
            }
            this.getViewport().configure(this.gl);
        }
    }, {
        key: "getBufferWidth",
        value: function getBufferWidth() {
            return this.texture.width;
        }
    }, {
        key: "getBufferHeight",
        value: function getBufferHeight() {
            return this.texture.height;
        }
    }, {
        key: "getViewport",
        value: function getViewport() {
            return new _Viewport2.default(0, 0, this.getBufferWidth(), this.getBufferHeight());
        }
    }, {
        key: "bind",
        value: function bind() {
            this.fbo.bind();
        }
    }, {
        key: "texture",
        get: function get() {
            return this.textures[0];
        }
    }]);

    return OffscreenRenderTarget;
}();

exports.default = OffscreenRenderTarget;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

var _FrameBuffer = __webpack_require__(42);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _RenderBuffer = __webpack_require__(25);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _Texture2D = __webpack_require__(2);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _Viewport = __webpack_require__(6);

var _Viewport2 = _interopRequireDefault(_Viewport);

var _MeshIndexCalculator = __webpack_require__(46);

var _MeshIndexCalculator2 = _interopRequireDefault(_MeshIndexCalculator);

var _TextureSizeCalculator = __webpack_require__(12);

var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

var _RenderSceneComponent = __webpack_require__(47);

var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

var _SingleBufferRenderStageBase = __webpack_require__(29);

var _SingleBufferRenderStageBase2 = _interopRequireDefault(_SingleBufferRenderStageBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderHitareaComponent = function (_SingleBufferRenderSt) {
    _inherits(RenderHitareaComponent, _SingleBufferRenderSt);

    function RenderHitareaComponent() {
        _classCallCheck(this, RenderHitareaComponent);

        var _this = _possibleConstructorReturn(this, (RenderHitareaComponent.__proto__ || Object.getPrototypeOf(RenderHitareaComponent)).apply(this, arguments));

        _this._readCache = new Uint8Array(4);
        return _this;
    }

    _createClass(RenderHitareaComponent, [{
        key: "$mount",
        value: function $mount() {
            this._sceneRenderer = this.node.getComponent(_RenderSceneComponent2.default);
            if (!this._sceneRenderer) {
                throw new Error("The node attaching RenderHitArea should contain RenderScene.");
            }
            this._gl = this.companion.get("gl");
            this._canvas = this.companion.get("canvasElement");
            this.hitareaTexture = new _Texture2D2.default(this._gl);
            this.hitareaRenderbuffer = new _RenderBuffer2.default(this._gl);
            if (this.hitareaFBO) {
                this.hitareaFBO.destroy();
                this.hitareaFBO = null;
            }
        }
    }, {
        key: "$resizeViewport",
        value: function $resizeViewport(args) {
            var size = _TextureSizeCalculator2.default.getPow2Size(args.width, args.height);
            this._bufferViewport = new _Viewport2.default(0, 0, size.width, size.height);
            this.hitareaTexture.update(0, size.width, size.height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE);
            this.hitareaRenderbuffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, size.width, size.height);
            if (!this.hitareaFBO) {
                this.hitareaFBO = new _FrameBuffer2.default(this._gl);
                this.hitareaFBO.update(this.hitareaTexture);
                this.hitareaFBO.update(this.hitareaRenderbuffer);
            }
        }
    }, {
        key: "$render",
        value: function $render(args) {
            if (!this._mouseInside) {
                return;
            }
            var camera = this._sceneRenderer.camera || args.camera;
            if (!camera) {
                return;
            }
            this.hitareaFBO.bind();
            this._bufferViewport.configure(this._gl);
            // clear buffer if needed
            this._gl.clearColor(0, 0, 0, 0);
            this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
            this._gl.clearDepth(1);
            this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);
            // draw for mesh indices
            camera.renderScene({
                renderer: this._sceneRenderer,
                camera: camera,
                layer: this._sceneRenderer.layer,
                viewport: args.viewport,
                timer: args.timer,
                technique: "hitarea",
                sceneDescription: {},
                sortingTechnique: "default",
                rendererDescription: this.rendererDescription
            });
            this._gl.flush();
            // pick pointer pixel
            this._gl.readPixels(this._lastPosition[0] * this._bufferViewport.Width, this._lastPosition[1] * this._bufferViewport.Height, 1, 1, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this._readCache);
            this._updateCurrentIndex(_MeshIndexCalculator2.default.fromColor(this._readCache), camera);
            // reset bound frame buffer
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null);
        }
    }, {
        key: "$mousemove",
        value: function $mousemove(v) {
            this._lastPosition = [v.viewportNormalizedX, v.viewportNormalizedY];
            this._mouseMoved = true;
        }
    }, {
        key: "$mouseenter",
        value: function $mouseenter(v) {
            this._mouseInside = true;
            this._lastPosition = [v.viewportNormalizedX, v.viewportNormalizedY];
            this._mouseMoved = true;
        }
    }, {
        key: "$mouseleave",
        value: function $mouseleave(v) {
            this._mouseInside = false;
            this._lastPosition = [v.viewportNormalizedX, v.viewportNormalizedY];
            this._mouseMoved = true;
            if (this._lastRenderable instanceof _Component2.default) {
                this._lastRenderable.node.emit("mouseleave", this._lastRenderable);
            }
            this._lastRenderable = null;
        }
        /**
         * Update current mesh index. Emit events if need.
         * @param index
         * @param camera
         */

    }, {
        key: "_updateCurrentIndex",
        value: function _updateCurrentIndex(index, camera) {
            if (index === 0) {
                if (this._lastRenderable instanceof _Component2.default) {
                    this._lastRenderable.node.emit("mouseleave", this._lastRenderable);
                }
                this._lastRenderable = null;
            } else {
                var r = camera.containedScene.queueRegistory.getByIndex(index - 1);
                if (this._lastRenderable !== r) {
                    if (this._lastRenderable instanceof _Component2.default) {
                        this._lastRenderable.node.emit("mouseleave", this._lastRenderable);
                    }
                    if (r instanceof _Component2.default) {
                        r.node.emit("mouseenter", r);
                    }
                } else {
                    if (r instanceof _Component2.default) {
                        if (this._mouseMoved) {
                            r.node.emit("mousemove", r);
                        } else {
                            r.node.emit("mouseon", r);
                        }
                    }
                }
                this._lastRenderable = r;
            }
        }
    }]);

    return RenderHitareaComponent;
}(_SingleBufferRenderStageBase2.default);

exports.default = RenderHitareaComponent;

RenderHitareaComponent.attributes = {};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grimoirejs = __webpack_require__(5);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderStageBase = function (_Component) {
    _inherits(RenderStageBase, _Component);

    function RenderStageBase() {
        _classCallCheck(this, RenderStageBase);

        var _this = _possibleConstructorReturn(this, (RenderStageBase.__proto__ || Object.getPrototypeOf(RenderStageBase)).apply(this, arguments));

        _this.rendererDescription = {
            mouse: {
                coords: {
                    canvas: [0, 0],
                    canvasNormalized: [0, 0],
                    viewport: [0, 0],
                    viewportNormalized: [0, 0]
                },
                left: false,
                right: false,
                inside: false
            }
        };
        _this.metadata = {};
        return _this;
    }

    _createClass(RenderStageBase, [{
        key: "$mousemove",
        value: function $mousemove(v) {
            this._assignMouseState(v);
        }
    }, {
        key: "$mouseenter",
        value: function $mouseenter(v) {
            this._assignMouseState(v);
        }
    }, {
        key: "$mouseleave",
        value: function $mouseleave(v) {
            this._assignMouseState(v);
        }
    }, {
        key: "$mousedown",
        value: function $mousedown(v) {
            this._assignMouseState(v);
        }
    }, {
        key: "$mouseup",
        value: function $mouseup(v) {
            this._assignMouseState(v);
        }
    }, {
        key: "__beforeRender",
        value: function __beforeRender() {
            if (_grimoirejs2.default.debug && !!window["spector"]) {
                var metas = "";
                for (var key in this.metadata) {
                    if (this.metadata[key] === undefined) {
                        continue;
                    }
                    metas += key + "=" + this.metadata[key] + "|";
                }
                window["spector"].setMarker("Renderer|" + metas);
            }
            return true;
        }
    }, {
        key: "_assignMouseState",
        value: function _assignMouseState(v) {
            var mouseDesc = this.rendererDescription["mouse"];
            mouseDesc.inside = v.inside;
            mouseDesc.coords["viewport"] = [v.viewportX, v.viewportY];
            mouseDesc.coords["viewportNormalized"] = [v.viewportNormalizedX, v.viewportNormalizedY];
            mouseDesc.coords["canvas"] = [v.canvasX, v.canvasY];
            mouseDesc.coords["canvasNormalized"] = [v.canvasNormalizedX, v.canvasNormalizedY];
            mouseDesc.left = this._isLeftButtonPressed(v);
            mouseDesc.right = this._isRightButtonPressed(v);
        }
    }, {
        key: "_isLeftButtonPressed",
        value: function _isLeftButtonPressed(v) {
            return v.buttons === 1 || v.buttons === void 0 && v.which === 1;
        }
    }, {
        key: "_isRightButtonPressed",
        value: function _isRightButtonPressed(v) {
            return v.buttons === 2 || v.buttons === void 0 && v.which === 3;
        }
    }]);

    return RenderStageBase;
}(_Component3.default);

exports.default = RenderStageBase;

RenderStageBase.attributes = {};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MaterialContainerComponent = __webpack_require__(22);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _SingleBufferRenderStageBase = __webpack_require__(29);

var _SingleBufferRenderStageBase2 = _interopRequireDefault(_SingleBufferRenderStageBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var RenderQuadComponent = function (_SingleBufferRenderSt) {
    _inherits(RenderQuadComponent, _SingleBufferRenderSt);

    function RenderQuadComponent() {
        _classCallCheck(this, RenderQuadComponent);

        return _possibleConstructorReturn(this, (RenderQuadComponent.__proto__ || Object.getPrototypeOf(RenderQuadComponent)).apply(this, arguments));
    }

    _createClass(RenderQuadComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            _get(RenderQuadComponent.prototype.__proto__ || Object.getPrototypeOf(RenderQuadComponent.prototype), "$awake", this).call(this);
            this.metadata.type = "Quad";
            this.getAttributeRaw("indexGroup").boundTo("indexGroup");
            this.getAttributeRaw("technique").boundTo("technique");
            this.getAttributeRaw("technique").watch(function (t) {
                _this2.metadata.technique = t;
            }, true);
        }
    }, {
        key: "$mount",
        value: function $mount() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var geometryRegistry;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this._gl = this.companion.get("gl");
                                this._materialContainer = this.node.getComponent(_MaterialContainerComponent2.default);
                                geometryRegistry = this.companion.get("GeometryRegistory");
                                _context.next = 5;
                                return geometryRegistry.getGeometry("quad");

                            case 5:
                                this._geom = _context.sent;

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "$render",
        value: function $render(args) {
            if (!this._materialContainer.materialReady || !this._geom) {
                return;
            }
            if (!this.__beforeRender()) {
                return;
            }
            // make rendering argument
            var renderArgs = {
                indexGroup: this.indexGroup,
                geometry: this._geom,
                camera: null,
                transform: null,
                viewport: this.out.getViewport(),
                technique: this.technique,
                sceneDescription: {},
                rendererDescription: this.rendererDescription
            };
            // do render
            this._materialContainer.material.draw(renderArgs);
            this._gl.flush();
        }
    }]);

    return RenderQuadComponent;
}(_SingleBufferRenderStageBase2.default);

exports.default = RenderQuadComponent;

RenderQuadComponent.attributes = {
    indexGroup: {
        default: "default",
        converter: "String"
    },
    technique: {
        default: "default",
        converter: "String"
    }
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RenderingBufferResourceRegistry = __webpack_require__(26);

var _RenderingBufferResourceRegistry2 = _interopRequireDefault(_RenderingBufferResourceRegistry);

var _TextureUpdatorComponentBase = __webpack_require__(30);

var _TextureUpdatorComponentBase2 = _interopRequireDefault(_TextureUpdatorComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorBufferTextureUpdator = function (_TextureUpdatorCompon) {
    _inherits(ColorBufferTextureUpdator, _TextureUpdatorCompon);

    function ColorBufferTextureUpdator() {
        _classCallCheck(this, ColorBufferTextureUpdator);

        return _possibleConstructorReturn(this, (ColorBufferTextureUpdator.__proto__ || Object.getPrototypeOf(ColorBufferTextureUpdator)).apply(this, arguments));
    }

    _createClass(ColorBufferTextureUpdator, [{
        key: "$awake",
        value: function $awake() {
            _get(ColorBufferTextureUpdator.prototype.__proto__ || Object.getPrototypeOf(ColorBufferTextureUpdator.prototype), "$awake", this).call(this);
            var name = this.getAttribute("name");
            var format = this.getAttribute("format");
            var type = this.getAttribute("type");
            if (name) {
                _RenderingBufferResourceRegistry2.default.get(this.companion.get("gl")).setBackbuffer(this.getAttribute("name"), this.__texture);
            }
            this.__texture.update(0, 1, 1, 0, format, type, null);
        }
    }, {
        key: "resize",
        value: function resize(width, height) {
            var format = this.getAttribute("format");
            var type = this.getAttribute("type");
            this.__texture.update(0, width, height, 0, format, type, null);
        }
    }]);

    return ColorBufferTextureUpdator;
}(_TextureUpdatorComponentBase2.default);

exports.default = ColorBufferTextureUpdator;

ColorBufferTextureUpdator.attributes = {
    name: {
        converter: "String",
        default: null
    },
    format: {
        converter: "Enum",
        default: WebGLRenderingContext.RGBA,
        table: {
            RGBA: WebGLRenderingContext.RGBA,
            RGB: WebGLRenderingContext.RGB,
            ALPHA: WebGLRenderingContext.ALPHA,
            LUMINANCE: WebGLRenderingContext.LUMINANCE,
            LUMINANCE_ALPHA: WebGLRenderingContext.LUMINANCE_ALPHA,
            SRGB_EXT: WebGLRenderingContext["SRGB_EXT"],
            SRGB_ALPHA_EXT: WebGLRenderingContext["SRGB_ALPHA_EXT"],
            DEPTH_COMPONENT: WebGLRenderingContext["DEPTH_COMPONENT"],
            DEPTH_STENCIL: WebGLRenderingContext["DEPTH_STENCIL"]
        }
    },
    type: {
        converter: "Enum",
        default: WebGLRenderingContext.UNSIGNED_BYTE,
        table: {
            UNSIGNED_BYTE: WebGLRenderingContext.UNSIGNED_BYTE,
            UNSIGNED_SHORT_5_6_5: WebGLRenderingContext.UNSIGNED_SHORT_5_6_5,
            UNSIGNED_SHORT_4_4_4_4: WebGLRenderingContext.UNSIGNED_SHORT_4_4_4_4,
            UNSIGNED_SHORT_5_5_5_1: WebGLRenderingContext.UNSIGNED_SHORT_5_5_5_1,
            UNSIGNED_SHORT: WebGLRenderingContext.UNSIGNED_SHORT,
            UNSIGNED_INT: WebGLRenderingContext.UNSIGNED_INT,
            FLOAT: WebGLRenderingContext.FLOAT
        }
    }
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ImageResolver = __webpack_require__(33);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

var _TextureUpdatorComponentBase = __webpack_require__(30);

var _TextureUpdatorComponentBase2 = _interopRequireDefault(_TextureUpdatorComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var ImageTextureUpdator = function (_TextureUpdatorCompon) {
    _inherits(ImageTextureUpdator, _TextureUpdatorCompon);

    function ImageTextureUpdator() {
        _classCallCheck(this, ImageTextureUpdator);

        return _possibleConstructorReturn(this, (ImageTextureUpdator.__proto__ || Object.getPrototypeOf(ImageTextureUpdator)).apply(this, arguments));
    }

    _createClass(ImageTextureUpdator, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            _get(ImageTextureUpdator.prototype.__proto__ || Object.getPrototypeOf(ImageTextureUpdator.prototype), "$awake", this).call(this);
            this.__bindAttributes();
            this.getAttributeRaw("src").watch(function (v) {
                if (v !== null) {
                    _this2._loadTask(v);
                }
            }, true);
        }
    }, {
        key: "resize",
        value: function resize(width, height) {
            if (this._resolvedImage) {
                this._resolvedImage.width = width;
                this._resolvedImage.height = height;
                this._updateTexture();
            }
        }
    }, {
        key: "_loadTask",
        value: function _loadTask(src) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var image;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _ImageResolver2.default.resolve(src);

                            case 2:
                                image = _context.sent;

                                this._resolvedImage = image;
                                this._updateTexture();

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_updateTexture",
        value: function _updateTexture() {
            this.__texture.update(this._resolvedImage, {
                premultipliedAlpha: this.premultipliedAlpha,
                flipY: this.flipY
            });
        }
    }]);

    return ImageTextureUpdator;
}(_TextureUpdatorComponentBase2.default);

exports.default = ImageTextureUpdator;

ImageTextureUpdator.attributes = {
    src: {
        converter: "String",
        default: null
    }
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _VideoResolver = __webpack_require__(50);

var _VideoResolver2 = _interopRequireDefault(_VideoResolver);

var _TextureUpdatorComponentBase = __webpack_require__(30);

var _TextureUpdatorComponentBase2 = _interopRequireDefault(_TextureUpdatorComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var VideoTextureUpdatorComponent = function (_TextureUpdatorCompon) {
    _inherits(VideoTextureUpdatorComponent, _TextureUpdatorCompon);

    function VideoTextureUpdatorComponent() {
        _classCallCheck(this, VideoTextureUpdatorComponent);

        return _possibleConstructorReturn(this, (VideoTextureUpdatorComponent.__proto__ || Object.getPrototypeOf(VideoTextureUpdatorComponent)).apply(this, arguments));
    }

    _createClass(VideoTextureUpdatorComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            _get(VideoTextureUpdatorComponent.prototype.__proto__ || Object.getPrototypeOf(VideoTextureUpdatorComponent.prototype), "$awake", this).call(this);
            this.__bindAttributes();
            this.getAttributeRaw("src").watch(function (v) {
                if (v !== null) {
                    _this2._loadTask(v);
                }
            }, true);
            this.getAttributeRaw("currentTime").watch(function (v) {
                if (_this2.video && _this2.video.currentTime !== _this2.currentTime) {
                    _this2._syncVideoPref();
                }
            });
            this.getAttributeRaw("muted").watch(function () {
                if (_this2.video) {
                    _this2._syncVideoPref();
                }
            });
            this.getAttributeRaw("playbackRate").watch(function () {
                if (_this2.video) {
                    _this2._syncVideoPref();
                }
            });
            this.getAttributeRaw("loop").watch(function () {
                if (_this2.video) {
                    _this2._syncVideoPref();
                }
            });
        }
    }, {
        key: "resize",
        value: function resize(width, height) {
            if (this.video) {
                this.video.width = width;
                this.video.height = height;
                this.tryUpdateCurrentFrame();
            }
        }
    }, {
        key: "_update",
        value: /*#__PURE__*/regeneratorRuntime.mark(function _update() {
            return regeneratorRuntime.wrap(function _update$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (false) {
                                _context.next = 7;
                                break;
                            }

                            if (this.currentTime !== this.video.currentTime) {
                                this.currentTime = this.video.currentTime;
                            }
                            this.tryUpdateCurrentFrame();
                            _context.next = 5;
                            return 1;

                        case 5:
                            _context.next = 0;
                            break;

                        case 7:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _update, this);
        })
    }, {
        key: "tryUpdateCurrentFrame",
        value: function tryUpdateCurrentFrame() {
            if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
                this.__texture.update(this.video, {
                    premultipliedAlpha: this.premultipliedAlpha,
                    flipY: this.flipY
                });
            }
        }
    }, {
        key: "_loadTask",
        value: function _loadTask(src) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _VideoResolver2.default.resolve(src);

                            case 2:
                                this.video = _context2.sent;

                                this.__registerFrameCoroutine(this._update);
                                this.video.play();
                                this._syncVideoPref();
                                this._update();

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_syncVideoPref",
        value: function _syncVideoPref() {
            this.video.playbackRate = this.playbackRate;
            this.video.muted = this.muted;
            this.video.loop = this.loop;
            this.video.currentTime = this.currentTime;
        }
    }]);

    return VideoTextureUpdatorComponent;
}(_TextureUpdatorComponentBase2.default);

exports.default = VideoTextureUpdatorComponent;

VideoTextureUpdatorComponent.attributes = {
    src: {
        converter: "String",
        default: null
    },
    currentTime: {
        converter: "Number",
        default: 0
    },
    muted: {
        converter: "Boolean",
        default: true
    },
    playbackRate: {
        converter: "Number",
        default: 1
    },
    loop: {
        converter: "Boolean",
        default: true
    }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CanvasSizeConverter;
/**
 * キャンバスのサイズ用のコンバーター
 * 数値を指定した場合(`100`など)はその値をそのまま返す。
 * `aspect(1.6)`などと記述する時、キャンバスのアスペクト比を1.6にするようにリサイズする。
 * `fit`と指定した時、親要素にちょうどマッチするサイズを返す。
 * もし、親要素の高さが0である時かつ、親がbodyである際で`fit`が指定されていると、bodyへの高さ属性が指定されていないものと判断して、
 * 自動的にbodyに`height:100%`を割り当てる。
 */
function CanvasSizeConverter(val) {
    if (val === "fit") {
        return {
            mode: "fit"
        };
    }
    if (typeof val === "string") {
        var matched = /aspect\(([\d+(?.\d*)?]+)\)/.exec(val);
        if (matched) {
            return {
                mode: "aspect",
                aspect: Number.parseFloat(matched[1])
            };
        }
    }
    return {
        mode: "manual",
        size: Number.parseFloat(val)
    };
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GeometryConverter;

var _Geometry = __webpack_require__(10);

var _Geometry2 = _interopRequireDefault(_Geometry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ジオメトリを指定するためのコンバーター
 * `quad`など、ジオメトリ名を指定するか、Geometry型のインスタンスを渡す。
 */
function GeometryConverter(val, attr) {
    if (typeof val === "string") {
        var registory = attr.companion.get("GeometryRegistory");
        return registory.getGeometry(val);
    } else if (val instanceof _Geometry2.default) {
        return Promise.resolve(val);
    }
    throw new Error("Specified geometry \"" + val + "\" is not supported for converting into geometry.");
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MaterialConverter;

var _MaterialComponent = __webpack_require__(39);

var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

var _Material = __webpack_require__(37);

var _Material2 = _interopRequireDefault(_Material);

var _MaterialFactory = __webpack_require__(1);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * マテリアルを指定するためのコンバーター
 * `<material>へのクエリ`が指定された場合は、そのクエリによって検索された先頭の`<material>`を用いる。
 * `new(マテリアル名)`が指定された場合は、新しいマテリアルのインスタンスを生成して用いる。
 * 通常、マテリアルを指定するコンポーネントはマテリアルによって、そのコンポーネントが所持する属性が置き換わる。
 * `new(マテリアル)`名で指定した場合、そのコンポーネント自身がマテリアルの属性を管理することになるので注意が必要。
 */
function MaterialConverter(val, attr) {
    if (typeof val === "string") {
        var regex = /\s*new\s*\(\s*([a-zA-Z\d\-]+)\s*\)/;
        var regexResult = void 0;
        if (regexResult = regex.exec(val)) {
            attr.component[attr.declaration["componentBoundTo"]] = null;
            return _MaterialFactory2.default.get(attr.companion.get("gl")).instanciate(regexResult[1]);
        } else {
            var node = attr.tree(val).first();
            if (node) {
                var mc = node.getComponent(_MaterialComponent2.default);
                attr.component[attr.declaration["componentBoundTo"]] = mc;
                return mc.materialPromise;
            } else {
                console.warn("There was no matching material component filtered by '" + val + "'");
                return null;
            }
        }
    } else if (val instanceof _Material2.default) {
        attr.component[attr.declaration["componentBoundTo"]] = null;
        return Promise.resolve(val);
    }
    return null; // TODO ??
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = NodeConverter;

var _GomlNode = __webpack_require__(127);

var _GomlNode2 = _interopRequireDefault(_GomlNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NodeConverter(val, attr) {
    if (val === null) {
        return null;
    }
    if (val instanceof _GomlNode2.default) {
        return val;
    } else if (typeof val === "string") {
        return attr.component.node.tree(val).first();
    }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Attribute = __webpack_require__(128);

var _Attribute2 = _interopRequireDefault(_Attribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 座標を取得するためのコンバーター
 * Vector3コンバーターの受け取り売る値もしくは、任意のシーン中のノードへのクエリを受け取る。
 * クエリを受け取った場合は、そのクエリの示す対象の物体の座標が用いられる。
 */
exports.default = {
    name: "Position",
    lazy: true,
    verify: function verify(attr) {
        return true;
    },
    convert: function convert(val, attr) {
        if (val === null) {
            return null;
        }
        if (attr.convertContext._lastVal === val) {
            return attr.convertContext._node.getAttribute("position");
        } else {
            attr.convertContext._lastVal = null;
            try {
                var vec = _Attribute2.default.convert("Vector3", attr, val);
                if (vec) {
                    return vec;
                }
            } catch (e) {}
            attr.convertContext._node = _Attribute2.default.convert("Node", attr, val);
            if (attr.convertContext._node) {
                attr.convertContext._lastVal = val;
                return attr.convertContext._node.getAttribute("position"); // TODO should not use getAttribute on node
            }
        }
    }
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = RenderingTargetConverter;

var _RendererComponent = __webpack_require__(23);

var _RendererComponent2 = _interopRequireDefault(_RendererComponent);

var _RenderingTargetRegistry = __webpack_require__(24);

var _RenderingTargetRegistry2 = _interopRequireDefault(_RenderingTargetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function isRenderingTarget(obj) {
    var typedObj = obj;
    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && typeof typedObj.beforeDraw === "function" && typeof typedObj.getBufferHeight === "function" && typeof typedObj.getBufferWidth === "function" && typeof typedObj.getViewport === "function";
}
function RenderingTargetConverter(val, attr) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var renderer, renderingTarget;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!isRenderingTarget(val)) {
                            _context.next = 4;
                            break;
                        }

                        return _context.abrupt("return", val);

                    case 4:
                        if (!(typeof val === "string")) {
                            _context.next = 14;
                            break;
                        }

                        if (!(val === "default")) {
                            _context.next = 10;
                            break;
                        }

                        renderer = attr.component.node.getComponentInAncestor(_RendererComponent2.default);
                        return _context.abrupt("return", renderer.renderingTarget);

                    case 10:
                        renderingTarget = _RenderingTargetRegistry2.default.get(attr.companion.get("gl")).getRenderingTarget(val);

                        if (!renderingTarget) {
                            _context.next = 13;
                            break;
                        }

                        return _context.abrupt("return", renderingTarget);

                    case 13:
                        throw new Error("Specified rendering target \"" + val + "\" was not found.");

                    case 14:
                        return _context.abrupt("return", null);

                    case 15:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = TextureConverter;

var _ImageResolver = __webpack_require__(33);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

var _TextureContainer = __webpack_require__(13);

var _TextureContainer2 = _interopRequireDefault(_TextureContainer);

var _TextureReference = __webpack_require__(110);

var _TextureReference2 = _interopRequireDefault(_TextureReference);

var _RenderingBufferResourceRegistry = __webpack_require__(26);

var _RenderingBufferResourceRegistry2 = _interopRequireDefault(_RenderingBufferResourceRegistry);

var _Texture2D = __webpack_require__(2);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _parseQuery(query) {
    var regex = /(query|backbuffer)\((.+)\)[^\)]*$/;
    var regexResult = void 0;
    if (regexResult = regex.exec(query)) {
        return {
            type: regexResult[1],
            param: regexResult[2]
        };
    }
    return null;
}
/**
 * テクスチャへの参照を取得するためのコンバーター
 * 渡すものが文字列である場合、4つの方法がある。
 * * `url`・・・指定したアドレスから画像を解決して取得する
 * * `backbuffer(バックバッファ名)`・・・名前付きバックバッファのリストから取得する
 * * `video(ビデオファイルへのURL)`・・・指定したアドレスからビデオを取得してテクスチャとして再生する(deprecated)
 * * `query(<texture>へのクエリ)`・・・指定したクエリで`<texture>`を探索して利用する。
 * 渡すものがオブジェクトである場合、5つの方法がある。
 * * `Texture2D型`・・・そのまま利用される
 * * `HTMLImageElement`・・・必要がある場合リサイズされた上で利用される。(自動的に2の累乗に変換される)
 * * `HTMLCanvasElement`・・・必要がある場合リサイズされた上で利用される。(自動的に2の累乗に変換される)
 * * `HTMLVideoElement`・・・必要がある場合リサイズされた上で、自動的に再生される(自動的に2の累乗に変換される)
 */
function TextureConverter(val, attr) {
    if (val instanceof _Texture2D2.default) {
        return new _TextureReference2.default(val);
    } else if (val instanceof _TextureReference2.default) {
        return val;
    } else if (typeof val === "string") {
        var parseResult = _parseQuery(val);
        if (parseResult) {
            var param = parseResult.param;
            switch (parseResult.type) {
                case "backbuffer":
                    return new _TextureReference2.default(function (buffers) {
                        return _RenderingBufferResourceRegistry2.default.get(attr.companion.get("gl")).getBackbuffer(param);
                    });
                case "query":
                    var obtainedTag = attr.tree(param);
                    var texture = obtainedTag.first().getComponent(_TextureContainer2.default);
                    return new _TextureReference2.default(function () {
                        return texture.texture;
                    });
            }
        } else {
            var tex = new _Texture2D2.default(attr.companion.get("gl"));
            _ImageResolver2.default.resolve(val).then(function (t) {
                tex.update(t);
            });
            attr.companion.get("loader").register(tex.validPromise);
            return new _TextureReference2.default(tex);
        }
    }
    if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") {
        if (val instanceof HTMLImageElement) {
            var _tex = new _Texture2D2.default(attr.companion.get("gl"));
            if (val.complete && val.naturalWidth) {
                _tex.update(val);
            } else {
                val.onload = function () {
                    _tex.update(val);
                };
            }
            return new _TextureReference2.default(_tex);
        } else if (val instanceof HTMLCanvasElement) {
            var _tex2 = new _Texture2D2.default(attr.companion.get("gl"));
            _tex2.update(val);
            return new _TextureReference2.default(_tex2);
        }
    }
    return null;
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Proxy of texture reference
 */
var TextureReference = function () {
    function TextureReference(rawResource) {
        _classCallCheck(this, TextureReference);

        this.rawResource = rawResource;
        this.isFunctionalProxy = typeof rawResource === "function";
    }

    _createClass(TextureReference, [{
        key: "get",
        value: function get(buffers) {
            if (!this.isFunctionalProxy) {
                return this.rawResource;
            } else {
                return this.rawResource(buffers);
            }
        }
    }]);

    return TextureReference;
}();

exports.default = TextureReference;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ViewportConverter;

var _Rectangle = __webpack_require__(84);

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Viewport = __webpack_require__(6);

var _Viewport2 = _interopRequireDefault(_Viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toPixel(parentSize, rep) {
    var regex = /(\d+)\s*%/;
    var regexResult = void 0;
    if (regexResult = regex.exec(rep)) {
        var percentage = Number.parseFloat(regexResult[1]);
        return Math.floor(parentSize * percentage * 0.01);
    } else {
        return Math.floor(Number.parseFloat(rep));
    }
}
/**
 * ビューポートサイズを設定するためのコンバーター
 * `auto`・・・親のキャンバスのサイズにあったビューポートサイズを返す
 * `左端,上端,幅,高さ`・・・キャンバスのサイズを具体的に指定する。
 * 数値を指定するとピクセル単位になるが、数値に%をつければ親のキャンバス基準での比率指定ができる。
 */
function ViewportConverter(val) {
    if (val instanceof _Rectangle2.default) {
        var vp = new _Viewport2.default(val.Left, val.Bottom, val.Width, val.Height);
        return function () {
            return vp;
        };
    } else if (val instanceof _Viewport2.default) {
        return function () {
            return val;
        };
    } else if (typeof val === "string") {
        if (val === "auto") {
            return function (canvas) {
                return new _Viewport2.default(0, 0, canvas.width, canvas.height);
            };
        } else {
            var sizes = val.split(",");
            if (sizes.length !== 4) {
                throw new Error("Invalid viewport size was specified.");
            } else {
                return function (canvas) {
                    return new _Viewport2.default(_toPixel(canvas.width, sizes[0]), _toPixel(canvas.height, sizes[1]), _toPixel(canvas.width, sizes[2]), _toPixel(canvas.height, sizes[3]));
                };
            }
        }
    }
    throw new Error(val + " could not be parsed");
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AABB = __webpack_require__(69);

var _AABB2 = _interopRequireDefault(_AABB);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Geometry = __webpack_require__(10);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _GeometryFactory = __webpack_require__(21);

var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

var _GeometryUtility = __webpack_require__(113);

var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var unitBox = new _AABB2.default();
unitBox.expand(new _Vector2.default(-1, -1, -1));
unitBox.expand(new _Vector2.default(1, 1, 1));
var primitiveLayout = {
    POSITION: {
        size: 3,
        stride: 32
    },
    NORMAL: {
        size: 3,
        stride: 32,
        offset: 12
    },
    TEXCOORD: {
        size: 2,
        stride: 32,
        offset: 24
    }
};

var DefaultPrimitives = function () {
    function DefaultPrimitives() {
        _classCallCheck(this, DefaultPrimitives);
    }

    _createClass(DefaultPrimitives, null, [{
        key: "register",
        value: function register() {
            DefaultPrimitives._registerQuad();
            DefaultPrimitives._registerCube();
            DefaultPrimitives._registerSphere();
            DefaultPrimitives._registerCircle();
            DefaultPrimitives._registerCylinder();
            DefaultPrimitives._registerCone();
            DefaultPrimitives._registerPlane();
            DefaultPrimitives._registerTriangle();
            DefaultPrimitives._registerCapsule();
        }
    }, {
        key: "_registerQuad",
        value: function _registerQuad() {
            _GeometryFactory2.default.addType("quad", {}, function (gl, attrs) {
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.plane([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], 1, 1), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.planeIndex(0, 1, 1));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.planeIndex(0, 1, 1)), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerTriangle",
        value: function _registerTriangle() {
            _GeometryFactory2.default.addType("triangle", {}, function (gl, attrs) {
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.triangle([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0]), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.triangleIndex(0));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.triangleIndex(0)), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerCone",
        value: function _registerCone() {
            _GeometryFactory2.default.addType("cone", {
                divide: {
                    converter: "Number",
                    default: 50
                }
            }, function (gl, attrs) {
                var div = attrs["divide"];
                var geometry = new _Geometry2.default(gl);
                var theta = div % 2 !== 0 ? Math.PI / div : 0;
                var vertices = [].concat.apply([], [_GeometryUtility2.default.circle([0, -0.5, 0], [0, -1, 0], [-Math.sin(theta), 0, Math.cos(theta)], [Math.cos(theta), 0, Math.sin(theta)], div)]);
                var g = Math.cos(Math.PI / div) / 3;
                var length = Math.sin(Math.PI / div) / Math.pow(3, 0.5) * 2;
                var radius = Math.cos(Math.PI / div) - g;
                var s = Math.PI / div;
                for (var i = 0; i < div; i++) {
                    var step = s * (i * 2 + 1);
                    Array.prototype.push.apply(vertices, _GeometryUtility2.default.coneTriangle([-Math.sin(step) * radius, 0, -Math.cos(step) * radius], [-Math.cos(Math.PI / 2 - step), 1, -Math.sin(Math.PI / 2 - step)], [Math.sin(step) * radius, 1, Math.cos(step) * radius], [-Math.cos(step) * length, 0, Math.sin(step) * length], div, i));
                }
                geometry.addAttributes(vertices, primitiveLayout);
                var os = div + 2;
                var indices = [].concat.apply([], [_GeometryUtility2.default.circleIndex(0, div)]);
                for (var _i = 0; _i < div; _i++) {
                    Array.prototype.push.apply(indices, _GeometryUtility2.default.triangleIndex(os + _i * 3));
                }
                geometry.addIndex("default", indices);
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(indices), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerCylinder",
        value: function _registerCylinder() {
            _GeometryFactory2.default.addType("cylinder", {
                divide: {
                    converter: "Number",
                    default: 50
                }
            }, function (gl, attrs) {
                var div = attrs["divide"];
                var geometry = new _Geometry2.default(gl);
                var theta = div % 2 !== 0 ? Math.PI / div : 0;
                var vertices = [].concat.apply([], [_GeometryUtility2.default.circle([0, 1, 0], [0, 1, 0], [0, 0, -1], [1, 0, 0], div), _GeometryUtility2.default.circle([0, -1, 0], [0, -1, 0], [-Math.sin(theta), 0, Math.cos(theta)], [Math.cos(theta), 0, Math.sin(theta)], div)]);
                var length = Math.sin(Math.PI / div);
                var radius = Math.cos(Math.PI / div);
                var s = Math.PI / div;
                for (var i = 0; i < div; i++) {
                    var step = s * (i * 2 + 1);
                    Array.prototype.push.apply(vertices, _GeometryUtility2.default.cylinderPlane([-Math.sin(step) * radius, 0, -Math.cos(step) * radius], [-Math.sin(step), 0, -Math.cos(step)], [0, 1, 0], [-Math.cos(step) * length, 0, Math.sin(step) * length], div, i));
                }
                geometry.addAttributes(vertices, primitiveLayout);
                var os = div + 2;
                var indices = [].concat.apply([], [_GeometryUtility2.default.circleIndex(0, div), _GeometryUtility2.default.circleIndex(os, div)]);
                for (var _i2 = 0; _i2 < div; _i2++) {
                    Array.prototype.push.apply(indices, _GeometryUtility2.default.planeIndex(os * 2 + _i2 * 4, 1, 1));
                }
                geometry.addIndex("default", indices);
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(indices), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerCube",
        value: function _registerCube() {
            _GeometryFactory2.default.addType("cube", {
                divHorizontal: {
                    converter: "Number",
                    default: 1
                },
                divVertical: {
                    converter: "Number",
                    default: 1
                }
            }, function (gl, attrs) {
                var hdiv = attrs["divHorizontal"];
                var vdiv = attrs["divVertical"];
                var geometry = new _Geometry2.default(gl);
                var vertices = [].concat.apply([], [_GeometryUtility2.default.plane([0, 0, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, 0, -1], [0, 0, -1], [0, 1, 0], [-1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, 1, 0], [0, 1, 0], [0, 0, -1], [1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, -1, 0], [0, -1, 0], [0, 0, -1], [-1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([1, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, -1], hdiv, vdiv), _GeometryUtility2.default.plane([-1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, 0, 1], hdiv, vdiv)]);
                geometry.addAttributes(vertices, primitiveLayout);
                var os = (hdiv + 1) * (vdiv + 1);
                var indices = [].concat.apply([], [_GeometryUtility2.default.planeIndex(0, hdiv, vdiv), _GeometryUtility2.default.planeIndex(os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(2 * os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(3 * os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(4 * os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(5 * os, hdiv, vdiv)]);
                geometry.addIndex("default", indices);
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(indices), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerSphere",
        value: function _registerSphere() {
            _GeometryFactory2.default.addType("sphere", {
                divVertical: {
                    converter: "Number",
                    default: 50
                },
                divHorizontal: {
                    converter: "Number",
                    default: 50
                }
            }, function (gl, attrs) {
                var dH = attrs["divHorizontal"];
                var dV = attrs["divVertical"];
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.sphere([0, 0, 0], [0, 1, 0], [1, 0, 0], [0, 0, 1], dV, dH), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.sphereIndex(0, dV, dH));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.sphereIndex(0, dV, dH)), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerCapsule",
        value: function _registerCapsule() {
            _GeometryFactory2.default.addType("capsule", {
                divide: {
                    converter: "Number",
                    default: 50
                }
            }, function (gl, attrs) {
                var dH = attrs["divide"];
                var dV = dH % 2 === 1 ? dH + 1 : dH;
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.capsule([0, 0, 0], [0, 1, 0], [1, 0, 0], [0, 0, 1], dV, dH), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.sphereIndex(0, dV, dH));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.sphereIndex(0, dV, dH)), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerCircle",
        value: function _registerCircle() {
            _GeometryFactory2.default.addType("circle", {
                divide: {
                    converter: "Number",
                    default: 30
                }
            }, function (gl, attrs) {
                var div = attrs["divide"];
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.circle([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], div), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.circleIndex(0, div));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.circleIndex(0, div)), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerPlane",
        value: function _registerPlane() {
            _GeometryFactory2.default.addType("plane", {
                divide: {
                    converter: "Number",
                    default: 10
                }
            }, function (gl, attrs) {
                var hdiv = attrs["divide"];
                var vdiv = hdiv;
                var geometry = new _Geometry2.default(gl);
                var vertices = [].concat.apply([], [_GeometryUtility2.default.plane([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, 0, 0], [0, 0, -1], [0, 1, 0], [-1, 0, 0], hdiv, vdiv, true)]);
                geometry.addAttributes(vertices, primitiveLayout);
                var indices = [].concat.apply([], [_GeometryUtility2.default.planeIndex(0, hdiv, vdiv), _GeometryUtility2.default.planeIndex((hdiv + 1) * (vdiv + 1), hdiv, vdiv)]);
                geometry.addIndex("default", indices);
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(indices), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }]);

    return DefaultPrimitives;
}();

exports.default = DefaultPrimitives;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeometryUtility = function () {
    function GeometryUtility() {
        _classCallCheck(this, GeometryUtility);
    }

    _createClass(GeometryUtility, null, [{
        key: "linesFromTriangles",
        value: function linesFromTriangles(indices) {
            var ret = [];
            var ic = new Array(3);
            var i = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = indices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var index = _step.value;

                    ic[i % 3] = index;
                    if (i % 3 === 2) {
                        var a = ic[0],
                            b = ic[1],
                            c = ic[2];
                        Array.prototype.push.apply(ret, [a, b, b, c, c, a]);
                    }
                    i++;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return ret;
        }
    }, {
        key: "plane",
        value: function plane(center, normal, up, right) {
            var hdiv = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
            var vdiv = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
            var reverse = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

            var ret = new Array(8 * (hdiv + 1) * (vdiv + 1));
            var sp = [center[0] - up[0] - right[0], center[1] - up[1] - right[1], center[2] - up[2] - right[2]];
            var sr = [right[0] / hdiv * 2, right[1] / hdiv * 2, right[2] / hdiv * 2];
            var su = [up[0] / vdiv * 2, up[1] / vdiv * 2, up[2] / vdiv * 2];
            for (var v = 0; v < vdiv + 1; v++) {
                for (var h = 0; h < hdiv + 1; h++) {
                    var fi = ((hdiv + 1) * v + h) * 8;
                    ret[fi + 0] = sp[0] + sr[0] * h + su[0] * v;
                    ret[fi + 1] = sp[1] + sr[1] * h + su[1] * v;
                    ret[fi + 2] = sp[2] + sr[2] * h + su[2] * v;
                    ret[fi + 3] = normal[0];
                    ret[fi + 4] = normal[1];
                    ret[fi + 5] = normal[2];
                    ret[fi + 6] = reverse ? 1 - 1 / hdiv * h : 1 / hdiv * h;
                    ret[fi + 7] = 1 / vdiv * v;
                }
            }
            return ret;
        }
    }, {
        key: "cylinderPlane",
        value: function cylinderPlane(center, normal, up, right, divide, order) {
            var ret = new Array(32);
            var sp = [center[0] - up[0] - right[0], center[1] - up[1] - right[1], center[2] - up[2] - right[2]];
            var sr = [right[0] * 2, right[1] * 2, right[2] * 2];
            var su = [up[0] * 2, up[1] * 2, up[2] * 2];
            for (var v = 0; v < 2; v++) {
                for (var h = 0; h < 2; h++) {
                    var fi = (2 * v + h) * 8;
                    ret[fi + 0] = sp[0] + sr[0] * h + su[0] * v;
                    ret[fi + 1] = sp[1] + sr[1] * h + su[1] * v;
                    ret[fi + 2] = sp[2] + sr[2] * h + su[2] * v;
                    var l = Math.tan(Math.PI / divide) / Math.sin(Math.PI / divide);
                    if (h === 0) {
                        ret[fi + 3] = normal[0] - l * right[0];
                        ret[fi + 4] = normal[1] - l * right[1];
                        ret[fi + 5] = normal[2] - l * right[2];
                    } else {
                        ret[fi + 3] = normal[0] + l * right[0];
                        ret[fi + 4] = normal[1] + l * right[1];
                        ret[fi + 5] = normal[2] + l * right[2];
                    }
                    ret[fi + 6] = 1 / divide * (order + 1 + h);
                    ret[fi + 7] = v === 0 ? 0 : 1;
                }
            }
            return ret;
        }
    }, {
        key: "triangle",
        value: function triangle(center, normal, up, right) {
            var ret = new Array(24);
            var delta = 2 * Math.PI / 3;
            for (var i = 0; i < 3; i++) {
                var s = Math.sin(delta * i);
                var c = Math.cos(delta * i);
                ret[0 + 8 * i] = center[0] + c * up[0] + s * right[0];
                ret[1 + 8 * i] = center[1] + c * up[1] + s * right[1];
                ret[2 + 8 * i] = center[2] + c * up[2] + s * right[2];
                ret[3 + 8 * i] = normal[0];
                ret[4 + 8 * i] = normal[1];
                ret[5 + 8 * i] = normal[2];
                ret[6 + 8 * i] = 0.5 + (c * up[0] + s * right[0]) / 2;
                ret[7 + 8 * i] = 0.5 + (c * up[1] + s * right[1]) / 2;
            }
            return ret;
        }
    }, {
        key: "coneTriangle",
        value: function coneTriangle(center, normal, up, right, divide, order) {
            var ret = new Array(24);
            var delta = 2 * Math.PI / 3;
            for (var i = 0; i < 3; i++) {
                var s = Math.sin(delta * i);
                var c = Math.cos(delta * i);
                ret[0 + 8 * i] = center[0] + c * up[0] + s * right[0];
                ret[1 + 8 * i] = center[1] + c * up[1] + s * right[1];
                ret[2 + 8 * i] = center[2] + c * up[2] + s * right[2];
                ret[3 + 8 * i] = normal[0];
                ret[4 + 8 * i] = normal[1];
                ret[5 + 8 * i] = normal[2];
                var k = Math.pow(2, 0.5);
                var l = Math.tan(Math.PI / divide) / Math.sin(Math.PI / divide) / Math.pow(3, 0.5) * 2;
                if (i === 0) {
                    ret[3 + 8 * i] = normal[0];
                    ret[4 + 8 * i] = normal[1];
                    ret[5 + 8 * i] = normal[2];
                    ret[6 + 8 * i] = 0;
                    ret[7 + 8 * i] = 0;
                } else if (i === 1) {
                    ret[3 + 8 * i] = normal[0] / k + l * right[0];
                    ret[4 + 8 * i] = normal[1] / k + l * right[1];
                    ret[5 + 8 * i] = normal[2] / k + l * right[2];
                    ret[6 + 8 * i] = Math.cos(-Math.PI / divide / 2 * (order + 1));
                    ret[7 + 8 * i] = Math.sin(-Math.PI / divide / 2 * (order + 1));
                } else {
                    ret[3 + 8 * i] = normal[0] / k - l * right[0];
                    ret[4 + 8 * i] = normal[1] / k - l * right[1];
                    ret[5 + 8 * i] = normal[2] / k - l * right[2];
                    ret[6 + 8 * i] = Math.cos(-Math.PI / divide / 2 * order);
                    ret[7 + 8 * i] = Math.sin(-Math.PI / divide / 2 * order);
                }
            }
            return ret;
        }
    }, {
        key: "triangleIndex",
        value: function triangleIndex(offset) {
            var ret = new Array(3);
            ret[0] = offset;
            ret[1] = offset + 2;
            ret[2] = offset + 1;
            return ret;
        }
    }, {
        key: "planeIndex",
        value: function planeIndex() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var hdiv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var vdiv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var ret = new Array(6 * hdiv * vdiv);
            for (var v = 0; v < vdiv; v++) {
                for (var h = 0; h < hdiv; h++) {
                    var fi = (hdiv * v + h) * 6;
                    var ld = offset + (hdiv + 1) * v + h;
                    var lu = offset + (hdiv + 1) * (v + 1) + h;
                    ret[fi + 0] = ld;
                    ret[fi + 1] = ld + 1;
                    ret[fi + 2] = lu;
                    ret[fi + 3] = lu;
                    ret[fi + 4] = ld + 1;
                    ret[fi + 5] = lu + 1;
                }
            }
            return ret;
        }
    }, {
        key: "circle",
        value: function circle(center, normal, up, right) {
            var divide = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;

            var ret = new Array((3 + divide) * 6);
            // center
            ret[0] = center[0];
            ret[1] = center[1];
            ret[2] = center[2];
            ret[3] = normal[0];
            ret[4] = normal[1];
            ret[5] = normal[2];
            ret[6] = 0.5;
            ret[7] = 0.5;
            var delta = 2 * Math.PI / divide;
            for (var v = 0; v < divide + 1; v++) {
                var fi = 8 + v * 8;
                var s = Math.sin(delta * v);
                var c = Math.cos(delta * v);
                ret[fi + 0] = center[0] + c * up[0] + s * right[0];
                ret[fi + 1] = center[1] + c * up[1] + s * right[1];
                ret[fi + 2] = center[2] + c * up[2] + s * right[2];
                ret[fi + 3] = normal[0];
                ret[fi + 4] = normal[1];
                ret[fi + 5] = normal[2];
                ret[fi + 6] = 0.5 + 0.5 * s;
                ret[fi + 7] = 0.5 + 0.5 * c;
            }
            return ret;
        }
    }, {
        key: "circleIndex",
        value: function circleIndex(offset, divide) {
            var ret = new Array(3 * divide);
            for (var i = 0; i < divide; i++) {
                ret[3 * i + 0] = offset;
                ret[3 * i + 1] = offset + (i + 2);
                ret[3 * i + 2] = offset + (i + 1);
            }
            return ret;
        }
    }, {
        key: "capsule",
        value: function capsule(center, up, right, forward) {
            var vdiv = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
            var hdiv = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;

            var ret = new Array(vdiv * hdiv * 8);
            for (var i = 0; i < vdiv; i++) {
                for (var j = 0; j < hdiv; j++) {
                    ret[8 * (vdiv * i + j) + 0] = center[0] + 0.5 * Math.sin(Math.PI * i / (vdiv - 1)) * (right[0] * Math.cos(2 * Math.PI * (j / (hdiv - 1))) + forward[0] * Math.sin(2 * Math.PI * (j / (hdiv - 1)))) - 0.5 * up[0] * Math.cos(Math.PI * i / (vdiv - 1));
                    ret[8 * (vdiv * i + j) + 1] = center[1] + 0.5 * Math.sin(Math.PI * i / (vdiv - 1)) * (right[1] * Math.cos(2 * Math.PI * (j / (hdiv - 1))) + forward[1] * Math.sin(2 * Math.PI * (j / (hdiv - 1)))) - 0.5 * up[1] * Math.cos(Math.PI * i / (vdiv - 1));
                    ret[8 * (vdiv * i + j) + 2] = center[2] + 0.5 * Math.sin(Math.PI * i / (vdiv - 1)) * (right[2] * Math.cos(2 * Math.PI * (j / (hdiv - 1))) + forward[2] * Math.sin(2 * Math.PI * (j / (hdiv - 1)))) - 0.5 * up[2] * Math.cos(Math.PI * i / (vdiv - 1));
                    var d = Math.pow(ret[8 * (vdiv * i + j) + 0] * ret[8 * (vdiv * i + j) + 0] + ret[8 * (vdiv * i + j) + 1] * ret[8 * (vdiv * i + j) + 1] + ret[8 * (vdiv * i + j) + 2] * ret[8 * (vdiv * i + j) + 2], 0.5);
                    ret[8 * (vdiv * i + j) + 3] = ret[8 * (vdiv * i + j) + 0] / d;
                    ret[8 * (vdiv * i + j) + 4] = ret[8 * (vdiv * i + j) + 1] / d;
                    ret[8 * (vdiv * i + j) + 5] = ret[8 * (vdiv * i + j) + 2] / d;
                    ret[8 * (vdiv * i + j) + 6] = 1 - j / (hdiv - 1);
                    ret[8 * (vdiv * i + j) + 7] = i / (vdiv - 1);
                }
            }
            return ret;
        }
    }, {
        key: "sphere",
        value: function sphere(center, up, right, forward, vdiv, hdiv) {
            var ret = new Array(vdiv * hdiv * 8);
            for (var i = 0; i < vdiv; i++) {
                for (var j = 0; j < hdiv; j++) {
                    ret[8 * (vdiv * i + j) + 0] = center[0] + Math.sin(Math.PI * i / (vdiv - 1)) * (right[0] * Math.cos(2 * Math.PI * (j / (hdiv - 1))) + forward[0] * Math.sin(2 * Math.PI * (j / (hdiv - 1)))) - up[0] * Math.cos(Math.PI * i / (vdiv - 1));
                    ret[8 * (vdiv * i + j) + 1] = center[1] + Math.sin(Math.PI * i / (vdiv - 1)) * (right[1] * Math.cos(2 * Math.PI * (j / (hdiv - 1))) + forward[1] * Math.sin(2 * Math.PI * (j / (hdiv - 1)))) - up[1] * Math.cos(Math.PI * i / (vdiv - 1));
                    ret[8 * (vdiv * i + j) + 2] = center[2] + Math.sin(Math.PI * i / (vdiv - 1)) * (right[2] * Math.cos(2 * Math.PI * (j / (hdiv - 1))) + forward[2] * Math.sin(2 * Math.PI * (j / (hdiv - 1)))) - up[2] * Math.cos(Math.PI * i / (vdiv - 1));
                    var d = Math.pow(ret[8 * (vdiv * i + j) + 0] * ret[8 * (vdiv * i + j) + 0] + ret[8 * (vdiv * i + j) + 1] * ret[8 * (vdiv * i + j) + 1] + ret[8 * (vdiv * i + j) + 2] * ret[8 * (vdiv * i + j) + 2], 0.5);
                    ret[8 * (vdiv * i + j) + 3] = ret[8 * (vdiv * i + j) + 0] / d;
                    ret[8 * (vdiv * i + j) + 4] = ret[8 * (vdiv * i + j) + 1] / d;
                    ret[8 * (vdiv * i + j) + 5] = ret[8 * (vdiv * i + j) + 2] / d;
                    ret[8 * (vdiv * i + j) + 6] = 1 - j / (hdiv - 1);
                    ret[8 * (vdiv * i + j) + 7] = i / (vdiv - 1);
                }
            }
            return ret;
        }
    }, {
        key: "sphereIndex",
        value: function sphereIndex(offset, vdiv, hdiv) {
            var ret = new Array(hdiv * vdiv * 6);
            for (var i = 0; i < vdiv - 1; i++) {
                for (var j = 0; j < hdiv - 1; j++) {
                    ret[6 * (vdiv * j + i) + 0] = vdiv * i + j;
                    ret[6 * (vdiv * j + i) + 1] = vdiv * (i + 1) + j;
                    ret[6 * (vdiv * j + i) + 2] = vdiv * i + j + 1;
                    ret[6 * (vdiv * j + i) + 3] = vdiv * i + j + 1;
                    ret[6 * (vdiv * j + i) + 4] = vdiv * (i + 1) + j;
                    ret[6 * (vdiv * j + i) + 5] = vdiv * (i + 1) + j + 1;
                }
            }
            return ret;
        }
    }]);

    return GeometryUtility;
}();

exports.default = GeometryUtility;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Unlit = __webpack_require__(130);

var _Unlit2 = _interopRequireDefault(_Unlit);

var _MaterialFactory = __webpack_require__(1);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultMaterial = function () {
    function DefaultMaterial() {
        _classCallCheck(this, DefaultMaterial);
    }

    _createClass(DefaultMaterial, null, [{
        key: "register",
        value: function register() {
            _MaterialFactory2.default.addSORTMaterial("unlit", _Unlit2.default);
        }
    }]);

    return DefaultMaterial;
}();

exports.default = DefaultMaterial;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.__NAME__ = exports.__VERSION__ = undefined;

var _AssetLoader = __webpack_require__(48);

var _AssetLoader2 = _interopRequireDefault(_AssetLoader);

var _CacheResolver = __webpack_require__(31);

var _CacheResolver2 = _interopRequireDefault(_CacheResolver);

var _ExternalResourceResolver = __webpack_require__(32);

var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);

var _ImageResolver = __webpack_require__(33);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

var _NameResolver = __webpack_require__(14);

var _NameResolver2 = _interopRequireDefault(_NameResolver);

var _TextFileResolver = __webpack_require__(49);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _VideoResolver = __webpack_require__(50);

var _VideoResolver2 = _interopRequireDefault(_VideoResolver);

var _AssetLoadingManagerComponent = __webpack_require__(34);

var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);

var _BasicComponent = __webpack_require__(15);

var _BasicComponent2 = _interopRequireDefault(_BasicComponent);

var _CameraComponent = __webpack_require__(52);

var _CameraComponent2 = _interopRequireDefault(_CameraComponent);

var _CanvasInitializerComponent = __webpack_require__(55);

var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);

var _FullscreenComponent = __webpack_require__(85);

var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);

var _GeometryComponent = __webpack_require__(86);

var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);

var _GeometryRegistoryComponent = __webpack_require__(87);

var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);

var _LoopManagerComponent = __webpack_require__(16);

var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

var _MaterialComponent = __webpack_require__(39);

var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

var _MaterialContainerBase = __webpack_require__(40);

var _MaterialContainerBase2 = _interopRequireDefault(_MaterialContainerBase);

var _MaterialContainerComponent = __webpack_require__(22);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _MaterialImporterComponent = __webpack_require__(89);

var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);

var _MeshRendererComponent = __webpack_require__(90);

var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);

var _MouseCameraControlComponent = __webpack_require__(91);

var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);

var _RenderComponentBase = __webpack_require__(122);

var _RenderComponentBase2 = _interopRequireDefault(_RenderComponentBase);

var _RendererComponent = __webpack_require__(23);

var _RendererComponent2 = _interopRequireDefault(_RendererComponent);

var _RendererManagerComponent = __webpack_require__(93);

var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);

var _RenderingTargetComponent = __webpack_require__(94);

var _RenderingTargetComponent2 = _interopRequireDefault(_RenderingTargetComponent);

var _RenderHitareaComponent = __webpack_require__(97);

var _RenderHitareaComponent2 = _interopRequireDefault(_RenderHitareaComponent);

var _RenderQuadComponent = __webpack_require__(99);

var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);

var _RenderSceneComponent = __webpack_require__(47);

var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

var _RenderStageBase = __webpack_require__(98);

var _RenderStageBase2 = _interopRequireDefault(_RenderStageBase);

var _SingleBufferRenderStageBase = __webpack_require__(29);

var _SingleBufferRenderStageBase2 = _interopRequireDefault(_SingleBufferRenderStageBase);

var _SceneComponent = __webpack_require__(19);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _ColorBufferTextureUpdator = __webpack_require__(100);

var _ColorBufferTextureUpdator2 = _interopRequireDefault(_ColorBufferTextureUpdator);

var _ConstantSizeResourceResizer = __webpack_require__(44);

var _ConstantSizeResourceResizer2 = _interopRequireDefault(_ConstantSizeResourceResizer);

var _ImageTextureUpdator = __webpack_require__(101);

var _ImageTextureUpdator2 = _interopRequireDefault(_ImageTextureUpdator);

var _RenderBufferUpdator = __webpack_require__(43);

var _RenderBufferUpdator2 = _interopRequireDefault(_RenderBufferUpdator);

var _ResizableResourceUpdator = __webpack_require__(27);

var _ResizableResourceUpdator2 = _interopRequireDefault(_ResizableResourceUpdator);

var _ResourceResizerComponentBase = __webpack_require__(28);

var _ResourceResizerComponentBase2 = _interopRequireDefault(_ResourceResizerComponentBase);

var _TextureContainer = __webpack_require__(13);

var _TextureContainer2 = _interopRequireDefault(_TextureContainer);

var _TextureUpdatorComponentBase = __webpack_require__(30);

var _TextureUpdatorComponentBase2 = _interopRequireDefault(_TextureUpdatorComponentBase);

var _VideoTextureUpdator = __webpack_require__(102);

var _VideoTextureUpdator2 = _interopRequireDefault(_VideoTextureUpdator);

var _ViewportSizeResourceResizer = __webpack_require__(45);

var _ViewportSizeResourceResizer2 = _interopRequireDefault(_ViewportSizeResourceResizer);

var _TransformComponent = __webpack_require__(8);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _CanvasSizeConverter = __webpack_require__(103);

var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);

var _GeometryConverter = __webpack_require__(104);

var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);

var _MaterialConverter = __webpack_require__(105);

var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);

var _NodeConverter = __webpack_require__(106);

var _NodeConverter2 = _interopRequireDefault(_NodeConverter);

var _PositionConverter = __webpack_require__(107);

var _PositionConverter2 = _interopRequireDefault(_PositionConverter);

var _RenderingTargetConverter = __webpack_require__(108);

var _RenderingTargetConverter2 = _interopRequireDefault(_RenderingTargetConverter);

var _TextureConverter = __webpack_require__(109);

var _TextureConverter2 = _interopRequireDefault(_TextureConverter);

var _ViewportConverter = __webpack_require__(111);

var _ViewportConverter2 = _interopRequireDefault(_ViewportConverter);

var _DefaultPrimitives = __webpack_require__(112);

var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);

var _Geometry = __webpack_require__(10);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _GeometryFactory = __webpack_require__(21);

var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

var _GeometryUtility = __webpack_require__(113);

var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);

var _MorphGeometry = __webpack_require__(129);

var _MorphGeometry2 = _interopRequireDefault(_MorphGeometry);

var _DefaultDynamicStateResolvers = __webpack_require__(72);

var _DefaultDynamicStateResolvers2 = _interopRequireDefault(_DefaultDynamicStateResolvers);

var _DefaultMacro = __webpack_require__(66);

var _DefaultMacro2 = _interopRequireDefault(_DefaultMacro);

var _DefaultMaterial = __webpack_require__(114);

var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);

var _DefaultStaticImport = __webpack_require__(61);

var _DefaultStaticImport2 = _interopRequireDefault(_DefaultStaticImport);

var _GLStateConfigurator = __webpack_require__(71);

var _GLStateConfigurator2 = _interopRequireDefault(_GLStateConfigurator);

var _MacroRegistory = __webpack_require__(65);

var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);

var _Material = __webpack_require__(37);

var _Material2 = _interopRequireDefault(_Material);

var _MaterialFactory = __webpack_require__(1);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _Pass = __webpack_require__(68);

var _Pass2 = _interopRequireDefault(_Pass);

var _PassProgram = __webpack_require__(73);

var _PassProgram2 = _interopRequireDefault(_PassProgram);

var _ShaderMixer = __webpack_require__(80);

var _ShaderMixer2 = _interopRequireDefault(_ShaderMixer);

var _Technique = __webpack_require__(67);

var _Technique2 = _interopRequireDefault(_Technique);

var _TextureReference = __webpack_require__(110);

var _TextureReference2 = _interopRequireDefault(_TextureReference);

var _UniformResolverContainer = __webpack_require__(82);

var _UniformResolverContainer2 = _interopRequireDefault(_UniformResolverContainer);

var _UniformResolverRegistry = __webpack_require__(11);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

var _MatricesRegister = __webpack_require__(131);

var _MatricesRegister2 = _interopRequireDefault(_MatricesRegister);

var _MiscRegister = __webpack_require__(132);

var _MiscRegister2 = _interopRequireDefault(_MiscRegister);

var _UserValueRegister = __webpack_require__(134);

var _UserValueRegister2 = _interopRequireDefault(_UserValueRegister);

var _nodes = __webpack_require__(135);

var _nodes2 = _interopRequireDefault(_nodes);

var _Buffer = __webpack_require__(70);

var _Buffer2 = _interopRequireDefault(_Buffer);

var _FrameBuffer = __webpack_require__(42);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _GLExtRequestor = __webpack_require__(20);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

var _GLRelatedRegistryBase = __webpack_require__(3);

var _GLRelatedRegistryBase2 = _interopRequireDefault(_GLRelatedRegistryBase);

var _GLResource = __webpack_require__(4);

var _GLResource2 = _interopRequireDefault(_GLResource);

var _GLSLPrecisionChecker = __webpack_require__(81);

var _GLSLPrecisionChecker2 = _interopRequireDefault(_GLSLPrecisionChecker);

var _GLUtility = __webpack_require__(38);

var _GLUtility2 = _interopRequireDefault(_GLUtility);

var _ManagedProgram = __webpack_require__(74);

var _ManagedProgram2 = _interopRequireDefault(_ManagedProgram);

var _ManagedShader = __webpack_require__(78);

var _ManagedShader2 = _interopRequireDefault(_ManagedShader);

var _Program = __webpack_require__(75);

var _Program2 = _interopRequireDefault(_Program);

var _RenderBuffer = __webpack_require__(25);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _CanvasRegionRenderingTarget = __webpack_require__(92);

var _CanvasRegionRenderingTarget2 = _interopRequireDefault(_CanvasRegionRenderingTarget);

var _CanvasRenderingTarget = __webpack_require__(41);

var _CanvasRenderingTarget2 = _interopRequireDefault(_CanvasRenderingTarget);

var _OffscreenRenderingTarget = __webpack_require__(96);

var _OffscreenRenderingTarget2 = _interopRequireDefault(_OffscreenRenderingTarget);

var _RenderingBufferResourceRegistry = __webpack_require__(26);

var _RenderingBufferResourceRegistry2 = _interopRequireDefault(_RenderingBufferResourceRegistry);

var _RenderingTargetRegistry = __webpack_require__(24);

var _RenderingTargetRegistry2 = _interopRequireDefault(_RenderingTargetRegistry);

var _ResourceCache = __webpack_require__(76);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

var _Shader = __webpack_require__(79);

var _Shader2 = _interopRequireDefault(_Shader);

var _Texture = __webpack_require__(83);

var _Texture2 = _interopRequireDefault(_Texture);

var _Texture2D = __webpack_require__(2);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _UniformProxy = __webpack_require__(77);

var _UniformProxy2 = _interopRequireDefault(_UniformProxy);

var _Viewport = __webpack_require__(6);

var _Viewport2 = _interopRequireDefault(_Viewport);

var _DrawPriorty = __webpack_require__(88);

var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);

var _RenderQueue = __webpack_require__(53);

var _RenderQueue2 = _interopRequireDefault(_RenderQueue);

var _RenderQueueRegistry = __webpack_require__(54);

var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);

var _CommentRemover = __webpack_require__(59);

var _CommentRemover2 = _interopRequireDefault(_CommentRemover);

var _ImportResolver = __webpack_require__(60);

var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

var _NameSemanticsPair = __webpack_require__(62);

var _NameSemanticsPair2 = _interopRequireDefault(_NameSemanticsPair);

var _Parser = __webpack_require__(57);

var _Parser2 = _interopRequireDefault(_Parser);

var _Preferences = __webpack_require__(63);

var _Preferences2 = _interopRequireDefault(_Preferences);

var _SortTransformUtility = __webpack_require__(58);

var _SortTransformUtility2 = _interopRequireDefault(_SortTransformUtility);

var _TypeToConstant = __webpack_require__(64);

var _TypeToConstant2 = _interopRequireDefault(_TypeToConstant);

var _HashCalculator = __webpack_require__(9);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

var _MeshIndexCalculator = __webpack_require__(46);

var _MeshIndexCalculator2 = _interopRequireDefault(_MeshIndexCalculator);

var _TextureSizeCalculator = __webpack_require__(12);

var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

var _Timer = __webpack_require__(51);

var _Timer2 = _interopRequireDefault(_Timer);

var _main = __webpack_require__(136);

var _main2 = _interopRequireDefault(_main);

var _grimoirejs = __webpack_require__(5);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = exports.__VERSION__ = "0.30.0beta5";
var __NAME__ = exports.__NAME__ = "grimoirejs-fundamental";

var __EXPOSE__ = {
    "Asset": {
        "AssetLoader": _AssetLoader2.default,
        "CacheResolver": _CacheResolver2.default,
        "ExternalResourceResolver": _ExternalResourceResolver2.default,
        "ImageResolver": _ImageResolver2.default,
        "NameResolver": _NameResolver2.default,
        "TextFileResolver": _TextFileResolver2.default,
        "VideoResolver": _VideoResolver2.default
    },
    "Components": {
        "AssetLoadingManagerComponent": _AssetLoadingManagerComponent2.default,
        "BasicComponent": _BasicComponent2.default,
        "CameraComponent": _CameraComponent2.default,
        "CanvasInitializerComponent": _CanvasInitializerComponent2.default,
        "FullscreenComponent": _FullscreenComponent2.default,
        "GeometryComponent": _GeometryComponent2.default,
        "GeometryRegistoryComponent": _GeometryRegistoryComponent2.default,
        "LoopManagerComponent": _LoopManagerComponent2.default,
        "MaterialComponent": _MaterialComponent2.default,
        "MaterialContainerBase": _MaterialContainerBase2.default,
        "MaterialContainerComponent": _MaterialContainerComponent2.default,
        "MaterialImporterComponent": _MaterialImporterComponent2.default,
        "MeshRendererComponent": _MeshRendererComponent2.default,
        "MouseCameraControlComponent": _MouseCameraControlComponent2.default,
        "RenderComponentBase": _RenderComponentBase2.default,
        "RendererComponent": _RendererComponent2.default,
        "RendererManagerComponent": _RendererManagerComponent2.default,
        "RenderingTargetComponent": _RenderingTargetComponent2.default,
        "RenderStage": {
            "RenderHitareaComponent": _RenderHitareaComponent2.default,
            "RenderQuadComponent": _RenderQuadComponent2.default,
            "RenderSceneComponent": _RenderSceneComponent2.default,
            "RenderStageBase": _RenderStageBase2.default,
            "SingleBufferRenderStageBase": _SingleBufferRenderStageBase2.default
        },
        "SceneComponent": _SceneComponent2.default,
        "Texture": {
            "ColorBufferTextureUpdator": _ColorBufferTextureUpdator2.default,
            "ConstantSizeResourceResizer": _ConstantSizeResourceResizer2.default,
            "ImageTextureUpdator": _ImageTextureUpdator2.default,
            "RenderBufferUpdator": _RenderBufferUpdator2.default,
            "ResizableResourceUpdator": _ResizableResourceUpdator2.default,
            "ResourceResizerComponentBase": _ResourceResizerComponentBase2.default,
            "TextureContainer": _TextureContainer2.default,
            "TextureUpdatorComponentBase": _TextureUpdatorComponentBase2.default,
            "VideoTextureUpdator": _VideoTextureUpdator2.default,
            "ViewportSizeResourceResizer": _ViewportSizeResourceResizer2.default
        },
        "TransformComponent": _TransformComponent2.default
    },
    "Converters": {
        "CanvasSizeConverter": _CanvasSizeConverter2.default,
        "GeometryConverter": _GeometryConverter2.default,
        "MaterialConverter": _MaterialConverter2.default,
        "NodeConverter": _NodeConverter2.default,
        "PositionConverter": _PositionConverter2.default,
        "RenderingTargetConverter": _RenderingTargetConverter2.default,
        "TextureConverter": _TextureConverter2.default,
        "ViewportConverter": _ViewportConverter2.default
    },
    "Geometry": {
        "DefaultPrimitives": _DefaultPrimitives2.default,
        "Geometry": _Geometry2.default,
        "GeometryFactory": _GeometryFactory2.default,
        "GeometryUtility": _GeometryUtility2.default,
        "MorphGeometry": _MorphGeometry2.default
    },
    "Material": {
        "Defaults": {
            "DefaultDynamicStateResolvers": _DefaultDynamicStateResolvers2.default,
            "DefaultMacro": _DefaultMacro2.default,
            "DefaultMaterial": _DefaultMaterial2.default,
            "DefaultStaticImport": _DefaultStaticImport2.default
        },
        "GLStateConfigurator": _GLStateConfigurator2.default,
        "MacroRegistory": _MacroRegistory2.default,
        "Material": _Material2.default,
        "MaterialFactory": _MaterialFactory2.default,
        "Pass": _Pass2.default,
        "PassProgram": _PassProgram2.default,
        "ShaderMixer": _ShaderMixer2.default,
        "Technique": _Technique2.default,
        "TextureReference": _TextureReference2.default,
        "UniformResolverContainer": _UniformResolverContainer2.default,
        "UniformResolverRegistry": _UniformResolverRegistry2.default,
        "Uniforms": {
            "MatricesRegister": _MatricesRegister2.default,
            "MiscRegister": _MiscRegister2.default,
            "UserValueRegister": _UserValueRegister2.default
        }
    },
    "nodes": _nodes2.default,
    "Resource": {
        "Buffer": _Buffer2.default,
        "FrameBuffer": _FrameBuffer2.default,
        "GLExtRequestor": _GLExtRequestor2.default,
        "GLRelatedRegistryBase": _GLRelatedRegistryBase2.default,
        "GLResource": _GLResource2.default,
        "GLSLPrecisionChecker": _GLSLPrecisionChecker2.default,
        "GLUtility": _GLUtility2.default,
        "ManagedProgram": _ManagedProgram2.default,
        "ManagedShader": _ManagedShader2.default,
        "Program": _Program2.default,
        "RenderBuffer": _RenderBuffer2.default,
        "RenderingTarget": {
            "CanvasRegionRenderingTarget": _CanvasRegionRenderingTarget2.default,
            "CanvasRenderingTarget": _CanvasRenderingTarget2.default,
            "OffscreenRenderingTarget": _OffscreenRenderingTarget2.default,
            "RenderingBufferResourceRegistry": _RenderingBufferResourceRegistry2.default,
            "RenderingTargetRegistry": _RenderingTargetRegistry2.default
        },
        "ResourceCache": _ResourceCache2.default,
        "Shader": _Shader2.default,
        "Texture": _Texture2.default,
        "Texture2D": _Texture2D2.default,
        "UniformProxy": _UniformProxy2.default,
        "Viewport": _Viewport2.default
    },
    "SceneRenderer": {
        "DrawPriorty": _DrawPriorty2.default,
        "RenderQueue": _RenderQueue2.default,
        "RenderQueueRegistry": _RenderQueueRegistry2.default
    },
    "Sort": {
        "CommentRemover": _CommentRemover2.default,
        "ImportResolver": _ImportResolver2.default,
        "NameSemanticsPair": _NameSemanticsPair2.default,
        "Parser": _Parser2.default,
        "Preferences": _Preferences2.default,
        "SortTransformUtility": _SortTransformUtility2.default,
        "TypeToConstant": _TypeToConstant2.default
    },
    "Util": {
        "HashCalculator": _HashCalculator2.default,
        "MeshIndexCalculator": _MeshIndexCalculator2.default,
        "TextureSizeCalculator": _TextureSizeCalculator2.default,
        "Timer": _Timer2.default
    }
};

_grimoirejs2.default.notifyRegisteringPlugin(__NAME__);
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.fundamental = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 116 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Base.EEObject;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;height:100%;position: relative;\">\n    <div style=\"width: 55px;height: 55px;border-radius: 100%;border: 5px solid #381794;border-right-color: #FC659D;animation: rotate 1s linear infinite;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;\"></div>\n</div>\n<style type=\"text/css\">\n    @keyframes rotate {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Interface.GrimoireInterface;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "/**\n * Simplest way of transforming vertices on vertex shader\n */\n #ifdef ATTRIBUTE_COLOR_ENABLED\n varying vec4 vColor;\n #endif\n\n varying vec2 vTexCoord;\n varying vec3 vPosition;\n #ifdef ATTRIBUTE_NORMAL_ENABLED\n varying vec3 vNormal;\n #endif\n#ifdef VS\n  @POSITION\n  attribute vec3 position;\n\n  #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n  @TEXCOORD\n  attribute vec2 texCoord;\n  #endif\n\n  #ifdef ATTRIBUTE_NORMAL_ENABLED\n  @NORMAL\n  attribute vec3 normal;\n  #endif\n\n  @MODELVIEWPROJECTION\n  uniform mat4 _matPVM;\n\n  @MODEL\n  uniform mat4 _matM;\n\n  #ifdef ATTRIBUTE_COLOR_ENABLED\n  @COLOR\n  attribute vec4 attrColor;\n  #endif\n\n  #ifdef ATTRIBUTE_POINT_SIZE_ENABLED\n  @POINT_SIZE\n  attribute float pointSize;\n  #endif\n\n  @{default:1.0}\n  uniform float pointScale;\n  void main()\n  {\n    gl_Position = _matPVM * vec4(position,1.0);\n    vPosition = (_matM * vec4(position,1.0)).xyz;\n    #ifdef ATTRIBUTE_NORMAL_ENABLED\n    vNormal = (_matM * vec4(normal,0.)).xyz;\n    #endif\n    #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = texCoord;\n    #endif\n    #ifndef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = position.xy/2.0 + vec2(0.5);\n    #endif\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    vColor = attrColor;\n    #endif\n    float pSize = 1.0;\n    #ifdef ATTRIBUTE_POINT_SIZE_ENABLED\n    pSize *= pointSize;\n    #endif\n    gl_PointSize = pointScale * pSize;\n  }\n#endif\n"

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "varying vec2 vTexCoord;\nvarying vec2 vScreenPos;\nvarying vec2 vScreenPosWithOffset;\nvarying vec2 vScreenPosNormalized;\nvarying vec2 vAspectScale;\n#ifdef VS\n  @POSITION\n  attribute vec3 position;\n  #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n  @TEXCOORD\n  attribute vec2 texCoord;\n  @VIEWPORT\n  uniform vec4 viewportRect;\n  #endif\n  void main(){\n    gl_Position = vec4(position,1);\n    #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = texCoord;\n    #endif\n    #ifndef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = (position.xy + vec2(1.0)) * vec2(0.5);\n    #endif\n    vScreenPosNormalized = (position.xy + vec2(1.0)) * vec2(0.5);\n    vScreenPos = viewportRect.zw * vScreenPosNormalized;\n    vScreenPosWithOffset = vScreenPos + viewportRect.xy;\n  }\n#endif"

/***/ }),
/* 121 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Quaternion:undefined;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderComponentBase = function (_Component) {
  _inherits(RenderComponentBase, _Component);

  function RenderComponentBase() {
    _classCallCheck(this, RenderComponentBase);

    return _possibleConstructorReturn(this, (RenderComponentBase.__proto__ || Object.getPrototypeOf(RenderComponentBase)).apply(this, arguments));
  }

  return RenderComponentBase;
}(_Component3.default);

exports.default = RenderComponentBase;

RenderComponentBase.attributes = {};

/***/ }),
/* 123 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Color4:undefined;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(125), __webpack_require__(126)))

/***/ }),
/* 125 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 127 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Node.GomlNode;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Node.Attribute;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Geometry2 = __webpack_require__(10);

var _Geometry3 = _interopRequireDefault(_Geometry2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Geometries with morphing features
 */
var MorphGeometry = function (_Geometry) {
    _inherits(MorphGeometry, _Geometry);

    function MorphGeometry() {
        _classCallCheck(this, MorphGeometry);

        var _this = _possibleConstructorReturn(this, (MorphGeometry.__proto__ || Object.getPrototypeOf(MorphGeometry)).apply(this, arguments));

        _this._morphBaseAttribute = {};
        _this.morphParameters = {};
        _this.lastWeights = null;
        return _this;
    }

    _createClass(MorphGeometry, [{
        key: "addMorphAttribute",
        value: function addMorphAttribute(semantics, morphParameters) {
            var accessor = this.accessors[semantics];
            if (!accessor) {
                throw new Error("There was no accessor related to specified accessor");
            }
            var buffer = this.buffers[accessor.bufferIndex];
            if (!buffer.keepSource) {
                throw new Error("To enable morphing attribute on Geometry, keepOnBuffer flag must be true on attribute vertex value");
            }
            if (this._morphBaseAttribute[semantics]) {
                throw new Error("Already morphing attribute are registered. If you want to replace, remove current morphings at first.");
            }
            if (this.lastWeights === null) {
                // Initialize weights
                var initialWeights = [];
                for (var i = 0; i < morphParameters.length; i++) {
                    initialWeights.push(0);
                }
                this.lastWeights = initialWeights;
            } else if (this.lastWeights.length !== morphParameters.length) {
                throw new Error("morphing attribute should have same length with the morphing attribute previously registered.");
            }
            var baseBuffer = buffer.bufferSource;
            if (!(baseBuffer instanceof Float32Array)) {
                throw new Error("Morphing is currently only supported for Float32Array");
            }
            var length = baseBuffer.byteLength / baseBuffer.BYTES_PER_ELEMENT;
            // Copy base source
            var copiedBaseBuffer = new Float32Array(length);
            for (var _i = 0; _i < length; _i++) {
                copiedBaseBuffer[_i] = baseBuffer[_i];
            }
            this._morphBaseAttribute[semantics] = {
                buffer: copiedBaseBuffer,
                accessor: this.accessors[semantics]
            };
            this.morphParameters[semantics] = morphParameters;
        }
    }, {
        key: "removeMorphAttribute",
        value: function removeMorphAttribute(semantics) {
            delete this.morphParameters[semantics];
            delete this._morphBaseAttribute[semantics];
            if (Object.keys(this.morphParameters).length === 0) {
                this.lastWeights = null;
            }
        }
    }, {
        key: "setWeight",
        value: function setWeight(weights) {
            this.lastWeights = weights;
            for (var key in this._morphBaseAttribute) {
                this._updateForSemantics(key);
            }
        }
    }, {
        key: "_updateForSemantics",
        value: function _updateForSemantics(semantics) {
            var accessor = this.accessors[semantics];
            var target = this.buffers[accessor.bufferIndex];
            var targetBuffer = target.bufferSource;
            if (!(targetBuffer instanceof Float32Array)) {
                throw new Error("buffer source must be Float32Array");
            }
            for (var i = 0; i < targetBuffer.length; i++) {
                targetBuffer[i] = this._calculateWeights(semantics, i);
            }
            target.update(targetBuffer);
        }
    }, {
        key: "_calculateWeights",
        value: function _calculateWeights(semantics, index) {
            var result = this._morphBaseAttribute[semantics].buffer[index];
            for (var i = 0; i < this.lastWeights.length; i++) {
                result += this.lastWeights[i] * this.morphParameters[semantics][i].buffer[index];
            }
            return result;
        }
    }]);

    return MorphGeometry;
}(_Geometry3.default);

exports.default = MorphGeometry;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "@Technique default{\n@Pass{\n  @DynamicState(dynamic-cull)\n  @BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\n  FS_PREC(mediump,float)\n  @import \"basic-vert\"\n  #ifdef FS\n  @{type:\"color\",default:\"white\"}\n  uniform vec4 color;\n\n  @{flag:\"USE_TEXTURE\"}\n  uniform sampler2D texture;\n\n  uniform float _time;\n  void main(void)\n  {\n    vec4 baseColor = color;\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    baseColor *= vColor;\n    #endif\n    #ifdef USE_TEXTURE\n      gl_FragColor = baseColor * texture2D(texture,vTexCoord);\n    #endif\n    #ifndef USE_TEXTURE\n      gl_FragColor = baseColor;\n    #endif\n  }\n  #endif\n}\n}\n\n@Technique hitarea{\n  @Disable(BLEND)\n  @Pass{\n    FS_PREC(mediump,float)\n    @import \"basic-vert\"\n    #ifdef FS\n      @MESH_INDEX\n      uniform vec4 meshIndex;\n      void main(){\n        gl_FragColor = meshIndex;\n      }\n    #endif\n  }\n}\n"

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Matrix = __webpack_require__(17);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _UniformResolverRegistry = __webpack_require__(11);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UniformResolverRegistry2.default.add("MODELVIEWPROJECTION", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.transform.calcPVM(args.camera));
    };
});
_UniformResolverRegistry2.default.add("LOCAL", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.transform.localTransform);
    };
});
_UniformResolverRegistry2.default.add("MODEL", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.transform.globalTransform);
    };
});
_UniformResolverRegistry2.default.add("MODELVIEW", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.camera.ViewMatrix.multiplyWith(args.transform.globalTransform));
    };
});
_UniformResolverRegistry2.default.add("VIEW", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.camera.ViewMatrix);
    };
});
_UniformResolverRegistry2.default.add("PROJECTION", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.camera.ProjectionMatrix);
    };
});
_UniformResolverRegistry2.default.add("MODELINVERSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.globalTransform));
    };
});
_UniformResolverRegistry2.default.add("VIEWINVERSE", function (valInfo) {
    return function (proxy, args) {
        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.camera.ViewMatrix));
    };
});
_UniformResolverRegistry2.default.add("PROJECTIONINVERSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.camera.InvProjectionMatrix);
    };
});
_UniformResolverRegistry2.default.add("MODELVIEWINVERSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.calcVM(args.camera)));
    };
});
_UniformResolverRegistry2.default.add("MODELVIEWPROJECTIONINVERSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.calcPVM(args.camera)));
    };
});
_UniformResolverRegistry2.default.add("MODELINVERSETRANSPOSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, _Matrix2.default.transpose(_Matrix2.default.inverse(args.transform.globalTransform)));
    };
});
_UniformResolverRegistry2.default.add("MODELVIEWINVERSETRANSPOSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix3(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix3(valInfo.name, _Matrix2.default.transpose(_Matrix2.default.inverse(args.transform.calcVM(args.camera))));
    };
});
exports.default = null;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Vector = __webpack_require__(133);

var _Vector2 = _interopRequireDefault(_Vector);

var _Vector3 = __webpack_require__(18);

var _Vector4 = _interopRequireDefault(_Vector3);

var _MeshIndexCalculator = __webpack_require__(46);

var _MeshIndexCalculator2 = _interopRequireDefault(_MeshIndexCalculator);

var _UniformResolverRegistry = __webpack_require__(11);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UniformResolverRegistry2.default.add("VIEWPORT", function (valInfo) {
    return function (proxy, args) {
        var vp = args.viewport;
        proxy.uniformVector4(valInfo.name, new _Vector4.default(vp.Left, vp.Top, vp.Width, vp.Height));
    };
});
_UniformResolverRegistry2.default.add("VIEWPORT_SIZE", function (valInfo) {
    return function (proxy, args) {
        var vp = args.viewport;
        proxy.uniformVector2(valInfo.name, new _Vector2.default(vp.Width, vp.Height));
    };
});
_UniformResolverRegistry2.default.add("TIME", function (valInfo) {
    var unit = valInfo.attributes["unit"] || "ms";
    var divider = 1;
    switch (unit) {
        case "s":
            divider = 1000;
    }
    return function (proxy, args) {
        proxy.uniformFloat(valInfo.name, Date.now() / divider % 100000);
    };
});
_UniformResolverRegistry2.default.add("HAS_TEXTURE", function (valInfo, pass) {
    var sampler = valInfo.attributes["sampler"];
    if (!sampler) {
        throw new Error("The variable having HAS_TEXTURE as semantics must have sampler attribute");
    }
    console.warn("HAS_TEXTURE is deprecated now. Use flag attribute on sampler2D variables to register macro values");
    return function (proxy, args) {
        var hasTexture = !!pass.arguments[sampler] && !!pass.arguments[sampler].get();
        proxy.uniformBool(valInfo.name, hasTexture);
    };
});
_UniformResolverRegistry2.default.add("CAMERA_POSITION", function (valInfo) {
    return function (proxy, args) {
        proxy.uniformVector3(valInfo.name, args.camera.transform.globalPosition);
    };
});
_UniformResolverRegistry2.default.add("CAMERA_DIRECTION", function (valInfo) {
    return function (proxy, args) {
        proxy.uniformVector3(valInfo.name, args.camera.transform.forward);
    };
});
_UniformResolverRegistry2.default.add("MESH_INDEX", function (valInfo) {
    return function (proxy, args) {
        var index = args.renderable.index;
        proxy.uniformVector4(valInfo.name, _MeshIndexCalculator2.default.fromIndex(index));
    };
});
_UniformResolverRegistry2.default.add("MOUSE_POSITION", function (valInfo) {
    var coords = valInfo.attributes["coord"] || "viewportNormalized";
    return function (proxy, args) {
        var mouseDesc = args.rendererDescription["mouse"];
        if (mouseDesc) {
            proxy.uniformVector2(valInfo.name, new _Vector2.default(mouseDesc.coords[coords][0], mouseDesc.coords[coords][1]));
        } else {
            proxy.uniformVector2(valInfo.name, _Vector2.default.Zero);
        }
    };
});
_UniformResolverRegistry2.default.add("MOUSE_STATE", function (valInfo) {
    return function (proxy, args) {
        var mouseDesc = args.rendererDescription["mouse"];
        if (mouseDesc) {
            proxy.uniformVector2(valInfo.name, new _Vector2.default(mouseDesc.left ? 1 : 0, mouseDesc.right ? 1 : 0));
        } else {
            proxy.uniformVector2(valInfo.name, _Vector2.default.Zero);
        }
    };
});
exports.default = null;

/***/ }),
/* 133 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Vector2:undefined;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Texture2D = __webpack_require__(2);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _UniformResolverRegistry = __webpack_require__(11);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gl = WebGLRenderingContext;
var _userValueRegisterers = {
    array: {},
    single: {}
};
_UniformResolverRegistry2.default.add("USER_VALUE", function (valInfo, pass, technique, material) {
    var register = void 0;
    if (valInfo.count) {
        register = _userValueRegisterers.array[valInfo.type];
        if (!register) {
            throw new Error("No user_value registerer was registered for " + valInfo.type + "[]");
        }
    } else {
        register = _userValueRegisterers.single[valInfo.type];
        if (!register) {
            throw new Error("No user_value registerer was registered for " + valInfo.type);
        }
    }
    return register(valInfo, pass);
});
function basicRegister(type, isArray, converter, defaultValue, _register, update) {
    var registerTarget = void 0;
    if (isArray) {
        registerTarget = _userValueRegisterers.array;
    } else {
        registerTarget = _userValueRegisterers.single;
    }
    registerTarget[type] = function (valInfo, pass) {
        pass.addArgument(valInfo.name, {
            converter: converter,
            default: valInfo.attributes["default"] ? valInfo.attributes["default"] : defaultValue
        });
        var updator = update ? function (p, n, o) {
            update(valInfo, p, n, o);
        } : undefined;
        return {
            register: function register(proxy, args) {
                _register(proxy, valInfo.name, pass.arguments[valInfo.name], args);
            },
            update: updator
        };
    };
}
basicRegister(gl.FLOAT, false, "Number", 0, function (proxy, name, value) {
    return proxy.uniformFloat(name, value);
});
basicRegister(gl.INT, false, "Number", 0, function (proxy, name, value) {
    return proxy.uniformInt(name, value);
});
basicRegister(gl.BOOL, false, "Boolean", false, function (proxy, name, value) {
    return proxy.uniformBool(name, value);
});
basicRegister(gl.INT_VEC2, false, "Vector2", [0, 0], function (proxy, name, value) {
    return proxy.uniformVector2(name, value);
});
basicRegister(gl.INT_VEC3, false, "Vector3", [0, 0, 0], function (proxy, name, value) {
    return proxy.uniformVector3(name, value);
});
basicRegister(gl.INT_VEC4, false, "Vector4", [0, 0, 0, 0], function (proxy, name, value) {
    return proxy.uniformVector4(name, value);
});
basicRegister(gl.FLOAT_VEC2, false, "Vector2", [0, 0], function (proxy, name, value) {
    return proxy.uniformVector2(name, value);
});
basicRegister(gl.FLOAT_MAT4, true, "Object", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], function (proxy, name, value) {
    return proxy.uniformMatrixArray(name, value);
});
basicRegister(gl.SAMPLER_2D, false, "Texture", null, function (proxy, name, value, args) {
    var texture = void 0;
    if (value) {
        var fetched = value.get();
        if (fetched.valid) {
            texture = fetched;
        }
    }
    if (!texture) {
        texture = _Texture2D2.default.defaultTextures.get(proxy.program.gl);
    }
    proxy.uniformTexture2D(name, texture);
}, function (v, p, n, o) {
    if (v.attributes["flag"] === void 0) return;
    var used = false;
    if (n) {
        if (n.isFunctionalProxy) {
            used = true;
        } else {
            var fetched = n.get({});
            if (fetched.valid) {
                used = true;
            } else {
                fetched.validPromise.then(function () {
                    p.setMacro(v.attributes["flag"], true);
                    used = true;
                });
            }
        }
    }
    p.setMacro(v.attributes["flag"], used);
});
// vec3 or vec4 should consider the arguments are color or vector.
_userValueRegisterers.single[gl.FLOAT_VEC3] = function (valInfo, pass) {
    var isColor = valInfo.attributes["type"] === "color";
    var attrDefault = valInfo.attributes["default"];
    var defaultValue = attrDefault ? attrDefault : isColor ? [1, 1, 1] : [0, 0, 0];
    pass.addArgument(valInfo.name, {
        converter: isColor ? "Color3" : "Vector3",
        default: defaultValue
    });
    return {
        register: isColor ? function (proxy, args) {
            proxy.uniformColor3(valInfo.name, pass.arguments[valInfo.name]);
        } : function (proxy, args) {
            proxy.uniformVector3(valInfo.name, pass.arguments[valInfo.name]);
        }
    };
};
_userValueRegisterers.single[gl.FLOAT_VEC4] = function (valInfo, pass) {
    var isColor = valInfo.attributes["type"] === "color";
    var attrDefault = valInfo.attributes["default"];
    var defaultValue = attrDefault ? attrDefault : isColor ? [1, 1, 1, 1] : [0, 0, 0, 0];
    pass.addArgument(valInfo.name, {
        converter: isColor ? "Color4" : "Vector4",
        default: defaultValue
    });
    return {
        register: isColor ? function (proxy, args) {
            proxy.uniformColor4(valInfo.name, pass.arguments[valInfo.name]);
        } : function (proxy, args) {
            proxy.uniformVector4(valInfo.name, pass.arguments[valInfo.name]);
        }
    };
};
exports.default = null;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /**
     * GOMLファイルのルートノード
     * ツリーに唯一一つ必要なコンポーネントなどをつけておくためのノード。
     * 特に、`<canvas>`の初期化やループの管理など、最初の初期化時のパラメーターを受け取るためのコンポーネントとともに、
     * `<canvas>`の設定(`width`や`height`)またはフルスクリーンなどのコンポーネントを含む。
     */
    goml: {
        components: ["CanvasInitializer", "LoopManager", "AssetLoadingManager", "GeometryRegistory", "RendererManager", "Fullscreen"]
    },
    /**
     * ある3D空間上のモデルの配置やカメラの設定などの場面の設定を含むためのノード
     * カメラや、ライト、メッシュなど空間に配置するためのノードです。
     * 全ての場面に存在する座標を持ちうるノード(`TransformComponent`を含むノード)は必ずこのノードの子ノードのとして存在する必要があります。
     */
    scene: {
        components: ["Scene"]
    },
    /**
     * 3D空間上の物体を意味するノード
     * メッシュやカメラなどのベースとなるノードです。このノードの子要素には親要素の変型量(`position`や`rotation`)などが伝搬します。
     * 詳しくは`TransformComponent`を参照すると良いでしょう。
     */
    object: {
        components: ["Transform"]
    },
    /**
     * 3D空間を撮影するためのカメラのノード
     * 3D空間を撮影するためのカメラを意味するノードです。シーンをレンダリングするには最低一つのカメラがシーンに属していなければなりません。
     */
    camera: {
        components: ["Camera"],
        default: {
            position: [0, 0, 10]
        },
        super: "object"
    },
    /**
     * 3D空間上のモデルなど、 **映るもの** を表すためのノード
     * 3D空間上に存在する映るものを意味するノードです。シーンに何かを写すには最低一つのメッシュがシーンに属していなければなりません。
     * メッシュは、マテリアル(材質)とジオメトリ(形状)からなります。この2つの指定を変えることで、様々な表現が3D空間上で可能になります。
     */
    mesh: {
        components: ["MaterialContainer", "MeshRenderer"],
        super: "object"
    },
    /**
     * キャンバスの描画手法を指定するためのノード
     * キャンバス上の領域をどのように描画するかを示すためのノードです。gomlの読み込み時に一つも存在しない場合は、自動的にgoml直下に生成されます。
     * 1つ以上のレンダラーを含むことで、キャンバスの複数の領域をレンダリングしたりすることができるようになります。
     * また、この子要素に指定する`<render-XXX>`ノードなどによって、どのようにその領域を描画するかが決定されます。
     * 通常、`<renderer>`の子ノードに何も存在しない場合、自動的に`<render-scene>`タグが生成されます。
     */
    renderer: {
        components: ["Renderer"]
    },
    /**
     * 新しい形状を生成するためのノード
     * 単純な変形(`scale`、`position`、`rotation`だけで表せない)、例えば円の分割数などを指定したい別の形状を明示的に生成するためのノードです。
     */
    geometry: {
        components: ["Geometry"]
    },
    /**
     * テクスチャを明示的に読み込むためのノード
     * テクスチャを読み込むためのノードです。通常、テクスチャはurlをマテリアルに指定するなどして読み込まれますが、
     * サンプラの指定などをしたい場合、このタグで明示的に読み込むことにより読み込むことができます。
     */
    texture: {
        components: ["Texture"]
    },
    /**
     * マテリアルを明示的に読み込むためのノード
     * マテリアルを生成するためのノードです。メッシュからこのノードを参照して利用することにより、複数のメッシュで共通のマテリアルのインスタンスを参照させることができます。
     * これは、同時にマテリアルの値が編集できるだけでなく、パフォーマンス的にも大きな利点をもたらします。
     */
    material: {
        components: ["Material"]
    },
    /**
     * 新しいマテリアルを外部から読み込むためのノード
     * Grimoire.jsのマテリアルファイル(*.sort)から新しい種類のマテリアルを読み込むためのノードです。
     */
    "import-material": {
        components: ["MaterialImporter"]
    },
    /**
     * カラーバッファ用のテクスチャを生成するためのノード
     * `<renderer>`ノードの直下に含まれうるノードの一つです。
     * このノードによってレンダリングに用いるカラーバッファを生成することができます。
     * カラーバッファはオフスクリーンレンダリングなどへの利用など様々な面で利用することができます。
     */
    "texture-buffer": {
        components: ["TextureBuffer"]
    },
    /**
     * 深度バッファ/ステンシルバッファ用の`renderbuffer`を生成するためのノード
     * `<renderer>`ノードの直下に含まれうるノードの一つです。
     * このノードによってレンダリングに用いる深度バッファやステンシルバッファを生成することができます。
     */
    "render-buffer": {
        components: ["RenderBuffer"]
    },
    /**
     *
     * シーンを描画するレンダリング手順を表すためのノード
     * `<renderer>`ノードの直下に含まれうるノードの一つです。
     * このノードは`out`に指定されたテクスチャ(デフォルトではキャンバス自身)に対して、シーンの内容を描画します。
     */
    "render-scene": {
        components: ["RenderScene", "RenderHitArea"],
        default: {
            material: null
        }
    },
    /**
     * 四角形単体を特定のマテリアルで描画するためのノード
     * `<renderer>`ノードの直下に含まれうるノードの一つです。
     * このノードは`out`に指定されたテクスチャ(デフォルトではキャンバス自身)に対して、単純な四角形(`quad`)を指定されたマテリアルで描画します。
     */
    "render-quad": {
        components: ["MaterialContainer", "RenderQuad"],
        default: {
            material: null
        }
    }
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RenderHitareaComponent = __webpack_require__(97);

var _RenderHitareaComponent2 = _interopRequireDefault(_RenderHitareaComponent);

var _NodeConverter = __webpack_require__(106);

var _NodeConverter2 = _interopRequireDefault(_NodeConverter);

var _PositionConverter = __webpack_require__(107);

var _PositionConverter2 = _interopRequireDefault(_PositionConverter);

var _DefaultPrimitives = __webpack_require__(112);

var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);

var _DefaultMaterial = __webpack_require__(114);

var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);

var _GLExtRequestor = __webpack_require__(20);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

var _grimoirejs = __webpack_require__(5);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _AssetLoadingManagerComponent = __webpack_require__(34);

var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);

var _BasicComponent = __webpack_require__(15);

var _BasicComponent2 = _interopRequireDefault(_BasicComponent);

var _CameraComponent = __webpack_require__(52);

var _CameraComponent2 = _interopRequireDefault(_CameraComponent);

var _CanvasInitializerComponent = __webpack_require__(55);

var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);

var _FullscreenComponent = __webpack_require__(85);

var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);

var _GeometryComponent = __webpack_require__(86);

var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);

var _GeometryRegistoryComponent = __webpack_require__(87);

var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);

var _LoopManagerComponent = __webpack_require__(16);

var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

var _MaterialComponent = __webpack_require__(39);

var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

var _MaterialContainerComponent = __webpack_require__(22);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _MaterialImporterComponent = __webpack_require__(89);

var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);

var _MeshRendererComponent = __webpack_require__(90);

var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);

var _MouseCameraControlComponent = __webpack_require__(91);

var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);

var _RendererComponent = __webpack_require__(23);

var _RendererComponent2 = _interopRequireDefault(_RendererComponent);

var _RendererManagerComponent = __webpack_require__(93);

var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);

var _RenderingTargetComponent = __webpack_require__(94);

var _RenderingTargetComponent2 = _interopRequireDefault(_RenderingTargetComponent);

var _RenderQuadComponent = __webpack_require__(99);

var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);

var _RenderSceneComponent = __webpack_require__(47);

var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

var _SceneComponent = __webpack_require__(19);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _ColorBufferTextureUpdator = __webpack_require__(100);

var _ColorBufferTextureUpdator2 = _interopRequireDefault(_ColorBufferTextureUpdator);

var _ConstantSizeResourceResizer = __webpack_require__(44);

var _ConstantSizeResourceResizer2 = _interopRequireDefault(_ConstantSizeResourceResizer);

var _ImageTextureUpdator = __webpack_require__(101);

var _ImageTextureUpdator2 = _interopRequireDefault(_ImageTextureUpdator);

var _RenderBufferUpdator = __webpack_require__(43);

var _RenderBufferUpdator2 = _interopRequireDefault(_RenderBufferUpdator);

var _TextureContainer = __webpack_require__(13);

var _TextureContainer2 = _interopRequireDefault(_TextureContainer);

var _VideoTextureUpdator = __webpack_require__(102);

var _VideoTextureUpdator2 = _interopRequireDefault(_VideoTextureUpdator);

var _ViewportSizeResourceResizer = __webpack_require__(45);

var _ViewportSizeResourceResizer2 = _interopRequireDefault(_ViewportSizeResourceResizer);

var _TransformComponent = __webpack_require__(8);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _CanvasSizeConverter = __webpack_require__(103);

var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);

var _GeometryConverter = __webpack_require__(104);

var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);

var _MaterialConverter = __webpack_require__(105);

var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);

var _RenderingTargetConverter = __webpack_require__(108);

var _RenderingTargetConverter2 = _interopRequireDefault(_RenderingTargetConverter);

var _TextureConverter = __webpack_require__(109);

var _TextureConverter2 = _interopRequireDefault(_TextureConverter);

var _ViewportConverter = __webpack_require__(111);

var _ViewportConverter2 = _interopRequireDefault(_ViewportConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

exports.default = function () {
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _grimoirejs2.default.registerComponent("AssetLoadingManager", _AssetLoadingManagerComponent2.default);
                            _grimoirejs2.default.registerComponent("Camera", _CameraComponent2.default);
                            _grimoirejs2.default.registerComponent("CanvasInitializer", _CanvasInitializerComponent2.default);
                            _grimoirejs2.default.registerComponent("Fullscreen", _FullscreenComponent2.default);
                            _grimoirejs2.default.registerComponent("Geometry", _GeometryComponent2.default);
                            _grimoirejs2.default.registerComponent("GeometryRegistory", _GeometryRegistoryComponent2.default);
                            _grimoirejs2.default.registerComponent("LoopManager", _LoopManagerComponent2.default);
                            _grimoirejs2.default.registerComponent("Material", _MaterialComponent2.default);
                            _grimoirejs2.default.registerComponent("MaterialContainer", _MaterialContainerComponent2.default);
                            _grimoirejs2.default.registerComponent("MaterialImporter", _MaterialImporterComponent2.default);
                            _grimoirejs2.default.registerComponent("MeshRenderer", _MeshRendererComponent2.default);
                            _grimoirejs2.default.registerComponent("MouseCameraControl", _MouseCameraControlComponent2.default);
                            _grimoirejs2.default.registerComponent("RenderBufferUpdator", _RenderBufferUpdator2.default);
                            _grimoirejs2.default.registerComponent("Renderer", _RendererComponent2.default);
                            _grimoirejs2.default.registerComponent("RendererManager", _RendererManagerComponent2.default);
                            _grimoirejs2.default.registerComponent("RenderQuad", _RenderQuadComponent2.default);
                            _grimoirejs2.default.registerComponent("RenderScene", _RenderSceneComponent2.default);
                            _grimoirejs2.default.registerComponent("Scene", _SceneComponent2.default);
                            _grimoirejs2.default.registerComponent("ColorBufferTextureUpdator", _ColorBufferTextureUpdator2.default);
                            _grimoirejs2.default.registerComponent("TextureContainer", _TextureContainer2.default);
                            _grimoirejs2.default.registerComponent("Transform", _TransformComponent2.default);
                            _grimoirejs2.default.registerComponent("RenderHitArea", _RenderHitareaComponent2.default);
                            _grimoirejs2.default.registerComponent("ImageTextureUpdator", _ImageTextureUpdator2.default);
                            _grimoirejs2.default.registerComponent("VideoTextureUpdator", _VideoTextureUpdator2.default);
                            _grimoirejs2.default.registerComponent("ViewportSizeResourceResizer", _ViewportSizeResourceResizer2.default);
                            _grimoirejs2.default.registerComponent("ConstantSizeResourceResizer", _ConstantSizeResourceResizer2.default);
                            _grimoirejs2.default.registerComponent("RenderingTarget", _RenderingTargetComponent2.default);
                            _grimoirejs2.default.registerComponent("BasicComponent", _BasicComponent2.default);
                            _grimoirejs2.default.registerConverter("CanvasSize", _CanvasSizeConverter2.default);
                            _grimoirejs2.default.registerConverter("Geometry", _GeometryConverter2.default);
                            _grimoirejs2.default.registerConverter("Material", _MaterialConverter2.default);
                            _grimoirejs2.default.registerConverter("Texture", _TextureConverter2.default);
                            _grimoirejs2.default.registerConverter("Texture2D", _TextureConverter2.default);
                            _grimoirejs2.default.registerConverter("Viewport", _ViewportConverter2.default);
                            _grimoirejs2.default.registerConverter("Node", _NodeConverter2.default);
                            _grimoirejs2.default.registerConverter(_PositionConverter2.default);
                            _grimoirejs2.default.registerConverter("RenderingTarget", _RenderingTargetConverter2.default);
                            _grimoirejs2.default.registerNode("goml", ["CanvasInitializer", "LoopManager", "AssetLoadingManager", "GeometryRegistory", "RendererManager", "Fullscreen"]);
                            _grimoirejs2.default.registerNode("scene", ["Scene"]);
                            _grimoirejs2.default.registerNode("object", ["Transform"]);
                            _grimoirejs2.default.registerNode("camera", ["Camera"], { position: "0,0,10" }, "object");
                            _grimoirejs2.default.registerNode("mesh", ["MaterialContainer", "MeshRenderer"], {}, "object");
                            _grimoirejs2.default.registerNode("renderer", ["Renderer"]);
                            _grimoirejs2.default.registerNode("geometry", ["Geometry"]);
                            _grimoirejs2.default.registerNode("texture", ["TextureContainer"]);
                            _grimoirejs2.default.registerNode("image-texture", ["ImageTextureUpdator"], {}, "texture");
                            _grimoirejs2.default.registerNode("video-texture", ["VideoTextureUpdator"], {}, "texture");
                            _grimoirejs2.default.registerNode("material", ["Material"]);
                            _grimoirejs2.default.registerNode("import-material", ["MaterialImporter"]);
                            _grimoirejs2.default.registerNode("color-buffer", ["ColorBufferTextureUpdator"], {
                                resizerType: "ViewportSize"
                            }, "texture");
                            _grimoirejs2.default.registerNode("render-buffer", ["RenderBufferUpdator"], {
                                resizerType: "ViewportSize"
                            });
                            _grimoirejs2.default.registerNode("render-scene", ["RenderScene", "RenderHitArea"], {
                                material: null
                            });
                            _grimoirejs2.default.registerNode("render-quad", ["MaterialContainer", "RenderQuad"], {
                                material: null
                            });
                            _grimoirejs2.default.registerNode("rendering-target", ["RenderingTarget"]);
                            _DefaultPrimitives2.default.register();
                            _DefaultMaterial2.default.register();
                            _GLExtRequestor2.default.request("OES_texture_float");

                        case 57:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-fundamental.js.map