"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static adaptHttpRequest(req) {
        return Object.freeze({
            path: req.path,
            method: req.method,
            pathParams: req.params,
            queryParams: req.query,
            body: req.body
        });
    }
    static makeHttpError(statusCode, errorMessage) {
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode,
            data: JSON.stringify({
                success: false,
                error: errorMessage
            })
        };
    }
    static makeHttpBadRequestResponse(errorMessage = 'Bad request.') {
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 409,
            data: JSON.stringify({
                success: false,
                error: errorMessage
            })
        };
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map