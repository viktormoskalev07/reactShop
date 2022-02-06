import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {ROUTES} from "../routes";

export const Header = () => {
    return (
        <header>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                 <ul>

                     {ROUTES.map ((item)=><li key={item.name}>  <NavLink to={item.name} > {item.name}  </NavLink> </li>)}
                 </ul>
            </nav>
        </header>
    );
};

