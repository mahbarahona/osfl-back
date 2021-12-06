"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.log("Server running on port %d in %s mode", app_1.default.get('port'), 'Dev');
});
exports.default = server;
//# sourceMappingURL=server.js.map