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
exports.Set = void 0;
var class_converter_1 = require("class-converter");
var moment = require("moment");
var Set = (exports.Set = /** @class */ (function () {
  function Set() {}
  Object.defineProperty(Set.prototype, "id", {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
        |*                           PUBLIC                            *|
        \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * *\
        |*           GETTERS           *|
        \* * * * * * * * * * * * * * * */
    get: function () {
      return this._id;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Set.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Set.prototype, "year", {
    get: function () {
      return this._year;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Set.prototype, "themeId", {
    get: function () {
      return this._themeId;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Set.prototype, "numParts", {
    get: function () {
      return this._numParts;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Set.prototype, "setImgUrl", {
    get: function () {
      return this._setImgUrl;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Set.prototype, "setUrl", {
    get: function () {
      return this._setUrl;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Set.prototype, "lastModifiedAt", {
    get: function () {
      return this._lastModifiedAt;
    },
    enumerable: false,
    configurable: true,
  });
  __decorate(
    [
      (0, class_converter_1.property)("set_num"),
      (0, class_converter_1.optional)(),
    ],
    Set.prototype,
    "_id",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("name"),
      (0, class_converter_1.optional)(),
    ],
    Set.prototype,
    "_name",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("year"),
      (0, class_converter_1.optional)(),
    ],
    Set.prototype,
    "_year",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("theme_id"),
      (0, class_converter_1.optional)(),
    ],
    Set.prototype,
    "_themeId",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("num_parts"),
      (0, class_converter_1.optional)(),
    ],
    Set.prototype,
    "_numParts",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("set_img_url"),
      (0, class_converter_1.optional)(),
    ],
    Set.prototype,
    "_setImgUrl",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("set_url"),
      (0, class_converter_1.optional)(),
    ],
    Set.prototype,
    "_setUrl",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("last_modified_dt"),
      (0, class_converter_1.optional)(),
      (0, class_converter_1.deserialize)(function (value) {
        return moment(value);
      }),
    ],
    Set.prototype,
    "_lastModifiedAt",
    void 0
  );
  return Set;
})());
