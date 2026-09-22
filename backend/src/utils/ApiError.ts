/**
 * A predictable, operational error we throw on purpose (bad input, not found, etc).
 * The error handler middleware uses `statusCode` to shape the HTTP response.
 */
export class ApiError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
