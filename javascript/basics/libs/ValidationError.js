class MyError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

//Собственный валидатор
export class ValidationError extends MyError {}

export class PropertyRequiredError extends ValidationError {
  /**
   * @param {string} property
   */
  constructor(property) {
    super('Нет свойства: ' + property);
    this.property = property;
  }
}
