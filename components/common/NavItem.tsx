import { useState } from "react";
import { Component } from "react";

const NavItem = (props: any) => {
    const [active, setActive] = useState(false)
    const default_class = `${props.className} hover:rounded-lg hover:bg-current-color`
    const active_class = `${default_class} rounded-lg bg-current-color text-white`
    return (
        <button { ...props}
         className={
            active ? active_class : default_class
        } 
        >
          {props.children}
        </button>
    )
}   

export default NavItem