import axios from 'axios';
import React from 'react';

function Voters() {






    return (
        <div>
            {window.voterslist.map((voters) => {
                const list = (
                    <>
                        <ul>
                            <li>Id: {voters.id}</li>
                            <li>Name: {voters.name}</li>
                            <li>Phone: {voters.phone}</li>
                            <li>Email: {voters.email}</li>
                        </ul>
                        <hr />
                    </>
                );
                return list;
            })}
        </div>
    );
};

export default Voters;