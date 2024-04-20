import React from "react";
import { Menu } from '../menu/menu'

export function Nav(props) {
    return (
        <nav className={`${props.className}`}>
            <img src={`${props.src}`} alt={`${props.alt}`}/>
            <Menu className="menu"/>
        </nav>
    );
}