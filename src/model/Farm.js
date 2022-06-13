import { v4 as uuid4 } from 'uuid';

class Farm {
  far_id;
  far_name;
  far_size;
  created_at;

  constructor() {
    this.far_id = uuid4();
    this.far_name = '';
    this.far_size = 0;
    this.created_at = Date.now();
  }
}

export default { Farm };
