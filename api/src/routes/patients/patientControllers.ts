// patientController.ts

import Patient from '../../models/Patient'; // Asegúrate de importar tu modelo de Paciente

export async function getAllPatients(): Promise<Patient[] | Error> {
  try {
    const patients = await Patient.findAll({
      where: {isDeleted: false}
    }); // Esto obtendrá todos los pacientes de la base de datos
    return patients;
  } catch (error) {
    throw new Error('Error al obtener los pacientes');
  }
}

export async function getPatientById(ID_patient: number):  Promise<Patient | Error> {
  try {
    const patient = await Patient.findByPk(ID_patient); // Busca un paciente por su ID
    if(!patient || patient.isDeleted){
      throw new Error(`Paciente con id: ${ID_patient} no encontrado`);
    }
    return patient;
  } catch (error) {
    throw new Error('Error al obtener paciente by id');
  }
}

export async function createNewPatient(body: Patient){

  const { firstName, lastName, email, address, birthDate, phoneNumber, dni , gender, role_id} = body;
  try {
    const newPatient = await Patient.create({
      firstName,
      lastName,
      email,
      address,
      birthDate,
      phoneNumber,
      dni,
      gender,
      role_id
    });
    return newPatient;
    
  } catch (error) {
    throw new Error('Error al crear paciente');
  }
  
}

export async function updatePatientById(ID_patient: number, updatedData: Partial<Patient>): Promise<Patient | Error> {
  try {
    const patient = await Patient.findByPk(ID_patient);

    if (!patient) {
      throw new Error(`Paciente con ID ${ID_patient} no encontrado`);
    }

    const updatedPatient = await patient.update(updatedData);
    return updatedPatient;
  } catch (error) {
    throw new Error('Error al actualizar paciente');
  }
}

export async function softDeletePatientById(ID_patient: number): Promise<void | Error> {
  try {
    const patient = await Patient.findByPk(ID_patient);

    if (!patient) {
      throw new Error(`Paciente con ID ${ID_patient} no encontrado`);
    }

    await patient.update({ isDeleted: true }); // Suponiendo que hay un campo 'isDeleted' en tu modelo Patient
  } catch (error) {
    throw new Error('Error al eliminar paciente');
  }
}


