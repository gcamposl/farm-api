import { createFarm } from '../repositories/createFarmRepository.js';

function handleCreateFarm(data) {
  if (data == 'teste') {
    return false;
  } else {
    const farm = createFarm(data);
  }
}

export default handleCreateFarm;
