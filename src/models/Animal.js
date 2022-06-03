import { v4 as uuid4 } from 'uuid';

class Animal {
  id;
  identification;
  breed;
  created_at;

  constructor() {
    if (!this.id) id = uuid4();
  }
}

export default { Animal };
