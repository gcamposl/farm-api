const { v4: uuid4 } = require('uuid');

class Farm {
  id;
  name;

  constructor() {
    if (!this.id) {
      this.id = uuid4();
    }
  }
}

module.exports = Farm;
