import React from "react";
import className from "classnames";

import "components/DayListItem.scss"


export default function DayListItem(props) {

  const { name, spots, selected, setDay} = props;

  let dayClass = className({
    dayClass: true,
    "day-list__item": true,
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  })

  const formatSpots = function (remainSpots) {
    if (remainSpots === 0) {
      return "no spots remaining" 
    } else if (remainSpots === 1) {
      return "1 spot remaining"
    } else {
      return `${remainSpots} spots remaining`
    }
  }

  return (
    <li className={dayClass} onClick={() => setDay(name)}selected={selected}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}

