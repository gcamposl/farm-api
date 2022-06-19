import { v4 as uuid4 } from 'uuid';

export class FarmDTO {
  far_id;
  far_name;
  far_size;
  created_at;

  constructor(name, size) {
    if (!this.far_id) {
      this.far_id = uuid4();
      this.far_name = name;
      this.far_size = size;
      this.created_at = new Date();
    }
  }
}
