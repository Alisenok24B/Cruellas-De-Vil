import React from "react";

export function Logo(props) {
  return (
    <div className={`${props.className}`}>
        <img src={`${props.src}`} alt={`${props.alt}`}/>
        <p>{`${props.title}`}</p>
    </div>
  );
}