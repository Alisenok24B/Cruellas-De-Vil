import React from "react"

export function Container (props) {
    return (
        <div className={`${props.className}`}>
            { props.children }
        </div>
    )
}


// const user = {
//     name: 'name',
//     age: 32
// }

// деструктуризация (разделяем на отдельные компоненты):
// const { name, age } = user