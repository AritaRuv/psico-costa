// professionalController.ts

import Professional from '../../models/Professional';

export async function getAllProfessionals(): Promise<Professional[] | Error> {
  try {
    const professionals = await Professional.findAll({
      where: {isDeleted: false}
    }); // Esto obtendrá todos los pacientes de la base de datos
    return professionals;
  } catch (error) {
    throw new Error('Error al obtener los profesionales');
  }
}

export async function getProfessionalById(ID_professional: number):  Promise<Professional | Error> {
  try {
    const professional = await Professional.findByPk(ID_professional); // Busca un profesional por su ID
    if(!professional || professional.isDeleted){
      
      throw new Error(`Profesional con id: ${ID_professional} no encontrado`);
    }
    return professional;
  } catch (error) {
    throw new Error('Error al obtener profesionales by id');
  }
}

export async function createNewProfessional(body: Professional){

  const { firstName, lastName, email, license, socialNumber, phoneNumber } = body;
  try {
    const newProfessional = await Professional.create({
      firstName,
      lastName,
      email,
      license,
      socialNumber,
      phoneNumber,
    });
    return newProfessional;
    
  } catch (error) {
    throw new Error('Error al crear profesional');
  }
  
}

export async function updateProfessionalById(ID_professional: number, updatedData: Partial<Professional>): Promise<Professional | Error> {
  try {
    const professional = await Professional.findByPk(ID_professional);

    if (!professional) {
      throw new Error(`Profesional con ID ${ID_professional} no encontrado`);
    }

    const updatedProfessional = await professional.update(updatedData);
    return updatedProfessional;
  } catch (error) {
    throw new Error('Error al actualizar profesional');
  }
}

export async function softDeleteProfessionalById(ID_professional: number): Promise<void | Error> {
  try {
    const professional = await Professional.findByPk(ID_professional);

    if (!professional) {
      throw new Error(`Profesional con ID ${ID_professional} no encontrado`);
    }

    await professional.update({ isDeleted: true });
  } catch (error) {
    throw new Error('Error al eliminar profesional');
  }
}


