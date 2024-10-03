/**
 * Represents a Holberton Course.
 */
export default class Currency {
  /**
   * Creates a new @see {@link Currency}.
   *
   * @param {String} code - code.
   * @param {String} name - name.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Gets the code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Gets the name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`
}
