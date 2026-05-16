export class HttpError extends Error {
  constructor(status, message) {
    super(message); // call the Error constructor
    this.status = status; // custom property
    this.name = "HttpError"; // optional, helps identify the error type
  }
}
