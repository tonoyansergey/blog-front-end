export class ErrorDetailsModel {

  private _timestamp: string;
  private _message: string;
  private _details: string;


  constructor(timestamp: string, message: string, details: string) {
    this._timestamp = timestamp;
    this._message = message;
    this._details = details;
  }


  get timestamp(): string {
    return this._timestamp;
  }

  set timestamp(value: string) {
    this._timestamp = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get details(): string {
    return this._details;
  }

  set details(value: string) {
    this._details = value;
  }
}
