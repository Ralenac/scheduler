// import Appointment from "components/Appointment";
import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import "components/Appointment/styles.scss"
import { useVisualMode } from "hooks/useVisualMode";



export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";


  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    // console.log("++++++",interview)
  
    transition(SAVING);
  
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function deleteAppointment() {
    transition(DELETING, true);
    props
     .cancelInterview(props.id)
     .then(() => transition(EMPTY))
     .catch(error => transition(ERROR_DELETE, true));
   }

  return (
  
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show 
          interview={props.interview}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
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
      {mode === EDIT && (
        <Form
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
        message={"Could not save the appointment"}
        onClose={back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
        message={"Could not delete the appointment"}
        onClose={back}
        />
      )}

      
    </article>
      
  );
}