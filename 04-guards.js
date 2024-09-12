function pretty(arg) {
    return typeof arg === 'string' ? arg.trim() : arg.toFixed(2);
}
console.log(pretty('      Hello           '));
console.log(pretty(3.1415926));
var SuccessResponse = /** @class */ (function () {
    function SuccessResponse(headers, body) {
        this.headers = headers;
        this.body = body;
    }
    return SuccessResponse;
}());
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse(headers, code) {
        this.headers = headers;
        this.code = code;
    }
    return ErrorResponse;
}());
function responseHandler(response) {
    if (response instanceof SuccessResponse) {
        return { message: response.body };
    }
    else {
        return { message: response.code };
    }
}
var success = new SuccessResponse(['api-key'], '{name: Peter}');
var error = new ErrorResponse([], 401);
console.log(responseHandler(success));
console.log(responseHandler(error));
