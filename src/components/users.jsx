import React, { useState } from "react";
import api from "../api";
import 'bootstrap/dist/css/bootstrap.css'



export default function Users() {
    const [users, setUsers] = useState(api.users.fetchAll())
           
    return (       
        <>
            <span className={"badge bg-" + (users.length > 0 ? "primary" : "dangers") }>Are you ready for the party? The {users.length} of us are waiting for you </span>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Personal qualities</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Datings</th>
                        <th scope="col">Аssessment</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user._id}>                   
                                    <td>{user[index]}</td>
                                    <td>{user.name}</td>
                                    <td>{user.qualities.map(quality => <span className={"badge m-1 bg-" + quality.color} key={quality._id}>{quality.name + " "}</span>)}</td>
                                    <td>{user.profession.name}</td>
                                    <td>{user.completedMeetings}</td>
                                    <td>{user.rate}</td>                              
                                    <td><button className="btn btn-danger" >Get rid of</button></td>                              
                                </tr>  
                            )
                        })
                    }                            
                </tbody>
            </table>
        </>
    )
}