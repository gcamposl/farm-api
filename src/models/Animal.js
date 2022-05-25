const { v4: uuid4 } = require('uuid');

class Animal {
  id;
  identification;

  constructor() {
    if (!this.id) id = uuid4();
  }
}

module.exports = Animal;
