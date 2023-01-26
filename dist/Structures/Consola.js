"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const tslib_1 = require("tslib");
const consola_1 = tslib_1.__importStar(require("consola"));
exports.logger = consola_1.default.create({
    level: consola_1.LogLevel.Info,
});
