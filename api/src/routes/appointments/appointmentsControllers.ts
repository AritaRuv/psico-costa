// appointmentsController.ts

import Appointment from '../../models/Appointment';

export async function getAllAppointments(): Promise<Appointment[] | Error> {
  try {
    const appointments = await Appointment.findAll({
      where: {isDeleted: false}
    });
    return appointments;
  } catch (error) {
    throw new Error('Error al obtener los appointments');
  }
}

export async function getAppointmentById(ID_appointment: number):  Promise<Appointment | Error> {
  try {
    const appointment = await Appointment.findByPk(ID_appointment); // Busca un Appointment por su ID
    if(!appointment){
      throw new Error(`Appointment con id: ${ID_appointment} no encontrado`);
    }
    return appointment;
  } catch (error) {
    throw new Error('Error al obtener appointment by id');
  }
}

export async function createNewAppointment(body: Appointment){

  const { date, hour } = body;
  try {
    const newAppointment = await Appointment.create({
      date,
      hour
    });
    return newAppointment;
    
  } catch (error) {
    throw new Error('Error al crear Appointment');
  }
  
}

export async function updateAppointmentById(ID_appointment: number, updatedData: Partial<Appointment>): Promise<Appointment | Error> {
  try {
    const appointment = await Appointment.findByPk(ID_appointment);

    if (!appointment) {
      throw new Error(`Appointment con ID ${ID_appointment} no encontrado`);
    }

    const updatedAppointment = await appointment.update(updatedData);
    return updatedAppointment;
  } catch (error) {
    throw new Error('Error al actualizar appointment');
  }
}
//probablemente trabajaremos con hard delete en el appointment.

// export async function softDeleteInsurancePlanById(ID_insurancePlan: number): Promise<void | Error> {
//   try {
//     const insurancePlan = await Appointment.findByPk(ID_insurancePlan);

//     if (!insurancePlan) {
//       throw new Error(`InsurancePlan con ID ${ID_insurancePlan} no encontrado`);
//     }

//     await insurancePlan.update({ isDeleted: true });
//   } catch (error) {
//     throw new Error('Error al eliminar insurancePlan');
//   }
// }


