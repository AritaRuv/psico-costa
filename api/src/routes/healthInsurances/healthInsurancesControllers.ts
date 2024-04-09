// healthInsuranceController.ts

import HealthInsurance from '../../models/HealthInsurance';

export async function getAllHealthInsurances(): Promise<HealthInsurance[] | Error> {
  try {
    const healthInsurances = await HealthInsurance.findAll({
      where: {isDeleted: false}
    });
    return healthInsurances;
  } catch (error) {
    throw new Error('Error al obtener los healthInsurances');
  }
}

export async function getHealthInsuranceById(ID_healthInsurance: number):  Promise<HealthInsurance | Error> {
  try {
    const healthInsurance = await HealthInsurance.findByPk(ID_healthInsurance); // Busca un HealthInsurance por su ID
    if(!healthInsurance || healthInsurance.isDeleted){
      
      throw new Error(`HealthInsurance con id: ${ID_healthInsurance} no encontrado`);
    }
    return healthInsurance;
  } catch (error) {
    throw new Error('Error al obtener HealthInsurance by id');
  }
}

export async function createHealthInsurance(body: HealthInsurance){

  const { name, email, socialNumber, phoneNumber } = body;
  try {
    const newHealthInsurance = await HealthInsurance.create({
      name,
      email,
      socialNumber,
      phoneNumber,
    });
    return newHealthInsurance;
    
  } catch (error) {
    throw new Error('Error al crear HealthInsurance');
  }
  
}

export async function updateHealthInsuranceById(ID_healthInsurance: number, updatedData: Partial<HealthInsurance>): Promise<HealthInsurance | Error> {
  try {
    const healthInsurance = await HealthInsurance.findByPk(ID_healthInsurance);

    if (!healthInsurance) {
      throw new Error(`HealthInsurance con ID ${ID_healthInsurance} no encontrado`);
    }

    const updatedHealthInsurance = await healthInsurance.update(updatedData);
    return updatedHealthInsurance;
  } catch (error) {
    throw new Error('Error al actualizar healthInsurance');
  }
}

export async function softDeleteHealthInsuranceById(ID_healthInsurance: number): Promise<void | Error> {
  try {
    const healthInsurance = await HealthInsurance.findByPk(ID_healthInsurance);

    if (!healthInsurance) {
      throw new Error(`HealthInsurance con ID ${ID_healthInsurance} no encontrado`);
    }

    await healthInsurance.update({ isDeleted: true });
  } catch (error) {
    throw new Error('Error al eliminar healthInsurance');
  }
}


