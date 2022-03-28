import React from 'react'
import {useSelector} from "react-redux";
import { Switch, Route } from 'react-router-dom'

const Routing = ({ routes }) => {
    const { user } = useSelector(state => state.userReducer)
    const { access } = useSelector(state => state.accessReducer)

    const a = access ? user : 0

    return (
       <Switch>
          {
              routes.map(item =>
                 item.role.indexOf(a) !== -1 &&
                  <Route
                     key={new Date().getTime()} {...item}
                  />
              )
          }
      </Switch>
    );
};

export default Routing;
