import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {

  const {name, avatar, selected, setInterviewer} = props;

  let interviewerClass = classNames({
    interviewerClass: true,
    "interviewers__item": true,
    "interviewers__item-image": true,
    "interviewers__item--selected": selected
    
  })

  return (
    <li className={interviewerClass} onClick={setInterviewer} >
      <img      
        className="interviewers__item-image" src= {avatar} 
        alt={name}
      />
      {selected && name}
    </li>
  );
}



