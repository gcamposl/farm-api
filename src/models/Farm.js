const { v4: uuid4 } = require('uuid');

class Farm {
  id;
  name;
  size;
  created_at;

  constructor() {
    if (!this.id) {
      this.id = uuid4();
    }
  }
}

module.exports = Farm;
