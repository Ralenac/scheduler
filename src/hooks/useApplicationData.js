 import {useState, useEffect} from "react";
 import axios from "axios";


 export function useApplicationData() {
   
  const [state, setState] = useState ({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  
  
  function updateSpots(state, appointments) {

    const currentDay = state.days.find((day)=> {
      return day.name === state.day
    })

    const currentDayIndex = state.days.findIndex((day)=> {
      return day.name === state.day
    })

    const appointmentIds = currentDay.appointments 
    const nullAppointments = appointmentIds.filter((id) => {
      return !appointments[id].interview 
    })

    const spots = nullAppointments.length
    const updatedDay = {...currentDay, spots}
    let newDays = [...state.days]
    newDays[currentDayIndex] = updatedDay
    return newDays

  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state, appointments)
    
    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({...state, appointments, days
          });
        })
        
  }


  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state, appointments)

    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState({...state, appointments, days
        });
      })
  }

  const setDay = day => setState({ ...state, day });
 
  useEffect(() => { 

    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ]).then((all) => {
      console.log(all)
      
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    
    })
  }, []);

  return { state, bookInterview, cancelInterview, setDay };

}