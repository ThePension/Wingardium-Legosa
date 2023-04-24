"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var class_converter_1 = require("class-converter");
var Color = (exports.Color = /** @class */ (function () {
  function Color() {}
  Object.defineProperty(Color.prototype, "id", {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
        |*                           PUBLIC                            *|
        \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * *\
        |*           GETTERS           *|
        \* * * * * * * * * * * * * * * */
    get: function () {
      var _a;
      return (_a = this._color_id) !== null && _a !== void 0 ? _a : this._id;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Color.prototype, "name", {
    get: function () {
      var _a;
      return (_a = this._color_name) !== null && _a !== void 0
        ? _a
        : this._name;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Color.prototype, "rgbColor", {
    get: function () {
      return this._rgbColor;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Color.prototype, "isTransparent", {
    get: function () {
      return this._isTransparent;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Color.prototype, "numSets", {
    get: function () {
      return this._numSets;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Color.prototype, "numSetPart", {
    get: function () {
      return this._numSetPart;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Color.prototype, "partImgUrl", {
    get: function () {
      return this._partImgUrl;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Color.prototype, "elements", {
    get: function () {
      return this._elements;
    },
    enumerable: false,
    configurable: true,
  });
  __decorate(
    [(0, class_converter_1.property)("id"), (0, class_converter_1.optional)()],
    Color.prototype,
    "_id",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("color_id"),
      (0, class_converter_1.optional)(),
    ],
    Color.prototype,
    "_color_id",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("name"),
      (0, class_converter_1.optional)(),
    ],
    Color.prototype,
    "_name",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("color_name"),
      (0, class_converter_1.optional)(),
    ],
    Color.prototype,
    "_color_name",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("rgb"),
      (0, class_converter_1.optional)(),
      (0, class_converter_1.deserialize)(function (value) {
        return "#".concat(value);
      }),
    ],
    Color.prototype,
    "_rgbColor",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("is_trans"),
      (0, class_converter_1.optional)(),
    ],
    Color.prototype,
    "_isTransparent",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("num_sets"),
      (0, class_converter_1.optional)(),
    ],
    Color.prototype,
    "_numSets",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("num_set_parts"),
      (0, class_converter_1.optional)(),
    ],
    Color.prototype,
    "_numSetPart",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("part_img_url"),
      (0, class_converter_1.optional)(),
    ],
    Color.prototype,
    "_partImgUrl",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("elements"),
      (0, class_converter_1.optional)(),
    ],
    Color.prototype,
    "_elements",
    void 0
  );
  return Color;
})());
