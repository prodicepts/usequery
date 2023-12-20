import ChangeProfile from "./ChangeProfile";

const About = (props) => {
    const { u, btnClick, txtUpdate , txt} = props;
    
    return (
        <div>
            Profile Page , Name : {u}
            <ChangeProfile txt = {txtUpdate} click = {btnClick} textVal = {txt}/>
        </div>
    );
}

export default About;