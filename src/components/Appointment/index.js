// import Appointment from "components/Appointment";
import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import "components/Appointment/styles.scss"
import { useVisualMode } from "hooks/useVisualMode";



export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE"
  const SAVING = "SAVING";
  const DELETING = "DELETING"
  const CONFIRM = "CONFIRM"


  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview) 
    .then(() => transition(SHOW));
    
  }

  function deleteAppointment() {
    
    transition(DELETING);

    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    

  }

  // console.log({mode})

  return (
  
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show 
          interview={props.interview}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form 
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SAVING && (
        <Status 
          message="Saving"
        />
      )}
      {mode === CONFIRM && (
        <Confirm 
          message="Are you sure you want to delete?"
          onConfirm={deleteAppointment}
          onCancel = {back}
        />
      )}
      {mode === DELETING && (
        <Status 
          message="Deleting"
        />
      )}
      
    </article>
      
  );
}