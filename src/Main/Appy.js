import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Menu/Home';
import About from '../Menu/About';
import Contact from '../Menu/Contact';
import ErrorPage from '../Menu/ErrorPage';
import NavBar from '../Menu/NavBar';
import { useState } from 'react';
const Appy = () => {
    const [ username, setUserName ] = useState("Bankole");
    const [getInput, setInput] = useState("");
    const UpdateUsername = () => {
        if(!getInput)return
        setUserName(getInput);
        setInput("")
    }
    const handleInputChange = (e) => {
        
        setInput(e.target.value)
        console.log(getInput)
    }
    return (
        <div className="appy">
            
            <div className='routes'>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element = {<Home u = {username}/>}/>
                        <Route path='/about' element = {<About u = {username} txt = {getInput} btnClick = {UpdateUsername} txtUpdate ={handleInputChange} />}/>
                        <Route path='/contact' element = {<Contact />}/>
                        <Route path='*' element = {<ErrorPage />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default Appy;