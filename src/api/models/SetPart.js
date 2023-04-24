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
exports.SetPart = void 0;
var class_converter_1 = require("class-converter");
var Part_1 = require("./Part");
var Color_1 = require("./Color");
var SetPart = (exports.SetPart = /** @class */ (function () {
  function SetPart() {}
  Object.defineProperty(SetPart.prototype, "id", {
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
  Object.defineProperty(SetPart.prototype, "invPartId", {
    get: function () {
      return this._invPartId;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(SetPart.prototype, "part", {
    get: function () {
      return this._part;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(SetPart.prototype, "color", {
    get: function () {
      return this._color;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(SetPart.prototype, "setNum", {
    get: function () {
      return this._setNum;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(SetPart.prototype, "quantity", {
    get: function () {
      return this._quantity;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(SetPart.prototype, "isSpare", {
    get: function () {
      return this._isSpare;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(SetPart.prototype, "elementId", {
    get: function () {
      return this._elementId;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(SetPart.prototype, "numSets", {
    get: function () {
      return this._numSets;
    },
    enumerable: false,
    configurable: true,
  });
  __decorate(
    [(0, class_converter_1.property)("id"), (0, class_converter_1.optional)()],
    SetPart.prototype,
    "_id",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("inv_part_id"),
      (0, class_converter_1.optional)(),
    ],
    SetPart.prototype,
    "_invPartId",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("part", Part_1.Part),
      (0, class_converter_1.optional)(),
    ],
    SetPart.prototype,
    "_part",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("color", Color_1.Color),
      (0, class_converter_1.optional)(),
    ],
    SetPart.prototype,
    "_color",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("set_num"),
      (0, class_converter_1.optional)(),
    ],
    SetPart.prototype,
    "_setNum",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("quantity"),
      (0, class_converter_1.optional)(),
    ],
    SetPart.prototype,
    "_quantity",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("is_spare"),
      (0, class_converter_1.optional)(),
    ],
    SetPart.prototype,
    "_isSpare",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("element_id"),
      (0, class_converter_1.optional)(),
    ],
    SetPart.prototype,
    "_elementId",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("num_sets"),
      (0, class_converter_1.optional)(),
    ],
    SetPart.prototype,
    "_numSets",
    void 0
  );
  return SetPart;
})());
