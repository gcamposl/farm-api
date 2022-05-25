const { v4: uuid4 } = require('uuid');

class Animal {
  id;
  identification;
  breed;
  created_at;

  constructor() {
    if (!this.id) id = uuid4();
  }
}

module.exports = Animal;
