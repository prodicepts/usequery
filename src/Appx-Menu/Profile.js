import UpdateProfile from "./UpdateProfile";
import { useContext, useState } from "react";
import { AppContext } from "../Main/Appx";
const Profile = () => {
    const {username, setUsername} = useContext(AppContext);
    const [Input, setInput] = useState("");
    const handleInput = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value);
    }
    const handleBtnClicks = () => {
        if(!Input) return;
        setUsername(Input);
        setInput("");
    }
    return (
        <div className="profile-main">
            Appx-Profile {username}
            <UpdateProfile inputChange = {handleInput} txtValue = {Input} btnClick = {handleBtnClicks}/>
        </div>
    )
}
export default Profile;