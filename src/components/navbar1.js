import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElement";


const Navbar1 = () => {
    return (
        <>


            <Nav>
                <NavMenu>

                    <NavLink to="/voters" activeStyle>
                        Voters
                    </NavLink>

                    <NavLink to="/candidates" activeStyle>
                        Candidate
                    </NavLink>

                    <NavLink to="/election" activeStyle>
                        Election
                    </NavLink>
                    <NavLink to="/logout" activeStyle>
                        Logout
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar1;
