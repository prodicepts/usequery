import React from "react";

const User = (props) => {
    const { a, b, c, d } = props;
    return (
        <div style={{ border:'2px solid red', width: '80%', margin: '20px auto' }}>
            <p>ID : {a}</p>
            <p>Name : {b}</p>
            <p>Username : {c}</p>
            <p>e-Mail : {d}</p>
        </div>
    );
}

export default User;