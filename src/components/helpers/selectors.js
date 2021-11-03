
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

// Returns the interviewers of a specific day

export function getInterviewersForDay(state, day) {
  for (let i = 0; i < state.days.length; i++) {
    if (state.days[i].name === day) {
      return state.days[i].interviewers.map((interviewer) => {
        return state.interviewers[interviewer];

      });
    }
  }

  return [];
}

//Returns a new object containing the interview data when we pass it an object that contains the interviewer


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





