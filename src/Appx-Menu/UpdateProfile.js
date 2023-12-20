const UpdateProfile = (props) => {
    const {inputChange, txtValue , btnClick } = props;
    return (
        <div className="update-profile">
            <div className="update-body">
                <input className="input-txt" onChange={inputChange} value={txtValue}/>
                <button className="input-txt" onClick={btnClick}>Update Profile</button>
            </div>
        </div>
        );
}

export default UpdateProfile;