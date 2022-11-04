export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  add(code, text) {
    this.errors.set(code, text);
  }

  translate(code) {
    return this.errors.get(code);
  }
}
