import React from "react";
import User from "./User";

const Users = ({user_all}) => {
    const userAll = user_all.map((user, i) => {
        return  <User a = {user.id} b = {user.name} c = {user.username} d = {user.email}/>
    })
    return (
        <div>
           {userAll}
        </div>
    );
}

export default Users;