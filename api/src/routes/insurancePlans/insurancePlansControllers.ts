// insurancePlansController.ts

import InsurancePlan from '../../models/InsurancePlan';

export async function getAllInsurancePlans(): Promise<InsurancePlan[] | Error> {
  try {
    const insurancePlans = await InsurancePlan.findAll({
      where: {isDeleted: false}
    });
    return insurancePlans;
  } catch (error) {
    throw new Error('Error al obtener los insurancePlans');
  }
}

export async function getInsurancePlanById(ID_insurancePlan: number):  Promise<InsurancePlan | Error> {
  try {
    const insurancePlan = await InsurancePlan.findByPk(ID_insurancePlan); // Busca un insurancePlan por su ID
    if(!insurancePlan || insurancePlan.isDeleted){
      
      throw new Error(`InsurancePlan con id: ${ID_insurancePlan} no encontrado`);
    }
    return insurancePlan;
  } catch (error) {
    throw new Error('Error al obtener insurancePlan by id');
  }
}

export async function createNewInsurancePlan(body: InsurancePlan){

  const { name } = body;
  try {
    const newInsurancePlan = await InsurancePlan.create({
      name
    });
    return newInsurancePlan;
    
  } catch (error) {
    throw new Error('Error al crear insurancePlan');
  }
  
}

export async function updateInsurancePlanById(ID_insurancePlan: number, updatedData: Partial<InsurancePlan>): Promise<InsurancePlan | Error> {
  try {
    const insurancePlan = await InsurancePlan.findByPk(ID_insurancePlan);

    if (!insurancePlan) {
      throw new Error(`InsurancePlan con ID ${ID_insurancePlan} no encontrado`);
    }

    const updatedInsurancePlan = await insurancePlan.update(updatedData);
    return updatedInsurancePlan;
  } catch (error) {
    throw new Error('Error al actualizar insurancePlan');
  }
}

export async function softDeleteInsurancePlanById(ID_insurancePlan: number): Promise<void | Error> {
  try {
    const insurancePlan = await InsurancePlan.findByPk(ID_insurancePlan);

    if (!insurancePlan) {
      throw new Error(`InsurancePlan con ID ${ID_insurancePlan} no encontrado`);
    }

    await insurancePlan.update({ isDeleted: true });
  } catch (error) {
    throw new Error('Error al eliminar insurancePlan');
  }
}


