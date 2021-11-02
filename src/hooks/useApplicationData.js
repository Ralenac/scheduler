 import {useState, useEffect} from "react";
 import axios from "axios";

 export function useApplicationData() {

 const [state, setState] = useState ({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({...state, appointments
          });
        })
        
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };


    return axios.delete(`/api/appointments/${id}`, appointment)
    .then(() => {
      setState({...state, appointment
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