import React from "react";
import className from "classnames";

import "components/Button.scss";

// export default function Button(props) {
//    return <button>{props.children}</button>;
// }


export default function Button(props) {
  let buttonClass = className({
    button: true,
    "button--confirm": props.confirm,
    "button--danger": props.danger

  })

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

