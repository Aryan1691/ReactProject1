import React,{useContext} from 'react';
import {UserContext} from './App';;


export default function App2(){
    const user = useContext(UserContext);
    return(
    <React.Fragment>
     <h1>Heloo {user}</h1>
    </React.Fragment>
    )
}
