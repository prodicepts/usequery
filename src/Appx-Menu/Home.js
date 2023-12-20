import Axios from 'axios';
import { useContext } from "react";
import { AppContext } from "../Main/Appx";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
    const {username} = useContext(AppContext);
    const { data, isLoading  } = useQuery(
        {
            queryKey: ["cat"],
            queryFn : () => //fetch("https://catfact.ninja/fact").then((resp) => resp.json).then((data) => data)
            Axios.get("https://catfact.ninja/fact").then((res) => res.data)
            
        }
        
    )
   
    if(isLoading){
        return <div>Loading ...</div>
    }
    
    return (
        <div>
            My Name is : {username}
            <div>
                {data?.fact}
            </div>

        </div>
    )
}
export default Home;