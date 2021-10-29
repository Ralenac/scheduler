// Returns an array of appointments for the given day.

export default function getAppointmentsForDay(state, day) {
  
  for (let i = 0; i < state.days.length; i++) {
    if (state.days[i].name === day) {
      return state.days[i].appointments.map((appointment) => {return state.appointments[appointment]
      })
    }
  }
  return [];

}
  //TEST

  //getAppointmentsForDay returns an array 

  //getAppointmentsForDay returns an array with a length matching the number of appointments for that day 

  //getAppointmentsForDay returns an array containing the correct appointment objects

  //getAppointmentsForDay returns an empty array when the days data is empty

  //getAppointmentsForDay returns an empty array when the day is not found





