
import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Filmes from '../Pages/Filmes'
import Home from '../Pages/Home'




function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>                
                <Route path="/Filmes" component={Filmes}/> 
            </Switch>   
        </BrowserRouter>
    )
}

export default Routes