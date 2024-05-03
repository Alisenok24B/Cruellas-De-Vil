import React from "react"

import './style-link.css'


export function Link (props) {
    return (
        <div className="link">
            <a href={props.href}>{props.children}</a>
        </div>
    )
}