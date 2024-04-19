import React from "react"

export function NameOfComponent  (props) {
    return <div>
        { props.children }
        </div>
}


// const user = {
//     name: 'name',
//     age: 32
// }

// деструктуризация (разделяем на отдельные компоненты):
// const { name, age } = user