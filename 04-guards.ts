function pretty(arg: string | number): string | number {
    return typeof arg === 'string' ? arg.trim() : arg.toFixed(2)
}

console.log(pretty('      Hello           '))
console.log(pretty(3.1415926))

class SuccessResponse {
    headers: string[];
    body: string;
    constructor(headers: string[], body: string) {
        this.headers = headers;
        this.body = body;
    }
}

class ErrorResponse {
    headers: string[];
    code: number;
    constructor(headers: string[], code: number) {
        this.headers = headers;
        this.code = code;
    }
}

function responseHandler(response: SuccessResponse | ErrorResponse): { message: number | string } {
    if (response instanceof SuccessResponse) {
        return { message: response.body }
    } else {
        return { message: response.code }
    }
}

const success: SuccessResponse = new SuccessResponse(['api-key'], '{name: Peter}');

const error: ErrorResponse = new ErrorResponse([], 401);

console.log(responseHandler(success))
console.log(responseHandler(error))