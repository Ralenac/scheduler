
  //TEST

  //getAppointmentsForDay returns an array 

  //getAppointmentsForDay returns an array with a length matching the number of appointments for that day 

  //getAppointmentsForDay returns an array containing the correct appointment objects

  //getAppointmentsForDay returns an empty array when the days data is empty

  //getAppointmentsForDay returns an empty array when the day is not found

// Returns an array of appointments for the given day.

export function getAppointmentsForDay(state, day) {
  
  for (let i = 0; i < state.days.length; i++) {
    if (state.days[i].name === day) {
      return state.days[i].appointments.map((appointment) => {return state.appointments[appointment]
      })
    }
  }
  return [];

}

//Returns a new object containing the interview data when we pass it an object that contains the interviewer

//TEST

//getInterview returns an object with the interviewer data
//getInterview returns null if no interview is booked

export function getInterview(state, interview) {
  
  if (interview) {
    return {
      student: interview.student,
      //state.interviewers-> key srom state and [interview.interviewer] is value from interview but it is the key for the interviewer id
      interviewer: state.interviewers[interview.interviewer],
    };
  }

  return null;
}





