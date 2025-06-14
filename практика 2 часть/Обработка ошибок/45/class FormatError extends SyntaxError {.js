class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}

// Пример использования
let err = new FormatError("ошибка форматирования");

alert(err.message); // ошибка форматирования
alert(err.name); // FormatError
alert(err.stack); // stack трассировки

alert(err instanceof FormatError); // true
alert(err instanceof SyntaxError); // true