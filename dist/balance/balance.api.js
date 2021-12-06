"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
class BalanceAPI {
    constructor() { }
    handleRequest(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (httpRequest.method) {
                case 'GET':
                    return yield this.descargarPDF(httpRequest);
                default:
                    return utils_1.Utils.makeHttpBadRequestResponse();
            }
        });
    }
    descargarPDF(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            // GetBalance()
            // Crear balance
            // Convertir a PDF
            // Descargar 
            //crearBalanceHTML()
            //crearBalancePDF()
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                data: 'descargar balance'
            };
        });
    }
}
exports.default = BalanceAPI;
//# sourceMappingURL=balance.api.js.map