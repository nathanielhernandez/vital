import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class NoItemsError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NO_CONTENT;
  }
}

export default NoItemsError;
