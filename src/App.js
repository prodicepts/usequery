import React, { Component } from 'react';
import Users from './Users';
import {users} from './u';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : [],
            isLoaded : false
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
                .then( (data) => {
                    this.setState({
                        users : data,
                        isLoaded : true
                    })
                    }
                )
    }
    render(){
        
            if(!this.state.isLoaded)
                return (
                        <div style={{ position : 'absolute', top : '50%', left: '45%' }}>
                            Loading ...
                        </div>
                    );
        
        return (
            <div>
               <Users user_all = {users}/>
            </div>
        );
    }
}

export default App;