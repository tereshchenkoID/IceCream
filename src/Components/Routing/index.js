import React from 'react'
import {useSelector} from "react-redux";
import { Switch, Route } from 'react-router-dom'


const Routing = ({ routes }) => {
    const dataUser = useSelector(state => state.userReducer);

    return (
       <Switch>
          {
              routes.map(item =>
                 item.role.indexOf(dataUser.user) !== -1  &&
                 <Route
                     key={new Date().getTime()} {...item}
                 />
              )
          }
      </Switch>
    );
};

export default Routing;
