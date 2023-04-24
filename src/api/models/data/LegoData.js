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
exports.LegoData = void 0;
var class_converter_1 = require("class-converter");
var LegoData = (exports.LegoData = /** @class */ (function () {
  function LegoData() {}
  Object.defineProperty(LegoData.prototype, "count", {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
        |*                           PUBLIC                            *|
        \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * *\
        |*           GETTERS           *|
        \* * * * * * * * * * * * * * * */
    get: function () {
      return this._count;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(LegoData.prototype, "previous", {
    get: function () {
      return this._previous;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(LegoData.prototype, "next", {
    get: function () {
      return this._next;
    },
    enumerable: false,
    configurable: true,
  });
  __decorate(
    [(0, class_converter_1.property)("count")],
    LegoData.prototype,
    "_count",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("previous"),
      (0, class_converter_1.optional)(),
    ],
    LegoData.prototype,
    "_previous",
    void 0
  );
  __decorate(
    [
      (0, class_converter_1.property)("next"),
      (0, class_converter_1.optional)(),
    ],
    LegoData.prototype,
    "_next",
    void 0
  );
  return LegoData;
})());
