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
exports.Part = void 0;
var class_converter_1 = require("class-converter");
var Part = (exports.Part = /** @class */ (function () {
  function Part() {}
  Object.defineProperty(Part.prototype, "partNum", {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
        |*                           PUBLIC                            *|
        \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * *\
        |*           GETTERS           *|
        \* * * * * * * * * * * * * * * */
    get: function () {
      return this._partNum;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Part.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Part.prototype, "partCatId", {
    get: function () {
      return this._partCatId;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Part.prototype, "partUrl", {
    get: function () {
      return this._partUrl;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Part.prototype, "partImgUrl", {
    get: function () {
      return this._partImgUrl;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Part.prototype, "quantity", {
    get: function () {
      return this._quantity;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Part.prototype, "numSets", {
    get: function () {
      return this._numSets;
    },
    enumerable: false,
    configurable: true,
  });
  __decorate(
    [(0, class_converter_1.property)("part_num")],
    Part.prototype,
    "_partNum",
    void 0
  );
  __decorate(
    [(0, class_converter_1.property)("name")],
    Part.prototype,
    "_name",
    void 0
  );
  __decorate(
    [(0, class_converter_1.property)("part_cat_id")],
    Part.prototype,
    "_partCatId",
    void 0
  );
  __decorate(
    [(0, class_converter_1.property)("part_url")],
    Part.prototype,
    "_partUrl",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("part_img_url"),
      (0, class_converter_1.optional)(),
    ],
    Part.prototype,
    "_partImgUrl",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("quantity"),
      (0, class_converter_1.optional)(),
    ],
    Part.prototype,
    "_quantity",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("num_sets"),
      (0, class_converter_1.optional)(),
    ],
    Part.prototype,
    "_numSets",
    void 0
  );
  return Part;
})());
