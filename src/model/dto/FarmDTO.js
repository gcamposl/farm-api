import { v4 as uuid4 } from 'uuid';

export class FarmDTO {
  farmId;
  farmName;
  farmSize;
  createdAt;

  constructor(name, size) {
    this.far_id = uuid4();
    this.far_name = name;
    this.far_size = size;
    this.created_at = new Date();
  }
}
