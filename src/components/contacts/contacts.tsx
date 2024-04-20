import React from "react"

export function Contacts (props) {
    return (
        <div className={`${props.className}`}>
            <p>Контактная информация:</p>
            <p>{props.children}</p>
        </div>
    )
}