import React from 'react';
import {Route, NavLink} from "react-router-dom"

export default function Credit({match}) {
    return (
        <div>
            Who you want to credit?
            <ul>
                <li>
                    <NavLink activeClassName="active" to={`${match.url}/React`}>React</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to={`${match.url}/ReactRouter`}>React Router</NavLink>
                </li>
            </ul>
            <Route path={`${match.url}/:whoCredit`} component={Topic}></Route>
            <Route exact render={()=><h3>Select something</h3>}/>
        </div>
    )
}

const Topic = ({match}) =>{
    return <div>
<h3>Topic selected {match.params.whoCredit}</h3>
    </div>
}