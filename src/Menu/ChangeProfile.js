const ChangeProfile = (props) => {
    const { txt, click, textVal } = props;
    return (
        <div className="">
            <input type="text" onChange={txt} value={textVal}/>
            <button onClick={click}>Update Username</button>
        </div>
    );
}
export default ChangeProfile;