import { CreateFarmRepository } from '../repositories/createFarmRepository.js';

export async function handleCreateFarm(farm) {
  const farmRepository = new CreateFarmRepository();
  if (!farm) {
    throw 'Dados da fazenda inexistentes';
  } else {
    const farm = await farmRepository.createFarm(farmRepository);
    return farm;
  }
}
