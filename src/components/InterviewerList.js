import React from "react";
import PropTypes from 'prop-types';

import InterviewerListItem from "components/InterviewerListItem.js"

import "components/InterviewerList.scss"

export default function InterviewerList(props) {

  const {interviewers, onChange, value} = props;

  
  const parsedInterviewers = interviewers.map((item) => { return ( 
    <InterviewerListItem 
      key={item.id} 
      name={item.name} 
      avatar={item.avatar} 
      selected={item.id === value} setInterviewer={() => onChange(item.id)} 
    />
    )});

    InterviewerList.propTypes = {
      interviewers: PropTypes.array.isRequired
    };

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewers}</ul>
    </section>
  );

}

