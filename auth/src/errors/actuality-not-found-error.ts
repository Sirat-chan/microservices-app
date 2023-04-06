import {CustomError} from "./custom-error";

export class ActualityNotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super("Actuality not found");

        Object.setPrototypeOf(this, ActualityNotFoundError.prototype);
    }

    serializeErrors() {
        return [{message: "Actuality not found"}];
    }
}