import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElement";


const Navbar = () => {
    return (
        <>


            <Nav>
                <NavMenu>

                    <NavLink to="/dashboard" activeStyle>
                        Dashboard
                    </NavLink>

                    <NavLink to="/vote" activeStyle>
                        Vote
                    </NavLink>

                    <NavLink to="/result" activeStyle>
                        Results
                    </NavLink>
                    <NavLink to="/logout" activeStyle>
                        Logout
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
