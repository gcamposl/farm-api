import { CreateFarmRepository } from '../repositories/createFarmRepository.js';

async function handleCreateFarm(farm) {
  const farmRepository = new CreateFarmRepository();

  if (!farm) {
    return false;
  } else {
    const farm = await farmRepository.createFarm(farmRepository);
    return farm;
  }
}

export default handleCreateFarm;
